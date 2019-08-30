import {
  getMovieDetails,
  getRecommendations,
  getMovieCast
} from "./kinopoisk/movieApi";

import { getCurrentUser } from "./kinopoisk/userApi";

// resolver function signature
// function (parent, args, context, info) { ... }
// parent - a result of the resolved node one level above
// args - incoming params to current field
// context - global context to current query
// info - advanced stuff, query AST

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
    crew: async (
      parent: any,
      _args: any,
      _context: any,
      _info: any
    ): Promise<any> => {
      const { id } = parent;
      const cast = await getMovieCast(id);
      if (cast) {
        const { actors, directors } = cast;
        return {
          actors: actors || [],
          directors: directors || []
        };
      }
      return null;
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
