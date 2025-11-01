import getEpisodes from "@/services/getEpisodes";
import { EpisodeItem } from "./ui/EpisodeItem";

interface IShowEpisodesProps {
  seasonNumber: number;
}

export const ShowEpisodes = async ({ seasonNumber }: IShowEpisodesProps) => {
  const { episodes } = await getEpisodes();

  const removedNullEpisodes = episodes.filter((episode) => episode);

  const episodesBySeasonSelected = removedNullEpisodes.filter(
    (episode) => episode.SeasonNumber === seasonNumber
  );

  console.log({ episodesBySeasonSelected });

  return (
    <section className="max-w-7xl mx-auto pb-8 pt-2 text-white">
      <ul className="space-y-3">
        {episodesBySeasonSelected.map((episode) => (
          <EpisodeItem
            key={episode.ID}
            episodeNumber={episode.EpisodeNumber}
            title={episode.Title}
            image={episode.Image}
            duration={episode.Duration}
            seasonNumber={episode.SeasonNumber}
            synopsis={episode.Synopsis}
          />
        ))}
      </ul>
    </section>
  );
};
