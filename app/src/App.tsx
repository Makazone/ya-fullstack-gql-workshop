import React, { useState, useEffect } from 'react';
import './App.css';

const App: React.FC = () => {
  const [movies, setMovies] = useState([])
  // const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   const loadMovies = async (id: string) => {
  //     const query = `query { movie(id: "${id}") { title id } }`
  //     const response = await fetch('http://localhost:4000/graphql', {
  //       method: 'post',
  //       body: query
  //     })
  //     console.log(response)
  //   }

  //   loadMovies("45e8f29f25fe31a59be88301baa5caa1")
  // }, [])

  return (
    <div className="App">
      <header className="App-header">
        Hello
      </header>
    </div>
  );
}

export default App;
