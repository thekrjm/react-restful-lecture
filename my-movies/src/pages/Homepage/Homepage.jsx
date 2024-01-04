import React from 'react';
import { Banner } from './components/Banner';

// 1. 배너 => popular영화를 가져와서 1번 영화를 보여줌
// 2. popular
// 3. upcoming
// 4. top-rated movies

const Homepage = () => {
  return (
    <div>
      <Banner />
    </div>
  );
};

export default Homepage;
