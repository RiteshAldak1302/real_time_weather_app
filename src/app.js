const constants = require('../public/js/main');
const express = require('express');
const app = express();
const path = require('path')
const hbs = require('hbs');


const port = process.env.port || 3600;
// require("../public/js/main")
// require('../.env')

const public_path = path.join(__dirname,'../public') 
app.set('view engine', 'hbs');
const views_path = path.join(__dirname,'../templates/views');
const partials_path = path.join(__dirname,'../templates/partials')
app.set('views',views_path);
hbs.registerPartials(partials_path);


app.use(express.static(public_path));



app.get("/",(req,res)=>{
   res.render('index.hbs')
})
app.get("/about",(req,res)=>{
   res.render('about.hbs')
})
app.get("/weather",(req,res)=>{
   res.render("weather.hbs")
})
app.get("*",(req,res)=>{
   res.render("404page.hbs")
})

app.listen(port,()=>{
       console.log(`server listen at port:${port}`)
})