let favorites = [];

const postFav = (req,res) =>{
    const perso = req.body; //{ name: 'juan', ss: 'pp' }
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
     favorites = favorites.filter((perso)=> perso.id !== Number(id))

    if(favorites.length === 0) return res.status(404).json({message:"No existen personajes"});

    res.status(200).json(favorites)


};


module.exports={
    postFav,
    deleteFav
}