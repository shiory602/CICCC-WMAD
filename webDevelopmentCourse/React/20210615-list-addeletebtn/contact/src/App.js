import React from 'react';
import  MovieContextProvider  from './context/Context';

import Movie from './Movie';

function App() {
  return (
      <MovieContextProvider>
        <Movie />
      </MovieContextProvider>
  );
}

export default App;
