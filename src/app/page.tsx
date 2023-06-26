"use client";

import MoviePreview from "@/components/MoviePreview/MoviePreview";
import MoviePreviewList from "@/components/MoviePreviewList/MoviePreviewList";
import { useGetMoviesQuery } from "@/redux/services/movieApi";

export default function Home() {
  const { data, isLoading, error } = useGetMoviesQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || error) {
    return <div>Not found</div>;
  }

  return (
    <main>
      <MoviePreviewList movies={data} />
    </main>
  );
}
