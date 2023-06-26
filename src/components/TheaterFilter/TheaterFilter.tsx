import TheaterFilterSelector from "../TheaterFilterSelector/TheaterFilterSelector";
import classNames from "classnames";

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
    <div>
      <h3 className="mb-6px filterName">Кинотеатр</h3>
      <TheaterFilterSelector cinemas={cinemas} />
    </div>
  );
}
