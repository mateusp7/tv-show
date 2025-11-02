import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ShowGenresYear } from "./ShowGenresYear";
import { Genres } from "@/entities/genres.type";

const mockGenres: Genres[] = [
  {
    ID: "AB23",
    Title: "Horror"
  },
  {
    ID: "AB24",
    Title: "Terror"
  }
] 

describe("<ShowGenresYear />", () => {
  it("should show ShowGenresYear content", () => {
    render(<ShowGenresYear genres={mockGenres} year={2014}/>)

    const content = screen.getByTestId("show-genresyear-content")

    expect(content).toBeInTheDocument()
  })

  it("should render correclty passed data", () => {
    render(<ShowGenresYear genres={mockGenres} year={2014}/>)

    const content = screen.getByTestId("show-genresyear-content")

    expect(content).toHaveTextContent("Horror")
    expect(content).toHaveTextContent("Terror")
    expect(content).toHaveTextContent("2014")
  })
})