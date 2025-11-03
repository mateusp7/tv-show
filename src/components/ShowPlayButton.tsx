"use client";

import { useUrlParams } from "@/hooks/useUrlParams";
import { PARAM_SEASON_NAME } from "@/lib/constants";
import { PlayIcon } from "lucide-react";
import { Button } from "./ui/Button";

export const ShowPlayButton = () => {
  const { searchParams } = useUrlParams();

  const currentSeason = searchParams.get(PARAM_SEASON_NAME) ?? "1";

  return (
    <Button size="lg" className="font-bold">
      <PlayIcon className="size-5 fill-white font-bold" />
      Assistir Temporada {currentSeason}
    </Button>
  );
};
