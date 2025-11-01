import getEpisodes from "@/services/getEpisodes";
import { Episodes } from "./Episodes";

interface IShowEpisodesProps {
  seasonNumber: number;
}

export const ShowEpisodes = async ({ seasonNumber }: IShowEpisodesProps) => {
  const { episodes } = await getEpisodes();

  const removedNullEpisodes = episodes.filter((episode) => episode);

  const episodesBySeasonSelected = removedNullEpisodes.filter(
    (episode) => episode.SeasonNumber === seasonNumber
  );

  return (
    <section className="max-w-7xl mx-auto pb-8 pt-2 text-white px-8 md:px-0">
      <Episodes key={seasonNumber} episodes={episodesBySeasonSelected} />
    </section>
  );
};
