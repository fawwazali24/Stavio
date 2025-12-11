const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. This peaceful retreat is located just steps away from the shoreline, offering uninterrupted views of the sparkling ocean. Wake up to the gentle sound of waves and enjoy a calming morning stroll along the sandy beach.\n\nInside, the cottage features warm wooden interiors, cozy furnishings, and large windows that frame the natural seaside landscape. Whether you're unwinding on the sunlit patio or sipping coffee by the panoramic windows, this cottage provides a perfect escape for beach lovers.\n\nIdeal for couples, families, or solo travelers seeking tranquility, this space allows you to disconnect from busy city life and reconnect with nature in the purest form.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    category: "Beaches",
    usp1: "Beautiful private beachfront access",
    usp2: "Calming ocean views from every room",
    usp3: "Perfect for tranquil seaside escapes",
    guests: 4,
    bedrooms: 2,
    beds: 2,
    bathroom: 1,
    checkin: "14:00",
    checkout: "11:00"
  },

  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish downtown loft designed for modern urban living. Tall ceilings, wide windows, and open-concept architecture create a vibrant atmosphere perfect for travelers who enjoy both comfort and energy.\n\nThe loft features contemporary decor, a fully equipped workstation, and sleek dining and living areas ideal for short or long stays. Natural light floods the space throughout the day, highlighting the beautiful city skyline right outside your window.\n\nPerfect for business travelers, creatives, or explorers, this loft puts you just minutes away from iconic restaurants, public transport, and cultural attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    category: "Cities",
    usp1: "Prime location in the heart of the city",
    usp2: "Modern interior with skyline views",
    usp3: "Ideal for business or long stays",
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathroom: 1,
    checkin: "15:00",
    checkout: "11:00"
  },

  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin tucked deep within lush forestry and towering peaks. The cabin offers a secluded atmosphere with fresh alpine air and breathtaking scenery right at your doorstep.\n\nFeaturing warm wooden craftsmanship, a stone fireplace, and panoramic mountain-facing windows, this retreat is designed for guests seeking both calm and adventure. Enjoy hiking trails, scenic viewpoints, and quiet mornings surrounded by nature.\n\nWhether you're escaping for a weekend reset or an extended nature retreat, this cabin offers a rejuvenating getaway where peace and simplicity come naturally.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    category: "Mountains",
    usp1: "Scenic mountain views throughout the property",
    usp2: "Quiet forest-surrounded retreat",
    usp3: "Ideal for nature lovers and hikers",
    guests: 4,
    bedrooms: 2,
    beds: 3,
    bathroom: 1,
    checkin: "14:00",
    checkout: "10:00"
  },

  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa surrounded by rolling hills, vineyards, and the rich cultural heritage of Italy. The villa showcases traditional stonework, arched doorways, and a serene countryside atmosphere.\n\nInside, carefully preserved architectural details blend seamlessly with modern comforts. Enjoy rustic wooden beams, antique furnishings, and wide terraces perfect for enjoying breathtaking sunsets.\n\nWhether you're exploring nearby wineries, relaxing in the garden, or simply soaking in the peaceful Tuscan air, this villa provides an unforgettable stay.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    category: "Heritage",
    usp1: "Authentic Tuscan countryside living",
    usp2: "Restored architecture with luxury comfort",
    usp3: "Ideal for wine and culture lovers",
    guests: 6,
    bedrooms: 3,
    beds: 4,
    bathroom: 2,
    checkin: "15:00",
    checkout: "11:00"
  },

  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this nature-inspired treehouse retreat nestled deep within a private forest. Elevated platforms, wooden walkways, and canopy-level views make this an unforgettable escape.\n\nInside, the treehouse offers cozy interiors with earthy tones and large windows that immerse you in nature from every angle. Whether you're reading on the deck or listening to forest sounds at night, you'll feel completely removed from the stress of daily life.\n\nDesigned for adventurers, writers, and dreamers, this treehouse is perfect for those looking for solitude and inspiration.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 800,
    location: "Portland",
    country: "United States",
    category: "Forests",
    usp1: "Elevated forest canopy views",
    usp2: "Unique treehouse design",
    usp3: "Perfect for romantic and quiet stays",
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathroom: 1,
    checkin: "13:00",
    checkout: "10:00"
  },

  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door and walk directly onto soft white sand in this stunning beachfront condo. This home offers unmatched sea views, fresh ocean breeze, and the calming rhythm of waves.\n\nInside, enjoy a bright open living space with beach-inspired decor and large windows that bring the ocean indoors. The balcony is perfect for sunrise breakfasts and peaceful evening relaxation.\n\nWhether you're sunbathing, swimming, or exploring coastal nightlife, this beachfront haven is ideal for travelers seeking pure seaside bliss.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    category: "Beaches",
    usp1: "Direct walk-out access to the beach",
    usp2: "Ocean-facing balcony",
    usp3: "Bright and airy coastal design",
    guests: 4,
    bedrooms: 2,
    beds: 3,
    bathroom: 2,
    checkin: "14:00",
    checkout: "11:00"
  },

  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend peaceful days fishing, kayaking, and relaxing by the serene lakeside in this rustic cabin retreat. Surrounded by calm waters and fresh mountain air, it offers the perfect outdoor escape.\n\nThe cabin’s wooden interiors and fireplace create a warm ambience that complements the tranquil surroundings. Large windows provide breathtaking lake views and plenty of natural light.\n\nWhether you're an outdoor enthusiast or simply seeking a peaceful getaway, this lakeside cabin offers a refreshing break from the everyday routine.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60"
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    category: "Mountains",
    usp1: "Beautiful lakeside views",
    usp2: "Perfect for kayaking and fishing",
    usp3: "Quiet natural surroundings",
    guests: 4,
    bedrooms: 2,
    beds: 3,
    bathroom: 1,
    checkin: "14:00",
    checkout: "10:00"
  },

  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living in this exquisite penthouse featuring panoramic cityscape views from every corner. Floor-to-ceiling glass walls flood the apartment with natural light, creating a bright, open, and elegant environment.\n\nThe interior boasts premium furnishings, modern design elements, and a spacious layout suited for high-end urban living. The private terrace is perfect for evening relaxation, entertaining guests, or simply watching the city come alive at night.\n\nWith its prime location and sophisticated ambiance, this penthouse is ideal for travelers seeking comfort, style, and exclusivity.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60"
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    category: "Premium",
    usp1: "Panoramic skyline views",
    usp2: "High-end modern interior",
    usp3: "Exclusive private terrace",
    guests: 4,
    bedrooms: 2,
    beds: 2,
    bathroom: 2,
    checkin: "15:00",
    checkout: "11:00"
  },

  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Experience the thrill of mountain living in this luxurious chalet located directly on the slopes. With ski-in/ski-out access, you can step outside and begin your alpine adventure instantly.\n\nThe chalet features traditional wooden architecture blended with modern comforts, providing warmth and relaxation after a day in the snow. Large windows offer incredible views of the Swiss Alps, making it a perfect winter escape.\n\nFor families, couples, and winter sports lovers, this chalet delivers an unforgettable snow vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60"
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    category: "Mountains",
    usp1: "Direct slope access",
    usp2: "Classic Swiss chalet design",
    usp3: "Ideal for ski and snow enthusiasts",
    guests: 6,
    bedrooms: 3,
    beds: 5,
    bathroom: 2,
    checkin: "15:00",
    checkout: "10:00"
  },

  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the magic of the African savannah in this luxury safari lodge located in the heart of the Serengeti. Wake up to the sights and sounds of wildlife roaming across vast open plains.\n\nThe lodge blends natural materials with modern luxury, creating a comfortable yet adventurous stay. Enjoy private guided tours, outdoor dining experiences, and breathtaking sunset views.\n\nIdeal for wildlife lovers and adventure seekers, this lodge offers a front-row experience to one of the world's most iconic natural spectacles.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60"
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    category: "Farms",
    usp1: "Unique wildlife viewing experiences",
    usp2: "Luxury lodge in the heart of nature",
    usp3: "Guided safari tours included",
    guests: 4,
    bedrooms: 2,
    beds: 3,
    bathroom: 1,
    checkin: "13:00",
    checkout: "10:00"
  },
  // === PART 2: Listings 11 - 20 (append these objects to the array) ===

{
  title: "Historic Canal House",
  description:
    "Stay in a piece of Amsterdam history in this beautifully preserved canal house located in the city's iconic canal district. Original architectural details — tall sash windows, carved woodwork, and high ceilings — meet carefully chosen modern comforts to create a warm, character-filled stay. Mornings here begin with soft canal light, coffee on the windowsill, and the gentle city rhythm.\n\nThe house features intimate living spaces elegantly furnished with a mix of antiques and contemporary pieces. Walk outside to discover cobblestone streets, boutique shops, and world-class museums just minutes away. Whether you're here for culture, cycling, or leisurely canal-side exploration, this house is a charming base to experience Amsterdam like a local.\n\nPerfect for couples or small families seeking an atmospheric, history-rich stay.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 1800,
  location: "Amsterdam",
  country: "Netherlands",
  category: "Heritage",
  usp1: "Authentic canal-side historic dwelling",
  usp2: "Central location near museums and cafés",
  usp3: "Blend of antique charm and modern comfort",
  guests: 4,
  bedrooms: 2,
  beds: 2,
  bathroom: 1,
  checkin: "15:00",
  checkout: "11:00"
},

