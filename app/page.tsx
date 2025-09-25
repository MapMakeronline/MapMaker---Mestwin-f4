"use client"

import { useState } from "react"
import { Map } from "@/components/map/map"
import { LayerTree } from "@/components/layer-tree/layer-tree"
import { Toolbar } from "@/components/toolbar/toolbar"
import { SettingsModal } from "@/components/toolbar/footer/settings-modal"
import { WypisWyrysModal } from "@/components/toolbar/middle/wypis-wyrys-modal"
import { IdentyfikacjaObiektuModal } from "@/components/toolbar/middle/identyfikacja-obiektu-modal"
import { WyszukiwanieModal } from "@/components/toolbar/middle/wyszukiwanie-modal"
import { NarzedziaRysowaniaModal } from "@/components/toolbar/middle/narzedzia-rysowania-modal"
import { KontaktModal } from "@/components/toolbar/footer/kontakt-modal"
import { SkrotyKlawiszoweModal } from "@/components/toolbar/footer/skroty-klawiszowe-modal"

export default function GISApp() {
  const [isLayerTreeVisible, setIsLayerTreeVisible] = useState(true)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [isWypisWyrysOpen, setIsWypisWyrysOpen] = useState(false)
  const [isIdentyfikacjaObiektuOpen, setIsIdentyfikacjaObiektuOpen] = useState(false)
  const [isWyszukiwanieOpen, setIsWyszukiwanieOpen] = useState(false)
  const [isNarzedziaRysowaniaOpen, setIsNarzedziaRysowaniaOpen] = useState(false)
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
        onNarzedziaRysowaniaClick={() => setIsNarzedziaRysowaniaOpen(true)}
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

      <NarzedziaRysowaniaModal isOpen={isNarzedziaRysowaniaOpen} onClose={() => setIsNarzedziaRysowaniaOpen(false)} />

      {/* Contact Modal */}
      <KontaktModal isOpen={isKontaktOpen} onClose={() => setIsKontaktOpen(false)} />

      {/* Keyboard Shortcuts Modal */}
      <SkrotyKlawiszoweModal isOpen={isSkrotyKlawiszoweOpen} onClose={() => setIsSkrotyKlawiszoweOpen(false)} />
    </div>
  )
}
