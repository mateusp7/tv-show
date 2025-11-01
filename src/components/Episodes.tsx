"use client";

import { Episode } from "@/entities/episode.type";
import { motion } from "framer-motion";
import { EpisodeItem } from "./ui/EpisodeItem";

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
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-3"
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
