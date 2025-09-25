"use client"

import { useState } from "react"
import { Map } from "@/components/map/map"
import LayerTree from "@/components/layer-tree/LayerTree"
import { Toolbar } from "@/components/toolbar/toolbar"
import { SettingsModal } from "@/components/toolbar/footer/settings-modal"
import { WypisWyrysModal } from "@/components/toolbar/middle/wypis-wyrys-modal"
import { IdentyfikacjaObiektuModal } from "@/components/toolbar/middle/identyfikacja-obiektu-modal"
import { WyszukiwanieModal } from "@/components/toolbar/middle/wyszukiwanie-modal"
import { NarzedziaRysowaniaModal } from "@/components/toolbar/middle/narzedzia-rysowania-modal"
import { KontaktModal } from "@/components/toolbar/footer/kontakt-modal"
import { SkrotyKlawiszoweModal } from "@/components/toolbar/footer/skroty-klawiszowe-modal"
import type { LayerNode } from "@/types/layers"

const sampleLayerData: LayerNode[] = [
  {
    id: "obszar-rewitalizacji",
    name: "Obszar Rewitalizacji",
    visible: true,
    layerIds: ["rewitalizacja-layer"],
  },
  {
    id: "dzialki",
    name: "Działki",
    visible: true,
    layerIds: ["dzialki-layer"],
    children: [
      {
        id: "dzialki-starost-1",
        name: "(< 1:10000) Działki starost...",
        visible: false,
        layerIds: ["dzialki-starost-1-layer"],
      },
      {
        id: "kowr-dzialki",
        name: "KOWR - działki",
        visible: false,
        layerIds: ["kowr-dzialki-layer"],
      },
      {
        id: "dzialki-starost-2",
        name: "(< 1:10000) Działki starost...",
        visible: false,
        layerIds: ["dzialki-starost-2-layer"],
      },
    ],
  },
  {
    id: "miejscowe-plany",
    name: "MIEJSCOWE PLANY ZAGOSPOD...",
    visible: true,
    layerIds: ["miejscowe-plany-layer"],
    children: [],
  },
  {
    id: "rastry-plany",
    name: "RASTRY - MIEJSCOWE PLANY Z...",
    visible: false,
    layerIds: ["rastry-plany-layer"],
    children: [],
  },
  {
    id: "granice",
    name: "Granice",
    visible: false,
    layerIds: ["granice-layer"],
  },
  {
    id: "punkty-adresowe",
    name: "PUNKTY ADRESOWE, BUDYNKI...",
    visible: false,
    layerIds: ["punkty-adresowe-layer"],
    children: [],
  },
  {
    id: "obszary-ochronne",
    name: "OBSZARY OCHRONNE",
    visible: false,
    layerIds: ["obszary-ochronne-layer"],
  },
  {
    id: "obiekty-zabytkowe",
    name: "OBIEKTY ZABYTKOWE, ATRAKCJE...",
    visible: false,
    layerIds: ["obiekty-zabytkowe-layer"],
  },
  {
    id: "infrastruktura",
    name: "INFRASTRUKTURA TECHNICZN...",
    visible: false,
    layerIds: ["infrastruktura-layer"],
  },
  {
    id: "wlasnosc-dzialek",
    name: "WŁASNOŚĆ DZIAŁEK",
    visible: false,
    layerIds: ["wlasnosc-dzialek-layer"],
  },
  {
    id: "uchwalone-studium",
    name: "UCHWALONE STUDIUM UWAR...",
    visible: false,
    layerIds: ["uchwalone-studium-layer"],
    children: [],
  },
  {
    id: "projekt-studium",
    name: "PROJEKT UCHWALONE STUDI...",
    visible: false,
    layerIds: ["projekt-studium-layer"],
    children: [],
  },
  {
    id: "rastry-studium",
    name: "RASTRY - STUDIUM",
    visible: false,
    layerIds: ["rastry-studium-layer"],
  },
]

export default function GISApp() {
  const [isLayerTreeVisible, setIsLayerTreeVisible] = useState(true)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [isWypisWyrysOpen, setIsWypisWyrysOpen] = useState(false)
  const [isIdentyfikacjaObiektuOpen, setIsIdentyfikacjaObiektuOpen] = useState(false)
  const [isWyszukiwanieOpen, setIsWyszukiwanieOpen] = useState(false)
  const [isNarzedziaRysowaniaOpen, setIsNarzedziaRysowaniaOpen] = useState(false)
  const [isKontaktOpen, setIsKontaktOpen] = useState(false)
  const [isSkrotyKlawiszoweOpen, setIsSkrotyKlawiszoweOpen] = useState(false)

  const handleLayerToggle = (node: LayerNode, visible: boolean) => {
    console.log(`Layer ${node.name} visibility changed to: ${visible}`)
    // Tu można podpiąć adapter do mapy gdy będzie dostępny
    // makeMapboxToggle(mapRef.current!)(node, visible);
  }

  return (
    <div className="h-screen flex bg-background overflow-hidden">
      <LayerTree
        data={sampleLayerData}
        isVisible={isLayerTreeVisible}
        onTogglePanel={() => setIsLayerTreeVisible(!isLayerTreeVisible)}
        onToggleVisibility={handleLayerToggle}
      />

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
