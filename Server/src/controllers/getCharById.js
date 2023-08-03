const axios = require('axios');

require('dotenv').config()//process.env
const URL= process.env.API_URL



const getCharById = (req,res)=>{
    const {id}= req.params //string
    axios(`${URL}${id}`)
    .then(({data})=>{
        if(data){
            const personaje= {
                id:data.id,
                name:data.name,
                gender:data.gender,
                species:data.species,
                origin:data.origin?.name,
                image: data.image,
                status:data.status
            }
            return res.status(200).json(personaje)
        }else{
            res.status(404).json({message:"Not fount."})
        }
    })
    .catch((error)=>{
        res.status(500).json({message:error}) //error que se manda al front app (onsearch)
    })


}

module.exports={
    getCharById
}





































/*
controlador para metod http
const axios = require('axios')
 const getCharById = (res,id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({data})=>{
        if(data){
            const personaje= {
                id:id,
                name:data.name,
                gender:data.gender,
                species:data.species,
                origin:data.origin?.name,
                image: data.image,
                status:data.status
            }
            console.log(personaje);
            res.writeHead(200,{"Content-Type":"application/json"})
            return res.end(JSON.stringify(personaje))
        }
        
    })
    .catch((error)=>{
        res.writeHead(500,{"Content-Type":"application/json"})
        return res.end(JSON.stringify({message:error}))
    })
    
}



module.exports ={
    getCharById
}


*/