"use client";

import { Episode } from "@/entities/episode.type";
import { motion } from "framer-motion";
import { EpisodeItem } from "./ui/EpisodeItem";
import { ClapperboardIcon } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const Episodes = ({ episodes }: { episodes: Episode[] }) => {
  if (!episodes || episodes?.length === 0) {
    return (
      <section
        data-testid="show-episodes-empty"
        className="mx-auto flex flex-col items-center gap-2 my-10"
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <ClapperboardIcon size={40} className="text-principal" />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{
            duration: 0.4,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="text-lg text-white text-center"
        >
          Nenhum episódio encontrado
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{
            duration: 0.4,
            delay: 0.4,
            ease: "easeOut",
          }}
          className="text-description text-center"
        >
          Não encontramos nenhum episódio para essa temporada, <br />
          mas você pode selecionar outras temporadas acima.
        </motion.p>
      </section>
    );
  }

  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-3"
      data-testid="episodes-container"
    >
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
    </motion.ul>
  );
};
