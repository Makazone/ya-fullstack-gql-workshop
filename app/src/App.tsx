import React from 'react';
import Movie from './Movie'
import { Menu } from 'semantic-ui-react';

const App: React.FC = () => {
  const movieId = '45e8f29f25fe31a59be88301baa5caa1'

  return (
    <>
      <Menu>
        <Menu.Item>
          Ya-Movies
          </Menu.Item>
      </Menu>
      <Movie movieId={movieId} />
    </>
  );
}

export default App;
