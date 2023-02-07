import style from './nav.module.css';
import SearchBar from '../searchBar/SearchBar.jsx';
import { Link } from 'react-router-dom';

function Nav({ onSearch }) {
    return (
        <nav className={style.Cont} >
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1920px-Rick_and_Morty.svg.png' alt="Logo" className={style.logo} />
            <button className={style.button} >
                <Link to='about' className={style.link} >About</Link>
            </button>

            <button className={style.button} >
                <Link to='home' className={style.link} >Home</Link>
            </button>      

            <button className={style.button} >
                <Link to='/' className={style.link} >Log Out</Link>
            </button>         
            
            <SearchBar onSearch={onSearch} />
               
        </nav>
    )
}

export default Nav