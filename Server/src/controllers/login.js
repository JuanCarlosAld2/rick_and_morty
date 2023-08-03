const users = require('../utils/users')
const login = (req,res) => {
const { email,password} = req.query
    
        let flag = users.some((user)=> user.email === email && user.password === password);
    if(flag)return res.status(200).json({access:true})
    res.status(200).json({access:false})

}

module.exports= {
    login
}