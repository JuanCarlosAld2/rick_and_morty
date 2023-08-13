// require('dotenv').config()
// const EMAIL = process.env.EMAIL
// const PASSWORD= process.env.PASSWORD
const {User} = require('../db');



const login = async (req,res) => {
    const { email,password} = req.query
    try {
        if(!email || !password) return res.status(400).json({message:"Email or password is missing"})

        const userFound =await User.findOne({
            where:{
                email
            }
        })
        if(!userFound){
           return res.status(404).json({message:"User not found"})
        }
        if(userFound.password === password){
            return res.status(200).json({access:true})
        }else{
            res.status(403).json({message:"Incorrect password"})
        }

    } catch (error) {
        res.status(500).json({message:error.message})
    }
     

}

module.exports= {
    login
}


/*
const { email,password} = req.query
        if(!email)return res.status(400).json({message:"Email or password is missing" })
        const usuario= await User.find({
            where:{
                email,

            }
        })
        res.json(usuario)
*/


/*
 let flag = EMAIL === email && PASSWORD === password;
        if(flag)return res.status(200).json({access:true})
        res.status(200).json({access:false}) // retorno un 200 para poder hacer algo con la respuesta de lado de app client
    //} catch (error) {
        //res.status(500).json({error:error.message})
    //}
    

*/