"use client"

import { ToolbarHeader } from "./toolbar-header"
import { ToolbarMiddle } from "./toolbar-middle"
import { ToolbarFooter } from "./toolbar-footer"

interface ToolbarProps {
  className?: string
  onSettingsClick?: () => void
  onWypisWyrysClick?: () => void
  onIdentyfikacjaObiektuClick?: () => void
  onWyszukiwanieClick?: () => void
  onNarzedziaRysowaniaClick?: () => void
  onKontaktClick?: () => void
  onSkrotyKlawiszoweClick?: () => void
}

export function Toolbar({
  className = "",
  onSettingsClick,
  onWypisWyrysClick,
  onIdentyfikacjaObiektuClick,
  onWyszukiwanieClick,
  onNarzedziaRysowaniaClick,
  onKontaktClick,
  onSkrotyKlawiszoweClick,
}: ToolbarProps) {
  return (
    <div className={`w-16 h-screen bg-secondary flex flex-col ${className}`}>
      <ToolbarHeader />

      <ToolbarMiddle
        onWypisWyrysClick={onWypisWyrysClick}
        onIdentyfikacjaObiektuClick={onIdentyfikacjaObiektuClick}
        onWyszukiwanieClick={onWyszukiwanieClick}
        onNarzedziaRysowaniaClick={onNarzedziaRysowaniaClick}
      />

      <ToolbarFooter
        onSettingsClick={onSettingsClick}
        onKontaktClick={onKontaktClick}
        onSkrotyKlawiszoweClick={onSkrotyKlawiszoweClick}
      />
    </div>
  )
}
