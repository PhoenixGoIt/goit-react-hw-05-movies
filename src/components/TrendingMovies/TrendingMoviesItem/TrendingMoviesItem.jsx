import { Link } from 'react-router-dom';
import css from '../../../Style/Style.module.css';
const TrendingMoviesItem = ({ item }) => {
  const { name, title, id, backdrop_path } = item;
  return (
    <div className={css.img_container} key={id} data-set={id} >
      <Link to={`/movies/${id}`}  state={{ from: '/' }}> 
        <img
          className={css.trending_img}
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt={`${name ?? title} poster`}
        />
        <li className={css.li_movieName}>{name ?? title}</li>
      </Link>
    </div>
    
  );
};

export default TrendingMoviesItem;
