import { useEffect, useState } from 'react';
import {MoviesReviews} from '../Api/Api'
import {  useParams } from "react-router-dom";

export default function Reviews() {
    const [item, setItem] = useState([])
    const { movieId } = useParams();

    useEffect(() => {
        MoviesReviews(movieId).then(res => {setItem(res)})
    },[movieId])

    console.log(item)
    return (
        <>  
            <ul>
            {item.map(review => (
                <li key={review.id}>
                <h3>Autor: {review.author}</h3>
                <p>{review.content}</p>
                </li>
            ))}
            </ul>
        </>
    )
}
