import style from './nav.module.css';
import SearchBar from '../searchBar/SearchBar.jsx';
import { Link } from 'react-router-dom';

function Nav({ onSearch }) {
    return (
        <nav className={style.Cont} >
            <h1 className={style.Letra} >Rick and Morty</h1>
            <Link to='about' >About</Link>
            <Link to='home' >Home</Link>
            <SearchBar onSearch={onSearch} />
        </nav>
    )
}

export default Nav