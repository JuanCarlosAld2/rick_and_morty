import styles from "./NavBar.module.css"
import SearchBar from "../SearchBar/SearchBar.jsx"
import { Link } from "react-router-dom";

export default function NavBar({onSearch}) {
   return (
      <nav 
         className={styles.container}
      >
        
        <button>
         <Link to="/about">About</Link>
         </button>
         <button>
         <Link to="home">Home</Link>
         </button>   
         <SearchBar
          onSearch={onSearch}
         />
       



      </nav>
   );
}
