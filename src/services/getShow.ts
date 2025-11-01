import { cache } from "react";
import env from "@/env";
import { Show } from "../entities/show.type";

const getShow = cache(async () => {
  const response = await fetch(`${env.NEXT_PUBLIC_API_URL}/tv-shows/SHOW123.json`, {
    cache: "force-cache",
    next: { revalidate: 60 * 60 * 24 },
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar os dados de apresenta��ǜo");
  }

  const data: Show = await response.json();

  return {
    show: data,
  };
});

export default getShow;
