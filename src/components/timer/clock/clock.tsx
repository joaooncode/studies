interface ClockProps {
  time: string;
}

function Clock({ time = "00:00" }: ClockProps) {
  // Converter o tempo para os dígitos separados
  const timeParts = time.split(":");

  let displayHours = "00";
  let displayMinutes = "00";
  let displaySeconds = "00";

  if (timeParts.length === 2) {
    // Formato "MM:SS"
    displayMinutes = timeParts[0].padStart(2, "0");
    displaySeconds = timeParts[1].padStart(2, "0");
  } else if (timeParts.length === 3) {
    // Formato "HH:MM:SS"
    displayHours = timeParts[0].padStart(2, "0");
    displayMinutes = timeParts[1].padStart(2, "0");
    displaySeconds = timeParts[2].padStart(2, "0");
  }

  return (
    <div className="flex items-center justify-center space-x-1 text-3xl sm:text-4xl lg:text-6xl font-mono font-bold text-foreground">
      {timeParts.length === 3 && (
        <>
          <span className="bg-muted/50 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-lg border border-border/50">
            {displayHours.charAt(0)}
          </span>
          <span className="bg-muted/50 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-lg border border-border/50">
            {displayHours.charAt(1)}
          </span>
          <span className="text-muted-foreground px-1 sm:px-2">:</span>
        </>
      )}
      <span className="bg-muted/50 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-lg border border-border/50">
        {displayMinutes.charAt(0)}
      </span>
      <span className="bg-muted/50 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-lg border border-border/50">
        {displayMinutes.charAt(1)}
      </span>
      <span className="text-muted-foreground px-1 sm:px-2">:</span>
      <span className="bg-muted/50 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-lg border border-border/50">
        {displaySeconds.charAt(0)}
      </span>
      <span className="bg-muted/50 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-lg border border-border/50">
        {displaySeconds.charAt(1)}
      </span>
    </div>
  );
}

export default Clock;