{
  title: "Private Island Retreat",
  description:
    "Disconnect completely on your own private island — a rare escape designed for privacy, luxury, and pure relaxation. The island offers exclusive beaches, private dining experiences, and accommodation thoughtfully placed to maximize views and seclusion.\n\nOn-site staff can arrange boat transfers, bespoke meals, and curated activities from snorkeling to guided island walks. Each villa or cottage is finished with natural materials and open layouts to celebrate indoor-outdoor living under tropical skies.\n\nThis retreat is ideal for special celebrations, intimate getaways, or anyone wanting an unforgettable, fully private holiday experience.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 10000,
  location: "Fiji",
  country: "Fiji",
  category: "Premium",
  usp1: "Entire private island for exclusive use",
  usp2: "Personalized service and bespoke experiences",
  usp3: "Secluded tropical beaches and privacy",
  guests: 10,
  bedrooms: 5,
  beds: 6,
  bathroom: 5,
  checkin: "14:00",
  checkout: "12:00"
},

{
  title: "Charming Cottage in the Cotswolds",
  description:
    "Escape to the picturesque English countryside with this quaint thatched-roof cottage in the Cotswolds. Surrounded by rolling meadows and honey-colored stone cottages, the property invites slow mornings, long countryside walks, and cozy evenings by the fire.\n\nInterior details celebrate rustic charm — exposed beams, country fabrics, and a hearth-centered living room — while the kitchen is well-appointed for home-cooked meals made from local ingredients. Stroll to nearby village pubs, artisanal shops, and scenic lanes during your stay.\n\nIdeal for couples and families seeking a peaceful rural break steeped in traditional English charm.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 1200,
  location: "Cotswolds",
  country: "United Kingdom",
  category: "Heritage",
  usp1: "Classic English countryside charm",
  usp2: "Thatched roof cottage with garden",
  usp3: "Close to village pubs and scenic walks",
  guests: 5,
  bedrooms: 3,
  beds: 3,
  bathroom: 2,
  checkin: "14:00",
  checkout: "11:00"
},

{
  title: "Historic Brownstone in Boston",
  description:
    "Step back in time in this elegant brownstone located in the heart of historic Boston. The property pairs original period features — ornate moldings, parquet floors, and a classic façade — with thoughtful modern upgrades for a comfortable stay.\n\nSituated near landmark neighborhoods, the brownstone offers easy access to cultural institutions, parks, and restaurants. Inside, you'll find a refined living room, intimate dining areas, and bedrooms designed for restful nights after a day of city exploration.\n\nPerfect for history buffs and families wanting a refined urban stay with character and convenience.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 2200,
  location: "Boston",
  country: "United States",
  category: "Heritage",
  usp1: "Historic architecture in prime location",
  usp2: "Classic interiors with modern comforts",
  usp3: "Walkable to museums and historic sites",
  guests: 6,
  bedrooms: 3,
  beds: 3,
  bathroom: 2,
  checkin: "15:00",
  checkout: "11:00"
},

{
  title: "Beachfront Bungalow in Bali",
  description:
    "Relax on the sandy shores of Bali in this charming beachfront bungalow complete with a private plunge pool. The bungalow offers direct beach access and a tranquil layout designed for tropical living.\n\nSurrounded by palm trees and Balinese gardens, enjoy fresh local meals on your terrace or sunset walks along the shore. Interiors combine open-plan spaces with natural materials to maintain an airy, island feel.\n\nA perfect choice for travelers seeking sun, surf, and relaxed island culture in comfort and privacy.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 1800,
  location: "Bali",
  country: "Indonesia",
  category: "Beaches",
  usp1: "Private beach frontage and plunge pool",
  usp2: "Open tropical living with garden views",
  usp3: "Authentic island experience with modern comfort",
  guests: 4,
  bedrooms: 2,
  beds: 2,
  bathroom: 2,
  checkin: "14:00",
  checkout: "11:00"
},

{
  title: "Mountain View Cabin in Banff",
  description:
    "Enjoy breathtaking mountain views from this cozy cabin in the heart of the Canadian Rockies. The cabin provides direct access to national park trails and panoramic vistas that change with every season.\n\nWarm wood interiors, a stone fireplace, and expansive windows create an inviting environment perfect for family stays or outdoor-focused trips. Spend days exploring alpine lakes or evenings relaxing with local cuisine.\n\nIdeal for hikers, skiers, and anyone wanting to experience Banff’s natural grandeur.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 1500,
  location: "Banff",
  country: "Canada",
  category: "Mountains",
  usp1: "Unobstructed mountain panoramas",
  usp2: "Cozy cabin with fireplace",
  usp3: "Direct access to national park trails",
  guests: 6,
  bedrooms: 3,
  beds: 4,
  bathroom: 2,
  checkin: "14:00",
  checkout: "10:00"
},

