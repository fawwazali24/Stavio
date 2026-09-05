const User = require("../models/user.js");

module.exports.signup = async(req, res, next) => {
    try{
        let {username, email, password} = req.body;
        const newUser = new User({email, username});
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);

        req.login(registeredUser, (err) => {
            if(err){
                return next(err);
            }
            res.json({ message: "Welcome to Stavio", user: registeredUser });
        });
    } catch(e) {
        res.status(400).json({ error: e.message });
    }
    
};

module.exports.login = async(req, res) => {
    res.json({ message: "Welcome to Stavio", user: req.user });
};

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if(err) {
            return next(err);
        }
        res.json({ message: "You are logged out now!" });
    }) ;
};