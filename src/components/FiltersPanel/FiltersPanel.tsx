import style from "./style.module.css";

export function FiltersPanel() {
  return (
    <div className={style.panel}>
      <h2 className={style.panelHeading}>Фильтры поиска</h2>
      <div className={style.filter}>
        <h3 className={style.filterName}>Название</h3>
        <input placeholder="Введите название" />
      </div>
      <div className={style.filter}>
        <h3 className={style.filterName}>Жанр</h3>
        <input placeholder="Введите название" />
      </div>
      <div className={style.filter}>
        <h3 className={style.filterName}>Кинотеатр</h3>
        <input placeholder="Введите название" />
      </div>
    </div>
  );
}
