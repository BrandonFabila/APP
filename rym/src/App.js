import './App.css'
import Card from './components/card/Card.jsx'
import Cards from './components/cards/Cards.jsx'
import characters, { Rick } from './data.js'
import PieCont from './components/pie/pie'
import Nav from './components/nav/Nav'

function App () {
  return (
    <div className='App' style={{ padding: '25px' }} >

      <Nav/>

      <div>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div>

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
