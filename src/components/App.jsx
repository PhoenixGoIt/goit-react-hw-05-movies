import { lazy, Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import css from "../Style/Style.module.css";

const Home = lazy(() => import("../page/Home"));
const Movies = lazy(() => import("../page/Movies"));
const MovieDetails = lazy(() => import("./MovieDetails/MovieDetails"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

export const App = () => {
  return (
    <>
      <div className={css.header_page_container}>
        <Link to="/">
          <h2>Home</h2>
        </Link>
        <Link to="/movies">
          <h2>Movies</h2>
        </Link>
      </div>
      <Suspense fallback={<div className={css.rendering_container}><h2>Rendering...</h2></div>}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="reviews" element={<Reviews />} />
            <Route path="cast" element={<Cast />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
};
