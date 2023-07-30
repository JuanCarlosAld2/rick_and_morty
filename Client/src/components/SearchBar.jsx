import React,{useState} from "react";
import style from "../styles/SearchBar.module.css"

export default function SearchBar({onSearch}) {

   const[id,setID]=useState("")

   const handleChange = (e) => {
      setID(e.target.value)
   }
   const handeleRandom = ()=>{
      let rdNumber =  Math.floor((Math.random() * (826 - 1 + 1)) + 1);
      onSearch(rdNumber)
  }

  const hanleOnSearch=(e)=>{
   if(!isNaN(id)){
      onSearch(id)
      setID("")
   }else{
      alert("No es un numero")
      setID("")
   }
    
     
  } 
   return (
      <div className={style.search}>
         <input type='search' name="id" id="id" value={id} onChange={handleChange} placeholder="id 1-826" />
         <button onClick={hanleOnSearch}>Agregar</button> 
         <button onClick={handeleRandom}>Random</button>
      </div>
   );
}
