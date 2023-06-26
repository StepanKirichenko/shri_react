"use client";

import { filtersActions } from "@/redux/features/filters";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function TitleFilter() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(filtersActions.setTitleFilter(title));
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [title, dispatch]);

  return (
    <div>
      <h3 className="mb-6px filterName">Название</h3>
      <input
        className="input titleInput"
        placeholder="Введите название"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
}
