import style from "./card.module.css";
import { Link } from 'react-router-dom';

export default function Card({onClose, name, species, image, id}) {
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
         </div>
         
      </div>
   );
}
