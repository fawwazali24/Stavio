const { createClient } = require("redis");

const redisUrl = process.env.REDIS_URL;
const client = redisUrl ? createClient({ url: redisUrl }) : null;
let connectPromise;

console.log(`Redis cache: ${client ? "configured" : "disabled (REDIS_URL is missing)"}`);

if (client) {
    client.on("error", (error) => {
        console.error("Redis error:", error.message);
    });

    client.on("ready", () => {
        console.log("Redis cache: connection ready");
    });
}

async function connectRedis() {
    if (!client) return;
    if (client.isOpen) return;

    console.log("Redis cache: connecting...");

    if (!connectPromise) {
        connectPromise = client.connect().catch((error) => {
            connectPromise = undefined;
            console.error("Redis connection failed:", error.message);
        });
    }

    await connectPromise;
}

async function getJson(key) {
    try {
        await connectRedis();
        if (!client || !client.isReady) return null;

        const value = await client.get(key);
        console.log(`Redis cache: ${value ? "HIT" : "MISS"} ${key}`);
        return value ? JSON.parse(value) : null;
    } catch (error) {
        console.error("Redis read failed:", error.message);
        return null;
    }
}

async function setJson(key, value, ttlSeconds = 60) {
    try {
        await connectRedis();
        if (!client || !client.isReady) return;

        await client.set(key, JSON.stringify(value), { EX: ttlSeconds });
        console.log(`Redis cache: SET ${key} (TTL ${ttlSeconds}s)`);
    } catch (error) {
        console.error("Redis write failed:", error.message);
    }
}

async function invalidateListings() {
    try {
        await connectRedis();
        if (!client || !client.isReady) return;

        const keys = [];
        for await (const key of client.scanIterator({ MATCH: "listing*", COUNT: 100 })) {
            keys.push(key);
        }

        if (keys.length) {
            await client.del(keys);
            console.log(`Redis cache: invalidated ${keys.length} listing key(s)`);
        } else {
            console.log("Redis cache: no listing keys to invalidate");
        }
    } catch (error) {
        console.error("Redis invalidation failed:", error.message);
    }
}

module.exports = { connectRedis, getJson, setJson, invalidateListings };
