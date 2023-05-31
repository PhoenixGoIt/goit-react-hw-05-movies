import TrendingMoviesItem from "./TrendingMoviesItem/TrendingMoviesItem";
import css from '../../Style/Style.module.css';
import PropTypes from 'prop-types';


function TrendingMovies({ data }) {
  return (
    <>
      <ul className={css.trending_container}>
        {data.map(item => (
          <TrendingMoviesItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
}

export default TrendingMovies;

TrendingMovies.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
