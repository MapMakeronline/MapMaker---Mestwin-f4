"use client"

import { AccessibleIconButton } from "@/components/ui/accessible-icon-button"
import { MaterialIcon } from "@/components/ui/material-icon"

interface ToolbarMiddleProps {
  className?: string
  onWypisWyrysClick?: () => void
  onIdentyfikacjaObiektuClick?: () => void
  onWyszukiwanieClick?: () => void
  onNarzedziaRysowaniaClick?: () => void
}

export function ToolbarMiddle({
  className = "",
  onWypisWyrysClick,
  onIdentyfikacjaObiektuClick,
  onWyszukiwanieClick,
  onNarzedziaRysowaniaClick,
}: ToolbarMiddleProps) {
  return (
    <div className={`flex-1 flex flex-col items-center gap-2 overflow-y-auto px-2 py-2 ${className}`}>
      <AccessibleIconButton
        onClick={onWypisWyrysClick}
        customLabel="Wypis i wyrys"
        shortcut="Ctrl+E"
        sx={{
          color: "text.secondary",
          "&:hover": {
            color: "text.primary",
            backgroundColor: "action.hover",
          },
        }}
      >
        <MaterialIcon name="description" size={24} />
      </AccessibleIconButton>

      <AccessibleIconButton
        onClick={onIdentyfikacjaObiektuClick}
        customLabel="Identyfikacja obiektu"
        shortcut="Ctrl+I"
        sx={{
          color: "text.secondary",
          "&:hover": {
            color: "text.primary",
            backgroundColor: "action.hover",
          },
        }}
      >
        <MaterialIcon name="info" size={24} />
      </AccessibleIconButton>

      <AccessibleIconButton
        onClick={onWyszukiwanieClick}
        labelKey="SEARCH"
        shortcut="Ctrl+F"
        sx={{
          color: "text.secondary",
          "&:hover": {
            color: "text.primary",
            backgroundColor: "action.hover",
          },
        }}
      >
        <MaterialIcon name="search" size={24} />
      </AccessibleIconButton>

      <AccessibleIconButton
        onClick={onNarzedziaRysowaniaClick}
        customLabel="Narzędzia rysowania"
        shortcut="Ctrl+D"
        sx={{
          color: "text.secondary",
          "&:hover": {
            color: "text.primary",
            backgroundColor: "action.hover",
          },
        }}
      >
        <MaterialIcon name="draw" size={24} />
      </AccessibleIconButton>
    </div>
  )
}
