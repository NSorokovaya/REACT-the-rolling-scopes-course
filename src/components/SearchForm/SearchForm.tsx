import { useSearchParams } from 'react-router-dom';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { searchMovies } from '../../services/movieApi';
import { useState, useEffect } from 'react';
import { SearchBox } from './SearchBox';
import { NoResults } from './NoResults';

interface Movie {
  id: number;
  title: string;
  // інші поля
}

export const SearchForm: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get('query') ?? '';

  const handleSubmit = (searchResult: string) => {
    setSearchQuery(searchResult !== '' ? { query: searchResult } : {});
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    try {
      searchMovies(query).then(resp => setMovies(resp));
    } catch (error) {
      console.log(error);
    }
  }, [query]);

  return (
    <div style={{ position: 'relative' }}>
      <SearchBox onSubmitInput={handleSubmit} />
      {movies.length !== 0 && <MoviesList movies={movies} />}
      {movies.length === 0 && query !== '' && <NoResults search={query} />}
    </div>
  );
};