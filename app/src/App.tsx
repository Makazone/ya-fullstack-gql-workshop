import React, { useState, useEffect } from 'react';
import './App.css';
import Movie from './Movie'
import { Menu } from 'semantic-ui-react';

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

  const movie = {
    title: 'Spider man',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    coverImageUrl: 'http://avatars.mds.yandex.net/get-ott/239697/2a000001612cac302a06ddba82b098c13131/orig',
    suggestions: [
      {
        title: 'Spider man',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        coverImageUrl: 'http://avatars.mds.yandex.net/get-ott/239697/2a000001612cac302a06ddba82b098c13131/orig',
      },
      {
        title: 'Spider man',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        coverImageUrl: 'http://avatars.mds.yandex.net/get-ott/239697/2a000001612cac302a06ddba82b098c13131/orig',
      },
      {
        title: 'Spider man',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        coverImageUrl: 'http://avatars.mds.yandex.net/get-ott/239697/2a000001612cac302a06ddba82b098c13131/orig',
      }
    ]
  }

  return (
    <div className="App">
      <Menu>
        <Menu.Item>
         Ya-Movies
        </Menu.Item>
      </Menu>
      <Movie movie={movie} />
    </div>
  );
}

export default App;