{
  title: "Art Deco Apartment in Miami",
  description:
    "Step into 1920s glamour with a stay in this Art Deco apartment located in the vibrant South Beach neighborhood. Colorful period design, geometric lines, and vintage-inspired furnishings celebrate the era while modern amenities keep your stay effortless.\n\nLarge windows and outdoor seating offer a lively view of the beachside culture and palm-lined streets. With dining, nightlife, and beachfront activities nearby, the apartment is ideal for a stylish city-and-beach experience.\n\nPerfect for couples and friends looking for a boutique and design-forward stay in Miami.",
  image: {
    filename: "listingimage",
    url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 1600,
  location: "Miami",
  country: "United States",
  category: "Cities",
  usp1: "Iconic Art Deco style near South Beach",
  usp2: "Vibrant neighborhood with dining and nightlife",
  usp3: "Design-forward interiors with modern comforts",
  guests: 4,
  bedrooms: 2,
  beds: 2,
  bathroom: 1,
  checkin: "15:00",
  checkout: "11:00"
},

{
  title: "Tropical Villa in Phuket",
  description:
    "Escape to a luxurious tropical villa in Phuket featuring an infinity pool and lush garden surrounds. The villa blends indoor-outdoor living with open terraces and private dining spaces for unforgettable sunset dinners.\n\nInteriors are breezy and contemporary, offering comfortable bedrooms, a modern kitchen, and relaxation zones overlooking the pool. Local excursions such as boat tours, snorkeling, and island hopping can be arranged for a complete tropical experience.\n\nPerfect for families or groups seeking privacy, comfort, and access to Phuket’s best coastal attractions.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 3000,
  location: "Phuket",
  country: "Thailand",
  category: "Resorts",
  usp1: "Private infinity pool and tropical gardens",
  usp2: "Spacious indoor-outdoor living",
  usp3: "Concierge excursions available",
  guests: 8,
  bedrooms: 4,
  beds: 5,
  bathroom: 4,
  checkin: "15:00",
  checkout: "12:00"
},

{
  title: "Historic Castle in Scotland",
  description:
    "Live like royalty in this majestic castle nestled in the Scottish Highlands. Historic stone walls, grand halls, and landscaped gardens set the scene for a truly dramatic stay steeped in history and heritage.\n\nThe castle combines period grandeur with thoughtful modern upgrades to ensure comfort. Explore nearby ruins, rugged coastlines, and moorland landscapes during the day and return to classic dining and cozy fireside evenings.\n\nPerfect for celebrations, history lovers, or travelers seeking a dramatic and storied escape.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 4000,
  location: "Scottish Highlands",
  country: "United Kingdom",
  category: "Heritage",
  usp1: "Authentic castle experience with historic grandeur",
  usp2: "Expansive grounds and classic architecture",
  usp3: "Ideal venue for events and celebrations",
  guests: 12,
  bedrooms: 6,
  beds: 8,
  bathroom: 5,
  checkin: "15:00",
  checkout: "11:00"
},

{
  title: "Desert Oasis in Dubai",
  description:
    "Experience luxury in the heart of the desert with this opulent oasis-style villa near Dubai. Designed to blend modern opulence with serene desert vistas, it includes a private pool, lush courtyards, and refined interiors.\n\nYou can enjoy desert activities such as dune drives, camel rides, and evening stargazing, all paired with world-class hospitality. Indoor spaces are spacious and elegantly appointed, with large windows framing golden sand dunes.\n\nPerfect for travelers seeking a luxurious desert retreat with both adventure and complete relaxation.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 5000,
  location: "Dubai",
  country: "United Arab Emirates",
  category: "Premium",
  usp1: "Luxury desert villa with private pool",
  usp2: "Access to desert experiences and stargazing",
  usp3: "High-end finishes and exclusive privacy",
  guests: 8,
  bedrooms: 4,
  beds: 5,
  bathroom: 4,
  checkin: "16:00",
  checkout: "11:00"
},
// === PART 3: Listings 21 - 30 (append these objects to the array) ===

{
  title: "Rustic Log Cabin in Montana",
  description:
    "Unplug and unwind in this cozy log cabin nestled in the wild terrain of Montana. Surrounded by towering pines and wide-open skies, the cabin invites you to experience peaceful days filled with nature, fresh air, and pure quiet. Rustic craftsmanship and natural wood textures give the cabin a warm, intimate atmosphere perfect for relaxation.\n\nSpend your afternoons exploring trails, fishing in pristine lakes, or simply enjoying the crackling fireplace inside. The cabin is designed to feel like a retreat from modern life while still offering essential comforts.\n\nIdeal for couples, writers, and anyone seeking solitude in a beautiful natural setting.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 1100,
  location: "Montana",
  country: "United States",
  category: "Forests",
  usp1: "Authentic log cabin feel",
  usp2: "Serene forest surroundings",
  usp3: "Ideal for a peaceful nature escape",
  guests: 4,
  bedrooms: 2,
  beds: 3,
  bathroom: 1,
  checkin: "14:00",
  checkout: "11:00"
},

{
  title: "Beachfront Villa in Greece",
  description:
    "Immerse yourself in Mediterranean beauty with this stunning beachfront villa overlooking turquoise Greek waters. The villa features whitewashed exteriors, airy interiors, and expansive outdoor seating areas that capture the charm of island living.\n\nIndoors, you’ll find spacious, sunlit rooms adorned with soft tones and traditional Greek design accents. Outdoors, private terraces and stone pathways lead you directly to the sea.\n\nPerfect for families and groups seeking a luxury coastal escape infused with Greek island culture.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 2500,
  location: "Mykonos",
  country: "Greece",
  category: "Beaches",
  usp1: "True beachfront experience",
  usp2: "Traditional Greek architecture",
  usp3: "Private terraces with sea views",
  guests: 6,
  bedrooms: 3,
  beds: 4,
  bathroom: 3,
  checkin: "15:00",
  checkout: "11:00"
},

{
  title: "Eco-Friendly Treehouse Retreat",
  description:
    "Stay high among the trees in this eco-friendly retreat designed for sustainable living. Built with natural materials and surrounded by lush rainforest, the treehouse provides an immersive experience in nature unlike any other.\n\nInside, soft lighting, handmade furniture, and organic textures create a soothing environment. The open-air design allows gentle breezes and birdsong to flow throughout the space.\n\nPerfect for environmentally conscious travelers seeking a peaceful adventure rooted in nature.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 750,
  location: "Costa Rica",
  country: "Costa Rica",
  category: "Forests",
  usp1: "Eco-sustainable living among trees",
  usp2: "Immersive rainforest experience",
  usp3: "Handcrafted natural interiors",
  guests: 2,
  bedrooms: 1,
  beds: 1,
  bathroom: 1,
  checkin: "13:00",
  checkout: "10:00"
},

{
  title: "Historic Cottage in Charleston",
  description:
    "Experience the charm of Charleston’s historic district in this wonderfully preserved cottage featuring classic Southern architecture. Brick pathways, blooming gardens, and vintage shutters set the scene for a charming getaway.\n\nThe cottage interior includes antique furnishings, restored wooden beams, and cozy living spaces filled with natural light. Guests can relax in the private garden or walk to nearby streets lined with boutiques, cafés, and cultural landmarks.\n\nPerfect for history lovers, couples, or families looking for a warm and atmospheric Southern stay.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 1600,
  location: "Charleston",
  country: "United States",
  category: "Heritage",
  usp1: "Classic Southern charm and architecture",
  usp2: "Private blooming garden space",
  usp3: "Walkable to historic attractions",
  guests: 4,
  bedrooms: 2,
  beds: 2,
  bathroom: 1,
  checkin: "15:00",
  checkout: "11:00"
},

{
  title: "Modern Apartment in Tokyo",
  description:
    "Explore the vibrant energy of Tokyo from this modern, centrally located apartment. Minimalist design and clever space optimization create a clean and comfortable environment ideal for travelers seeking convenience.\n\nThe apartment is just steps from train stations, bustling markets, and futuristic cityscapes, making it the perfect base for sightseeing and culinary exploration. Inside, large windows allow natural light to illuminate the sleek interiors.\n\nA great choice for solo travelers, couples, or business visitors wanting a mix of efficiency and style.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 2000,
  location: "Tokyo",
  country: "Japan",
  category: "Cities",
  usp1: "Minimalist Japanese design",
  usp2: "Prime central Tokyo access",
  usp3: "Bright natural-lit interiors",
  guests: 2,
  bedrooms: 1,
  beds: 1,
  bathroom: 1,
  checkin: "15:00",
  checkout: "10:00"
},

{
  title: "Lakefront Cabin in New Hampshire",
  description:
    "Spend relaxing days by the serene waters of this cozy lakefront cabin located in the scenic White Mountains. The cabin offers direct water access, making it perfect for paddleboarding, canoeing, and refreshing morning dips.\n\nInside, rustic decor blends with comfortable amenities for a warm and inviting stay. Large windows provide calming lake views from nearly every room.\n\nIdeal for families or couples wanting a peaceful escape into New England’s natural beauty.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 1200,
  location: "New Hampshire",
  country: "United States",
  category: "Mountains",
  usp1: "Beautiful lakeside setting",
  usp2: "Perfect for water activities",
  usp3: "Cozy mountain atmosphere",
  guests: 4,
  bedrooms: 2,
  beds: 3,
  bathroom: 1,
  checkin: "14:00",
  checkout: "10:00"
},

{
  title: "Luxury Villa in the Maldives",
  description:
    "Indulge in ultimate luxury with this stunning overwater villa in the Maldives. Crystal-clear turquoise waters surround the property, creating a serene atmosphere ideal for pure relaxation.\n\nThe villa features direct lagoon access, private decks, and airy interiors designed for comfort and privacy. Whether you’re enjoying sunrise views or unwinding in the outdoor lounge, the experience is unmatched.\n\nPerfect for honeymooners, couples, and anyone seeking top-tier tropical luxury.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 6000,
  location: "Maldives",
  country: "Maldives",
  category: "Resorts",
  usp1: "Iconic overwater villa experience",
  usp2: "Direct access to crystal-clear waters",
  usp3: "Ideal for luxury romantic getaways",
  guests: 3,
  bedrooms: 1,
  beds: 1,
  bathroom: 1,
  checkin: "15:00",
  checkout: "12:00"
},

{
  title: "Ski Chalet in Aspen",
  description:
    "Hit the slopes in style with this luxurious ski chalet situated in world-famous Aspen. Designed for maximum comfort after long days of skiing, the chalet offers plush interiors and sweeping alpine views.\n\nThe open living area includes a stone fireplace, warm textiles, and large windows that highlight the snowy landscape. Guests can also enjoy easy access to Aspen’s ski lifts and winter attractions.\n\nPerfect for families and groups seeking a premium ski vacation.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 4000,
  location: "Aspen",
  country: "United States",
  category: "Mountains",
  usp1: "Luxury stay near ski lifts",
  usp2: "Cozy fireplace and mountain views",
  usp3: "Perfect for winter sports lovers",
  guests: 8,
  bedrooms: 4,
  beds: 6,
  bathroom: 3,
  checkin: "15:00",
  checkout: "10:00"
},

{
  title: "Secluded Beach House in Costa Rica",
  description:
    "Escape to an untouched stretch of coastline in this secluded beach house on the Pacific shore of Costa Rica. With waves just steps away, the property offers a peaceful spot for both relaxation and adventure.\n\nInteriors are bright and coastal, blending natural textures with minimalist design. Spend your days surfing, lounging in hammocks, or taking in vibrant sunsets from your private terrace.\n\nIdeal for those wanting a quiet, tropical, and refreshing getaway.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 1800,
  location: "Costa Rica",
  country: "Costa Rica",
  category: "Beaches",
  usp1: "Secluded beachfront living",
  usp2: "Perfect for surfers and nature lovers",
  usp3: "Tranquil tropical surroundings",
  guests: 5,
  bedrooms: 2,
  beds: 3,
  bathroom: 2,
  checkin: "14:00",
  checkout: "11:00"
},

{
  title: "Rustic Mountain Cabin",
  description:
    "A peaceful retreat surrounded by pine forests and breathtaking mountain views, this cabin offers the perfect escape from busy city life. Its wooden architecture and calming atmosphere make it a favorite among nature seekers.\n\nInside, warm tones and rustic decor create a cozy environment ideal for reading, unwinding, and simply enjoying the fresh alpine air. The surrounding area is full of scenic trails and serene landscapes.\n\nIdeal for couples and small groups wanting a quiet mountain reset.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=60"
  },
  price: 950,
  location: "Aspen",
  country: "United States",
  category: "Mountains",
  usp1: "Calming mountain backdrop",
  usp2: "Rustic wooden architecture",
  usp3: "Access to scenic trails",
  guests: 4,
  bedrooms: 2,
  beds: 3,
  bathroom: 1,
  checkin: "14:00",
  checkout: "10:00"
},
// === PART 4: Listings 31 - 40 (append these objects to the array) ===

