import React,{useState} from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import NavBar from './components/NavBar';
import axios from "axios";
import {Routes,Route,useLocation} from 'react-router-dom'
import About from './components/About';
import Detail from './components/Detail';
import Error from './components/Error';
import Login from './components/Login';

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
   const rt = {
      login:"/login",
      home:"/home",
      about:"/about",
      detail:"/detail/:id"
   }

   const {pathname}= useLocation();
      let [,ruta]= pathname.split("/");

    
   return (
      <div className='App'>
         <NavBar onSearch={onSearch}/>
         
         
         {
           rt.hasOwnProperty(ruta) ?null:<Error/>
           
         }
         <Routes>
            
            <Route path={rt.login} element={<Login/>}></Route>
            <Route path={rt.home} element={<Cards characters={characters} onClose={onClose} />}></Route>
            <Route path={rt.about} element={<About/>}></Route>
            <Route path={rt.detail} element={<Detail/>}></Route>

         </Routes>
         
       
      </div>
   );
}

export default App;
