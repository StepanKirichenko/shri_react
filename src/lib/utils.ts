const genreDisplayNames = {
  fantasy: "фэнтези",
  horror: "ужасы",
  action: "боевик",
  comedy: "комедия",
};

export type Genre = keyof typeof genreDisplayNames;

export function getGenreDisplayName(genre: Genre): string {
  return genreDisplayNames[genre];
}
