import React from "react";
import style from '../styles/About.module.css'
export default function About(){
    return(
        <div className={style.div}>
        <table className={style.table}>
            <thead className={`${style.thead} ${style.center}`}>
                <tr>
                    <th colSpan="3"><h2>MY PERfil</h2></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> 
                        <a href="https://www.ejemplo.com" target="_blank" rel="noopener noreferrer">
                            <button className={style.button}>MI GITHUB</button>
                        </a>
                    </td>
                    <td>
                        <a href="https://www.ejemplo.com" target="_blank" rel="noopener noreferrer">
                            <button className={style.button}>MI lINKENLIN</button>
                        </a>
                    </td>
                    <td>
                        <a href="https://www.ejemplo.com" target="_blank" rel="noopener noreferrer">
                            <button className={style.button}>MI CANAL</button>
                         </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    
    
    );
}