/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMovie
// ====================================================

export interface GetMovie_movie_similarMovies {
  __typename: "Movie";
  title: string;
  description: string | null;
  posterUrl: string | null;
}

export interface GetMovie_movie {
  __typename: "Movie";
  title: string;
  description: string | null;
  posterUrl: string | null;
  similarMovies: GetMovie_movie_similarMovies[];
}

export interface GetMovie {
  movie: GetMovie_movie | null;
}

export interface GetMovieVariables {
  movieId: string;
}
