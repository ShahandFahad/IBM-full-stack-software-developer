
const express = require('express');
const app = new express();
const expressReactViews = require('express-react-views');

const jsxEngine = expressReactViews.createEngine();

app.set('view engine', 'jsx');

app.set('views', 'myview');

app.engine('jsx',jsxEngine);

app.get("/:name",(req,res)=>{
    res.render('index', { name: req.params.name });
  });

app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})

