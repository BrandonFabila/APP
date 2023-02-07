import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import style from './detail.module.css'


const Detail = () => {
    //params
    const { detailId } = useParams();//guarda el parametro
    //state
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
                if(char.name){
                    setCharacter(char);
                }else{
                    window.alert('No characters ID');
                }
            })
            .catch((err) => {
                window.alert('No characters ID');
            });
        return setCharacter({});
    }, [detailId])
    
    return (
        <div >
            <li className={style.gral} >
                <div className={style.izq} >
                    <div>
                        <button className={style.button} >
                        <Link to='/home' >◀ Back</Link>
                        </button>
                    </div>
                    <div>
                        <img classname={style.image} src={character?.image} alt={character.name} />
                    </div>
                </div>
                <div className={style.der} >
                    <h1 className={style.name} >{character?.name}</h1>
                    <p className={style.text} >{character?.specie}</p>
                    <p className={style.text} >{character?.type}</p>
                    <p className={style.text} >{character?.gender}</p>
                    <p className={style.text} >{character?.status}</p>
                    <p className={style.text} >{character?.origin?.name}</p>
                    <p className={style.text} >{character?.created}</p>
                </div>
            </li>
        </div>
    )
}

export default Detail;