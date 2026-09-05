const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const userController = require("../controllers/users.js");

router.post("/signup",
    wrapAsync(userController.signup));

router.post("/login",
    (req, res, next) => passport.authenticate("local", (err, user, info) => {
        if (err) return next(err);
        if (!user) return res.status(401).json({ error: info?.message || "Invalid username or password" });
        req.logIn(user, (loginError) => {
            if (loginError) return next(loginError);
            userController.login(req, res);
        });
    })(req, res, next));

router.get("/logout", userController.logout);

module.exports = router;