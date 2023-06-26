import { MovieDetails } from "@/components/MoviePreview/MoviePreview";
import style from "./style.module.css";

interface MoviePageProps {
  params: {
    id: string;
  };
}

export default async function MoviePage({ params }: MoviePageProps) {
  const movie: MovieDetails = await fetch(
    `http://localhost:3001/api/movie?movieId=${params.id}`
  ).then((res) => res.json());

  return (
    <main>
      <h1>{movie.title}</h1>
    </main>
  );
}