{
  title: "Tropical Bungalow in Bali",
  description:
    "Experience the calm and beauty of Bali from this serene tropical bungalow surrounded by lush greenery. The space blends natural textures with elegant design, creating a peaceful atmosphere that invites relaxation. Gentle breezes, soft lighting, and open spaces make this bungalow a refreshing retreat.\n\nImmerse yourself in the surrounding culture, explore nearby beaches, or unwind in the tranquil outdoor areas. The bungalow’s natural integration with the landscape gives it a unique charm.\n\nPerfect for couples seeking a private and romantic tropical escape.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 1150,
  location: "Ubud",
  country: "Indonesia",
  category: "Resorts",
  usp1: "Beautiful tropical surroundings",
  usp2: "Open-air relaxing spaces",
  usp3: "Perfect for romantic getaways",
  guests: 2,
  bedrooms: 1,
  beds: 1,
  bathroom: 1,
  checkin: "14:00",
  checkout: "11:00"
},

{
  title: "Countryside Cottage in England",
  description:
    "Relax in the charming English countryside with this classic cottage located in a peaceful village. Surrounded by rolling green hills and scenic walking paths, the cottage offers the perfect environment to slow down and rejuvenate.\n\nInside, you’ll find cozy seating areas, traditional wooden accents, and warm lighting that create an inviting atmosphere. Whether you're enjoying tea by the fireplace or exploring nearby trails, every moment feels calm and refreshing.\n\nIdeal for families or travelers wanting a quiet countryside escape.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1566988239988-616771a8296a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 900,
  location: "Cotswolds",
  country: "United Kingdom",
  category: "Farms",
  usp1: "Beautiful rural setting",
  usp2: "Traditional English cottage feel",
  usp3: "Perfect for slow-paced retreats",
  guests: 4,
  bedrooms: 2,
  beds: 3,
  bathroom: 1,
  checkin: "15:00",
  checkout: "10:00"
},

{
  title: "Urban Studio in Toronto",
  description:
    "Stay in the heart of Toronto with this modern and efficient urban studio. Designed with clean lines and clever space usage, the studio offers a stylish and comfortable environment for city trips.\n\nLocated near entertainment districts, parks, and transport options, the studio puts everything within easy reach. Inside, a minimalist layout and large windows offer a bright and refreshing space.\n\nIdeal for business travelers, couples, or solo adventurers exploring Toronto.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1527030280862-64139fba04ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 1400,
  location: "Toronto",
  country: "Canada",
  category: "Cities",
  usp1: "Prime downtown location",
  usp2: "Bright and modern interior",
  usp3: "Perfect for work or leisure stays",
  guests: 2,
  bedrooms: 1,
  beds: 1,
  bathroom: 1,
  checkin: "15:00",
  checkout: "11:00"
},

{
  title: "Island Resort Villa",
  description:
    "Escape into luxury with this private resort villa located on a secluded island. White sandy shores and crystal-clear waters surround the villa, creating a peaceful haven for total relaxation.\n\nInside, spacious rooms are decorated with elegant coastal themes and high-end furnishings. The outdoor lounging areas and private beach access make it perfect for long, tranquil days in paradise.\n\nA great choice for honeymooners, families, or anyone seeking an unforgettable tropical experience.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505968409348-bd000797c92e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 5000,
  location: "Fiji",
  country: "Fiji",
  category: "Resorts",
  usp1: "Private island luxury",
  usp2: "High-end coastal interiors",
  usp3: "Exclusive beach access",
  guests: 6,
  bedrooms: 3,
  beds: 4,
  bathroom: 3,
  checkin: "14:00",
  checkout: "12:00"
},

{
  title: "Classic Parisian Apartment",
  description:
    "Immerse yourself in quintessential Paris living with this beautifully restored apartment. High ceilings, vintage French décor, and tall windows make the home feel warm and elegant.\n\nLocated in a charming neighborhood, the apartment offers easy access to cafés, bakeries, and famous Parisian landmarks. Inside, the space is filled with natural light and artistic touches everywhere you look.\n\nIdeal for couples and travelers wanting an authentic Paris experience.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 2200,
  location: "Paris",
  country: "France",
  category: "Cities",
  usp1: "Authentic Parisian charm",
  usp2: "Bright classic French interiors",
  usp3: "Centrally located near iconic spots",
  guests: 3,
  bedrooms: 1,
  beds: 1,
  bathroom: 1,
  checkin: "15:00",
  checkout: "11:00"
},

{
  title: "Arctic Dome in Finland",
  description:
    "Stay beneath the northern skies in this glass Arctic dome designed for unforgettable stargazing and aurora viewing. Its unique architecture provides a clear panoramic view of the night sky and snowy landscapes.\n\nInside, the warm and modern furnishings offer comfort against the freezing outdoor temperatures. Guests can relax indoors while watching the breathtaking natural scenery.\n\nPerfect for winter travelers, adventure seekers, and couples looking for a magical Arctic experience.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1524868579636-3a48a2809869?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 3200,
  location: "Lapland",
  country: "Finland",
  category: "Arctic",
  usp1: "Aurora viewing from bed",
  usp2: "Unique glass-dome architecture",
  usp3: "Cozy modern interiors in the snow",
  guests: 2,
  bedrooms: 1,
  beds: 1,
  bathroom: 1,
  checkin: "16:00",
  checkout: "10:00"
},

{
  title: "Farmstay Cottage in New Zealand",
  description:
    "Experience peaceful farm life with this charming cottage located on rolling New Zealand farmland. Surrounded by grazing animals and scenic landscapes, the cottage is a comforting escape into nature.\n\nInside, natural décor and warm lighting create a cozy environment ideal for unwinding. Guests can enjoy fresh air, farm activities, and long walks around the property.\n\nPerfect for families or travelers wanting a calm countryside stay.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 800,
  location: "Auckland",
  country: "New Zealand",
  category: "Farms",
  usp1: "Beautiful farm surroundings",
  usp2: "Cozy countryside interiors",
  usp3: "Great for families and nature lovers",
  guests: 4,
  bedrooms: 2,
  beds: 3,
  bathroom: 1,
  checkin: "14:00",
  checkout: "10:00"
},

{
  title: "Premium Penthouse Suite",
  description:
    "Enjoy modern luxury in this premium penthouse featuring panoramic skyline views and top-tier amenities. With an open-plan layout and high-end furnishings, the penthouse is the perfect blend of comfort and sophistication.\n\nThe spacious terrace offers breathtaking city views, making it ideal for relaxing evenings or hosting small gatherings. Floor-to-ceiling windows ensure that natural light floods every part of the suite.\n\nPerfect for business travelers, couples, and luxury seekers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 3500,
  location: "Dubai",
  country: "United Arab Emirates",
  category: "Premium",
  usp1: "Panoramic skyline views",
  usp2: "Luxury furnishings and layout",
  usp3: "Spacious rooftop terrace",
  guests: 4,
  bedrooms: 2,
  beds: 2,
  bathroom: 2,
  checkin: "15:00",
  checkout: "12:00"
},

{
  title: "Forest Cabin in Oregon",
  description:
    "Set deep within Oregon’s lush forests, this cabin offers a peaceful escape where nature takes center stage. Tall evergreens surround the property, creating a private and serene environment for rest and exploration.\n\nInside, rustic interiors are paired with modern comforts, making the cabin warm and inviting. Guests can enjoy hiking trails, quiet mornings on the porch, and evenings by the fire.\n\nGreat for couples, small groups, and anyone who loves forest adventures.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 1000,
  location: "Oregon",
  country: "United States",
  category: "Forests",
  usp1: "Deep forest surroundings",
  usp2: "Cozy rustic design",
  usp3: "Perfect for hiking and nature trails",
  guests: 4,
  bedrooms: 2,
  beds: 3,
  bathroom: 1,
  checkin: "14:00",
  checkout: "10:00"
},

{
  title: "Coastal House in Portugal",
  description:
    "Stay near the Atlantic shores in this bright and refreshing coastal house located in Portugal. With soft white interiors and breezy open spaces, the house captures the essence of seaside living.\n\nEnjoy easy access to beaches, coastal trails, and vibrant local markets. Indoors, the space offers a clean and calming atmosphere filled with natural sunlight.\n\nIdeal for families, friends, and travelers looking for a refreshing ocean getaway.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 1300,
  location: "Algarve",
  country: "Portugal",
  category: "Beaches",
  usp1: "Bright airy coastal design",
  usp2: "Close to beaches and markets",
  usp3: "Perfect for ocean lovers",
  guests: 5,
  bedrooms: 2,
  beds: 3,
  bathroom: 2,
  checkin: "15:00",
  checkout: "11:00"
},
// === PART 5: Listings 41 - 50 (append these objects to the array) ===

