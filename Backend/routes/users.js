const router = require("express").Router(); 
const User = require("../models/user");

const bcrypt = require("bcrypt");

// register: 

router.post("/register", async (req, res) => {
    try {
        // generate new secret password: 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // create a new user: 
        const newUser = new User({
            username:res.body.username,
            email: res.body.email,
            password: hashedPassword,
        });

        // save the user and send response: 
        const user = await newUser.save();
        res.status(200).json(user._id);
    }catch(err) {
        res.status(500).json(err)
    }
});

module.exports = router