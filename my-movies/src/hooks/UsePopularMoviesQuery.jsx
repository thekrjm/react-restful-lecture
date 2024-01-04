import { useQuery } from '@tanstack/react-query';
import api from '../util/api';

const fetchPopularMovies = () => {
  return api.get(`/movie/popular`);
};

export const UsePopularMoviesQuery = () => {
  return useQuery({
    queryKey: ['movie-popular'],
    queryFn: fetchPopularMovies,
    select: (result) => result.data,
  });
};
