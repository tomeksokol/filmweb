import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import LoaderComponent from "./components/LoaderComponent/LoaderComponent";


const HomePage = lazy(() =>
  import("./pages/homePage/HomePage" /* webpackChunkName: "home-view" */)
);

const MoviesPage = lazy(() =>
  import('./pages/moviesPage/MoviesPage' /* webpackChunkName: "movies-view" */),
);

const MovieDetailsPage = lazy(() =>
  import('./pages/moviedetails/MovieDetailsPage' /* webpackChunkName: "movies-details-view" */
  )
);

function App() {
  return (
    <div className="App">
      <Suspense fallback={<LoaderComponent />}>
        <Routes>
          <Route path="/" exact element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/movies/:slug/" element={<MovieDetailsPage />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
