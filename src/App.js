import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import NavBar from './components/NavBar/NavBar'

function App () {
  const [characters,setCharacters] = useState([])

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }
const onClose = (id) =>{
  setCharacters(characters.filter((char)=> char.id !== id))
}
  return (
    <div className='App' style={{ padding: '25px' }}>
       <div>
        <NavBar onSearch={onSearch}/>
      </div>
    <hr />
      <div>
        <Cards
        characters={characters}
        onClose={onClose}
        />
      </div>
      <hr />
    </div>
  );
}

export default App