{
  title: "Hillside Cottage in Switzerland",
  description:
    "Enjoy breathtaking alpine views from this lovely hillside cottage overlooking the Swiss mountains. The peaceful environment, fresh mountain air, and charming wooden architecture come together to create a truly serene retreat.\n\nInside, the cottage is furnished with warm, rustic décor and large windows that bring the outside beauty right into the living space. Whether you're sipping hot chocolate by the fireplace or relaxing on the balcony, every moment feels rejuvenating.\n\nIdeal for couples, hikers, and families wanting a peaceful alpine escape.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1519817914152-22d216bb9170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 2200,
  location: "Zermatt",
  country: "Switzerland",
  category: "Mountains",
  usp1: "Stunning panoramic mountain views",
  usp2: "Warm and cozy wooden interiors",
  usp3: "Perfect access to scenic hiking trails",
  guests: 4,
  bedrooms: 2,
  beds: 3,
  bathroom: 1,
  checkin: "15:00",
  checkout: "10:00"
},

{
  title: "Luxury Condo in Singapore",
  description:
    "Stay in the heart of Singapore’s vibrant cityscape with this luxury condominium offering stylish modern living. The condo boasts high-end furnishings, sleek interiors, and large windows that capture the beauty of the city's skyline.\n\nAmenities include access to a rooftop pool, gym, and lounge areas that elevate the living experience. Located in a prime district, the condo provides immediate access to shopping hubs, restaurants, and cultural attractions.\n\nPerfect for business travelers and modern urban explorers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 3000,
  location: "Singapore",
  country: "Singapore",
  category: "Premium",
  usp1: "Skyline views from high floors",
  usp2: "Access to premium amenities",
  usp3: "Located in a bustling prime district",
  guests: 3,
  bedrooms: 1,
  beds: 1,
  bathroom: 1,
  checkin: "16:00",
  checkout: "11:00"
},

{
  title: "Sandy Beach Hut in Australia",
  description:
    "Feel the warmth of Australia’s coastline with this cozy sandy beach hut located just a few steps from the ocean. The hut offers a laid-back atmosphere with wooden textures, open spaces, and refreshing sea breezes.\n\nSpend your mornings walking along the shore, your afternoons surfing, and your evenings watching sunsets from the porch. The hut blends simplicity with comfort, creating a perfect seaside escape.\n\nIdeal for beach lovers, surfers, and adventurous travelers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 900,
  location: "Gold Coast",
  country: "Australia",
  category: "Beaches",
  usp1: "Footsteps from the ocean",
  usp2: "Perfect for surfing and swimming",
  usp3: "Relaxing coastal lifestyle",
  guests: 3,
  bedrooms: 1,
  beds: 2,
  bathroom: 1,
  checkin: "14:00",
  checkout: "10:00"
},

{
  title: "Modern House with Pool",
  description:
    "Indulge in luxury and comfort with this stunning modern home featuring a private pool and spacious contemporary interiors. Clean lines, large glass walls, and stylish décor create an inviting atmosphere for relaxation.\n\nWhether you're hosting a small gathering or enjoying a quiet day by the pool, this home offers plenty of space to unwind. The outdoor lounge area is perfect for sunbathing, evening dinners, or poolside drinks.\n\nIdeal for families and groups seeking a luxurious stay.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1560185008-dac8c1f0b1ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 2700,
  location: "Los Angeles",
  country: "United States",
  category: "Pools",
  usp1: "Private luxury pool",
  usp2: "Spacious modern interiors",
  usp3: "Great for entertaining",
  guests: 6,
  bedrooms: 3,
  beds: 4,
  bathroom: 3,
  checkin: "15:00",
  checkout: "11:00"
},

{
  title: "Countryside Barn Stay",
  description:
    "Enjoy rustic charm in this beautifully converted barn surrounded by open farmland and peaceful countryside. The high ceilings, wooden beams, and natural materials give the barn a warm and authentic feel.\n\nGuests can explore nearby walking paths, experience farm life, or simply relax in the cozy indoor spaces. Evenings can be spent stargazing or enjoying a warm fire.\n\nPerfect for families or couples wanting a slow and refreshing countryside stay.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1567899378494-47b22f40d491?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 1000,
  location: "Somerset",
  country: "United Kingdom",
  category: "Farms",
  usp1: "Rustic barn architecture",
  usp2: "Surrounded by peaceful farmland",
  usp3: "Perfect rural retreat",
  guests: 5,
  bedrooms: 2,
  beds: 3,
  bathroom: 1,
  checkin: "14:00",
  checkout: "10:00"
},

{
  title: "Skylight Studio Apartment",
  description:
    "This bright studio apartment features beautiful skylights that fill the space with natural light throughout the day. With a minimalistic design and thoughtful layout, the studio is both compact and comfortable.\n\nLocated in a trendy neighborhood, guests have easy access to cafes, parks, and entertainment hotspots. The quiet ambiance and warm lighting make it perfect for work or relaxation.\n\nIdeal for solo travelers or couples.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 1100,
  location: "Berlin",
  country: "Germany",
  category: "Cities",
  usp1: "Bright skylit interiors",
  usp2: "Clean minimalistic design",
  usp3: "Located in a vibrant district",
  guests: 2,
  bedrooms: 1,
  beds: 1,
  bathroom: 1,
  checkin: "15:00",
  checkout: "11:00"
},

{
  title: "Cityview Loft in Chicago",
  description:
    "Enjoy stunning city views from this stylish loft located in the heart of Chicago. High ceilings, modern décor, and floor-to-ceiling windows create an airy and open space ideal for urban travelers.\n\nThe loft is close to famous landmarks, dining spots, and entertainment districts. Its comfortable interior and open layout make it a relaxing place to unwind after exploring the city.\n\nPerfect for couples, friends, or business travelers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1486304873000-235643847519?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 1800,
  location: "Chicago",
  country: "United States",
  category: "Cities",
  usp1: "Floor-to-ceiling windows",
  usp2: "Great central city location",
  usp3: "Modern loft atmosphere",
  guests: 3,
  bedrooms: 1,
  beds: 1,
  bathroom: 1,
  checkin: "15:00",
  checkout: "11:00"
},

{
  title: "Woodland Cottage in Ireland",
  description:
    "Escape into nature with this peaceful woodland cottage located deep in the Irish countryside. Surrounded by towering trees and quiet trails, the cottage offers a magical, storybook-like atmosphere.\n\nInside, traditional décor and warm textures create a cozy environment perfect for rest. The surrounding woodland provides beautiful scenery for morning walks or relaxing outdoor time.\n\nIdeal for couples or small families wanting a quiet, nature-filled getaway.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 950,
  location: "Galway",
  country: "Ireland",
  category: "Forests",
  usp1: "Surrounded by lush woodland",
  usp2: "Warm cozy interiors",
  usp3: "Perfect for nature walks",
  guests: 4,
  bedrooms: 2,
  beds: 3,
  bathroom: 1,
  checkin: "14:00",
  checkout: "10:00"
},

{
  title: "Luxury Mountain Lodge",
  description:
    "This luxury mountain lodge offers breathtaking views and high-end design, combining nature’s beauty with modern indulgence. Spacious rooms, elegant décor, and large panoramic windows create a warm yet sophisticated atmosphere.\n\nThe lodge is surrounded by hiking trails and scenic overlooks, making it perfect for adventure and relaxation. After long days outside, unwind in the comfortable indoor spaces.\n\nIdeal for families, groups, and luxury travelers seeking a premium alpine retreat.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 3500,
  location: "Banff",
  country: "Canada",
  category: "Mountains",
  usp1: "Premium alpine design",
  usp2: "Panoramic lodge views",
  usp3: "Spacious and luxurious rooms",
  guests: 8,
  bedrooms: 4,
  beds: 5,
  bathroom: 3,
  checkin: "16:00",
  checkout: "10:00"
},

{
  title: "Seaside Apartment in Spain",
  description:
    "Wake up to the sound of gentle waves in this modern seaside apartment along Spain’s beautiful coastline. The apartment features soft coastal tones, big windows, and open spaces that create a refreshing ambiance.\n\nGuests can enjoy easy access to beaches, local restaurants, and charming seaside promenades. Indoors, the apartment offers a relaxing environment perfect for unwinding.\n\nA great choice for families, couples, and beach-loving travelers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 1400,
  location: "Barcelona",
  country: "Spain",
  category: "Beaches",
  usp1: "Refreshing seaside interiors",
  usp2: "Close to beaches and restaurants",
  usp3: "Bright and open living spaces",
  guests: 4,
  bedrooms: 2,
  beds: 3,
  bathroom: 2,
  checkin: "15:00",
  checkout: "11:00"
},
// === PART 6: Listings 51 - 60 (append these objects to the array) ===

