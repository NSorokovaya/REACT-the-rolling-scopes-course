import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';
import { MovieDetails } from '../../types/interfaces';



interface MoviesListProps {
  movies: MovieDetails[];
}

export const MoviesList: React.FC<MoviesListProps> = ({ movies }) => {
  const location = useLocation();
  
  return (
    <ul className={css.list}>
      {movies.map(({ id, title }) => (
        <li key={id} className={css.listItem}>
          <Link to={`/movies/${id}`} state={{ from: location }} className={css.itemLink}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};