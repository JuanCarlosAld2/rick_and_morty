import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import {removeFav } from '../redux/actions'
import { useDispatch } from 'react-redux';
import { filterCards,orderCards,reset } from "../redux/actions";
import style from "../styles/Favorites.module.css"

const Favorites = () =>{

    const [aux, setAux]= useState(false);
    const myFavorites = useSelector((state)=>state.myFavorites);// concexiona al stateglobal
    const dispatch = useDispatch();

    const onClose=(id)=>{
        dispatch(removeFav(id))
    } 

    const handleOrder = (e) =>{
        dispatch(orderCards(e.target.value))
        setAux(true)
    }

    const handleFilter = (e) =>{
        dispatch(filterCards(e.target.value))
    }

    const handleReset = () =>{
        dispatch(reset())
    }

    return(
        <div>
            <select name="order" onChange={handleOrder} defaultValue={"DEFAULT"} className={style.select}>
                <option value="DEFAULT" disabled>Select Order</option>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select name="filter" onChange={handleFilter} defaultValue={"DEFAULT"}>
                <option value="DEFAULT" disabled>Select filter</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
            <button onClick={handleReset} className={style.button}>Reset</button>

            {   myFavorites &&
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

/*
nota 
defaultValue={"orden"}--> pemite definir como elemento inicial
disabled --> para que no sea seleccionable


*/