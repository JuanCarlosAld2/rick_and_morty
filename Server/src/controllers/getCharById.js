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