{
  title: "Private Island Cottage",
  description:
    "Enjoy unmatched privacy and tranquility on your own private island cottage surrounded by turquoise waters. This secluded retreat offers peaceful ocean views, sandy beaches, and a refreshing breeze that follows you from sunrise to sunset.\n\nInside, the cottage blends natural materials with cozy décor, creating the perfect space to unwind and disconnect from the outside world. Guests can spend their days swimming, kayaking, or simply relaxing on the private shoreline.\n\nIdeal for couples and travelers looking for a truly exclusive island escape.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 4500,
  location: "Belize",
  country: "Belize",
  category: "Beaches",
  usp1: "Private island exclusivity",
  usp2: "Pure white sand beaches",
  usp3: "Ideal for total relaxation",
  guests: 2,
  bedrooms: 1,
  beds: 1,
  bathroom: 1,
  checkin: "15:00",
  checkout: "11:00"
},

{
  title: "Rainforest Lodge in Brazil",
  description:
    "Immerse yourself in the heart of the Amazon rainforest with this beautifully crafted eco-lodge. Surrounded by lush greenery and exotic wildlife, the lodge offers an unforgettable nature-centered experience.\n\nInside, wooden interiors and open-air spaces connect you with the surrounding jungle. Guided tours, river activities, and wildlife spotting make this stay both adventurous and inspiring.\n\nPerfect for nature explorers, photographers, and eco-conscious travelers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502163140606-888448ae8cfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 1600,
  location: "Amazon",
  country: "Brazil",
  category: "Forests",
  usp1: "Deep rainforest immersion",
  usp2: "Eco-friendly lodge design",
  usp3: "Close to wildlife and jungle trails",
  guests: 4,
  bedrooms: 2,
  beds: 3,
  bathroom: 2,
  checkin: "14:00",
  checkout: "10:00"
},

{
  title: "Historic Stone House",
  description:
    "Step back in time with this beautifully preserved stone house featuring traditional architecture and charming antique furnishings. Its thick walls, vintage décor, and peaceful courtyard create a timeless atmosphere.\n\nLocated in a quiet historic village, the home offers close access to cultural sites, local markets, and scenic viewpoints. Indoors, natural textures and warm lighting add to the home’s cozy character.\n\nIdeal for heritage lovers, families, and travelers seeking an authentic cultural stay.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 1300,
  location: "Tuscany",
  country: "Italy",
  category: "Heritage",
  usp1: "Classic stone architecture",
  usp2: "Authentic historic atmosphere",
  usp3: "Located in a charming old village",
  guests: 5,
  bedrooms: 3,
  beds: 4,
  bathroom: 2,
  checkin: "16:00",
  checkout: "10:00"
},

{
  title: "Scenic Desert Villa",
  description:
    "Experience the beauty of desert landscapes in this luxurious villa surrounded by golden dunes and dramatic horizons. Floor-to-ceiling windows bring in soft desert light, making the villa feel warm and serene.\n\nInside, a blend of earthy tones and modern décor creates a relaxing environment. Guests can spend evenings stargazing from the private terrace or enjoying the peaceful desert breeze.\n\nPerfect for photographers, couples, and luxury adventure travelers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 2800,
  location: "Doha",
  country: "Qatar",
  category: "Premium",
  usp1: "Beautiful desert surroundings",
  usp2: "Luxury interiors with natural tones",
  usp3: "Perfect for stargazing nights",
  guests: 6,
  bedrooms: 3,
  beds: 4,
  bathroom: 3,
  checkin: "15:00",
  checkout: "11:00"
},

{
  title: "Lakeside Cabin Escape",
  description:
    "Enjoy calm mornings and scenic views at this peaceful lakeside cabin situated beside crystal-clear water. The cabin’s outdoor deck, cozy interiors, and easy access to the lake make it perfect for a nature-focused getaway.\n\nGuests can spend their days fishing, canoeing, or relaxing in the warm wooden living spaces indoors. Evenings are best spent enjoying the sunset reflected on the water.\n\nIdeal for families and couples seeking fresh air and lakeside tranquility.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 1100,
  location: "Ontario",
  country: "Canada",
  category: "Forests",
  usp1: "Beautiful lakeside scenery",
  usp2: "Cozy wooden cabin atmosphere",
  usp3: "Great for fishing and boating",
  guests: 5,
  bedrooms: 2,
  beds: 3,
  bathroom: 1,
  checkin: "14:00",
  checkout: "10:00"
},

{
  title: "Skyline Penthouse in New York",
  description:
    "Live above the clouds in this stunning penthouse located in the heart of New York City. With towering views of the skyline, luxurious furnishings, and modern architecture, this penthouse offers a premium urban experience.\n\nFloor-to-ceiling windows brighten the open-plan rooms, while the spacious terrace provides a breathtaking perspective of city lights after dark. Indoors, high-end finishing and spacious living areas elevate comfort.\n\nPerfect for luxury travelers, business executives, and couples celebrating special occasions.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 7000,
  location: "New York City",
  country: "United States",
  category: "Premium",
  usp1: "Sweeping skyline views",
  usp2: "Luxurious modern interior",
  usp3: "Exclusive rooftop terrace",
  guests: 4,
  bedrooms: 2,
  beds: 2,
  bathroom: 3,
  checkin: "16:00",
  checkout: "11:00"
},

{
  title: "Highland Lodge in Scotland",
  description:
    "Retreat into the rugged beauty of the Scottish Highlands with this charming lodge surrounded by rolling hills and peaceful landscapes. The rustic stone exterior and warm interiors create a cozy and welcoming atmosphere.\n\nGuests can explore scenic trails, enjoy quiet evenings by the fireplace, and take in breathtaking highland sunsets from the outdoor garden. Inside, the lodge is decorated with traditional Scottish design elements.\n\nAn excellent choice for hikers, families, and travelers seeking a soulful countryside escape.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 1500,
  location: "Scottish Highlands",
  country: "United Kingdom",
  category: "Mountains",
  usp1: "Traditional Highland lodge charm",
  usp2: "Close to scenic walking routes",
  usp3: "Warm stone and wood interiors",
  guests: 6,
  bedrooms: 3,
  beds: 4,
  bathroom: 2,
  checkin: "14:00",
  checkout: "10:00"
},

{
  title: "Jungle Treehouse in Thailand",
  description:
    "Stay high among the treetops with this adventurous jungle treehouse located deep in Thailand’s tropical forests. Birds, rustling leaves, and fresh jungle air surround you throughout your stay.\n\nThe treehouse features natural bamboo architecture, open-air relaxation spaces, and sweeping views of the forest canopy. Disconnect from the world and reconnect with nature.\n\nGreat for adventure seekers and travelers looking for an eco-friendly retreat.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 700,
  location: "Chiang Mai",
  country: "Thailand",
  category: "Forests",
  usp1: "Immersive jungle setting",
  usp2: "Eco-friendly bamboo design",
  usp3: "Adventure-filled nature stay",
  guests: 2,
  bedrooms: 1,
  beds: 1,
  bathroom: 1,
  checkin: "13:00",
  checkout: "10:00"
},

{
  title: "Coastal Cliff House",
  description:
    "Perched high above the ocean, this coastal cliff house offers dramatic views of crashing waves and endless horizons. The home's modern open layout and expansive windows provide a breathtaking panorama of sea and sky.\n\nIndoors, contemporary furniture and airy rooms create a calm and luxurious environment. Outdoors, cliffside terraces offer unforgettable sunset views.\n\nA great choice for ocean lovers, photographers, and travelers seeking dramatic coastal scenery.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 3200,
  location: "Cape Town",
  country: "South Africa",
  category: "Beaches",
  usp1: "Dramatic ocean cliff views",
  usp2: "Modern open-plan layout",
  usp3: "Perfect for scenic photography",
  guests: 5,
  bedrooms: 2,
  beds: 3,
  bathroom: 2,
  checkin: "15:00",
  checkout: "11:00"
},

{
  title: "Nordic Cabin Getaway",
  description:
    "This Nordic-style cabin offers a peaceful retreat surrounded by pine trees and serene natural surroundings. With warm wooden interiors and minimalist Scandinavian design, the space feels relaxing and rejuvenating.\n\nGuests can spend their days exploring snowy trails in winter or enjoying quiet forest paths in summer. Indoors, the cozy fireplace and clean aesthetic create an inviting atmosphere year-round.\n\nPerfect for couples, families, and travelers seeking simplicity and nature.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1475856034136-563a93368349?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 1200,
  location: "Oslo",
  country: "Norway",
  category: "Forests",
  usp1: "Minimal Scandinavian design",
  usp2: "Quiet nature-filled surroundings",
  usp3: "Perfect for winter and summer stays",
  guests: 4,
  bedrooms: 2,
  beds: 3,
  bathroom: 1,
  checkin: "14:00",
  checkout: "10:00"
},
// === PART 7: Listings 61 - 70 (append these objects to the array) ===

