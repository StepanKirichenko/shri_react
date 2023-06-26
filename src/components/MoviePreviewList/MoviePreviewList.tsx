import MoviePreview, { MovieDetails } from "../MoviePreview/MoviePreview";
import style from "./style.module.css";

interface MoviePreviewListProps {
  movies: MovieDetails[];
}

export default function MoviePreviewList({ movies }: MoviePreviewListProps) {
  return (
    <div className={style.list}>
      {movies.map((movie) => (
        <MoviePreview key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
