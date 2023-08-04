const express = require('express');
const app = new express();

function myLogger(req, res, next){
    req.timeReceived = Date();
    next();
  }

app.use(myLogger)

app.get("/",(req,res)=>{
    res.send("Request received at "+req.timeReceived+" is a success!")
})

app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})

