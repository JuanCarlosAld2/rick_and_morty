let favorites = [];
const {Favorite} = require('../db');

const postFav = async (req,res) =>{
    const {id,name,status,species,gender,origin,image} = req.body; //{id,name,status,species,gender,origin,image}
    try {
        if(!id || !name || !status || !species || !gender || !origin || !image){//Object.keys(perso).length === 0
            res.status(401).json({message:"The require information is missing"})
        }else{
             await Favorite.findOrCreate({
            where:{id},
            defaults: {
                name,status,species,gender,origin,image
              }
        })
        const FavChar = await Favorite.findAll()
        res.status(200).json(FavChar)
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
    
    
};

const deleteFav = async(req,res) =>{
    const {id} = req.params;
    try {
        if(!id){
            return res.status(404).json({message:"id not found"})
        }
            await Favorite.destroy({
                where:{
                    id
                }
            })
        const newArr= await Favorite.findAll()
        res.status(200).json(newArr)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
};


module.exports={
    postFav,
    deleteFav
}

/*
 favorites = favorites.filter((perso)=> perso.id !== Number(id))
    res.status(200).json(favorites)


*/