import React from 'react';
import { useState, useEffect, lazy, Suspense } from 'react';
import { NavLink, Route, useParams, useMatch, useNavigate, useLocation, Routes, Outlet } from 'react-router-dom';
import { getMovieDetails } from '../../utils/apiCalls';
import { STATUS } from '../../utils/constans';
import LoaderComponent from '../../components/LoaderComponent/LoaderComponent';
import ErrorView from '../../components/ErrorComponent/ErrorView.';
import moviePlaceholder from "../../images/moviePlaceholder.png";
import styles from './MovieDetailsPage.module.css';

const Cast = lazy(() => import('../cast/Cast' /* webpackChunkName: "cast-review"*/));

const Reviews = lazy(() => import('../reviews/Reviews' /* webpackChunckName: "reviews-review"*/));


const MovieDetailsPage = () => {

  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/)[0];
  const navigate = useNavigate();
  const location = useLocation();
  const { url, path } = useMatch();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(() => {
    getMovieDetails(movieId).then(({  poster_path, original_title, title, name, popularity, overview, genres, id }) => {
      setMovie({
        src: poster_path
          ? `https://image.tmdb.org/t/p/w500/${poster_path}`
          : `${moviePlaceholder}`,
          title: original_title,
          score: popularity.toFixed(1),
          movieId: id,
          overview,
          genres,
      });

      setStatus(STATUS.RESOLVED);
    })
    .catch(error => {
      console.log(error);
      setError(error.message);
      setStatus(STATUS.REJECTED);
    });
  }, [movieId]);

  const handleGoBack = () => {
    navigate(location?.state?.from ?? '/');
  }

  return (
    <main className={styles.main}>
      <button onClick={handleGoBack} type='button' className={styles.btn}>Powrót
      </button>

      {status === STATUS.PENDING && <LoaderComponent />}
      {status === STATUS.REJECTED && <ErrorView message={error}/>}
      {status === STATUS.RESOLVED && (
        <>
          <div className={styles.wrapper}>
            <img className={styles.poster} src={movie.src} alt={movie.title} />
            <div className={styles.description}>
              <h2 className={styles.movieTitle}>{movie.title}</h2>
              <h3 className={styles.title}>User Score</h3>
              <p className={styles.info}>{movie.score}</p>
              <h3 className={styles.title}>Overview</h3>
              <p className={styles.info}>{movie.overview}</p>
              <h3 className={styles.title}>Genres</h3>
              <ul className={styles.genre}>
                {movie.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </div>
          </div>

          <ul className={styles.nav}>
            <li>
              <NavLink
                to={{
                  pathname: `${url}/cast`,
                  state: { from: location?.state?.from ?? '/' },
                }}
                className={styles.link}
                activeClassName={styles.activeLink}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: `${url}/reviews`,
                  state: { from: location?.state?.from ?? '/' },
                }}
                className={styles.link}
                activeClassName={styles.activeLink}
              >
                Reviews
              </NavLink>
            </li>
          </ul>

          <Suspense fallback={<LoaderComponent />}>
            <Routes>
              <Route path={`${path}/cast`} exact element={<Cast />}>
                {/* {status === STATUS.RESOLVED && <Cast />} */}
              </Route>

              <Route path={`${path}/reviews`} exact element={<Reviews />}>
                {/* {status === STATUS.RESOLVED && <Reviews />} */}
              </Route>
            </Routes>
          </Suspense>
          <Outlet />
        </>
      )}
    </main>
  )
}

export default MovieDetailsPage
