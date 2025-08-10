import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface FormProps {
  onAddTask: (task: string, time: string) => void;
}

function Form({ onAddTask }: FormProps) {
  const [time, setTime] = useState("00:00:00");
  const [task, setTask] = useState("");

  function addNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Validar se os campos não estão vazios
    if (!task.trim() || !time) {
      return;
    }

    // Adicionar a nova tarefa
    onAddTask(task.trim(), time);

    // Limpar os campos do formulário
    setTask("");
    setTime("00:00:00");
  }

  return (
    <form className="space-y-4 lg:space-y-6" onSubmit={addNewTask}>
      <div className="space-y-2">
        <Label htmlFor="task" className="text-sm lg:text-base">
          Tarefa
        </Label>
        <Input
          onChange={(e) => setTask(e.target.value)}
          value={task}
          type="text"
          required
          id="task"
          placeholder="O que você quer estudar?"
          className="h-10 lg:h-12 text-sm lg:text-base"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="time" className="text-sm lg:text-base">
          Tempo
        </Label>
        <Input
          onChange={(e) => setTime(e.target.value)}
          value={time}
          type="time"
          id="time"
          required
          min="00:00:00"
          max="01:30"
          className="h-10 lg:h-12 text-sm lg:text-base"
        />
      </div>
      <div className="pt-2 lg:pt-4">
        <Button
          type="submit"
          className="w-full h-10 lg:h-12 text-sm lg:text-base"
          variant={"default"}
        >
          Adicionar Estudo
        </Button>
      </div>
    </form>
  );
}

export default Form;
