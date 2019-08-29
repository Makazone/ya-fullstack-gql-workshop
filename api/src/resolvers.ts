import {
  getMovieDetails,
  getRecommendations,
  getMovieCast
} from "./kinopoisk/movieApi";

import { getCurrentUser } from "./kinopoisk/userApi";

export default {
  Query: {
    movie: async (
      _parent: any,
      args: any,
      _context: any,
      _info: any
    ): Promise<any> => {
      const { id } = args;

      const movie = await getMovieDetails(id);

      if (movie) {
        return {
          ...movie
        };
      }

      return null;
    },
    viewer: async (
      _parent: any,
      args: any,
      _context: any,
      _info: any
    ): Promise<any> => {
      // TODO: get cookie from headers and pass it
      // to api
      const currentUser = await getCurrentUser();
      if (currentUser) {
        const subscription = currentUser.hasPlus ? "YA_PLUS" : "NONE";
        return {
          me: { ...currentUser, subscription }
        };
      }
      return null;
    }
  },
  Movie: {
    actors: async (
      parent: any,
      _args: any,
      _context: any,
      _info: any
    ): Promise<any> => {
      const { id } = parent;
      const cast = await getMovieCast(id);
      if (cast) {
        return cast.actors;
      }
      return [];
    },
    directors: async (
      parent: any,
      _args: any,
      _context: any,
      _info: any
    ): Promise<any> => {
      const { id } = parent;
      const cast = await getMovieCast(id);
      if (cast) {
        return cast.directors;
      }
      return [];
    },
    similarMovies: async (
      parent: any,
      args: any,
      _context: any,
      _info: any
    ): Promise<any> => {
      const { id } = parent;
      const { limit } = args;
      const movies = await getRecommendations(id);

      if (movies) {
        return movies.slice(0, limit);
      }

      return [];
    }
  }
};
