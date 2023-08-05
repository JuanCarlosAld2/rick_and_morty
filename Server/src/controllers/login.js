require('dotenv').config()
const EMAIL = process.env.EMAIL
const PASSWORD= process.env.PASSWORD


const login = (req,res) => {
    //try { // desomentar cuando se use una base de datos 
        const { email,password} = req.query
        if(!email || !password)return res.status(400).json({message:"Email or password is missing" })
    
        let flag = EMAIL === email && PASSWORD === password;
        if(flag)return res.status(200).json({access:true})
        res.status(200).json({access:false}) // retorno un 200 para poder hacer algo con la respuesta de lado de app client
    //} catch (error) {
        //res.status(500).json({error:error.message})
    //}
    

}

module.exports= {
    login
}