"use client"

import { AccessibleIconButton } from "@/components/ui/accessible-icon-button"
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
      <AccessibleIconButton
        onClick={onSkrotyKlawiszoweClick}
        customLabel="Skróty klawiszowe"
        shortcut="F1"
        className="p-3 hover:bg-secondary/80 rounded text-muted-foreground hover:text-foreground transition-colors"
      >
        <MaterialIcon name="keyboard_keys" size={24} />
      </AccessibleIconButton>

      <AccessibleIconButton
        onClick={onKontaktClick}
        labelKey="CONTACT"
        shortcut="Ctrl+M"
        className="p-3 hover:bg-secondary/80 rounded text-muted-foreground hover:text-foreground transition-colors"
      >
        <MaterialIcon name="mail" size={24} />
      </AccessibleIconButton>

      <AccessibleIconButton
        onClick={onSettingsClick}
        labelKey="SETTINGS"
        shortcut="Ctrl+,"
        className="p-3 hover:bg-secondary/80 rounded text-destructive hover:text-destructive/80 transition-colors"
      >
        <MaterialIcon name="settings" size={24} />
      </AccessibleIconButton>
    </div>
  )
}