{
  title: "Alpine Glacier Chalet",
  description:
    "Stay surrounded by towering ice-capped peaks in this beautiful glacier-side chalet. The crisp mountain air, panoramic alpine views, and peaceful environment create the perfect atmosphere for a refreshing getaway.\n\nInside, the chalet features classic timber interiors, warm lighting, and a cozy fireplace ideal for winter evenings. Spacious windows open toward the mountains, letting you enjoy nature from the comfort of your living room.\n\nThis chalet is perfect for skiers, hikers, and travelers seeking tranquility amidst dramatic landscapes.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60"
  },
  price: 2400,
  location: "Zurich",
  country: "Switzerland",
  category: "Mountains",
  usp1: "Epic glacier and mountain views",
  usp2: "Warm alpine-style interiors",
  usp3: "Great for winter sports",
  guests: 6,
  bedrooms: 3,
  beds: 4,
  bathroom: 2,
  checkin: "15:00",
  checkout: "10:00"
},

{
  title: "Moroccan Desert Riad",
  description:
    "Enter a world of vibrant culture and architectural beauty in this traditional Moroccan riad located near the desert. Its colorful mosaics, carved wooden doors, and serene courtyard create a truly magical atmosphere.\n\nThe large suites, open terraces, and ambient lighting provide an authentic blend of luxury and tradition. Sit by the courtyard fountain or enjoy local cuisine prepared by skilled chefs.\n\nPerfect for culture lovers, couples, and travelers looking for an exotic and enriching desert stay.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=60"
  },
  price: 2700,
  location: "Marrakech",
  country: "Morocco",
  category: "Heritage",
  usp1: "Traditional Moroccan architecture",
  usp2: "Peaceful courtyard and fountain",
  usp3: "Rich cultural experience",
  guests: 5,
  bedrooms: 3,
  beds: 3,
  bathroom: 2,
  checkin: "14:00",
  checkout: "11:00"
},

{
  title: "Cliffside Ocean Villa",
  description:
    "This spectacular ocean villa sits at the edge of a cliff, offering breathtaking views of the Aegean Sea. Whitewashed walls, floating terraces, and luxurious interiors make this stay unforgettable.\n\nEnjoy fresh breezes, mesmerizing sunsets, and uninterrupted views from the infinity pool. Indoors, stylish furnishings and soft lighting create a peaceful and elegant ambiance.\n\nIdeal for honeymooners, luxury travelers, and anyone who wants to experience the beauty of cliffside living.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1542317854-1f5f7f7e27ca?auto=format&fit=crop&w=800&q=60"
  },
  price: 4800,
  location: "Santorini",
  country: "Greece",
  category: "Premium",
  usp1: "Panoramic cliffside sea views",
  usp2: "Luxury interiors and infinity pool",
  usp3: "Perfect sunset viewpoints",
  guests: 4,
  bedrooms: 2,
  beds: 2,
  bathroom: 2,
  checkin: "15:00",
  checkout: "11:00"
},

{
  title: "Remote Icelandic Cabin",
  description:
    "Escape into the pristine wilderness of Iceland with this remote modern cabin surrounded by geothermal landscape and endless skies. The cabin’s minimalist wooden design blends naturally with the environment.\n\nGuests can enjoy relaxing in the outdoor geothermal hot tub while admiring the mountains and star-filled nights. Indoors, the warm interiors offer a serene retreat from cold winds.\n\nPerfect for adventurers, photographers, and travelers seeking peace and solitude.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=60"
  },
  price: 1600,
  location: "Reykjavik",
  country: "Iceland",
  category: "Arctic",
  usp1: "Geothermal hot tub experience",
  usp2: "Minimalist Nordic cabin design",
  usp3: "Perfect for northern lights viewing",
  guests: 4,
  bedrooms: 2,
  beds: 3,
  bathroom: 1,
  checkin: "14:00",
  checkout: "10:00"
},

{
  title: "Urban Minimal Penthouse",
  description:
    "A modern penthouse with clean architectural lines and a bright open interior located in the heart of the city. Large glass walls bring in abundant natural light and offer skyline views.\n\nThe penthouse features premium furniture, an open kitchen, and a private rooftop workspace perfect for creative or remote work sessions. Sleek minimal design ensures a calming atmosphere amidst urban surroundings.\n\nIdeal for business travelers, couples, and digital nomads.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=60"
  },
  price: 3200,
  location: "Singapore",
  country: "Singapore",
  category: "Premium",
  usp1: "Beautiful minimalist interiors",
  usp2: "Private rooftop workspace",
  usp3: "City skyline views",
  guests: 3,
  bedrooms: 1,
  beds: 1,
  bathroom: 1,
  checkin: "16:00",
  checkout: "11:00"
},

{
  title: "Greek Coastal Cottage",
  description:
    "A charming coastal cottage decorated in iconic white-and-blue Greek style, offering breathtaking views of the Mediterranean Sea. The peaceful environment and bright interiors create the perfect seaside escape.\n\nGuests can enjoy breakfast on the terrace, walk directly to the beach, or explore the island’s beautiful alleyways. Inside, soft color palettes and rustic décor add warmth and comfort.\n\nGreat for couples, families, and long-term coastal stays.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=60"
  },
  price: 1300,
  location: "Mykonos",
  country: "Greece",
  category: "Beaches",
  usp1: "Direct beach access",
  usp2: "White-and-blue Greek architecture",
  usp3: "Beautiful coastal walking paths",
  guests: 4,
  bedrooms: 2,
  beds: 2,
  bathroom: 1,
  checkin: "14:00",
  checkout: "10:00"
},

{
  title: "Scenic Vineyard Cottage",
  description:
    "Stay in the heart of wine country with this charming vineyard cottage surrounded by rolling green hills and endless grapevines. The peaceful landscape creates a relaxing escape.\n\nInside, rustic elements and warm décor give the cottage a homely feel. Outdoor seating areas offer perfect spots for sipping local wine while watching the sunset.\n\nIdeal for couples, wine lovers, and travelers seeking quiet countryside charm.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1545231027-637d2f6210f8?auto=format&fit=crop&w=800&q=60"
  },
  price: 1150,
  location: "Napa Valley",
  country: "United States",
  category: "Farms",
  usp1: "Beautiful vineyard surroundings",
  usp2: "Rustic cottage atmosphere",
  usp3: "Wine-tasting experiences nearby",
  guests: 3,
  bedrooms: 1,
  beds: 1,
  bathroom: 1,
  checkin: "15:00",
  checkout: "11:00"
},

{
  title: "High-Rise City Apartment",
  description:
    "Enjoy breathtaking skyscraper views from this modern high-rise apartment featuring floor-to-ceiling windows and a sleek interior layout. The clean design makes the space feel bright and open.\n\nLocated in one of the world’s most vibrant urban hubs, the apartment offers easy access to shopping streets, fine dining, and cultural landmarks.\n\nPerfect for solo travelers, couples, and business visitors.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=60"
  },
  price: 1900,
  location: "Hong Kong",
  country: "China",
  category: "Cities",
  usp1: "Floor-to-ceiling city views",
  usp2: "Modern luxury interior",
  usp3: "Located in a major urban center",
  guests: 2,
  bedrooms: 1,
  beds: 1,
  bathroom: 1,
  checkin: "15:00",
  checkout: "11:00"
},

{
  title: "Bohemian Surf Loft",
  description:
    "A bright and playful loft designed with surf culture at its core. Colorful décor, natural materials, and a relaxed layout make it the perfect beachside artist’s hideout.\n\nGuests can store their surfboards easily, enjoy an outdoor shower after a long day riding waves, or explore the nearby coastal cafés.\n\nIdeal for surfers, digital nomads, and travelers looking for a fun, creative escape.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60"
  },
  price: 980,
  location: "Lisbon",
  country: "Portugal",
  category: "Beaches",
  usp1: "Surf-friendly design",
  usp2: "Outdoor shower",
  usp3: "Bright and creative loft style",
  guests: 3,
  bedrooms: 1,
  beds: 1,
  bathroom: 1,
  checkin: "14:00",
  checkout: "10:00"
},

{
  title: "Himalayan Mountain Stay",
  description:
    "Located deep in the Himalayas, this peaceful lodge offers incredible views of towering peaks and lush valleys. The crisp mountain air and serene environment make it an ideal retreat for relaxation.\n\nThe interior features traditional Himalayan craftsmanship, wooden beams, and cozy sitting areas with warm lighting. Outdoor trails and breathtaking viewpoints are just steps away.\n\nPerfect for trekkers, nature lovers, and spiritual travelers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=800&q=60"
  },
  price: 850,
  location: "Manali",
  country: "India",
  category: "Mountains",
  usp1: "Amazing Himalayan landscapes",
  usp2: "Cozy mountain lodge interior",
  usp3: "Ideal for trekking and nature walks",
  guests: 4,
  bedrooms: 2,
  beds: 3,
  bathroom: 1,
  checkin: "13:00",
  checkout: "10:00"
},
// === PART 8: Listings 71 - 80 (append these objects to the array) ===

