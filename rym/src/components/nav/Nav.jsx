import style from './nav.module.css'
import SearchBar from '../searchBar/SearchBar.jsx'

function Nav({ onSearch }) {
    return (
        <nav className={style.Cont} >
            <h1>Rick and Morty</h1>
            <SearchBar
              onSearch={onSearch}
            />
        </nav>
    )
}

export default Nav