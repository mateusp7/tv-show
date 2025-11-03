import getEpisodes from "@/services/getEpisodes";
import { SeasonItem } from "./ui/SeasonItem";

export const ShowSeasons = async () => {
  const { episodes } = await getEpisodes();

  const removeNullEpisodes = episodes.filter((episode) => episode);

  const seasons = new Set<number>();

  removeNullEpisodes.forEach((episode) => {
    seasons.add(episode.SeasonNumber);
  });

  return (
    <nav>
      <ul className="flex flex-row items-center gap-4 mt-2">
        {Array.from(seasons).map((season) => (
          <li key={season}>
            <SeasonItem seasonNumber={season} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
