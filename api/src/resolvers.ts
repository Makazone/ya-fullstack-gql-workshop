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
  // TODO
};
