const genreDisplayNames = {
  fantasy: "Фэнтези",
  horror: "Ужасы",
  action: "Боевик",
  comedy: "Комедия",
};

export type Genre = keyof typeof genreDisplayNames;

export function getGenreDisplayName(genre: Genre): string {
  return genreDisplayNames[genre];
}
