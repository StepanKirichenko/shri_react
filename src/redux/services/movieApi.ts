import { MovieDetails } from "@/components/MoviePreview/MoviePreview";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  endpoints: (builder) => ({
    getMovies: builder.query<MovieDetails[], string | undefined>({
      query: (cinemaId) =>
        cinemaId ? `movies?cinemaId=${cinemaId}` : "movies",
    }),
    getMovie: builder.query<MovieDetails, string>({
      query: (movieId) => `movie?movieId=${movieId}`,
    }),
  }),
});

export const { useGetMoviesQuery } = movieApi;
export const { useGetMovieQuery } = movieApi;
