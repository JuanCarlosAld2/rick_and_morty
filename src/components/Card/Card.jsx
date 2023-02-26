// import OnClose from "./Onclose";
import { Link } from "react-router-dom";
import styles from "./Card.module.css"       
                                        //props

export default function Card({onClose,name,species,gender,image,id}) {
   return (
      <div className={styles.container}>
         <div className={styles.buttonContainer}>
            <button onClick={onClose}>x</button>   
         </div>
         <div className={styles.dataContainer}>
            <Link to={`/detail/${id}`} >
               <h3>Nombre:{name}</h3>
            </Link>
            <h3>Especie: {species}</h3>
            <h3>Genero:{gender}</h3>
         </div>
         <img className={styles.image} src={image} alt={name} />
      </div>
   );
}
// alt={name} muestar el nombre de la targeta cuando la imagen no se muestra 