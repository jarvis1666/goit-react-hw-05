import { Suspense, lazy } from "react";
//npm install react-router-dom
import { Route, Routes } from "react-router-dom";
import css from "../App/App.module.css";
//npm install clsx
import { Navbar } from "../Navbar/Navbar";
import { MovieCast } from "../MovieCast/MovieCast.jsx";
import { MovieReviews } from "../MovieReviews/MovieReviews.jsx";
import { Loader } from "../Loader/Loader.jsx";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage.jsx"));
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage.jsx")
);
const MovieDetailsPage = lazy(() =>
  import("../../pages/MovieDetailsPage/MovieDetailsPage.jsx")
);
// const Navbar = lazy(() => import('../Navbar/Navbar'))
// const MovieCast = lazy(() => import('../MovieCast/MovieCast.jsx'))
// const MovieReviews = lazy(() => import('../MovieReviews/MovieReviews.jsx'))

export function App() {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
