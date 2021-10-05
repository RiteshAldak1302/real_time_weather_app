const express = require('express');
const app = express();
const path = require('path')
const port = process.env.port || 3000;

const public_path = path.join(__dirname,'../public') 
app.use(express.static(public_path));
app.get("/",(req,res)=>{
   res.send('index.html')
})
app.get("/about",(req,res)=>{
   res.send("welcome ritesh's website  about page")
})
app.get("/weather",(req,res)=>{
   res.send("welcome ritesh's website weather page")
})
app.get("*",(req,res)=>{
   res.send("404 error ,page not found")
})

app.listen(port,()=>{
       console.log(`server listen at port:${port}`)
})