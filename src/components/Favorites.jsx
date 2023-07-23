import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import {removeFav } from '../redux/actions'
import { useDispatch } from 'react-redux';

const Favorites = () =>{
    const myFavorites = useSelector((state)=>state.myFavorites);// concexiona al stateglobal
    const dispatch = useDispatch();

    const onClose=(id)=>{
        dispatch(removeFav(id))
    } 

    return(
        <div>
            {
                myFavorites.map((el)=>(
                    <Card
                    key={el.id}
                    id={el.id}
                    name={el.name}
                    image={el.image}
                    onClose={onClose}
                    
                    />
                ))
            }
        </div>
    )
}

export default Favorites;