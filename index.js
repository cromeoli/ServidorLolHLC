const express = require("express");
const app = express();
const datos = require("./data/personajes_es.json");


const PORT = 3002;

app.listen(PORT, ()=>{
    console.log("\x1b[42m%s\x1b[0m", `Listening on port ${PORT}`)
});

app.get("/404.css", (req,res,next)=>{
    res.sendFile(__dirname+"/css/404.css");
});

app.get("/",(req,res,next)=>{
    res.sendFile(__dirname+"/html/index.html")
 }
);

app.get("/favicon.ico",(req,res,next)=>{
    res.sendFile(__dirname+"/images/logo/favicon.ico")
 }
);

app.get("/logica.js",(req,res,next)=>{
    res.sendFile(__dirname+"/js/logica.js");
});

app.get("/styles.css",(req,res,next)=>{
    res.sendFile(__dirname+"/css/styles.css");
});

app.get("/images/logo/logo_vector.svg",(req,res,next)=>{
    res.sendFile(__dirname+"/images/logo/logo_vector.svg");
});

app.get("/datos/personajes.json",(req,res,next)=>{
    res.json(datos);
    console.log(datos)
});

app.get("/sprites/campeonesMD/:nombrePj",(req,res,next)=>{
    let nombrePj = req.params.nombrePj.replace(" ","");
    res.sendFile(__dirname+`/images/campeonesMD/${nombrePj}.jpg`);
});

app.get("/sounds/jokes/:nombrePj",(req,res,next)=>{
    let nombrePj = req.params.nombrePj;
    res.sendFile(__dirname+`/sounds/jokes/${nombrePj}`);
});

app.get("/sounds/laugh/:nombrePj",(req,res,next)=>{
    let nombrePj = req.params.nombrePj;
    res.sendFile(__dirname+`/sounds/laugh/${nombrePj}`);
});

app.use((req, res, next)=>{
    res.status(404).sendFile(__dirname+'/html/404.html');
});



