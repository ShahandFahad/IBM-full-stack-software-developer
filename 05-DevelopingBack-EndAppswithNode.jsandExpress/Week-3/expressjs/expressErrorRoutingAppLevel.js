const express = require('express');
const app = new express();


app.get("user/about/:id",(req,res)=>{
    res.send("Response about user "+req.params.id)
})

app.post("user/about/:id",(req,res)=>{
    res.send("Response about user "+req.params.id)
})

app.get("item/about/:id",(req,res)=>{
    res.send("Response about user "+req.params.id)
})

app.post("item/about/:id",(req,res)=>{
    res.send("Response about user "+req.params.id)
})

app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})

