import { Genres } from "@/entities/genres.type";

interface IShowGenresYearProps {
  genres: Genres[];
  year: number;
}

export const ShowGenresYear = ({ genres, year }: IShowGenresYearProps) => {
  return (
    <ul className="flex flex-row items-center">
      {genres?.map((genre, index) => (
        <li key={genre.ID} className="text-description uppercase font-medium">
          {genre.Title}
          {index < (genres?.length || 0) - 1 && <span className="mx-2">•</span>}
        </li>
      ))}
      <li className="text-description uppercase font-medium ml-2">• {year}</li>
    </ul>
  );
};
