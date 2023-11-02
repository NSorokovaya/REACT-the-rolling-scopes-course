import axios, { AxiosResponse } from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;
const API_KEY = `?api_key=8342d698457bbb39c567b3c209d2c795`;
import { MovieDetails } from '../types/interfaces';




export const getTrending = async (): Promise<MovieDetails[]> => {
  const response: AxiosResponse = await axios.get(`/trending/movie/day${API_KEY}`);
  return response.data.results.map(({ id, title }: { id: number; title: string }) => ({
    id,
    title,
  }));
};

export const searchMovies = async (query: string): Promise<MovieDetails[]> => {
  const response: AxiosResponse = await axios.get(
    `/search/movie${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return response.data.results.map(({ id, title }: { id: number; title: string }) => ({
    id,
    title,
  }));
};

export const getMovieDetails = async (movieId: number): Promise<MovieDetails> => {
  const response: AxiosResponse = await axios.get(`/movie/${movieId}${API_KEY}&language=en-US`);
  return response.data;
};

