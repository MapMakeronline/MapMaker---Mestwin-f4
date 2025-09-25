"use client"

import { AccessibleIconButton } from "@/components/ui/accessible-icon-button"
import { MaterialIcon } from "@/components/ui/material-icon"

interface ToolbarHeaderProps {
  className?: string
}

export function ToolbarHeader({ className = "" }: ToolbarHeaderProps) {
  return (
    <div className={`flex-shrink-0 flex flex-col items-center py-4 ${className}`}>
      <AccessibleIconButton
        labelKey="HOME"
        shortcut="Alt+H"
        color="error"
        sx={{
          color: "error.main",
          "&:hover": {
            backgroundColor: "action.hover",
          },
        }}
      >
        <MaterialIcon name="home" size={24} />
      </AccessibleIconButton>
    </div>
  )
}
