"use client"

import { IconButton } from "@mui/material"
import { MaterialIcon } from "@/components/ui/material-icon"

interface ToolbarHeaderProps {
  className?: string
}

export function ToolbarHeader({ className = "" }: ToolbarHeaderProps) {
  return (
    <div className={`flex-shrink-0 flex flex-col items-center py-4 ${className}`}>
      <IconButton
        color="error"
        title="Strona główna"
        sx={{
          color: "error.main",
          "&:hover": {
            backgroundColor: "action.hover",
          },
        }}
      >
        <MaterialIcon name="home" size={24} />
      </IconButton>
    </div>
  )
}
