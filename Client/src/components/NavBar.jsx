import React from 'react';
import SearchBar from './SearchBar';
import style from '../styles/NavBar.module.css'
import {Link} from 'react-router-dom'
import ho from '../assets/iconos/homa.png'
import inf from '../assets/iconos/info.png'


export default function NavBar({onSearch,logout}){

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
            </div>
            <div>
                <Link to='/about'>
                    <button className={style.button}>
                        <img src={inf} alt="about" />
                    </button>
                </Link> 
            </div>
            <div>
                <button onClick={logout} className={style.buton2}>logout</button>
            </div>
            <div>
                <Link to="/favorites">
                    <button className={style.buton2}>Favorites</button>
                </Link> 
            </div>
        </div>
    )
}