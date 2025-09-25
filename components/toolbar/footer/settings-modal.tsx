"use client"

import { useState } from "react"
import { Modal } from "@/components/ui/modal"
import { Switch } from "@/components/ui/switch"

interface SettingsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const [settings, setSettings] = useState({
    leftPanelTransparency: false,
    rightPanelTransparency: false,
    attributeTableTransparency: false,
    showTooltips: true,
    minimizeLayerTree: false,
    assignObjectIdentification: true,
    layerEditingHints: false,
  })

  const handleSettingChange = (key: keyof typeof settings) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <Modal title="Ustawienia" isOpen={isOpen} onClose={onClose}>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-sm text-gray-300">Przezroczystość lewego panelu</label>
          <Switch
            checked={settings.leftPanelTransparency}
            onCheckedChange={() => handleSettingChange("leftPanelTransparency")}
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="text-sm text-gray-300">Przezroczystość prawego panelu</label>
          <Switch
            checked={settings.rightPanelTransparency}
            onCheckedChange={() => handleSettingChange("rightPanelTransparency")}
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="text-sm text-gray-300">Przezroczystość tabeli atrybutów</label>
          <Switch
            checked={settings.attributeTableTransparency}
            onCheckedChange={() => handleSettingChange("attributeTableTransparency")}
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="text-sm text-gray-300">Wyświetlaj podpowiedzi</label>
          <Switch checked={settings.showTooltips} onCheckedChange={() => handleSettingChange("showTooltips")} />
        </div>

        <div className="flex items-center justify-between">
          <label className="text-sm text-gray-300">Minimalizuj drzewo warstw</label>
          <Switch
            checked={settings.minimizeLayerTree}
            onCheckedChange={() => handleSettingChange("minimizeLayerTree")}
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="text-sm text-gray-300">Przypisuj identyfikacja obiektów</label>
          <Switch
            checked={settings.assignObjectIdentification}
            onCheckedChange={() => handleSettingChange("assignObjectIdentification")}
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="text-sm text-gray-300">Wskazówki do edycji warstw</label>
          <Switch
            checked={settings.layerEditingHints}
            onCheckedChange={() => handleSettingChange("layerEditingHints")}
          />
        </div>
      </div>
    </Modal>
  )
}
