import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PlusIcon } from "lucide-react";
import { describe, expect, it } from "vitest";
import { ButtonTooltip } from "./ButtonTooltip";
import { TooltipProvider } from "./ui/Tooltip";

describe("<ButtonTooltip />", () => {
  it("should render TooltipContent when hover the button", async () => {
    const user = userEvent.setup();

    render(
      <TooltipProvider>
        <ButtonTooltip
          tooltipContent="Adicionar a lista de favoritos"
          tooltipOptions={{
            delayDuration: 0,
          }}
        >
          <PlusIcon
            size={20}
            className="group-hover:text-principal transition-all duration-300"
          />
        </ButtonTooltip>
      </TooltipProvider>
    );

    const trigger = screen.getByTestId("button-tooltip-trigger");

    await user.hover(trigger);

    const tooltipContent = screen.getByTestId("button-tooltip-content");

    expect(tooltipContent).toBeInTheDocument();
  });
});
