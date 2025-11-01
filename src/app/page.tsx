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

      {/* <div className="max-w-7xl mx-auto px-8 py-8">
        <Tabs defaultValue="episodes" className="w-full">
          <TabsList className="bg-secondary/50 backdrop-blur-sm mb-6">
            <TabsTrigger
              value="episodes"
              className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
            >
              Episódios
            </TabsTrigger>
            <TabsTrigger
              value="cast"
              className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
            >
              Elenco
            </TabsTrigger>
            <TabsTrigger
              value="details"
              className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
            >
              Detalhes
            </TabsTrigger>
          </TabsList>

          <TabsContent value="episodes" className="mt-0">
            <ScrollArea className="h-[500px] pr-4">
              <div className="space-y-3">
                {episodes.map((episode, index) => (
                  <div
                    key={episode.id}
                    className="group flex items-start gap-4 p-4 rounded-lg bg-card hover:bg-card/80 border border-border/50 transition-smooth animate-fade-in cursor-pointer"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent group-hover:shadow-glow transition-smooth">
                      <PlayIcon className="h-5 w-5 fill-foreground group-hover:fill-accent-foreground transition-smooth" />
                    </div>

                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">
                          {episode.id}
                        </span>
                        <h3 className="font-medium truncate">
                          {episode.title}
                        </h3>
                        <span className="text-sm text-muted-foreground ml-auto">
                          {episode.duration}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground/80 leading-relaxed">
                        {episode.synopsis}
                      </p>
                    </div>

                    <div className="shrink-0 w-32 h-20 rounded-md bg-secondary overflow-hidden">
                      <img
                        src={`https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=200&h=120&fit=crop&q=80`}
                        alt={`Episode ${episode.id} thumbnail`}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-smooth"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="cast" className="mt-0">
            <div className="flex flex-wrap gap-4">
              {cast.map((member, index) => (
                <div
                  key={member.id}
                  className="group relative px-6 py-4 rounded-full bg-linear-to-r from-secondary/50 to-secondary/30 hover:from-accent/20 hover:to-accent/10 border border-border/50 hover:border-accent/50 transition-all duration-300 cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="text-lg font-medium group-hover:text-accent transition-colors duration-300">
                    {member.name}
                  </span>
                  <div className="absolute inset-0 rounded-full bg-accent/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="details" className="mt-0">
            <div className="space-y-6 animate-fade-in">
              <div className="p-6 rounded-lg bg-card border border-border/50">
                <h3 className="text-xl font-semibold mb-4">Sobre a Série</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Sombras da Noite é uma série dramática que explora os
                  limites entre o mundo conhecido e o desconhecido. Com uma
                  narrativa envolvente e personagens complexos, a série mergulha
                  em mistérios ancestrais que desafiam a compreensão humana.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Aclamada pela crítica por sua cinematografia única e
                  performances marcantes, a série conquistou audiências ao redor
                  do mundo, tornando-se um fenômeno cultural que redefine o
                  gênero de suspense psicológico.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg bg-card border border-border/50">
                  <h4 className="font-semibold mb-3">Informações</h4>
                  <dl className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Criador:</dt>
                      <dd className="font-medium">Marina Oliveira</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Temporadas:</dt>
                      <dd className="font-medium">3</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Episódios:</dt>
                      <dd className="font-medium">24</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Idioma:</dt>
                      <dd className="font-medium">Português</dd>
                    </div>
                  </dl>
                </div>

                <div className="p-6 rounded-lg bg-card border border-border/50">
                  <h4 className="font-semibold mb-3">Prêmios</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <StarIcon className="h-4 w-4 text-accent fill-accent mt-0.5" />
                      <span>Melhor Série de Drama 2024</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <StarIcon className="h-4 w-4 text-accent fill-accent mt-0.5" />
                      <span>Melhor Cinematografia</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <StarIcon className="h-4 w-4 text-accent fill-accent mt-0.5" />
                      <span>Melhor Atriz - Ana Silva</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div> */}
    </main>
  );
}
