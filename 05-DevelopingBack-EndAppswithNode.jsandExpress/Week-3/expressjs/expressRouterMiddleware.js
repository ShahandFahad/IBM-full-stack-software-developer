const express = require('express');
const app = new express();

var userRouter = express.Router()
var itemRouter = express.Router()

app.use("/item",itemRouter)
app.use("/user",userRouter)

userRouter.get("/about/:id",(req,res)=>{
    res.send("Response about user "+req.params.id)
})

userRouter.get("/details/:id",(req,res)=>{
    res.send("Details about user "+req.params.id)
})

itemRouter.get("/about/:id",(req,res)=>{
    res.send("Information about item "+req.params.id)
})

itemRouter.get("/details/:id",(req,res)=>{
    res.send("Details about item "+req.params.id)
})

app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})

