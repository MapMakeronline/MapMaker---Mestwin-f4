"use client"

import { MaterialIcon } from "@/components/ui/material-icon"

interface ToolbarMiddleProps {
  className?: string
  onWypisWyrysClick?: () => void
  onIdentyfikacjaObiektuClick?: () => void
  onWyszukiwanieClick?: () => void
}

export function ToolbarMiddle({
  className = "",
  onWypisWyrysClick,
  onIdentyfikacjaObiektuClick,
  onWyszukiwanieClick,
}: ToolbarMiddleProps) {
  return (
    <div className={`flex-1 flex flex-col items-center gap-2 overflow-y-auto px-2 py-2 ${className}`}>
      <button
        className="p-3 hover:bg-secondary/80 rounded text-muted-foreground hover:text-foreground transition-colors"
        onClick={onWypisWyrysClick}
        title="Wypis i wyrys"
      >
        <MaterialIcon name="description" size={24} />
      </button>

      <button
        className="p-3 hover:bg-secondary/80 rounded text-muted-foreground hover:text-foreground transition-colors"
        onClick={onIdentyfikacjaObiektuClick}
        title="Identyfikacja obiektu"
      >
        <MaterialIcon name="info" size={24} />
      </button>

      <button
        className="p-3 hover:bg-secondary/80 rounded text-muted-foreground hover:text-foreground transition-colors"
        onClick={onWyszukiwanieClick}
        title="Wyszukiwanie"
      >
        <MaterialIcon name="search" size={24} />
      </button>
    </div>
  )
}
