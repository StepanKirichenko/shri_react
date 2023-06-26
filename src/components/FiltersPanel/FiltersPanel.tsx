import GenreFilter from "../GenreFilter/GenreFilter";
import { TheaterFilter } from "../TheaterFilter/TheaterFilter";
import TitleFilter from "../TitleFilter/TitleFilter";
import style from "./style.module.css";

export function FiltersPanel() {
  return (
    <div className={style.panel}>
      <h2 className={style.panelHeading}>Фильтры поиска</h2>
      <TitleFilter />
      <GenreFilter />
      <TheaterFilter />
    </div>
  );
}
