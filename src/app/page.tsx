import { FiltersPanel } from "@/components/FiltersPanel/FiltersPanel";
import MoviePreviewList from "@/components/MoviePreviewList/MoviePreviewList";
import style from "./style.module.css";

export default function Home() {
  return (
    <main className={style.page}>
      <FiltersPanel />
      <MoviePreviewList />
    </main>
  );
}
