import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ShowContentOptions } from "./ShowContentOptions";

describe('<ShowContentOptions />', () => {
  it("should be render three options", () => {
    render(<ShowContentOptions />)

    const options = screen.getAllByTestId("button-tooltip-trigger")

    expect(options).toHaveLength(3)
  })
})