"use client";

import { useUrlParams } from "@/hooks/useUrlParams";
import { PARAM_SEASON_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Button } from "./Button";

interface ISeasonItemProps {
  seasonNumber: number;
}

export const SeasonItem = ({ seasonNumber }: ISeasonItemProps) => {
  const { onUpdateUrlWithUniqueParam, searchParams } = useUrlParams();
  const router = useRouter();

  const currentSeason = searchParams.get(PARAM_SEASON_NAME) ?? "1";

  const isActive = currentSeason === seasonNumber.toString();

  const handleChangeSeason = () => {
    const updatedUrl = onUpdateUrlWithUniqueParam({
      name: PARAM_SEASON_NAME,
      value: seasonNumber.toString(),
    });

    router.replace(updatedUrl, { scroll: false });
  };

  return (
    <Button
      variant="clear"
      className={cn(
        "font-medium border-2",
        isActive
          ? "bg-dark-three hover:bg-dark-three/80 text-title border-zinc-700"
          : "bg-dark-one border-zinc-800 hover:bg-dark-three hover:text-title hover:border-zinc-600 text-title/50"
      )}
      type="button"
      onClick={handleChangeSeason}
    >
      Temporada {seasonNumber}
    </Button>
  );
};
