import style from './searchBar.module.css'
import {useState} from 'react';

function SearchBar({onSearch}) {
   const [character, setCharacter] = useState('')
   const handleChange = (event) => {//modifica estado    
      setCharacter(event.target.value)
   }

   return (
      <div className={style.container}>
         <input className={style.SearchBar} type='search' value={character} onChange={handleChange} />
         <button className={style.button} onClick={() => onSearch(character)}>Search</button>
      </div>
   );
}

export default SearchBar;