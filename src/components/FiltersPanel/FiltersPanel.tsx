import GenreFilter from "../GenreFilter/GenreFilter";
import { TheaterFilter } from "../TheaterFilter/TheaterFilter";
import style from "./style.module.css";

export function FiltersPanel() {
  return (
    <div className={style.panel}>
      <h2 className={style.panelHeading}>Фильтры поиска</h2>
      <div className={style.filter}>
        <h3 className={style.filterName}>Название</h3>
        <input placeholder="Введите название" />
      </div>
      <GenreFilter />
      <TheaterFilter />
    </div>
  );
}
