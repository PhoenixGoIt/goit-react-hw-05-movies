import React, { Component, useEffect, useState } from "react";
import {MoviesDetails} from '../Api/Api'
import css from '../../Style/Style.module.css'
import { Link, Outlet, useParams, useLocation, useNavigate } from "react-router-dom";
import { lazy, Suspense } from "react";

const Reviews  = lazy(() => import("../Reviews/Reviews"));
const Cast  = lazy(() => import("../Cast/Cast"));

export default function MovieDetails() {
    const [movie, setMovie] = useState([]);
    const { movieId } = useParams();
    const location = useLocation()
    const navigate = useNavigate();
     useEffect(() => {
       MoviesDetails(movieId).then(res => {setMovie(res)})
     }, [movieId]);
     
     const handleClick = () => navigate(location?.state?.from ?? '/');

    const {original_title, overview, vote_average,genres , poster_path, release_date} = movie
    return (
            <>
                <button type="button"  onClick={handleClick}>Go Back</button>
                <div className={css.movieDetails_container}>
                    <img
                    className={css.movieDetails_img}
                    src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
                    alt=''
                    />
                    <div className={css.movieDetails_container2}>
                    <h1>{original_title} ({release_date})</h1>
                    <p>User Score: {(vote_average * 10).toFixed(0)}%</p>
                    <h2>Overview</h2>
                    <p>{overview}</p>
                    <h2>Genres</h2>
                    
                    </div>
                    </div>
                <div>
                    <h4>Additional Information</h4>
                    <ul>
                    <li><Link to='cast' state={{ from: 'cast' }} element={<Cast />}>Cast</Link></li>
                    <li><Link to='reviews' state={{ from: 'reviews' }} element={<Reviews />}>Reviews</Link></li>
                    </ul>
                    <Suspense fallback={<div className={css.rendering_container}><h2>Rendering...</h2></div>}>
                    <Outlet />
                    </Suspense>
                </div>
            </>
        )
}
{/* <div className={css.movieDetails_container}>
<img
className={css.movieDetails_img}
src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
alt=''
/>
<div className={css.movieDetails_container2}>
<h1>{original_title} ({release_date})</h1>
<p>User Score {vote_average}/ 10</p>
<h2>Overview</h2>
<p>{overview}</p>
<h2>Genres</h2>
</div>
</div>
<div>
 */}
 // <li><Link to='/cast' element={<Cast />}>Cast</Link></li>