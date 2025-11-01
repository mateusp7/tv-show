import { ShowContent } from "@/components/ShowContent";
import { ShowEpisodes } from "@/components/ShowEpisodes";
import getShow from "@/services/getShow";
import { ShowImage } from "../components/ShowImage";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { show } = await getShow();
  const { season } = await searchParams;

  return (
    <main className="min-h-screen bg-dark-one">
      <div className="relative h-[60vh] w-full overflow-hidden">
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
      <ShowEpisodes seasonNumber={Number(season)} />
    </main>
  );
}
