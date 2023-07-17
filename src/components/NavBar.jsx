import React from 'react';
import SearchBar from './SearchBar';
import style from '../styles/NavBar.module.css'
import {Link} from 'react-router-dom'

export default function NavBar({onSearch}){

    return(
        <div className={style.nav}>
            <SearchBar onSearch={onSearch}/>
            <Link to='/about'>
                <button>About</button>
            </Link>
            <Link to='/home'>
                <button>Home</button>
            </Link>
            
            
        </div>
    )

}