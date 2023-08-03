require('dotenv').config()
const EMAIL = process.env.EMAIL
const PASSWORD= process.env.PASSWORD


const login = (req,res) => {
const { email,password} = req.query
    if(!email || !password){
        res.status(500).json({message: "there isn`t apassword or email "})
    }
    let flag = EMAIL === email && PASSWORD === password;
    if(flag)return res.status(200).json({access:true})
    res.status(200).json({access:false})

}

module.exports= {
    login
}