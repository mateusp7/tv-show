import { http, HttpResponse } from "msw";

export const handlers = [
  // Show details
  http.get(
    "https://agile-releases.s3.us-east-1.amazonaws.com/tests/tv-shows/SHOW123.json",
    () => {
      return HttpResponse.json({
        id: "SHOW123",
        title: "The Mocked Show",
        year: 2024,
        genres: ["Drama", "Sci-Fi"],
        rating: "8.6",
        overview: "A show mocked by MSW.",
        seasons: [1, 2, 3],
        cast: [
          { name: "John Doe", role: "Lead" },
          { name: "Jane Roe", role: "Support" },
        ],
        poster: "/poster.jpg",
        backdrop: "/backdrop.jpg",
      });
    }
  ),

  // Episodes
  http.get(
    "https://agile-releases.s3.us-east-1.amazonaws.com/tests/episodes/SHOW123.json",
    () => {
      return HttpResponse.json([
        { id: "ep-1", season: 1, number: 1, title: "E01 – Pilot", runtime: 48, air_date: "2024-01-01", overview: "…" },
        { id: "ep-2", season: 1, number: 2, title: "E02 – Setup", runtime: 47, air_date: "2024-01-08", overview: "…" },
      ]);
    }
  ),
];