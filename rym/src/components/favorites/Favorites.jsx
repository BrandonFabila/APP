import { useSelector, useDispatch } from "react-redux";
import style from '../card/card.module.css'
import { Link } from "react-router-dom";
import { orderCards, filterCards } from "../../redux/actions";

const Favorites = () => {
    const {myFavorites} = useSelector(state => state);
    const dispatch = useDispatch()
    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }
    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }
    return(
        <div>
            <div>
                <select onChange={handleOrder}>
                    <option value="order" disabled='disabled' >Order by</option>
                    <option value="Ascending">Ascending</option>
                    <option value="Descending">Descending</option>

                </select>
                <select onChange={handleFilter}>
                    <option value="filter" disabled='disabled' >Filter by</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="Unknown">Unknown</option>
                </select>
            </div>
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