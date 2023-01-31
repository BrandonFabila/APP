import style from "./card.module.css"

export default function Card({name, species, gender, image, onClose}) {
   return (
      <div className={style.container} >
         <div className={style.containerbutton}>
            <button onClick={onClose} className={style.close} >X</button>
         </div>

         <div className={style.info}>
            <h2 className={style.parametros} >{name}</h2>
            <h2 className={style.parametros} >{gender}</h2>
         </div>

         <div className={style.continf} >
            <img  src={image} alt={name} className={style.image}/>
            <h1 className={style.specie} >{species}</h1>
         </div>

         <div className={style.specie}>.</div>
      </div>
   );
}
