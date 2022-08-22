const db = require('../models')

const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');

const User = db.user

require('dotenv').config()

const generateToken = (user)=>{
    return jwt.sign({user},process.env.JWT_SECRET_KEY)
}

const register = async(req,res)=>{
    try {
        let user = await User.findOne({where:{email:req.body.email}});

        if(user){
            return res.status(400).send({message : "Email already exists" })
        }

        user = await User.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        })

        const token = generateToken(user)
        return res.status(201).send({user,token})
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

const login = async(req,res)=>{
    try {
        const user = await User.findOne({where:{email:req.body.email}})
        
        //check mail exists
        if(!user){
            return res.status(400).send("Wrong Email or password")
        }

        if(user.password !== req.body.password)
        {
            return res.status(400).send("Wrong Email or password")
        }

        const token = generateToken(user);

        return res.status(200).send({user,token})

    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

module.exports = {register,login}