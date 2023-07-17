import React from "react";
import style from '../styles/Card.module.css'
import { Link } from "react-router-dom";


export default function Card({id,name,status,species,gender,origin,image,onClose}) {
   return (
      <div key={id} className={style.card}>

         <button onClick={()=>onClose(id)}>x</button>
         <h2>{name}</h2>
         {/* <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2> */}
         <Link to={`/detail/${id}`}>
            <img src={image} alt={name} className={style.image}/>
         </Link>
         
          
      </div>
   );
}

// name: nombre.
// status: status.
// species: especie.
// gender: género.
// origin: origen (ten en cuenta que el nombre del origen viene dentro de otra propiedad llamada name).
// image: imagen.