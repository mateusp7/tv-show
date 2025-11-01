import { Episode } from "@/entities/episode.type";
import env from "@/env";
import { cache } from "react";

const getEpisodes = cache(async () => {
  const response = await fetch(
    `${env.NEXT_PUBLIC_API_URL}/episodes/SHOW123.json`,
    {
      cache: "force-cache",
      next: { revalidate: 60 * 60 * 24 },
    }
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar os dados de episódios");
  }

  const data: Episode[] = await response.json();

  return {
    episodes: data,
  };
});

export default getEpisodes;
