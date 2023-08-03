import React,{useState,useEffect} from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import NavBar from './components/NavBar';
import axios from "axios";
import {Routes,Route,useLocation,useNavigate} from 'react-router-dom'
import About from './components/About';
import Detail from './components/Detail';
import Error from './components/Error';
import Login from './components/Login';
import Favorites from './components/Favorites';
import {removeFav} from './redux/actions'
import { useDispatch } from 'react-redux';


function App() {

   const [characters, setCharacters]= useState([]);
   const [access,setAccess] =useState(false);
   const {pathname}= useLocation();
      //let [,ruta]= pathname.split("/");
   const navigate = useNavigate();
   const EMAIL = 'juan@gmail.com';
   const PASSWORD = 'juan123';
   const dispatch = useDispatch();
  

   
   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }else{
         alert("Datos incorrectos")
      }
   }
   function logout(){
      setAccess(false)
      setCharacters([])
      
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);// si falla quitar navigate (duda)

   function onSearch(id) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
         .then(({ data }) => {
            //console.log(data);
            if (Number(data.id)) {
               if (!characters.some((e) => e.id === data.id)) {
                  setCharacters((oldChars) => [...oldChars, data]);
               }
            }
         })
         .catch((error) => {
            //console.log(error);
            console.log(error.response.data.message.message);// proviene de server (getCharByID)
            //Request failed with status code 404
            window.alert('¡No hay personajes con este ID!');
            //window.alert(error.response.data.error); // viene del servidor 
           // console.error(error); // Puedes mostrar información detallada del error en la consola para ayudar en el diagnóstico.
         });
   }
   

   const onClose = (id) =>{
      const deleteCharacters = characters.filter((e)=> e.id !== Number(id))
      setCharacters(deleteCharacters)
      dispatch(removeFav(id))
     
   }
   const rt = {
      login:"/",
      home:"/home",
      about:"/about",
      detail:"/detail/:id",
      favorites:"/favorites"
   }

   

    
   return (
      <div className='App'>
         {pathname === rt.login ? null : <NavBar onSearch={onSearch} logout={logout}/>}
         <Routes>
            <Route path={rt.login} element={<Login login={login}/>}></Route>
            <Route path={rt.home} element={<Cards characters={characters} onClose={onClose} />}></Route>
            <Route path={rt.about} element={<About/>}></Route>
            <Route path={rt.detail} element={<Detail/>}></Route>
            <Route path={rt.favorites} element={<Favorites />}></Route>
            <Route path='*' element={<Error/>}/>
         </Routes>
         
       
      </div>
   );
}

export default App;
