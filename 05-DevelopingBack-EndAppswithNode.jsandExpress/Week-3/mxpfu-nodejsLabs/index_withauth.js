const express = require('express');
const routes = require('./routes/users.js');
const jwt = require('jsonwebtoken');
const session = require('express-session')

const app = express();
const PORT =5000;

app.use(session({secret:"fingerpint",resave: true, saveUninitialized: true}))

app.use(express.json());

app.use("/user", (req,res,next)=>{
// Middleware which tells that the user is authenticated or not
   
   if(req.session.authorization) {
       let token = req.session.authorization['accessToken']; // Access Token
       
       jwt.verify(token, "access",(err,user)=>{
           if(!err){
               req.user = user;
               next();
           }
           else{
               return res.status(403).json({message: "User not authenticated"})
           }
        });
    } else {
        return res.status(403).json({message: "User not logged in"})
    }
});

app.use("/user", routes);

app.post("/login", (req,res) => {
    const user = req.body.user;
    if (!user) {
        return res.status(404).json({message: "Body Empty"});
    }
    let accessToken = jwt.sign({
        data: user
      }, 'access', { expiresIn: 60 * 60 });

      req.session.authorization = {
        accessToken
    }
    return res.status(200).send("User successfully logged in");
});

app.listen(PORT,()=>console.log("Server is running at port "+PORT));