import Dropdown from "../Dropdown/Dropdown";
import TheaterFilterSelector from "../TheaterFilterSelector/TheaterFilterSelector";
import style from "./style.module.css";

export interface CinemaDetails {
  id: string;
  name: string;
  movieIds: string[];
}

export async function TheaterFilter() {
  const cinemas: CinemaDetails[] = await fetch(
    "http://localhost:3001/api/cinemas"
  ).then((res) => res.json());

  return (
    <div className={style.filter}>
      <h3 className={style.filterName}>Кинотеатр</h3>
      <TheaterFilterSelector cinemas={cinemas} />
    </div>
  );
}
