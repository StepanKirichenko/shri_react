"use client";

import { useGetMoviesQuery } from "@/redux/services/movieApi";
import MoviePreview from "../MoviePreview/MoviePreview";
import style from "./style.module.css";
import {
  selectCinemaId,
  selectGenre,
  selectTitle,
} from "@/redux/features/filters/selector";
import { useSelector } from "react-redux";
import { State } from "@/redux/store";

export default function MoviePreviewList() {
  const cinemaId = useSelector((state: State) => selectCinemaId(state));
  const { data, isLoading, error } = useGetMoviesQuery(cinemaId);
  const genre = useSelector((state: State) => selectGenre(state));
  const title = useSelector((state: State) => selectTitle(state));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || error) {
    return <div>Not found</div>;
  }

  const filteredMovies = data
    .filter((movie) => !genre || movie.genre === genre)
    .filter(
      (movie) =>
        !title || movie.title.toLowerCase().includes(title.toLowerCase())
    );

  return (
    <div className={style.list}>
      {filteredMovies.map((movie) => (
        <MoviePreview key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
