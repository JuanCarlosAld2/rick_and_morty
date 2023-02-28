import { useEffect, useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import NavBar from './components/NavBar/NavBar'
import {Routes,Route, useLocation, useNavigate} from "react-router-dom"
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form.jsx'

function App () {
  const [characters,setCharacters] = useState([]);
  const [access, setAccess]=useState(false);
  const username="juan@gmail.com";
  const password="123456";
  const navigate =useNavigate();
  function login(userData){
    if(userData.password === password && userData.username === username){
      setAccess(true);
      navigate('/home')
    }
  }
  useEffect(()=>{
    !access && navigate('/');
  },[access])
  
  function onSearch(character) { // <= character viene del componente hijo SearchBar 
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
    setCharacters(
      //...characters no se utiliza ya que filter retorna un nuevo array
      characters.filter((char)=> char.id !== id)
    )
  }
    const location= useLocation();
  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname !== "/" && <NavBar onSearch={onSearch}/>}  
      <Routes>
        <Route exact path='/' element={<Form login={login}/>}/>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path="/about" element={<About />}/>
        <Route path='/detail/:detailId' element={<Detail />}/>
      </Routes>
    </div>
  );
}

export default App
