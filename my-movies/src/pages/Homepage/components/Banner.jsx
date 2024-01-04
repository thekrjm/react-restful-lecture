import React from 'react';
import { UsePopularMoviesQuery } from '../../../hooks/UsePopularMoviesQuery';

export const Banner = () => {
  const { data } = UsePopularMoviesQuery();
  console.log(data);
  return <div>Banner</div>;
};
