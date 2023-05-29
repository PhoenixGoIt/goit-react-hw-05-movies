import TrendingMoviesItem from "./TrendingMoviesItem/TrendingMoviesItem";
import css from '../../Style/Style.module.css';

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
