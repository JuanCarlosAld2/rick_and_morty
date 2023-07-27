const http = require('http');
const db = require('./utils/data.js')
const PORT=3001;

http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    const {url}= req ///rickandmorty/character/2
    const [,,,id]= url.split("/")//["","rickandmorty","character","2"]
    //console.log(url);
    if(url === `/rickandmorty/character/${id}`){
        const [personaje] = db.filter((per)=> per.id === Number(id))
        //console.log(personaje);
        res.writeHead(200,{"Content-Type":"application/json"})
        return res.end(JSON.stringify(personaje))
    }




    res.writeHead(404);
    res.end();
}).listen(PORT,()=>{
    console.log(`in port: http://localhost:${PORT}`);
})