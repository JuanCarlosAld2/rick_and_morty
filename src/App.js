import React,{useState} from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import NavBar from './components/NavBar';
import axios from "axios";
import {Routes,Route} from 'react-router-dom'
import About from './components/About';
import Detail from './components/Detail';

function App() {

   const [characters, setCharacters]= useState([]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {

         if (data.id) {
            if(!characters.some((e)=> e.id === data.id)){
               setCharacters((oldChars) => [...oldChars, data]);
            }
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) =>{
      const deleteCharacters = characters.filter((e)=> e.id !== Number(id))
      setCharacters(deleteCharacters)
   }


   return (
      <div className='App'>
         <NavBar onSearch={onSearch}/>
         

         <Routes>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/detail/:id' element={<Detail/>}></Route>

         </Routes>
         
       
      </div>
   );
}

export default App;
