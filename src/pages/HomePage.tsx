import React, { useEffect, useState } from 'react';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { getTrending } from '../services/movieApi';
import { SearchForm } from '../components/SearchForm/SearchForm';
import { MovieDetails } from '../types/interfaces';

const HomePage: React.FC = () => {
 const [trendMovies, setTrendMovies] = useState<MovieDetails[]>([]);
  useEffect(() => {
    getTrending().then(resp => setTrendMovies(resp));
  }, []);

  return (
    <>
       <SearchForm />
      <MoviesList movies={trendMovies} />
     
    </>
  );
};
export default HomePage;
