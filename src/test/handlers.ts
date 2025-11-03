// src/test/handlers.ts
import { http, HttpResponse } from "msw";

const BASE = "https://agile-releases.s3.us-east-1.amazonaws.com/tests";

export const handlers = [
  http.get(`${BASE}/episodes/SHOW123.json`, () => {
    return HttpResponse.json([
      {
        ID: "EPI-01",
        Title: "Trabalho Noturno",
        EpisodeNumber: 1,
        SeasonNumber: 1,
        Duration: 53,
        Image: "https://example.com/ep01.jpg",
        Synopsis: "Sinopse…",
      },
      {
        ID: "EPI-02",
        Title: "Sessão Espírita",
        EpisodeNumber: 2,
        SeasonNumber: 1,
        Duration: 56,
        Image: "https://example.com/ep02.jpg",
        Synopsis: "Sinopse…",
      },
    ]);
  }),
  http.get(`${BASE}/tv-shows/SHOW123.json`, () => {
    return HttpResponse.json({
      Cast: [
        {
          ID: "PER-01",
          Name: "Josh Hartnett",
        },
        {
          ID: "PER-02",
          Name: "Eva Green",
        },
        {
          ID: "PER-03",
          Name: "Timothy Dalton",
        },
      ],
      Genres: [
        {
          ID: "GEN-01",
          Title: "Terror",
        },
        {
          ID: "GEN-02",
          Title: "Mistério",
        },
      ],
      ID: 123,
      Images: {
        Background:
          "https://agile-releases.s3.us-east-1.amazonaws.com/tests/assets/background.jpg",
      },
      Synopsis:
        "Contos de personagens clássicos como Drácula, Frankenstein e Dorian Gray estão reunidos nesta série de terror ambientada nas ruas da Londres vitoriana.",
      Title: "Penny Dreadful",
      Year: 2015,
    });
  }),
];
