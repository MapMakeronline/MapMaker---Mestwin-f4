"use client"

import { MaterialIcon } from "@/components/ui/material-icon"

interface ToolbarFooterProps {
  className?: string
  onSettingsClick?: () => void
  onKontaktClick?: () => void
  onSkrotyKlawiszoweClick?: () => void
}

export function ToolbarFooter({
  className = "",
  onSettingsClick,
  onKontaktClick,
  onSkrotyKlawiszoweClick,
}: ToolbarFooterProps) {
  return (
    <div className={`flex-shrink-0 flex flex-col items-center py-4 gap-2 ${className}`}>
      <button
        className="p-3 hover:bg-secondary/80 rounded text-muted-foreground hover:text-foreground transition-colors"
        onClick={onSkrotyKlawiszoweClick}
        title="Skróty klawiszowe"
      >
        <MaterialIcon name="keyboard_keys" size={24} />
      </button>

      <button
        className="p-3 hover:bg-secondary/80 rounded text-muted-foreground hover:text-foreground transition-colors"
        onClick={onKontaktClick}
        title="Kontakt"
      >
        <MaterialIcon name="mail" size={24} />
      </button>

      <button
        className="p-3 hover:bg-secondary/80 rounded text-destructive hover:text-destructive/80 transition-colors"
        onClick={onSettingsClick}
        title="Ustawienia"
      >
        <MaterialIcon name="settings" size={24} />
      </button>
    </div>
  )
}
