import Form from './components/form/Form';
import style from './App.module.css';
import Nav from './components/nav/Nav';
import PieCont from './components/pie/pie';
import Cards from './components/cards/Cards.jsx';
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Favorites from './components/favorites/Favorites';
import { useState, useEffect } from 'react';//import state
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

function App () {
  //hoock
  const location = useLocation();
  
  //states
  const [characters, setCharacters] = useState([]);//estate inicial es array
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const username = 'bfabilarosas@gmail.com';
  const password = '123abc';
  const login = (userData) => {//login
    if(userData.username === username && userData.password === password){
      setAccess(true);
      navigate('/home');
    }
  }
  useEffect(() => {//si no coinciden datos
    !access && navigate('/');
  }, [access])
  const onSearch = (character) => {//busqueda
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('ID no encontrado')
        }
      })
  }

  //close
  const onClose = (id) => {
    setCharacters(//setea
      characters.filter(character => character.id !== id)
    )
  }

  return (
    <div className={style.App} style={{ padding: '25px' }} >
      {location.pathname === '/' ? <Form login={login} /> : <Nav onSearch={onSearch} />}
      <Routes>
        <Route path='home' element={<Cards onClose={onClose} characters={characters} />} />
        <Route path='about' element={<About/>} />
        <Route path='detail/:detailId' element={<Detail/>} />
        <Route path='favorites' element={<Favorites/>}/>
      </Routes>
      <PieCont/>
    </div>
  )
}

export default App
