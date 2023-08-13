const {User} = require('../db');


const postUSer = async(req,res) =>{
    const {email, password} = req.body;
    try {
        if(!email|| !password){
            return res.status(400).send('Faltan datos')
        }
        const [user, create]= await User.findOrCreate({
            where:{email,password}
        })
        if(create){
            res.status(200).send("Usuario creado")
        }else{
            res.status(200).send("Usuario ya existe")
        }

    } catch (error) {
        res.status(500).json({message:error.message})
    }
   

}

module.exports={
    postUSer
}