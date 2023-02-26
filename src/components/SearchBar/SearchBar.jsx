import { useState } from "react";
import styles from "./SearchBar.module.css"
export default function SearchBar({onSearch}) {
   
   const [character,setCharacter]=useState("");
                           //valor del input (lo que ingresa el usuario)
   const handleChange= (evento)=>{
      const {value} = evento.target
      setCharacter(value)
   }
   return (
      <div  className={styles.container}>
         <input  type='search' value={character} onChange={handleChange}/>
         <button onClick={()=>onSearch(character)}>Agregar</button> 
      </div>
   );
}
