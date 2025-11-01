import { PlusIcon, ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";
import { ButtonTooltip } from "./ButtonTooltip";

export const ShowContentOptions = () => {
  return (
    <nav className="flex flex-row gap-4">
      <ButtonTooltip tooltipContent="Adicionar a lista de favoritos">
        <PlusIcon
          size={20}
          className="group-hover:text-principal transition-all duration-300"
        />
        
      </ButtonTooltip>
      <ButtonTooltip tooltipContent="Gostei">
        <ThumbsUpIcon
          size={20}
          className="group-hover:text-principal transition-all duration-300"
        />
      </ButtonTooltip>
      <ButtonTooltip tooltipContent="Não gostei">
        <ThumbsDownIcon
          size={20}
          className="group-hover:text-principal transition-all duration-300"
        />
      </ButtonTooltip>
    </nav>
  );
};
