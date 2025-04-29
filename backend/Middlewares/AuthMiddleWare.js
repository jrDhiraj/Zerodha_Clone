require("dotenv").config();
const {UserModel} = require('../models/UserModel');

const jwt = require('jsonwebtoken');

module.exports.userVerification = (req, res)=>{
    const token = req.cookies.token

    if(!token){
        return res.status(401).json({msg: "Unauthorized", status:false})

    }

    jwt.verify(token, process.env.SECRET_KEY, async(err, data)=>{
        if(err){
            return res.status(401).json({msg: "Unauthorized token", status:false})
        }else{
            const user = await UserModel.findById(data.id)
           if(user){
            return res.status(200).json({msg: "User verified", status:true, user:user.username })
           }else{
            return res.status(404).json({msg: "User not found", status:false})
           }
        }
    })
}

