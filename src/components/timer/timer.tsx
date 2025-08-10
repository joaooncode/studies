import Clock from "./clock/clock";
import { Button } from "../ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2 } from "lucide-react";
import type { Task } from "../../types";
import { useState, useEffect, useCallback } from "react";

interface TimerProps {
  selectedTask: Task | null;
}

function Timer({ selectedTask }: TimerProps) {
  const [isRunning, setIsRunning] = useState(false);
  const [timeInSeconds, setTimeInSeconds] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  // Converter tempo de "HH:MM" para segundos
  const timeToSeconds = useCallback((time: string) => {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 * 60 + minutes * 60;
  }, []);

  // Converter segundos para formato "HH:MM:SS" ou "MM:SS" para o clock
  const secondsToClockTime = useCallback((seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    if (hours > 0) {
      return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
    } else {
      return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
        .toString()
        .padStart(2, "0")}`;
    }
  }, []);

  // Resetar timer quando uma nova tarefa for selecionada
  useEffect(() => {
    if (selectedTask) {
      const seconds = timeToSeconds(selectedTask.time);
      setTimeInSeconds(seconds);
      setIsRunning(false);
      setShowAlert(false);
    } else {
      setTimeInSeconds(0);
      setIsRunning(false);
      setShowAlert(false);
    }
  }, [selectedTask, timeToSeconds]);

  // Timer effect
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (isRunning && timeInSeconds > 0) {
      interval = setInterval(() => {
        setTimeInSeconds((prev) => {
          const newTime = prev - 1;
          if (newTime <= 0) {
            setIsRunning(false);
            setShowAlert(true);
            return 0;
          }
          return newTime;
        });
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning, timeInSeconds]);

  // Auto-close alert after 10 seconds
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | null = null;

    if (showAlert) {
      timeout = setTimeout(() => {
        setShowAlert(false);
      }, 10000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [showAlert]);

  const handleStart = () => {
    if (selectedTask && timeInSeconds > 0) {
      setIsRunning(true);
      setShowAlert(false);
    }
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    if (selectedTask) {
      const seconds = timeToSeconds(selectedTask.time);
      setTimeInSeconds(seconds);
      setIsRunning(false);
      setShowAlert(false);
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="w-full space-y-4">
      <div className="bg-card rounded-2xl shadow-2xl border border-border p-4 lg:p-6 space-y-4 lg:space-y-6">
        <div className="text-center">
          <p className="text-muted-foreground text-xs lg:text-sm">
            {selectedTask
              ? `Tarefa selecionada: ${selectedTask.task}`
              : "Escolha um card e inicie o cronômetro"}
          </p>
        </div>

        <div className="flex justify-center">
          <Clock
            time={selectedTask ? secondsToClockTime(timeInSeconds) : "00:00"}
          />
        </div>

        <div className="flex gap-2">
          <Button
            className="flex-1"
            variant={isRunning ? "outline" : "outline"}
            disabled={!selectedTask || timeInSeconds === 0}
            onClick={isRunning ? handlePause : handleStart}
          >
            {isRunning ? "Pausar" : "Iniciar!"}
          </Button>
          <Button
            className="flex-1"
            variant="destructive"
            disabled={
              !selectedTask ||
              timeInSeconds === timeToSeconds(selectedTask?.time || "00:00")
            }
            onClick={handleReset}
          >
            Resetar
          </Button>
        </div>
      </div>

      {/* Alert quando o timer finaliza */}
      {showAlert && (
        <Alert className="fixed bottom-4 right-4 z-50 w-auto max-w-md border-blue-500/50 bg-blue-500/10 shadow-lg">
          <CheckCircle2 className="h-4 w-4 text-white" />
          <AlertTitle className="text-white">Timer Concluído!</AlertTitle>
          <AlertDescription className="text-white">
            Parabéns! Você completou a tarefa "{selectedTask?.task}" com
            sucesso.
            <Button
              variant="ghost"
              size="sm"
              className="ml-2 h-6 px-2 text-white hover:text-green-600"
              onClick={handleCloseAlert}
            >
              Fechar
            </Button>
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}

export default Timer;
