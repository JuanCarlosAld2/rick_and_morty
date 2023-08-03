const {Router} = require('express');
const {getCharById} = require('../controllers/getCharById');
const { login } = require('../controllers/login');
const {postFav} = require('../controllers/handleFavorites')
const {deleteFav} = require('../controllers/handleFavorites')


const mainRouter = Router();

mainRouter.get("/login",login)
mainRouter.get("/character/:id",getCharById)
mainRouter.post("/fav",postFav)
mainRouter.delete("/fav/:id",deleteFav)



module.exports= mainRouter