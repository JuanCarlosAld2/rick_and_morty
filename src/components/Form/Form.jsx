import { useState } from "react"
import styles from "./Form.module.css"
import validation from "./validate.js"

export default function Form(props){
    const [userData,setUserData]=useState({
        username:"",
        password:"",
    })

    const[errors,setErrors]=useState({
        username:"",
        password:"",
    })

    const handleInputChange = (evento)=>{
        const{name,value}= evento.target;
        setUserData({
            ...userData,
            [name]:value
        })
        setErrors(validation({
            ...userData,
            [name]:value
        }))
    
    }; 
    const handleSubmit = (evento)=>{
        evento.preventDefault();
        props.login(userData);
    }
    return(
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <label>Username </label>
                <input type="text" name="username" value={userData.username} onChange={handleInputChange}/>
                <p className={styles.error}>{errors.username && errors.username}</p>
                <br/>
                <label>Password</label>
                <input type="text" name="password" value={userData.password}onChange={handleInputChange}/>
                <p className={styles.error}>{errors.password && errors.password}</p>
                <hr/>
                <button>Login</button>
                </form>
        </div>
     
    )
}