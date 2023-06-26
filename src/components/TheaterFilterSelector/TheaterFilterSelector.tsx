"use client";

import Dropdown from "../Dropdown/Dropdown";
import { CinemaDetails } from "../TheaterFilter/TheaterFilter";

interface TheaterFilterSelectorProps {
  cinemas: CinemaDetails[];
}

export default function TheaterFilterSelector({
  cinemas,
}: TheaterFilterSelectorProps) {
  const options = cinemas.map((cinema) => ({
    value: cinema.id,
    displayText: cinema.name,
  }));

  return (
    <Dropdown
      placeholderText="Выберите жанр"
      options={options}
      selectHandler={(value) => console.log(value)}
    />
  );
}
