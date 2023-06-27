import Image from "next/image";
import style from "./style.module.css";
import classNames from "classnames";
import TicketCountAdjuster from "../TicketCountAdjuster/TicketCountAdjuster";
import { Genre, getGenreDisplayName } from "@/lib/utils";
import Link from "next/link";

const cn = classNames;

export interface MovieDetails {
  title: string;
  posterUrl: string;
  releaseYear: number;
  description: string;
  genre: Genre;
  id: string;
  rating: number;
  director: string;
  reviewIds: string[];
}

interface MoviePreviewProps {
  movie: MovieDetails;
  isInCart?: boolean;
}

export default function MoviePreview({ movie, isInCart }: MoviePreviewProps) {
  return (
    <div className={cn(style.card, "roundCorners")}>
      <Image
        className={cn(style.posterImage, "roundCorners")}
        width={100}
        height={120}
        src={movie.posterUrl}
        alt={movie.title}
      />
      <div className={style.details}>
        <h3 className={style.title}>
          <Link href={`/movie/${movie.id}`}>{movie.title}</Link>
        </h3>
        <p className={style.genre}>{getGenreDisplayName(movie.genre)}</p>
      </div>
      <div className={style.amount}>
        <TicketCountAdjuster movieId={movie.id} isInCart={isInCart} />
      </div>
    </div>
  );
}
