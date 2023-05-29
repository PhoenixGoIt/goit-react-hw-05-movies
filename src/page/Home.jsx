import React, { Component } from "react";
import TrendingMovies from "components/TrendingMovies/TrendingMovies";
import { getMovies } from "components/Api/Api";
import css from "../Style/Style.module.css";

class Home extends Component {
  state = {
    item: [],
  };

  async componentDidMount() {
    const res = await getMovies();
    this.setState({
      item: res,
    });
  }

  render() {
    const { item } = this.state;
    return (
      <main>
        <div className={css.h1_container}>
          <h1 className={css.h1}>Trending Today</h1>
        </div>
        <div className={css.container}>
          <TrendingMovies data={item} />
        </div>
      </main>
    );
  }
}

export default Home;
