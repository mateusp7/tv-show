import env from "@/env";
import { Show } from "../entities/show.type";

export default async function getShow() {
  const response = await fetch(
    `${env.NEXT_PUBLIC_API_URL}/tv-shows/SHOW123.json`,
    {
      cache: "force-cache",
      next: { revalidate: 60 * 60 * 24 },
    }
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar os dados de apresentação");
  }

  const data: Show = await response.json();

  return {
    show: data,
  };
}
