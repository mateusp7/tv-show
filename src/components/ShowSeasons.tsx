import getEpisodes from "@/services/getEpisodes";
import { SeasonItem } from "./ui/SeasonItem";

export const ShowSeasons = async () => {
  const { episodes } = await getEpisodes();

  const removeNullEpisodes = episodes.filter((episode) => episode);

  console.log({ removeNullEpisodes });

  const seasons = new Set<number>();

  removeNullEpisodes.forEach((episode) => {
    seasons.add(episode.SeasonNumber);
  });

  return (
    <div className="flex flex-row items-center gap-4 mt-2">
      {Array.from(seasons).map((season) => (
        <SeasonItem key={season} seasonNumber={season} />
      ))}
    </div>
  );
};
