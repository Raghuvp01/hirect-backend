const router = require('express').Router();
const users = require('../model/seekerModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { registerValidation, loginValidation } = require('../validate');


//Register
router.post('/register', async (req, res) => {
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const emailExist = await users.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('Email already exists');

    //Hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const user = new users({
        email: req.body.email,
        password: hashPassword
    });
    try{
        const savedUser = await user.save();
        res.send({ user: user._id });
    }catch(err){
        res.status(400).send(err);
    }
});