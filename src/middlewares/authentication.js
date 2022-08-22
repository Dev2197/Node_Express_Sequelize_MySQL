const jwt = require('jsonwebtoken');
require('dotenv').config()



const authenticate = async(req,res,next)=>{
    if(!req.headers.authorization){
        return res.status(400).send({message:"Authoriztion token not found or Incorrect"})
    }

    if(!req.headers.authorization.startsWith("Bearer ")){
        return res.status(400).send({message:"Authoriztion token not found or Incorrect"})
    }

    const token = req.headers.authorization.split(" ")[1];


    try {
         const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        //  console.log(decoded);
         req.user = decoded.user;
        //  console.log(req.user)
         return next();
    } catch (error) {
        return res.status(500).send({message:"Authoriztion token not found or Incorrect"})
    }
}

module.exports = authenticate;