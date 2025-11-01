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

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-dark-one via-dark-two/60 via-50% to-transparent" />

        {/* Close Button */}
        {/* <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 z-10 bg-dark-one/20 backdrop-blur-sm hover:bg-dark-one/40 transition-smooth"
        >
          <XIcon className="h-6 w-6" />
        </Button> */}

        {/* Content Overlay */}
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
