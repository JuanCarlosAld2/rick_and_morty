import React,{useState} from "react";
import style from "../styles/SearchBar.module.css"

export default function SearchBar({onSearch}) {

   const[id,setID]=useState("")

   const handleChange = (e) => {
      setID(e.target.name= e.target.value)
   }
   const handeleRandom = ()=>{
      let rdNumber =  Math.floor((Math.random() * (826 - 1 + 1)) + 1);
      onSearch(rdNumber)
  }
   return (
      <div className={style.search}>
         <input type='search' name="id" id="id" value={id} onChange={handleChange} />
         <button onClick={()=>onSearch(id)}>Agregar</button> 
         <button onClick={handeleRandom}>Random</button>
      </div>
   );
}
