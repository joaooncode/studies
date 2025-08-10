import "./App.css";
import Form from "./components/form/form";
import List from "./components/list/list";
import Timer from "./components/timer/timer";
import { useState } from "react";
import type { Task } from "./types";

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      task: "Estudar React",
      time: "01:00",
    },
    {
      id: "2",
      task: "Estudar React Hooks",
      time: "02:00",
    },
  ]);

  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  // Função para adicionar nova tarefa
  const addTask = (task: string, time: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      task,
      time,
    };
    setTasks([...tasks, newTask]);
  };

  // Função para selecionar uma tarefa
  const selectTask = (task: Task) => {
    setSelectedTask(task);
  };

  return (
    <div className="min-h-screen w-full bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center lg:items-start justify-center">
          {/* Main card - Form and Timer */}
          <div className="w-full max-w-2xl lg:flex-1 bg-card rounded-2xl shadow-2xl border border-border p-6 lg:p-8 space-y-6 lg:space-y-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-6 lg:mb-8">
              Alura <span className="text-blue-700">Studies</span>
            </h1>
            <Form onAddTask={addTask} />
            <div className="flex justify-center">
              <Timer selectedTask={selectedTask} />
            </div>
          </div>

          {/* Tasks list */}
          <div className="w-full max-w-2xl lg:w-80 lg:flex-shrink-0">
            <List
              tasks={tasks}
              onSelectTask={selectTask}
              selectedTaskId={selectedTask?.id}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
