// import OnClose from "./Onclose";
import styles from "./Card.module.css"
export default function Card(props) {
   return (
      <div className={styles.container}>
         <div className={styles.buttonContainer}>
            <button onClick={props.onClose}>x</button>
         </div>
         <div className={styles.dataContainer}>
            <h3>Nombre:{props.name}</h3>
            <h3>Especie: {props.species}</h3>
            <h3>Genero:{props.gender}</h3>
         </div>
         <img className={styles.image} src={props.image} alt="rickandmorty" />
      </div>
   );
}