let favorites = [];

const postFav = (req,res) =>{
    const perso = req.body; //{id,name,status,species,gender,origin,image,onClose}
    if(Object.keys(perso).length === 0){
        res.status(404).json({message:"no se creo personaje"})
    }else{
        favorites.push(perso)
        res.status(200).json(favorites)
    }
};

const deleteFav = (req,res) =>{
    const {id} = req.params;
    //console.log(id);
     favorites = favorites.filter((perso)=> Number(perso.id) !== Number(id))
     console.log(favorites);
    res.status(200).json(favorites)


};


module.exports={
    postFav,
    deleteFav
}