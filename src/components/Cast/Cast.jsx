import { useEffect, useState } from 'react';
import {MoviesCredits} from '../Api/Api'
import { useParams } from "react-router-dom";

export default function Cast() {
    const [item, setItem] = useState([])
    const { movieId } = useParams();

    useEffect(() => {
        MoviesCredits(movieId).then(res => {setItem(res)})
    },[movieId])

    console.log(item)
    return (
        <>  
            <ul>
            {item.map(cast => (
                <li key={cast.cast_id }>
                <h3>Autor: {cast.character}</h3>
                <img
                    src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`}
                    alt=''
                    />
                </li>
            ))}
            </ul>
        </>
    )
}
