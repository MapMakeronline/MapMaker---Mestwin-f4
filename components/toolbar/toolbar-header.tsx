"use client"

import { MaterialIcon } from "@/components/ui/material-icon"

interface ToolbarHeaderProps {
  className?: string
}

export function ToolbarHeader({ className = "" }: ToolbarHeaderProps) {
  return (
    <div className={`flex-shrink-0 flex flex-col items-center py-4 ${className}`}>
      <button className="p-3 hover:bg-secondary/80 rounded text-destructive transition-colors" title="Strona główna">
        <MaterialIcon name="home" size={24} />
      </button>
    </div>
  )
}
