import Card from './Card';
import React from 'react';
import style from '../styles/Cards.module.css'

export default function Cards({characters,onClose}) {
   return <div className={style.cards_container}>
            {  characters &&
               characters.map((el)=>(
               <Card 
               key={el.id} // solo sirve para react !== de id 
               id={el.id}
               name={el.name} 
               status={el.status}
               species={el.species} 
               gender={el.gender} 
               origin={el.origin}// modificacion en el servidor 3001 (controllers)
               image={el.image}
               onClose={onClose} 
               /> 
               
               
            ))}

            
            
         </div>;
}



// name: nombre.
// status: status.
// species: especie.
// gender: género.
// origin: origen (ten en cuenta que el nombre del origen viene dentro de otra propiedad llamada name).
// image: imagen.