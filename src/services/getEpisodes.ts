import { Episode } from "@/entities/episode.type";

export default async function getEpisodes() {
  const response = await fetch(
    `https://agile-releases.s3.us-east-1.amazonaws.com/tests/episodes/SHOW123.json`,
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
}
