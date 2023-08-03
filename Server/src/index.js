const app = require('./app');

const PORT= 3001;

app.listen(PORT,()=>{
    console.log(`in port http://localhost:${PORT}`)
});



































/*
servior con HTTP

// const db = require('./utils/data.js')// se en parte comentada
const http = require('http');
const PORT=3001;
const {getCharById} = require('./controllers/getCharById.js')


http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*'); //coors 
    const {url}= req
    const id= url.split("/").at(-1)// obtiene el ultimo elemento del array 
    console.log(id);
    if(url.includes("/rickandmorty/character")){
       return getCharById(res,id)
    }

    res.writeHead(404,{"Content-Type":"application/json"})
    res.end(JSON.stringify({message:"Ruta no definida"}))
    
    
    
    
    
    
    //mi codigo 

    // const {url}= req ///rickandmorty/character/2
    // const [,,,id]= url.split("/")//["","rickandmorty","character","2"]
    // //console.log(url);
    // if(url === `/rickandmorty/character/${id}`){
    //     const personaje = db.find((per)=> per.id === Number(id))
    //     //console.log(personaje);
    //     if(personaje){
    //         res.writeHead(200,{"Content-Type":"application/json"})
    //         return res.end(JSON.stringify(personaje))
    //     }else{
    //         res.writeHead(404,{"Content-Type":"application/json"})
    //         return res.end(JSON.stringify({error:"Character not found"}))
    //     }
        
    // }

    //codigo de maestro 

    // const {url} = req;

    // if(url.includes("rickandmorty/character/")){
    //     const id = Number(url.split("/").at(-1))
    //     const character = db.find((char)=> char.id === id);

    //     if(character){
    //         res.writeHead(200,{"Content-Type":"application/json"});
    //         return res.end(JSON.stringify(character))
    //     }else{
    //         res.writeHead(404,{"Content-Type":"application/json"})
    //         return res.end(JSON.stringify({error:"Character not found"}))// funciona para el cliente informar donde se encuentra el error
    //     }
    

    // }


    // res.writeHead(404);
    // res.end();


}).listen(PORT,()=>{
    console.log(`in port: http://localhost:${PORT}`);
})


*/
