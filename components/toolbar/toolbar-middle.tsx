"use client"

import { IconButton } from "@mui/material"
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
      <IconButton
        onClick={onWypisWyrysClick}
        title="Wypis i wyrys"
        sx={{
          color: "text.secondary",
          "&:hover": {
            color: "text.primary",
            backgroundColor: "action.hover",
          },
        }}
      >
        <MaterialIcon name="description" size={24} />
      </IconButton>

      <IconButton
        onClick={onIdentyfikacjaObiektuClick}
        title="Identyfikacja obiektu"
        sx={{
          color: "text.secondary",
          "&:hover": {
            color: "text.primary",
            backgroundColor: "action.hover",
          },
        }}
      >
        <MaterialIcon name="info" size={24} />
      </IconButton>

      <IconButton
        onClick={onWyszukiwanieClick}
        title="Wyszukiwanie"
        sx={{
          color: "text.secondary",
          "&:hover": {
            color: "text.primary",
            backgroundColor: "action.hover",
          },
        }}
      >
        <MaterialIcon name="search" size={24} />
      </IconButton>

      <IconButton
        onClick={onNarzedziaRysowaniaClick}
        title="Narzędzia rysowania"
        sx={{
          color: "text.secondary",
          "&:hover": {
            color: "text.primary",
            backgroundColor: "action.hover",
          },
        }}
      >
        <MaterialIcon name="draw" size={24} />
      </IconButton>
    </div>
  )
}
