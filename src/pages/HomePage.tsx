import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { getTrending } from '../services/movieApi';

const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    getTrending().then(resp => setTrendMovies(resp));
  }, []);

  return <MoviesList movies={trendMovies} />;
};

export default HomePage;