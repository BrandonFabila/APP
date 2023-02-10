import { useSelector } from "react-redux";
import style from '../card/card.module.css'
import { Link } from "react-router-dom";

const Favorites = () => {
    const {myFavorites} = useSelector(state => state)
    return(
        <div>
            {
            myFavorites.map((character) => {
                return(
            <div className={style.container} >
                <img  src={character.image} alt={character.name} className={style.image}/>
                <div className={style.info}>
                   <Link to={`/detail/${character.id}`} >
                      <h2 className={style.parametros} >{character.name}</h2>
                   </Link>
                </div>
            </div>
                )
            })
            }
        </div>
    )
}

export default Favorites;