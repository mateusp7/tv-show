"use client";

import { Button } from "./ui/Button";
import { PlayIcon } from "lucide-react";
import { useUrlParams } from "@/hooks/useUrlParams";
import { PARAM_SEASON_NAME } from "@/lib/constants";

export const ShowPlayButton = () => {
  const { searchParams } = useUrlParams();

  const currentSeason = searchParams.get(PARAM_SEASON_NAME) ?? "1";

  return (
    <Button
      size="lg"
      className="shadow-[0_0_5px_2px_rgb(21,201,147)] font-bold"
    >
      <PlayIcon className="size-5 fill-white" />
      Iniciar Temporada {currentSeason}
    </Button>
  );
};
