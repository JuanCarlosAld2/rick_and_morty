const {Router} = require('express');
const {getCharById} = require('../controllers/getCharById');
const { login } = require('../controllers/login');
const {postFav} = require('../controllers/handleFavorites')
const {deleteFav} = require('../controllers/handleFavorites')
const {postUSer} = require('../controllers/postUser')


const mainRouter = Router();
mainRouter.get("/character/:id",getCharById)
mainRouter.get("/login",login)//modificado
mainRouter.post("/login",postUSer)//apenas 
mainRouter.post("/fav",postFav)
mainRouter.delete("/fav/:id",deleteFav)



module.exports= mainRouter