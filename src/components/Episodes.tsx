"use client";

import { Episode } from "@/entities/episode.type";
import { ClapperboardIcon } from "lucide-react";
import { EpisodeItem } from "./ui/EpisodeItem";

export const Episodes = ({ episodes }: { episodes: Episode[] }) => {
  if (!episodes || episodes?.length === 0) {
    return (
      <section
        data-testid="show-episodes-empty"
        className="mx-auto flex flex-col items-center gap-2 my-10"
      >
        <div className="animate-fade-in-up">
          <ClapperboardIcon size={40} className="text-principal" />
        </div>
        <h3 className="text-lg text-white text-center animate-fade-in-up animation-delay-200">
          Nenhum episódio encontrado
        </h3>
        <p className="text-description text-center animate-fade-in-up animation-delay-400">
          Não encontramos nenhum episódio para essa temporada, <br />
          mas você pode selecionar outras temporadas acima.
        </p>
      </section>
    );
  }

  return (
    <ul className="space-y-3" data-testid="episodes-container">
      {episodes.map((episode) => (
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
  );
};
