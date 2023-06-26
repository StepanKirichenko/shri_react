"use client";

import { useDispatch } from "react-redux";
import Dropdown from "../Dropdown/Dropdown";
import { filtersActions } from "@/redux/features/filters";

const genreOptions = [
  {
    value: "fantasy",
    displayText: "Фэнтези",
  },
  {
    value: "horror",
    displayText: "Ужасы",
  },
  {
    value: "action",
    displayText: "Экшн",
  },
  {
    value: "comedy",
    displayText: "Комедия",
  },
];

export default function GenreFilter() {
  const dispatch = useDispatch();

  return (
    <div>
      <h3 className="mb-6px filterName">Жанр</h3>
      <Dropdown
        placeholderText="Выберите жанр"
        options={genreOptions}
        selectHandler={(value) =>
          dispatch(filtersActions.setGenreFilter(value))
        }
      />
    </div>
  );
}
