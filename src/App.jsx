import "./App.css";
import { Route, Routes } from "react-router-dom";
import React, { lazy, Suspense, useEffect } from "react";
import LoaderComponent from "./components/LoaderComponent/LoaderComponent";
import Nav from "./components/Nav/Nav";
import { addBackToTop } from 'vanilla-back-to-top';

const HomePage = lazy(() =>
  import("./pages/HomePage/HomePage" /* webpackChunkName: "home-view" */)
);

const MoviesPage = lazy(() =>
  import("./pages/MoviesPage/MoviesPage" /* webpackChunkName: "movies-view" */)
);

const MovieDetailsPage = lazy(() =>
  import(
    "./pages/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "movies-details-view" */
  )
);

const Cast = lazy(() => import("./components/Cast/Cast"));
const Reviews = lazy(() => import("./components/Reviews/Reviews"));


function App() {

  useEffect(() => {
    addBackToTop({
      backgroundColor: '#fa7584',
    });
  }, []);

  return (
    <div className="App">
      <Nav />
      <Suspense fallback={<LoaderComponent />}>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id/" element={<MovieDetailsPage />}>
            <Route path={`/movies/:id/cast`} element={<Cast />} />
            <Route path={`/movies/:id/reviews`} element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
