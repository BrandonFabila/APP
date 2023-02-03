import style from './App.module.css';
import Nav from './components/nav/Nav';
import PieCont from './components/pie/pie';
import Cards from './components/cards/Cards.jsx';
import About from './components/about/About';
import Detail from './components/detail/Detail';
import { useState } from 'react';//import state
import { Routes, Route } from 'react-router-dom';

function App () {
  //states
  const [characters, setCharacters] = useState([]);//estate inicial es array
  const onSearch = (character) => {
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
  const onClose = (id) => {
    setCharacters(//setea
      characters.filter(character => character.id !== id)
    )
  }

  return (
    <div className={style.App} style={{ padding: '25px' }} >
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path='home' element={<Cards onClose={onClose} characters={characters} />} />
        <Route path='about' element={<About/>} />
        <Route path='detail/:detailId' element={<Detail/>} />
      </Routes>
      <PieCont/>
    </div>
  )
}

export default App
