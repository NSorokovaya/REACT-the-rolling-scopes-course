import React, { useState, useEffect, useRef } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { getMovieDetails } from '../../services/movieApi';
import  DetailedMovieCard  from './DetailedMovieCard';
import css from './DetailedMovie.module.css';
import { MovieDetails } from '../../types/interfaces';

const DetailedMovie: React.FC = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);

  const location = useLocation();
  const goBack = useRef<string>(location.state?.from ?? '/');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const resp = await getMovieDetails(Number(movieId));
        setMovieDetails(resp);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div className={css.cardContainer}>
      <Link to={goBack.current}>
        <button type='button' className={css.goBackBtn}>
          Go back
        </button>
      </Link>
      {movieDetails && <DetailedMovieCard movie={movieDetails} />}
    </div>
  );
};

export default DetailedMovie;