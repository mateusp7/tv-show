import { ShowContent } from "@/components/ShowContent";
import { ShowEpisodes } from "@/components/ShowEpisodes";
import getShow from "@/services/getShow";
import { ShowImage } from "../components/ShowImage";
import { Metadata } from "next";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export async function generateMetadata(): Promise<Metadata> {
  const { show } = await getShow();

  return {
    title: show.Title,
    description: show.Synopsis,
    openGraph: {
      title: show.Title,
      description: show.Synopsis,
      images: [
        {
          url: show?.Images?.Background,
          width: 1200,
          height: 630,
          alt: show.Title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: show.Title,
      description: show.Synopsis,
      images: [show?.Images?.Background],
    },
  };
}

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { show } = await getShow();
  const { season } = await searchParams;

  return (
    <main className="min-h-screen bg-dark-one">
      <div className="relative h-[80vh] w-full overflow-hidden">
        <section className="absolute inset-0 bg-linear-to-br from-dark-one via-dark-two to-dark-three">
          <ShowImage image={show?.Images?.Background} />
        </section>
        <div className="absolute inset-0 bg-linear-to-t from-dark-one via-dark-two/60 via-50% to-transparent" />
        <ShowContent
          genres={show.Genres}
          synopsis={show.Synopsis}
          title={show.Title}
          year={show.Year}
          cast={show.Cast}
        />
      </div>
      <ShowEpisodes seasonNumber={season ? Number(season) : 1} />
    </main>
  );
}
