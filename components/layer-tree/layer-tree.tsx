"use client"

import { useState } from "react"
import { MaterialIcon } from "@/components/ui/material-icon"

interface LayerTreeProps {
  className?: string
  isVisible?: boolean
  onToggleVisibility?: () => void
}

export function LayerTree({ className = "", isVisible = true, onToggleVisibility }: LayerTreeProps) {
  const [expandedLayers, setExpandedLayers] = useState<Record<string, boolean>>({
    Działki: true,
    "MIEJSCOWE PLANY ZAGOSPOD...": false,
    "RASTRY - MIEJSCOWE PLANY Z...": false,
    "PUNKTY ADRESOWE, BUDYNKI...": false,
    "OBIEKTY ZABYTKOWE, ATRAKCJE...": false,
    "INFRASTRUKTURA TECHNICZN...": false,
    "PROJEKT UCHWALONE STUDI...": false,
    "RASTRY - STUDIUM": false,
    Usługi: false,
    Pobieranie: false,
    Metadane: false,
    "Inne projekty użytkownika": false,
  })

  const [checkedLayers, setCheckedLayers] = useState<Record<string, boolean>>({
    "Obszar Rewitalizacji": true,
    Działki: true,
    "MIEJSCOWE PLANY ZAGOSPOD...": true,
    "RASTRY - MIEJSCOWE PLANY Z...": false,
    Granice: false,
    "PUNKTY ADRESOWE, BUDYNKI...": false,
    "OBSZARY OCHRONNE": false,
    "OBIEKTY ZABYTKOWE, ATRAKCJE...": false,
    "INFRASTRUKTURA TECHNICZN...": false,
    "WŁASNOŚĆ DZIAŁEK": false,
    "UCHWALONE STUDIUM UWAR...": false,
    "PROJEKT UCHWALONE STUDI...": false,
    "RASTRY - STUDIUM": false,
  })

  const toggleLayer = (layerName: string) => {
    setExpandedLayers((prev) => ({
      ...prev,
      [layerName]: !prev[layerName],
    }))
  }

  const toggleLayerCheck = (layerName: string) => {
    setCheckedLayers((prev) => ({
      ...prev,
      [layerName]: !prev[layerName],
    }))
  }

  return (
    <div className="relative">
      <div
        className={`${isVisible ? "w-80" : "w-0"} h-screen bg-gray-800 text-white flex flex-col transition-all duration-300 ease-in-out overflow-hidden ${className}`}
      >
        {/* Header Section - Fixed at top */}
        <div className="flex-shrink-0 p-4 border-b border-gray-700">
          <h1 className="text-lg font-semibold mb-3">ogrodzieniecip</h1>

          {/* Toolbar Icons */}
          <div className="flex items-center gap-1 mb-3">
            <button className="p-1 hover:bg-gray-700 rounded">
              <MaterialIcon name="visibility" className="w-4 h-4" />
            </button>
            <button className="p-1 hover:bg-gray-700 rounded">
              <MaterialIcon name="crop_square" className="w-4 h-4" />
            </button>
            <button className="p-1 hover:bg-gray-700 rounded">
              <MaterialIcon name="radio_button_unchecked" className="w-4 h-4" />
            </button>
            <button className="p-1 hover:bg-gray-700 rounded">
              <MaterialIcon name="add" className="w-4 h-4" />
            </button>
            <button className="p-1 hover:bg-gray-700 rounded">
              <MaterialIcon name="remove" className="w-4 h-4" />
            </button>
            <button className="p-1 hover:bg-gray-700 rounded">
              <MaterialIcon name="my_location" className="w-4 h-4" />
            </button>
            <button className="p-1 hover:bg-gray-700 rounded">
              <MaterialIcon name="settings" className="w-4 h-4" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Znajdź warstwę lub grupę"
              className="w-full bg-gray-700 text-white px-3 py-2 rounded text-sm placeholder-gray-400"
            />
          </div>
        </div>

        {/* Layers Section - Scrollable middle section */}
        <div className="flex-1 overflow-y-auto p-2">
          {/* Special Layers */}
          <div className="mb-2">
            <div className="flex items-center gap-2 py-1 px-2 hover:bg-gray-700 rounded text-sm">
              <input
                type="checkbox"
                checked={checkedLayers["Obszar Rewitalizacji"]}
                onChange={() => toggleLayerCheck("Obszar Rewitalizacji")}
                className="w-4 h-4"
              />
              <span className="text-red-400">⟲</span>
              <span>Obszar Rewitalizacji</span>
              <div className="ml-auto flex gap-1">
                <button className="p-1 hover:bg-gray-600 rounded">
                  <MaterialIcon name="visibility" className="w-3 h-3" />
                </button>
                <button className="p-1 hover:bg-gray-600 rounded">
                  <MaterialIcon name="settings" className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Main Layers */}
          {[
            { name: "Działki", hasChildren: true, icon: "📁" },
            { name: "MIEJSCOWE PLANY ZAGOSPOD...", hasChildren: true, icon: "📁" },
            { name: "RASTRY - MIEJSCOWE PLANY Z...", hasChildren: true, icon: "📁" },
            { name: "Granice", hasChildren: false, icon: "📁" },
            { name: "PUNKTY ADRESOWE, BUDYNKI...", hasChildren: true, icon: "📁" },
            { name: "OBSZARY OCHRONNE", hasChildren: false, icon: "📁" },
            { name: "OBIEKTY ZABYTKOWE, ATRAKCJE...", hasChildren: true, icon: "📁" },
            { name: "INFRASTRUKTURA TECHNICZN...", hasChildren: true, icon: "📁" },
            { name: "WŁASNOŚĆ DZIAŁEK", hasChildren: false, icon: "📁" },
            { name: "UCHWALONE STUDIUM UWAR...", hasChildren: true, icon: "📁" },
            { name: "PROJEKT UCHWALONE STUDI...", hasChildren: true, icon: "📁" },
            { name: "RASTRY - STUDIUM", hasChildren: false, icon: "📁" },
          ].map((layer) => (
            <div key={layer.name} className="mb-1">
              <div className="flex items-center gap-2 py-1 px-2 hover:bg-gray-700 rounded text-sm">
                {layer.hasChildren && (
                  <button onClick={() => toggleLayer(layer.name)} className="p-0.5">
                    {expandedLayers[layer.name] ? (
                      <MaterialIcon name="expand_more" className="w-3 h-3" />
                    ) : (
                      <MaterialIcon name="chevron_right" className="w-3 h-3" />
                    )}
                  </button>
                )}
                {!layer.hasChildren && <div className="w-4" />}
                <input
                  type="checkbox"
                  checked={checkedLayers[layer.name] || false}
                  onChange={() => toggleLayerCheck(layer.name)}
                  className="w-4 h-4"
                />
                <span className="text-blue-400">{layer.icon}</span>
                <span className="flex-1">{layer.name}</span>
                <div className="flex gap-1">
                  <button className="p-1 hover:bg-gray-600 rounded">
                    <MaterialIcon name="visibility" className="w-3 h-3" />
                  </button>
                  <button className="p-1 hover:bg-gray-600 rounded">
                    <MaterialIcon name="settings" className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Child layers for Działki */}
              {layer.name === "Działki" && expandedLayers["Działki"] && (
                <div className="ml-6">
                  {["(< 1:10000) Działki starost...", "KOWR - działki", "(< 1:10000) Działki starost..."].map(
                    (childLayer) => (
                      <div
                        key={childLayer}
                        className="flex items-center gap-2 py-1 px-2 hover:bg-gray-700 rounded text-sm"
                      >
                        <input
                          type="checkbox"
                          checked={checkedLayers[childLayer] || false}
                          onChange={() => toggleLayerCheck(childLayer)}
                          className="w-4 h-4"
                        />
                        <span className="text-red-400">⟲</span>
                        <span className="flex-1">{childLayer}</span>
                        <div className="flex gap-1">
                          <button className="p-1 hover:bg-gray-600 rounded">
                            <MaterialIcon name="visibility" className="w-3 h-3" />
                          </button>
                          <button className="p-1 hover:bg-gray-600 rounded">
                            <MaterialIcon name="settings" className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Settings Section - Fixed at bottom */}
        <div className="flex-shrink-0 border-t border-gray-700 p-4">
          <h3 className="text-sm font-semibold mb-2">Właściwości projektu</h3>

          {["Usługi", "Pobieranie", "Metadane", "Inne projekty użytkownika"].map((section) => (
            <div key={section} className="mb-1">
              <button
                onClick={() => toggleLayer(section)}
                className="flex items-center gap-2 w-full py-1 px-2 hover:bg-gray-700 rounded text-sm"
              >
                {expandedLayers[section] ? (
                  <MaterialIcon name="expand_more" className="w-3 h-3" />
                ) : (
                  <MaterialIcon name="chevron_right" className="w-3 h-3" />
                )}
                <span>{section}</span>
              </button>
              {section === "Usługi" && expandedLayers["Usługi"] && (
                <div className="ml-4 text-xs text-gray-400 py-1">Brak udostępnionych usług</div>
              )}
            </div>
          ))}

          <div className="mt-4">
            <h4 className="text-sm font-semibold mb-2">Wybór mapy podkładowej</h4>
            <select className="w-full bg-gray-700 text-white px-3 py-1 rounded text-sm">
              <option>Google Maps</option>
            </select>
          </div>

          <div className="mt-2 text-xs text-gray-400">Rozpocznij poradnik</div>
        </div>
      </div>

      <div
        className={`absolute top-4 z-50 flex flex-col gap-1 transition-all duration-300 ease-in-out ${
          isVisible ? "left-[320px]" : "left-4"
        }`}
        style={{
          transform: isVisible ? "translateX(-40px)" : "translateX(0)",
        }}
      >
        <button
          onClick={onToggleVisibility}
          className="w-8 h-8 bg-gray-800 text-white rounded shadow-lg hover:bg-gray-700 flex items-center justify-center"
          title={isVisible ? "Ukryj drzewo warstw" : "Pokaż drzewo warstw"}
        >
          {isVisible ? (
            <MaterialIcon name="chevron_left" className="w-4 h-4" />
          ) : (
            <MaterialIcon name="chevron_right" className="w-4 h-4" />
          )}
        </button>
        <button
          className="w-8 h-8 bg-gray-800 text-white rounded shadow-lg hover:bg-gray-700 flex items-center justify-center opacity-50 cursor-not-allowed"
          title="Tryb pływający (niedostępny)"
          disabled
        >
          <MaterialIcon name="open_in_new" className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
