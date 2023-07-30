import React from "react";

//import Card from "./Card";
import style from "../styles/Detail.module.css"
import useCharacter from "./hooks/useCharacter";


export default function Detail(){

    const character = useCharacter(); // modificacion de video 13 hooks jorgue vega 36a

    return (
        <table className={style.table} key={character.id}>
            <tbody>
                
                <tr>
                    <td  rowSpan="6" className={style.td}>
                        <img src={character.image} alt={character.name} className={style.img} />
                    </td>
                    <td className={style.td}>ID:</td>
                    <td className={style.td}>{character.id}</td>
                </tr>
                <tr>
                    <td className={style.td}>Nombre:</td>
                    <td className={style.td}>{character.name}</td>
                </tr>
                <tr>
                    <td className={style.td}>Estado:</td>
                    <td className={style.td}>{character.status}</td>
                </tr>
                <tr>
                    <td className={style.td}>Especie:</td>
                    <td className={style.td}>{character.species}</td>
                </tr>
                <tr>
                    <td className={style.td}>Género:</td>
                    <td className={style.td}>{character.gender}</td>
                </tr>
                <tr>
                    <td className={style.td}>Origen:</td>
                    <td className={style.td}>{character.origin}</td>
                </tr>
                
            </tbody>
        </table>
      );
      
      
      

}
/*
     <h2>{character.id}</h2>
          <h2>{character.name}</h2>
          <h2>{character.status}</h2>
          <h2>{character.species}</h2>
          <h2>{character.gender}</h2>
          <h2>{character.origin?.name}</h2>
          <img src={character.image} alt={character.name} />

           <Card
               key={character.id} // solo sirve para react !== de id 
               id={character.id}
               name={character.name} 
               status={character.status}
               species={character.species} 
               gender={character.gender} 
               origin={character.origin?.name}
               image={character.image}
            />
*/