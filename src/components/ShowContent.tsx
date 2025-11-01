import { Cast } from "@/entities/cast.type";
import { Genres } from "@/entities/genres.type";
import { ShowGenresYear } from "./ShowGenresYear";
import { ShowPlayButton } from "./ShowPlayButton";
import { ShowSeasons } from "./ShowSeasons";

interface IShowContentProps {
  title: string;
  genres: Genres[];
  cast: Cast[];
  year: number;
  synopsis: string;
}

export const ShowContent = ({
  title,
  genres,
  year,
  cast,
  synopsis,
}: IShowContentProps) => {
  return (
    <article className="absolute bottom-0 left-0 right-0 p-8 animate-fade-in">
      <section className="max-w-7xl mx-auto space-y-4">
        <header className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight text-title">
            {title}
          </h1>
          <ShowGenresYear genres={genres} year={year} />
        </header>

        <p className="max-w-2xl text-title/90 leading-relaxed">{synopsis}</p>

        <section>
          <p className="text-description">
            <strong className="text-title">Elenco: </strong>
            {cast?.map((member, index) => (
              <span
                key={member.ID}
                className="hover:text-white text-description transition-discrete duration-300 cursor-default"
              >
                {member.Name}
                {index < cast.length - 1 && ", "}
              </span>
            ))}
          </p>
        </section>

        <ShowPlayButton />
        <ShowSeasons />
      </section>
    </article>
  );
};
