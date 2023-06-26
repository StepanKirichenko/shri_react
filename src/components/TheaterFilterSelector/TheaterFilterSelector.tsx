"use client";

import { useDispatch } from "react-redux";
import Dropdown from "../Dropdown/Dropdown";
import { CinemaDetails } from "../TheaterFilter/TheaterFilter";
import { filtersActions } from "@/redux/features/filters";

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

  const dispatch = useDispatch();

  return (
    <Dropdown
      placeholderText="Выберите кинотеатр"
      options={options}
      selectHandler={(value) => dispatch(filtersActions.setCinemaFilter(value))}
    />
  );
}
