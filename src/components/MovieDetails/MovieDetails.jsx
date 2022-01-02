import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import styles from './MovieDetails.module.css';
import moviePlaceholder from "../../images/moviePlaceholder.png";

const MovieDetails = ({ movie }) => {

  const { id, title, overview, vote_average, genres, name, poster_path }= movie;
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  
  return (
    <main className={styles.main}>
      <button className={styles.btn} onClick={goBack}>&larr; Powrót</button>

        <div className={styles.wrapper}>
          {poster_path !== undefined ? (
            <img className={styles.poster} 
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`} 
              alt={`${title} || ${name} plakat`} 
            />
          ) : (<img className={styles.posterPlaceholder} src={`${moviePlaceholder}`} alt="plakat"/>) 
          }
      

          <div className={styles.description}>
            <h1 className={styles.movieTitle}>{title}</h1>
            <h2 className={styles.title}>Ocena</h2>
            <p className={styles.info}>{vote_average}</p>
            <h2 className={styles.title}>Opis</h2>
            <p className={styles.info}>{overview}</p>
            <h2 className={styles.title}>Gatunek</h2>
            <p className={styles.genres}>{genres?.map(({ name }) => name + ", ")}</p>
          </div>
        </div>

      <div>
          <h3 className={styles.additional}>Dodatkowe informacje</h3>
          <ul className={styles.linkList}>
            <li className={styles.listItem}>
              <Link className={styles.link} to={`/movies/${id}/cast`}>Obsada</Link>
            </li>
            <li className={styles.listItem}>
              <Link className={styles.link} to={`/movies/${id}/reviews`}>Recenzje</Link>
            </li>
          </ul>
          <Outlet/>
      </div>

    </main>
  )
}

export default MovieDetails
