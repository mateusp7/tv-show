import { Episode } from "@/entities/episode.type";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Episodes } from "./Episodes";

const mockEpisodes: Episode[] = [
  {
    Duration: 53,
    EpisodeNumber: 1,
    ID: "EPI-01",
    Image:
      "https://agile-releases.s3.us-east-1.amazonaws.com/tests/assets/034570233.jpeg",
    SeasonNumber: 1,
    Synopsis:
      "Londres, 1891. A polícia investiga uma série de assassinatos, mas Sir Malcolm Murray e a bela Vanessa Ives sabem que há algo mais sombrio por trás de tudo.",
    Title: "Trabalho Noturno",
  },
  {
    Duration: 56,
    EpisodeNumber: 2,
    ID: "EPI-02",
    Image:
      "https://agile-releases.s3.us-east-1.amazonaws.com/tests/assets/0989084209.jpeg",
    SeasonNumber: 1,
    Synopsis:
      "Vanessa e Sir Malcolm vão a uma festa na casa do egiptólogo Sir Ferdinand Lyle e encontram o belo e enigmático Dorian Gray.",
    Title: "Sessão Espírita",
  },
  {
    Duration: 58,
    EpisodeNumber: 3,
    ID: "EPI-07",
    Image:
      "https://agile-releases.s3.us-east-1.amazonaws.com/tests/assets/30945834905.jpeg",
    SeasonNumber: 2,
    Synopsis:
      "Em um flashback, Vanessa conhece uma mulher que a ensina como aproveitar seus poderes e que faz um alerta sobre os perigos que a perseguem.",
    Title: "As noturnas",
  },
];

describe("<Episodes />", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should show the correclty quantity of EpisodeItem on screen", () => {
    render(<Episodes episodes={mockEpisodes} />);

    const episodeItem = screen.getAllByTestId("elementItem");

    expect(episodeItem).toHaveLength(3);
  });

  it("should show empty list of episodes", () => {
    render(<Episodes episodes={[]} />);

    const emptyMessage = screen.getByTestId("show-episodes-empty");

    expect(emptyMessage).toBeInTheDocument();
  });
});
