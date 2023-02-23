import styles from "./SearchBar.module.css"
export default function SearchBar(props) {
   return (
      <div className={styles.container}>
         <input type='search' />
      <button onClick={()=>props.onSearch(props.id)}>Agregar</button> 
      </div>
   );
}
