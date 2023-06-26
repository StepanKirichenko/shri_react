"use client";

import { useGetMoviesQuery } from "@/redux/services/movieApi";
import MoviePreview, { MovieDetails } from "../MoviePreview/MoviePreview";
import style from "./style.module.css";
import { selectCinemaId } from "@/redux/features/cinemaFilter/selector";
import { useSelector } from "react-redux";
import { State } from "@/redux/store";

export default function MoviePreviewList() {
  const cinemaId = useSelector((state: State) => selectCinemaId(state));
  const { data, isLoading, error } = useGetMoviesQuery(cinemaId);

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
