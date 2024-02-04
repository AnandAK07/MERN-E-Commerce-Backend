const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
dotenv.config();

// const authentication=(req,res,next)=>{
//   if(!req.headers.authorization){
//     return res.send("Please login")
//   }
//   let token=req.headers.authorization;
//     jwt.verify(token, process.env.SECRETE_KEY, function (err, decoded) {
//         console.log(decoded,"tkn")
//         console.log(decoded.userId,"userIdtoken") // bar
//         if(decoded){
//             const userId=decoded.userId;
//             req.body.userId=userId
//             console.log(userId)
//             next();
//         }else{
//             console.log("error in jwt")
//             return res.send("Please Login")
//         }
//     });

// }

const authentication=(req,res,next)=>{
    if(!req.headers.authorization){
        res.status(401).send({message:'Unauthorized access. Missing authorization header.'})
    }
    let token = req.headers.authorization?.split(' ')[1];//[Bearer token*bealenae]
    jwt.verify(token, process.env.SECRETE_KEY, function (err, decoded) {
        if(decoded){
            console.log(decoded.userId)
            let userId = decoded.userId
            req.body.userId = (userId)
            next();
        }else{
            return res.status(401).send({message:'Unauthorized access. Invalid or expired token.'})
        } 
    }); 
}

module.exports = authentication