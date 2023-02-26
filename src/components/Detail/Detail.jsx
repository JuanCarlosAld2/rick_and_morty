import {useState,useEffect} from "react";
import {useParams} from "react-router-dom" 
import { Link } from "react-router-dom";
const Detail=()=>{
    const [character,setCharacter] = useState({})
    const {detailId}=useParams() //detailId proviene de app  <Route path='/detail/:detailId'
    // useEffect emula los estado de vida 
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

    return(
        <div>
            <button><Link to="/home">home</Link></button>
            <h2>{character?.name}</h2>
            <p>{character?.status}</p>
            <p>{character?.species}</p>
            <p>{character?.gender}</p>
            <p>{character?.origin?.name}</p>
            <img src={character?.image} alt={character.name} />

        </div>
    )
}
export default Detail;
// los signos de interrogacion al final de character? es un codicional que pregunta si existe sirve para no romper la SAP sigle apliqueishon por los milisegundos qu etarda en pedir la informacion  