import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


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
        <div>
            <button>
                <Link to='/home' >◀ Back</Link>
            </button>
            <h1>Details: {character?.name}</h1>
            <p>{character?.status}</p>
            <p>{character?.specie}</p>
            <p>{character?.gender}</p>
            <p>{character?.origin?.name}</p>
            <img src={character?.image} alt={character.name} />
            <p>{character?.created}</p>
        </div>
    )
}

export default Detail;