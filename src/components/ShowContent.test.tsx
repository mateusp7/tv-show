import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { ShowContent } from "./ShowContent";
import type { Cast } from "@/entities/cast.type";
import type { Genres } from "@/entities/genres.type";

vi.mock("./ShowGenresYear", () => ({
  ShowGenresYear: vi.fn(
    ({ genres, year }: { genres: Genres[]; year: number }) => (
      <div data-testid="ShowGenresYear-mock">{`${genres
        .map((genre) => genre.Title)
        .join(" / ")} • ${year}`}</div>
    )
  ),
}));
vi.mock("./ShowPlayButton", () => ({
  ShowPlayButton: () => <div data-testid="ShowPlayButton-mock" />,
}));
vi.mock("./ShowSeasons", () => ({
  ShowSeasons: () => <div data-testid="ShowSeasons-mock" />,
}));
vi.mock("./ShowContentOptions", () => ({
  ShowContentOptions: () => <div data-testid="ShowContentOptions-mock" />,
}));

const sampleCast: Cast[] = [
  { ID: "1", Name: "Eva Green" },
  { ID: "2", Name: "Josh Hartnett" },
  { ID: "3", Name: "Timothy Dalton" },
];

const sampleGenres: Genres[] = [
  { ID: "g1", Title: "Drama" },
  { ID: "g2", Title: "Horror" },
];

describe("<ShowContent />", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render title (h1), synopsis and children modules", () => {
    render(
      <ShowContent
        title="Penny Dreadful"
        genres={sampleGenres}
        year={2014}
        cast={sampleCast}
        synopsis="Uma série sombria em Londres vitoriana."
      />
    );

    const heading = screen.getByRole("heading", { level: 1, name: "Penny Dreadful" });
    expect(heading).toBeInTheDocument();

    expect(screen.getByText("Uma série sombria em Londres vitoriana.")).toBeInTheDocument();

    expect(screen.getByTestId("ShowGenresYear-mock")).toBeInTheDocument();
    expect(screen.getByTestId("ShowPlayButton-mock")).toBeInTheDocument();
    expect(screen.getByTestId("ShowSeasons-mock")).toBeInTheDocument();
    expect(screen.getByTestId("ShowContentOptions-mock")).toBeInTheDocument();
  });

  it("should show correclty genres", () => {
    render(
      <ShowContent
        title="Penny Dreadful"
        genres={sampleGenres}
        year={2014}
        cast={sampleCast}
        synopsis="..."
      />
    );

    // Como mockamos, validamos pelo conteúdo do mock
    expect(screen.getByTestId("ShowGenresYear-mock")).toHaveTextContent("Drama / Horror • 2014");
  });
});
