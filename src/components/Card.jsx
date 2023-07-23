import React, { useState,useEffect } from "react";
import style from '../styles/Card.module.css'
import { Link, useLocation} from "react-router-dom";
import {addFav,removeFav} from '../redux/actions'
import { useDispatch, useSelector } from "react-redux";


export default function Card(props) {
   
   const {id,name,status,species,gender,origin,image,onClose} = props;

   const [isFav,setIsFav]= useState(false);

   const myFavorites = useSelector((state)=>state.myFavorites);// concexiona al stateglobal

   const dispatch =useDispatch()
   const {pathname}= useLocation();

   const handleFavorite = () =>{
      if(isFav){
         setIsFav(false)
         dispatch(removeFav(id))
      }
      else{
         setIsFav(true)
         dispatch(addFav(props))
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div key={id} className={style.card}>
           {
            pathname === "/home" ? (
               isFav ? (
                  <button onClick={handleFavorite}>❤️</button>
               ): (
                     <button onClick={handleFavorite}>🤍</button>
                  )
            ) : null
         }
         <button onClick={()=>onClose(id) }>x</button>
         <h2>{name}</h2>
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

/*
<h2>{status}</h2>
<h2>{species}</h2>
<h2>{gender}</h2>
<h2>{origin}</h2> 

*/