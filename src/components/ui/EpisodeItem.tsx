"use client";

import { PlayIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./Button";

interface IEpisodeItemProps {
  episodeNumber: number;
  title: string;
  image: string;
  duration: number;
  seasonNumber: number;
  synopsis: string;
}

export const EpisodeItem = ({
  title,
  episodeNumber,
  image,
  duration,
  seasonNumber,
  synopsis,
}: IEpisodeItemProps) => {
  const [isOpenDescription, setIsOpenDescription] = useState(false);

  console.log({ isOpenDescription });

  return (
    <li
      className="flex flex-row cursor-pointer items-center justify-between bg-dark-one py-4 px-6 rounded-md border-2 border-dark-three hover:bg-dark-two transition-discrete duration-300 hover:border-principal group focus-visible:outline-none focus-visible:border-principal"
      role="button"
      tabIndex={0}
      onClick={() => setIsOpenDescription((prev) => !prev)}
    >
      <div className="flex flex-row items-start gap-4">
        <Button
          variant="clear"
          size="icon-lg"
          className="rounded-full bg-linear-to-br from-gradient-1 to-gradient-2 via-gradient-3 hover:shadow-glow transition-smooth focus-visible:outline-none focus-visible:scale-105 focus-visible:outline-gradient-2 hover:scale-105 transition-all duration-300 "
        >
          <PlayIcon className="text-white fill-white" />
        </Button>
        <div className="flex flex-col">
          <p className="text-white/60 font-medium">
            <span className="text-white font-semibold">{title} - </span>T
            {seasonNumber} - EP.{episodeNumber}
          </p>
          <p className="text-white/60 font-medium mt-1 text-sm">
            {duration} min
          </p>
          {synopsis && (
            <p className="text-description max-w-[600px] mt-2">{synopsis}</p>
          )}
        </div>
      </div>

      <div className="shrink-0 w-32 h-20 rounded-md overflow-hidden">
        <Image
          src={image}
          alt="Video background"
          className="h-full w-full object-cover object-center opacity-60 group-hover:opacity-100 transition-opacity duration-300"
          width={128}
          height={80}
        />
      </div>
    </li>
  );
};
