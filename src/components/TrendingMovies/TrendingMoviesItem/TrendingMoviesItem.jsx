import { Link } from 'react-router-dom';
import css from '../../../Style/Style.module.css';
import PropTypes from 'prop-types';

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
TrendingMoviesItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.number.isRequired,
    backdrop_path: PropTypes.string.isRequired,
  }).isRequired,
};
