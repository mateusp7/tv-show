import getShow from "@/services/getShow";
import { ShowPlayButton } from "./ShowPlayButton";
import { ShowSeasons } from "./ShowSeasons";
import { ShowGenresYear } from "./ShowGenresYear";

export const ShowContent = async () => {
  const { show } = await getShow();

  return (
    <div className="absolute bottom-0 left-0 right-0 p-8 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight text-title">
            {show?.Title}
          </h1>
          <ShowGenresYear genres={show.Genres} year={show.Year}/>
          
          <p className="max-w-2xl text-title/90 leading-relaxed">
            {show?.Synopsis}
          </p>
          
          <ShowPlayButton />
          <ShowSeasons />
        </div>
      </div>
    </div>
  );
};
