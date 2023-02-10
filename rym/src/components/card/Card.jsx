import style from "./card.module.css";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addFavorite, deleteFavorite } from "../../redux/actions";

export default function Card({onClose, name, species, image, id}) {
   const dispatch = useDispatch();
   const [isFav, setIsFav] = useState(false);//state initial
   const myFavorites = useSelector(state => state.myFavorites);

   const handleFavorite = () => {
      if (isFav === true){
         setIsFav(false);
         dispatch(deleteFavorite(id));
      }else{
         setIsFav(true);
         dispatch(addFavorite({onClose, name, species, image, id}))
      }
   };
   
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if(fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.container} >
         <div className={style.containerbutton}>
            <button onClick={onClose} className={style.close} >X</button>
         </div>

         <img  src={image} alt={name} className={style.image}/>

         <div className={style.info}>
            <Link to={`/detail/${id}`} >
               <h2 className={style.parametros} >{name}</h2>
            </Link>
            <div>
            {
               isFav ? (//pregunta
                  <button onClick={handleFavorite} className={style.fav} >❤️</button>
               ) : (
                  <button onClick={handleFavorite} className={style.fav} >🤍</button>
               )
            }
            </div>
         </div>

         
         
      </div>
   );
}
