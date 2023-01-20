const express = require("express");
const app = express();
const datos = require("./data/personajes_es.json");


const PORT = 3002;

app.listen(PORT, ()=>{
    console.log("\x1b[42m%s\x1b[0m", `Listening on port ${PORT}`)
})

app.get("/",(req,res,next)=>{
    res.sendFile(__dirname+"/html/index.html")
 }
)

app.get("/favicon.ico",(req,res,next)=>{
    res.sendFile(__dirname+"/images/logo/favicon.ico")

 }
)

app.get("/logica.js",(req,res,next)=>{
    res.sendFile(__dirname+"/js/logica.js");
})

app.get("/styles.css",(req,res,next)=>{
    res.sendFile(__dirname+"/css/styles.css");
})

app.get("/images/logo/logo_vector.svg",(req,res,next)=>{
    res.sendFile(__dirname+"/images/logo/logo_vector.svg");
})

app.get("/datos/personajes.json",(req,res,next)=>{
    res.json(datos );
})

