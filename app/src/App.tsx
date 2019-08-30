import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Movie from './Movie'
import { Menu } from 'semantic-ui-react';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

const App: React.FC = () => {
  const movieId = '45e8f29f25fe31a59be88301baa5caa1'

  return (
    <ApolloProvider client={client}>
      <Menu>
        <Menu.Item>
          Ya-Movies
          </Menu.Item>
      </Menu>
      <Movie movieId={movieId} />
    </ApolloProvider>
  );
}

export default App;
