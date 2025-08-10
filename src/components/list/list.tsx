import Item from "./item/item";
import type { Task } from "../../types";

interface ListProps {
  tasks: Task[];
  onSelectTask: (task: Task) => void;
  selectedTaskId?: string;
}

function List({ tasks, onSelectTask, selectedTaskId }: ListProps) {
  return (
    <div className="w-full h-full">
      <div className="bg-card rounded-2xl shadow-2xl border border-border p-4 lg:p-6 h-full">
        <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-4 lg:mb-6 text-center">
          Estudos do dia
        </h2>
        <ul className="space-y-3 lg:space-y-4">
          {tasks.map((item) => (
            <Item
              {...item}
              key={item.id}
              onSelect={() => onSelectTask(item)}
              isSelected={item.id === selectedTaskId}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
