"use client";

import { useGetMoviesQuery } from "@/redux/services/movieApi";
import MoviePreview, { MovieDetails } from "../MoviePreview/MoviePreview";
import style from "./style.module.css";

export default function MoviePreviewList() {
  const { data, isLoading, error } = useGetMoviesQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || error) {
    return <div>Not found</div>;
  }

  return (
    <div className={style.list}>
      {data.map((movie) => (
        <MoviePreview key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
