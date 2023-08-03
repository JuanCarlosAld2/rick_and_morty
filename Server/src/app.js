const express = require('express');
const morgan = require('morgan');
const mainRouter = require('./routes/index')


const app = express();


app.use((req, res, next) => {                           /// |-> se coloca ruta del front
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); //Autorizo recibir solicitudes de este dominio
    res.header('Access-Control-Allow-Credentials', true); //Autorizo recibir solicitudes que incluyan el encabezado con credenciales
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); //Autorizo recibir solicitudes con dichos hedears
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE'); //Autorizo las solicitudes tipo GET, POST, OPTIONS, PUT y DELETE.
    next();
});

app.use(morgan("dev"))

app.use(express.json())

app.use("/rickandmorty/",mainRouter)


module.exports= app;