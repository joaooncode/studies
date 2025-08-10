import { Trash } from "lucide-react";
import type { Task } from "../../../types";
import { Button } from "@/components/ui/button";

interface ItemProps extends Task {
  onSelect: () => void;
  isSelected?: boolean;
}

function Item({ task, time, onSelect, isSelected }: ItemProps) {
  return (
    <li
      className={`bg-muted/50 rounded-lg p-3 lg:p-4 border transition-colors duration-200 cursor-pointer ${
        isSelected
          ? "bg-primary/20 border-primary/50 shadow-lg"
          : "border-border/50 hover:bg-muted/70"
      }`}
      onClick={onSelect}
    >
      <div className="flex justify-between items-center gap-3">
        <h3 className="text-sm lg:text-base px-2 font-semibold text-foreground flex-1 min-w-0">
          <span className="truncate block">{task}</span>
        </h3>
        <span className="text-xs lg:text-sm font-medium text-muted-foreground bg-primary/10 px-2 lg:px-3 py-1 rounded-full flex-shrink-0">
          {time}
        </span>
        <Button
          variant={"destructive"}
          size={"icon"}
          onClick={(e) => {
            e.stopPropagation(); // Evita que o clique no botão selecione o item
          }}
        >
          <i>
            <Trash />
          </i>
        </Button>
      </div>
    </li>
  );
}

export default Item;
