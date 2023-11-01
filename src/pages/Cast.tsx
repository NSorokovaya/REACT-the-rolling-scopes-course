import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/movieApi';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    try {
      getMovieCredits(movieId).then(resp =>
        setMovieCast(resp.cast.splice(0, 10))
      );
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  return (
    <div>
      {movieCast?.length === 0 ? (
        `We don't have any information about cast for this movie`
      ) : (
        <ul>
          {movieCast.map(actor => {
            return (
              <li key={actor.id}>
                <img width="50"
                  src={
                     `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                  }
                  alt="cast"
                />
                <p>{actor.name}</p>
                <p>Character: {actor.character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Cast;