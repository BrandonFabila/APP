import style from './searchBar.module.css'
import {useState} from 'react';

function SearchBar({onSearch}) {
   const [character, setCharacter] = useState('');//estado incial es un string vacio
   const handleChange = (event) => {//modifica estado, recive un evento  
      setCharacter(event.target.value)//setealo que escriva el usuario
   }

   return (
      <div className={style.container}>
         <input className={style.SearchBar} type='search' value={character} onChange={handleChange} ></input>
         <button className={style.button} onClick={() => onSearch(character)} > Search </button>
      </div>
   );
}

export default SearchBar;