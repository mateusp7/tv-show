import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ShowImage } from "./ShowImage";

describe("ShowImage", () => {
  it("should render the image with the correct props", () => {
    const imageUrl = "https://example.com/image.jpg";
    render(<ShowImage image={imageUrl} />);

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", expect.stringContaining("image.jpg"));
    expect(image).toHaveAttribute("alt", "Imagem da série");
    expect(image).toHaveAttribute("width", "1920");
    expect(image).toHaveAttribute("height", "1080");
  });
});
