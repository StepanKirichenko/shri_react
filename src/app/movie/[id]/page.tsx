import { MovieDetails } from "@/components/MoviePreview/MoviePreview";
import style from "./style.module.css";
import Image from "next/image";
import TicketCountAdjuster from "@/components/TicketCountAdjuster/TicketCountAdjuster";
import { getGenreDisplayName } from "@/lib/utils";

interface MoviePageProps {
  params: {
    id: string;
  };
}

interface Review {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export default async function MoviePage({ params }: MoviePageProps) {
  const moviePromise: Promise<MovieDetails> = fetch(
    `http://localhost:3001/api/movie?movieId=${params.id}`
  ).then((res) => res.json());

  const reviewsPromise: Promise<Review[]> = fetch(
    `http://localhost:3001/api/reviews?movieId=${params.id}`
  ).then((res) => res.json());

  const [movie, reviews] = await Promise.all([moviePromise, reviewsPromise]);

  console.log(reviews);

  return (
    <main>
      <div className={style.info}>
        <Image
          src={movie.posterUrl}
          width="400"
          height="500"
          className={style.poster}
          alt={movie.title}
        />
        <div className={style.details}>
          <div className={style.titleRow}>
            <h2 className={style.title}>{movie.title}</h2>
            <TicketCountAdjuster movieId={movie.id} />
          </div>
          <div className={style.shortDetails}>
            <p>
              <span className={style.detailsCategory}>Жанр: </span>
              {getGenreDisplayName(movie.genre)}
            </p>
            <p>
              <span className={style.detailsCategory}>Год выпуска: </span>
              {movie.releaseYear}
            </p>
            <p>
              <span className={style.detailsCategory}>Рейтинг: </span>
              {movie.rating}
            </p>
            <p>
              <span className={style.detailsCategory}>Режиссер: </span>
              {movie.director}
            </p>
          </div>
          <div>
            <h3 className={style.descriptionHeading}>Описание</h3>
            <p className={style.descriptionText}>{movie.description}</p>
          </div>
        </div>
      </div>

      <div className={style.reviews}>
        {reviews.map((review) => (
          <div key={review.id} className={style.review}>
            <Image
              src="/images/avatar-placeholder.svg"
              width="100"
              height="100"
              alt={review.name}
            />
            <div className={style.reviewDetails}>
              <div className={style.reviewTopRow}>
                <h3 className={style.reviewName}>{review.name}</h3>
                <p>
                  Оценка: <b>{review.rating}</b>
                </p>
              </div>
              <p>{review.text}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
