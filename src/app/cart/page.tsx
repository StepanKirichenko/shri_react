"use client";

import { useSelector } from "react-redux";
import style from "./style.module.css";
import {
  selectCartModule,
  selectCartMovieIds,
  selectTicketTotalAmount,
} from "@/redux/features/cart/selector";
import { State } from "@/redux/store";
import MoviePreview, {
  MovieDetails,
} from "@/components/MoviePreview/MoviePreview";
import { useEffect, useState } from "react";

export default function CartPage() {
  const cart = useSelector((state: State) => selectCartModule(state));
  const count = useSelector((state: State) => selectTicketTotalAmount(state));

  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState<MovieDetails[]>([]);

  useEffect(() => {
    const movieIds = Object.getOwnPropertyNames(cart);

    const moviePromises = movieIds.map((movieId) =>
      fetch(`http://localhost:3001/api/movie?movieId=${movieId}`).then((res) =>
        res.json()
      )
    );

    let isCancelled = false;
    const allMoivesPromise = Promise.all(moviePromises);
    allMoivesPromise.then((movies) => {
      if (!isCancelled) {
        setMovies(movies);
        setIsLoading(false);
      }
    });

    return () => {
      isCancelled = true;
    };
  }, [cart]);

  return (
    <main className={style.page}>
      {isLoading ? (
        <div>Загрузка...</div>
      ) : (
        <div className={style.list}>
          {movies.map((movie) => (
            <MoviePreview key={movie.id} movie={movie} isInCart={true} />
          ))}
          <div className={style.totalContainer}>
            <p>Итого билетов:</p>
            <p>{count}</p>
          </div>
        </div>
      )}
    </main>
  );
}
