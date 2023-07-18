import React from "react";
import style from '../styles/About.module.css'
import git from '../assets/iconos/github.png'//icono
import nk from '../assets/iconos/linkedin.png'//icono
import you from '../assets/iconos/youtube.png'//icono

export default function About(){
    return(
        <div className={style.div}>
            <table className={style.table}>
                <thead className={`${style.thead} ${style.center}`}>
                    <tr>
                        <th colSpan="3">
                            <h2>MY PERFIL</h2>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> 
                            <a href="https://www.ejemplo.com" target="_blank" rel="noopener noreferrer">
                                <button className={style.button}>
                                    <img src={git} alt="git" />
                                </button>
                            </a>
                        </td>
                        <td>
                            <a href="https://www.ejemplo.com" target="_blank" rel="noopener noreferrer">
                                <button className={style.button}>
                                    <img src={nk} alt="git"/>
                                </button>
                            </a>
                        </td>
                        <td>
                            <a href="https://www.ejemplo.com" target="_blank" rel="noopener noreferrer">
                                <button className={style.button}>
                                    <img src={you} alt="git"/>
                                </button>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>  
    );
}