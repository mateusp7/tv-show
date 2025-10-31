'use client'

import { Suspense, useState } from "react";
import { ShowImage } from "../components/ShowImage";
import { Button } from "../components/ui/button";
import { InfoIcon, PlayIcon, StarIcon, XIcon } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { ScrollArea } from "../components/ui/scroll-area";

const episodes = [
  {
    id: 1,
    title: "Despertar das Sombras",
    duration: "52 min",
    synopsis:
      "Uma misteriosa presença começa a assombrar a cidade. O grupo descobre pistas sobre um antigo ritual.",
  },
  {
    id: 2,
    title: "Pacto Silencioso",
    duration: "48 min",
    synopsis:
      "Segredos do passado vêm à tona quando um acordo esquecido é revelado.",
  },
  {
    id: 3,
    title: "O Ritual",
    duration: "55 min",
    synopsis:
      "A equipe tenta realizar um contra-ritual para impedir a ameaça crescente.",
  },
  {
    id: 4,
    title: "Laços de Sangue",
    duration: "50 min",
    synopsis:
      "Conexões familiares revelam verdades surpreendentes sobre as origens do mal.",
  },
  {
    id: 5,
    title: "Entre Mundos",
    duration: "53 min",
    synopsis:
      "A fronteira entre realidade e o desconhecido começa a se dissolver.",
  },
  {
    id: 6,
    title: "A Possessão",
    duration: "51 min",
    synopsis:
      "Um dos personagens principais enfrenta uma transformação aterrorizante.",
  },
  {
    id: 7,
    title: "Segredos Revelados",
    duration: "54 min",
    synopsis:
      "Todas as peças do quebra-cabeça começam a se encaixar de forma chocante.",
  },
  {
    id: 8,
    title: "O Confronto Final",
    duration: "62 min",
    synopsis:
      "A batalha decisiva entre luz e trevas chega ao seu clímax emocionante.",
  },
];

const cast = [
  {
    id: 1,
    name: "Ana Silva",
    character: "Protagonista",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Carlos Mendes",
    character: "Antagonista",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Marina Costa",
    character: "Aliada",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Pedro Santos",
    character: "Mentor",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop",
  },
];

export default function Home() {
  const [selectedSeason, setSelectedSeason] = useState("1");
  const [isPlaying, setIsPlaying] = useState(false);

  const seasons = ["1", "2", "3"];

  return (
    <main className="min-h-screen bg-dark-one">
      {/* Video Container */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        {/* Background Video Placeholder */}
        <section className="absolute inset-0 bg-linear-to-br from-dark-one via-dark-two to-dark-three">
          {/* <Suspense fallback={<p>teste</p>}>
            <ShowImage />
          
          </Suspense> */}
        </section>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-dark-one via-dark-two/60 to-transparent" />

        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 z-10 bg-dark-one/20 backdrop-blur-sm hover:bg-dark-one/40 transition-smooth"
        >
          <XIcon className="h-6 w-6" />
        </Button>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 animate-fade-in">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold tracking-tight text-title">
                {/* {showData?.Title} */}
              </h1>

              <ul className="flex flex-row items-center">
                {/* {showData?.Genres?.map((genre, index) => (
                  <li
                    key={genre.ID}
                    className="text-description uppercase font-medium"
                  >
                    {genre.Title}
                    {index < (showData.Genres?.length || 0) - 1 && (
                      <span className="mx-2">•</span>
                    )}
                  </li>
                ))} */}
                {/* <li className="text-description uppercase font-medium ml-2">
                  - {showData?.Year}
                </li> */}
              </ul>

              {/* <p className="max-w-2xl text-title/90 leading-relaxed">
                {showData?.Synopsis}
              </p> */}

              <div className="flex gap-3 pt-2">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow transition-smooth"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  <PlayIcon className="h-5 w-5 mr-2 fill-accent-foreground" />
                  Assistir
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-secondary/50 hover:bg-secondary backdrop-blur-sm transition-smooth"
                >
                  <InfoIcon className="h-5 w-5 mr-2" />
                  Mais Info
                </Button>
              </div>

              {/* Season Tabs */}
              <div className="flex gap-2 pt-2">
                {seasons.map((season) => (
                  <button
                    key={season}
                    onClick={() => setSelectedSeason(season)}
                    className={`px-6 py-2 rounded-lg font-medium transition-smooth ${
                      selectedSeason === season
                        ? "bg-accent text-accent-foreground shadow-glow"
                        : "bg-secondary/50 text-muted-foreground hover:bg-secondary backdrop-blur-sm"
                    }`}
                  >
                    Temporada {season}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-8 py-8">
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
      </div>
    </main>
  );
}
