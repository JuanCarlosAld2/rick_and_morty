import React, { useState } from "react";
import { validateEmail } from "./validations";
import { validatepassword } from "./validations";

export default function Login({login}){

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
        login(userData)
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <input 
                    type="text" 
                    placeholder="Email"
                    name="email"
                    value={userData.email}
                    onChange={handleEmail}
                />
                <th/>
                <span>{errors.email}</span>
            </div> 
            <div>
                <input 
                    type="text" 
                    placeholder="Password"
                    name="password"
                    value={userData.password}
                    onChange={handlePass}
            
                />
                <th/>
                <span>{errors.password}</span>
            </div>
            
            <button type="submit">submit</button>
    
            
        </form>
    );  
}