let favorites = [];

const postFav = (req,res) =>{
    const perso = req.body; //{id,name,status,species,gender,origin,image,onClose}
    if(Object.keys(perso).length === 0){
        res.status(404).json({message:"The require information is missing"})
    }else{
        favorites.push(perso)
        res.status(200).json(favorites)
    }
};

const deleteFav = (req,res) =>{
    const {id} = req.params;
    //console.log(id);
    if(!id){
        return res.status(404).json({message:"id not found"})
    }
    favorites = favorites.filter((perso)=> perso.id !== Number(id))
    res.status(200).json(favorites)


};


module.exports={
    postFav,
    deleteFav
}