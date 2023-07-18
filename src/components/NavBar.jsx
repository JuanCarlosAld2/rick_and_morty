import React from 'react';
import SearchBar from './SearchBar';
import style from '../styles/NavBar.module.css'
import {Link} from 'react-router-dom'
import ho from '../assets/iconos/homa.png'
import inf from '../assets/iconos/info.png'


export default function NavBar({onSearch}){

    return(
        <div className={style.nav}>
            <div className={style.searchContainer}> {/* Contenedor del SearchBar */}
                <SearchBar onSearch={onSearch} />
            </div>
            <div>
                <Link to='/home'>
                    <button className={style.button}>
                        <img src={ho} alt="home" />
                    </button>
                </Link>
                <Link to='/about'>
                    <button className={style.button}>
                        <img src={inf} alt="about" />
                    </button>
                </Link> 

            </div>
        </div>
    )
}