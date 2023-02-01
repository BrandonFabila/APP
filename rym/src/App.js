import './App.css'
import Cards from './components/cards/Cards.jsx'
import characters from './data.js'
import PieCont from './components/pie/pie'
import Nav from './components/nav/Nav'

function App () {
  return (
    <div className='App' style={{ padding: '25px' }} >

      <Nav/>

      <div>
        <Cards
          characters={characters}
        />
      </div>

      <PieCont/>

    </div>
  )
}

export default App
