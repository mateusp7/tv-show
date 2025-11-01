import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Button } from "./ui/Button";

interface IButtonTooltipProps {
  buttonClassName?: string;
  children: ReactNode;
  tooltipContent: string;
}

export const ButtonTooltip = ({
  buttonClassName,
  children,
  tooltipContent,
}: IButtonTooltipProps) => {
  return (
    <Tooltip delayDuration={200}>
      <TooltipTrigger asChild>
        <Button
          aria-label="Adicionar a lista de favoritos"
          size="clear"
          className={cn(
            `bg-dark-one border-zinc-700 hover:bg-dark-three hover:text-title hover:border-zinc-600 text-title rounded-full size-14 group`,
            buttonClassName
          )}
        >
          {children}
        </Button>
      </TooltipTrigger>
      <TooltipContent className="bg-dark-three border-zinc-700 text-white text-lg">
        <p>{tooltipContent}</p>
      </TooltipContent>
    </Tooltip>
  );
};
