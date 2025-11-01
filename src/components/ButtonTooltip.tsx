import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import { cn } from "@/lib/utils";
import { TooltipProps } from "@radix-ui/react-tooltip";
import { ReactNode } from "react";
import { Button } from "./ui/Button";

interface IButtonTooltipProps {
  buttonClassName?: string;
  children: ReactNode;
  tooltipContent: string;
  tooltipOptions?: TooltipProps;
}

export const ButtonTooltip = ({
  buttonClassName,
  children,
  tooltipContent,
  tooltipOptions,
}: IButtonTooltipProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={200} {...tooltipOptions}>
        <TooltipTrigger asChild>
          <Button
            aria-label={tooltipContent}
            size="clear"
            className={cn(
              `bg-dark-one border-zinc-700 hover:bg-dark-three hover:text-title hover:border-zinc-600 text-title rounded-full size-14 group`,
              buttonClassName
            )}
            data-testid="button-tooltip-trigger"
          >
            {children}
          </Button>
        </TooltipTrigger>
        <TooltipContent
          className="bg-dark-three border-zinc-700 text-white text-lg"
          data-testid="button-tooltip-content"
        >
          <p>{tooltipContent}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
