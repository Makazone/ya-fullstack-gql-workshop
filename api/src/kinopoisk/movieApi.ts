import axios from "axios";

export interface Movie {
  id: string;
  title: string;
}

export interface MovieRole {
  person: Person;
  characterName: string;
}

export interface MovieCast {
  actors: MovieRole[];
  directors: Person[];
}

export interface Person {
  id: string;
  name: string;
  imageUrl: string;
}

interface KpMovieResponse {
  kpId: string;
  title: string;
  description: string;
}

interface KpRecommendationsResponse {
  recommendations: [
    { items: [{ kpId: string; title: string; filmId: string }] }
  ];
}

interface KpMetadataExternalResponse {
  credits: {
    actors: [
      {
        person: { id: string; name: string; imageUrl: string };
        roleDetails: string;
      }
    ];
    directors: [{ person: { id: string; name: string; imageUrl: string } }];
  };
}

export const getMovieDetails = async (
  movieId: string
): Promise<Movie | null> => {
  const response = await axios.get<KpMovieResponse>(
    `https://api.ott.kinopoisk.ru/v7/hd/content/${movieId}/metadata`
  );

  if (response && response.data) {
    const movie = response.data;
    return {
      id: movieId,
      title: movie.title
    };
  }

  return Promise.resolve(null);
};

export const getRecommendations = async (
  movieId: String
): Promise<Movie[] | null> => {
  const response = await axios.get<KpRecommendationsResponse>(
    `https://api.ott.kinopoisk.ru/v7/films/${movieId}/recommendations?serviceId=25`
  );

  if (response && response.data) {
    const {
      recommendations: [{ items }]
    } = response.data;

    const movies: Movie[] = items.map(i => ({
      id: i.filmId,
      title: i.title
    }));

    return Promise.resolve(movies);
  }
  return Promise.resolve(null);
};

export const getMovieCast = async (
  movieId: string
): Promise<MovieCast | null> => {
  console.log("get movie cast", movieId);
  const response = await axios.get<KpMetadataExternalResponse>(
    `https://api.ott.kinopoisk.ru/v7/hd/content/${movieId}/metadata/external`
  );

  if (response && response.data) {
    const {
      credits: { actors, directors }
    } = response.data;

    const movieRoles: MovieRole[] = actors.map(a => ({
      person: {
        id: a.person.id,
        name: a.person.name,
        imageUrl: a.person.imageUrl
      },
      characterName: a.roleDetails
    }));

    const movieDirectors: Person[] = directors.map(d => ({
      id: d.person.id,
      name: d.person.name,
      imageUrl: d.person.imageUrl
    }));

    return Promise.resolve({
      actors: movieRoles,
      directors: movieDirectors
    });
  }

  return Promise.resolve(null);
};
