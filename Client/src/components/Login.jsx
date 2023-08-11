import React, { useState } from "react";
import { validateEmail } from "./validations";
import { validatepassword } from "./validations";

export default function Login({login}){
    const errorStyle = {
        color: "red",
    
      };
    const [userData,setUserData]=useState({
        email:"",
        password:""
    });
    
    const[errors,setErrors]=useState({  
        email:"",
        password:""
    })

    const handleEmail = (e) => {
        const property = e.target.name;
        const value = e.target.value;
        setUserData({...userData,[property]:value})
        validateEmail({...userData,[property]:value}, setErrors,errors)
    }
    const handlePass = (e) => {
        const property = e.target.name;
        const value = e.target.value;
        setUserData({...userData,[property]:value})
        validatepassword({...userData,[property]:value}, setErrors,errors)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!errors.email && !errors.password ){
            setUserData({
                email:"",
                password:""
            })
            setErrors({  
                email:"",
                password:""
            })
            login(userData)
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        type="text" 
                        placeholder="Email"
                        name="email"
                        value={userData.email}
                        onChange={handleEmail}
                    />
                    <br/>
                    <span style={errorStyle}>{errors.email}</span>
                </div> 
                <div>
                    <input 
                        type="text" 
                        placeholder="Password"
                        name="password"
                        value={userData.password}
                        onChange={handlePass}
                     />
                    <br/>
                    <span style={errorStyle}>{errors.password}</span>
                </div>
                <div>
                    {
                        userData.email && userData.password ? <button type="submit">Acceder</button>:null 
                    }
                </div>

            </form>
        </div>
       
    );  
}