{
  title: "Modern Riverfront Studio",
  description:
    "This elegant riverfront studio offers soothing waterfront views and a calm, modern interior perfect for unwinding after a busy day. Large windows fill the space with natural light, creating a bright and airy ambiance.\n\nGuests can enjoy watching boats pass by, take morning walks along the river promenade, or sip coffee on the balcony while enjoying the reflection of city lights in the water. The studio’s minimalist design ensures comfort and relaxation throughout your stay.\n\nIdeal for solo travelers, couples, and remote workers seeking a peaceful urban escape.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=800&q=60"
  },
  price: 1600,
  location: "Amsterdam",
  country: "Netherlands",
  category: "Cities",
  usp1: "Beautiful river views",
  usp2: "Bright minimalist interiors",
  usp3: "Located near the river promenade",
  guests: 2,
  bedrooms: 1,
  beds: 1,
  bathroom: 1,
  checkin: "14:00",
  checkout: "10:00"
},

{
  title: "Sunny Rooftop Apartment",
  description:
    "This bright and spacious rooftop apartment features an expansive private terrace filled with greenery and outdoor seating, offering a perfect spot to soak up the sun or enjoy evening breezes. The interiors are modern, warm, and welcoming.\n\nSpend mornings relaxing with a cup of coffee under the open sky, or unwind at night with city lights illuminating the horizon. The apartment’s stylish design creates a refreshing urban oasis.\n\nPerfect for couples, digital nomads, and long stays.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1493809842455-4514b083bc6f?auto=format&fit=crop&w=800&q=60"
  },
  price: 2100,
  location: "Los Angeles",
  country: "United States",
  category: "Cities",
  usp1: "Large sunny rooftop terrace",
  usp2: "Modern and spacious layout",
  usp3: "Great for long-term stays",
  guests: 3,
  bedrooms: 1,
  beds: 1,
  bathroom: 1,
  checkin: "15:00",
  checkout: "11:00"
},

{
  title: "Floating Lake Cabin",
  description:
    "Experience a rare and peaceful escape in this floating lake cabin, where gentle waves surround your stay. The cabin has a warm wooden interior and large windows that provide uninterrupted views of the water.\n\nGuests can enjoy kayaking, swimming, or simply relaxing on the sun deck. Evenings bring calm reflections and the soothing sounds of nature.\n\nIdeal for couples, writers, and travelers seeking a quiet and unique retreat.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60"
  },
  price: 1400,
  location: "British Columbia",
  country: "Canada",
  category: "Forests",
  usp1: "Unique floating cabin design",
  usp2: "Direct lake access",
  usp3: "Perfect for peaceful getaways",
  guests: 4,
  bedrooms: 1,
  beds: 2,
  bathroom: 1,
  checkin: "14:00",
  checkout: "10:00"
},

{
  title: "Retro Jungle Bungalow",
  description:
    "This vibrant jungle bungalow combines tropical nature with retro-style interiors for a fun and refreshing stay. Surrounded by tall palms and lush greenery, the bungalow creates a relaxing island atmosphere.\n\nGuests can unwind on the bamboo terrace, explore nature trails nearby, or enjoy the refreshing breeze through the indoor-outdoor living space.\n\nPerfect for adventurous travelers, couples, and guests who enjoy lively, colorful stays.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1579886819537-2cc52839d450?auto=format&fit=crop&w=800&q=60"
  },
  price: 900,
  location: "Phuket",
  country: "Thailand",
  category: "Forests",
  usp1: "Retro tropical design",
  usp2: "Bamboo outdoor lounge",
  usp3: "Close to jungle trails",
  guests: 3,
  bedrooms: 1,
  beds: 1,
  bathroom: 1,
  checkin: "13:00",
  checkout: "10:00"
},

{
  title: "Architectural Desert House",
  description:
    "This award-winning modern desert home blends sleek architecture with natural desert tones. Its clean lines, expansive windows, and minimalist aesthetic offer a luxurious experience surrounded by open landscapes.\n\nSpend peaceful afternoons enjoying desert sunsets from the terrace or stargazing at night under vast skies. Indoors, the atmosphere remains elegant and calming.\n\nPerfect for designers, photographers, and travelers looking for high-end desert sophistication.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=60"
  },
  price: 3900,
  location: "Palm Springs",
  country: "United States",
  category: "Premium",
  usp1: "Award-winning desert architecture",
  usp2: "Panoramic desert views",
  usp3: "Minimal and luxurious design",
  guests: 6,
  bedrooms: 3,
  beds: 4,
  bathroom: 3,
  checkin: "15:00",
  checkout: "11:00"
},

{
  title: "Stone Cottage by the Sea",
  description:
    "This charming stone cottage sits along the coastline, surrounded by sea breezes, colorful flowers, and rugged natural beauty. Its historic stone walls and vintage décor create a cozy and inviting setting.\n\nGuests can walk scenic coastal trails, enjoy ocean views from the garden, or relax indoors beside the fireplace after a long day exploring.\n\nPerfect for couples, families, and travelers seeking a peaceful coastal escape.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1475332363216-3233bd8ae0f9?auto=format&fit=crop&w=800&q=60"
  },
  price: 1150,
  location: "Cornwall",
  country: "United Kingdom",
  category: "Beaches",
  usp1: "Cozy historic stone architecture",
  usp2: "Beautiful coastal surroundings",
  usp3: "Flower-filled garden",
  guests: 4,
  bedrooms: 2,
  beds: 3,
  bathroom: 1,
  checkin: "14:00",
  checkout: "10:00"
},

{
  title: "Urban Industrial Loft",
  description:
    "This industrial loft blends exposed brick, steel beams, and vintage elements for a stylish and urban living experience. High ceilings and large windows give the loft a spacious, airy feel.\n\nLocated in a vibrant neighborhood, the loft offers easy access to cafés, nightlife, and cultural attractions, making it perfect for exploring the city.\n\nIdeal for young travelers, creatives, and lovers of industrial aesthetics.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=60"
  },
  price: 1550,
  location: "Chicago",
  country: "United States",
  category: "Cities",
  usp1: "Stylish industrial interior",
  usp2: "Spacious open layout",
  usp3: "Located in lively metro district",
  guests: 3,
  bedrooms: 1,
  beds: 1,
  bathroom: 1,
  checkin: "15:00",
  checkout: "11:00"
},

{
  title: "Sunny Mexican Casa",
  description:
    "This colorful Mexican casa features warm terracotta tones, handmade tiles, and a charming courtyard fountain that creates a peaceful atmosphere. Bright interiors reflect local culture and traditional design.\n\nGuests can enjoy slow-paced mornings on the patio, explore nearby markets, or experience authentic cuisine within walking distance.\n\nPerfect for cultural travelers and those who love colorful, vibrant stays.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1565598621680-94cb280f72fc?auto=format&fit=crop&w=800&q=60"
  },
  price: 850,
  location: "Cancún",
  country: "Mexico",
  category: "Heritage",
  usp1: "Colorful traditional interiors",
  usp2: "Peaceful courtyard fountain",
  usp3: "Close to markets and historic streets",
  guests: 4,
  bedrooms: 2,
  beds: 2,
  bathroom: 1,
  checkin: "14:00",
  checkout: "10:00"
},

{
  title: "Riverside Cabin Retreat",
  description:
    "This rustic riverside cabin offers a peaceful setting surrounded by nature, flowing water, and fresh air. Wooden interiors, a stone fireplace, and large windows create a comforting and warm environment.\n\nSpend mornings listening to the sound of the river, afternoons exploring forest trails, and evenings relaxing by the fire.\n\nIdeal for families, hikers, and anyone craving an authentic nature retreat.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=60"
  },
  price: 950,
  location: "Colorado",
  country: "United States",
  category: "Forests",
  usp1: "Peaceful river surroundings",
  usp2: "Rustic wood cabin style",
  usp3: "Great for hiking and nature escapes",
  guests: 5,
  bedrooms: 2,
  beds: 3,
  bathroom: 1,
  checkin: "13:00",
  checkout: "10:00"
},

{
  title: "Ski Lodge Apartment",
  description:
    "Perfectly located for winter sports enthusiasts, this ski lodge apartment offers cozy interiors, a warm fireplace, and easy access to nearby slopes. Its alpine-inspired design creates a snug and relaxing environment.\n\nEnjoy a hot soak after hitting the slopes, unwind in the living room, or simply admire snowy mountain views from the balcony.\n\nIdeal for ski travelers, families, and adventure lovers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60"
  },
  price: 2000,
  location: "Whistler",
  country: "Canada",
  category: "Mountains",
  usp1: "Close to major ski slopes",
  usp2: "Warm and cozy alpine design",
  usp3: "Perfect winter retreat",
  guests: 4,
  bedrooms: 2,
  beds: 3,
  bathroom: 2,
  checkin: "15:00",
  checkout: "11:00"
},
];


module.exports = { data: sampleListings };
