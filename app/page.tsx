"use client"

import { useState } from "react"
import { Map } from "@/components/map/map"
import { LayerTree } from "@/components/layer-tree/layer-tree"
import { Toolbar } from "@/components/toolbar/toolbar"
import { SettingsModal } from "@/components/toolbar/settings-modal"
import { WypisWyrysModal } from "@/components/toolbar/wypis-wyrys-modal"
import { IdentyfikacjaObiektuModal } from "@/components/toolbar/identyfikacja-obiektu-modal"
import { WyszukiwanieModal } from "@/components/toolbar/wyszukiwanie-modal"
import { KontaktModal } from "@/components/toolbar/kontakt-modal"
import { SkrotyKlawiszoweModal } from "@/components/toolbar/skroty-klawiszowe-modal"

export default function GISApp() {
  const [isLayerTreeVisible, setIsLayerTreeVisible] = useState(true)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [isWypisWyrysOpen, setIsWypisWyrysOpen] = useState(false)
  const [isIdentyfikacjaObiektuOpen, setIsIdentyfikacjaObiektuOpen] = useState(false)
  const [isWyszukiwanieOpen, setIsWyszukiwanieOpen] = useState(false)
  const [isKontaktOpen, setIsKontaktOpen] = useState(false)
  const [isSkrotyKlawiszoweOpen, setIsSkrotyKlawiszoweOpen] = useState(false)

  return (
    <div className="h-screen flex bg-background overflow-hidden">
      <LayerTree isVisible={isLayerTreeVisible} onToggleVisibility={() => setIsLayerTreeVisible(!isLayerTreeVisible)} />

      {/* Main Content Area */}
      <div className="flex-1 relative">
        <Map />
      </div>

      <Toolbar
        onSettingsClick={() => setIsSettingsOpen(true)}
        onWypisWyrysClick={() => setIsWypisWyrysOpen(true)}
        onIdentyfikacjaObiektuClick={() => setIsIdentyfikacjaObiektuOpen(true)}
        onWyszukiwanieClick={() => setIsWyszukiwanieOpen(true)}
        onKontaktClick={() => setIsKontaktOpen(true)}
        onSkrotyKlawiszoweClick={() => setIsSkrotyKlawiszoweOpen(true)}
      />

      {/* Settings Modal */}
      <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />

      {/* Wypis i Wyrys Modal */}
      <WypisWyrysModal isOpen={isWypisWyrysOpen} onClose={() => setIsWypisWyrysOpen(false)} />

      {/* Object Identification Modal */}
      <IdentyfikacjaObiektuModal
        isOpen={isIdentyfikacjaObiektuOpen}
        onClose={() => setIsIdentyfikacjaObiektuOpen(false)}
      />

      {/* Search Modal */}
      <WyszukiwanieModal isOpen={isWyszukiwanieOpen} onClose={() => setIsWyszukiwanieOpen(false)} />

      {/* Contact Modal */}
      <KontaktModal isOpen={isKontaktOpen} onClose={() => setIsKontaktOpen(false)} />

      {/* Keyboard Shortcuts Modal */}
      <SkrotyKlawiszoweModal isOpen={isSkrotyKlawiszoweOpen} onClose={() => setIsSkrotyKlawiszoweOpen(false)} />
    </div>
  )
}
