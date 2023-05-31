import SearchForm from "components/SearchForm/SearchForm";
import { Query } from "../components/Api/Api";
import { useState } from "react";
import css from "../Style/Style.module.css";
import TrendingMovies from "components/TrendingMovies/TrendingMovies";
import PropTypes from 'prop-types';

function Movies() {
  const [item, setItem] = useState([]);

  async function handleSubmit(e) {
    const response = await Query(e);
    setItem(response);
  }

  console.log(item);

  return (
    <main>
      <div className={css.h1_container}>
        <h1 className={css.h1}>Search Movies</h1>
      </div>
      <div className={css.container}>
        <SearchForm onSubmit={handleSubmit} />
      </div>
      <TrendingMovies data={item} />
    </main>
  );
}

export default Movies;
TrendingMovies.propTypes = {
  data: PropTypes.array.isRequired,
};
