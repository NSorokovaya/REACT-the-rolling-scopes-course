import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/movieApi';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    try {
      getMovieReviews(movieId).then(resp => setMovieReviews(resp.results));
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  return (
    <div>
      {' '}
      {movieReviews?.length === 0 ? (
        `We don't have any reviews this movie yet`
      ) : (
        <ul>
          {movieReviews.map(review => {
            return (
              <li key={review.username}>
                <p>{review.author}</p>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
