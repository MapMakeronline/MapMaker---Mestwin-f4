"use client"

import { useState } from "react"
import LayerTree from "@/components/layer-tree/LayerTree"
import type { LayerNode } from "@/types/layers"

const demoLayerData: LayerNode[] = [
  {
    id: "demo-root-1",
    name: "Granica otuliny Parku Krajobrazowego",
    visible: true,
    type: "polygon",
    layerIds: ["demo-layer-1"],
  },
  {
    id: "demo-root-2",
    name: "Obszary o szczególnej wartości przyrodniczej",
    visible: true,
    type: "polygon",
    layerIds: ["demo-layer-2"],
  },
  {
    id: "demo-root-3",
    name: "Źródła i wwiercyska",
    visible: false,
    type: "point",
    layerIds: ["demo-layer-3"],
  },
  {
    id: "demo-root-4",
    name: "Sieć gazowa średniego ciśnienia",
    visible: true,
    type: "line",
    layerIds: ["demo-layer-4"],
  },
  {
    id: "demo-root-5",
    name: "Rurociąg tlenu do huty",
    visible: false,
    type: "line",
    layerIds: ["demo-layer-5"],
  },
  {
    id: "demo-root-6",
    name: "Ortofotomapa",
    visible: true,
    type: "raster",
    layerIds: ["demo-layer-6"],
  },
  {
    id: "demo-root-7",
    name: "WMS - Mapa topograficzna",
    visible: false,
    type: "wms",
    layerIds: ["demo-layer-7"],
  },
  {
    id: "demo-group-1",
    name: "Infrastruktura",
    visible: true,
    type: "group",
    children: [
      {
        id: "demo-child-1-1",
        name: "Stacje transformatorowe",
        visible: true,
        type: "point",
        layerIds: ["demo-child-1-1-layer"],
      },
      {
        id: "demo-child-1-2",
        name: "Linie energetyczne",
        visible: false,
        type: "line",
        layerIds: ["demo-child-1-2-layer"],
      },
      {
        id: "demo-child-1-3",
        name: "Strefy ochronne",
        visible: true,
        type: "polygon",
        layerIds: ["demo-child-1-3-layer"],
      },
    ],
  },
  {
    id: "demo-group-2",
    name: "Dane satelitarne",
    visible: false,
    type: "group",
    children: [
      {
        id: "demo-child-2-1",
        name: "Sentinel-2",
        visible: false,
        type: "raster",
        layerIds: ["demo-child-2-1-layer"],
        children: [
          {
            id: "demo-grandchild-2-1-1",
            name: "RGB kompozyt",
            visible: false,
            type: "raster",
            layerIds: ["demo-grandchild-2-1-1-layer"],
          },
          {
            id: "demo-grandchild-2-1-2",
            name: "NDVI",
            visible: false,
            type: "raster",
            layerIds: ["demo-grandchild-2-1-2-layer"],
          },
        ],
      },
    ],
  },
]

export default function LayersDemo() {
  const [isVisible, setIsVisible] = useState(true)

  const handleLayerToggle = (node: LayerNode, visible: boolean) => {
    console.log(`Demo: Layer ${node.name} (${node.type}) visibility changed to: ${visible}`)
    console.log(`Layer IDs affected:`, node.layerIds)
  }

  return (
    <div className="h-screen flex bg-gray-900 overflow-hidden">
      <LayerTree
        data={demoLayerData}
        isVisible={isVisible}
        onTogglePanel={() => setIsVisible(!isVisible)}
        onToggleVisibility={handleLayerToggle}
      />

      {/* Demo Content Area */}
      <div className="flex-1 relative bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Layer Tree Demo</h1>
          <p className="text-lg mb-8">Test the new layer tree with type-specific icons</p>
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 max-w-md">
            <h2 className="text-xl font-semibold mb-4">Features Demonstrated:</h2>
            <ul className="text-left space-y-2">
              <li>✓ Layer type icons (point, line, polygon, raster, WMS)</li>
              <li>✓ Hierarchical layer structure</li>
              <li>✓ Checkbox visibility controls</li>
              <li>✓ Expand/collapse functionality</li>
              <li>✓ Color-coded icons by layer type</li>
              <li>✓ Semi-transparent backdrop</li>
              <li>✓ Toggle panel visibility</li>
              <li>✓ Console logging for layer changes</li>
            </ul>
          </div>
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 max-w-md mt-4">
            <h3 className="text-lg font-semibold mb-2">Icon Legend:</h3>
            <div className="text-left text-sm space-y-1">
              <div>🟢 Point layers (green)</div>
              <div>🔵 Line layers (blue)</div>
              <div>🟡 Polygon layers (amber)</div>
              <div>🟣 Raster layers (purple)</div>
              <div>🔴 WMS layers (red)</div>
              <div>⚪ Groups (gray)</div>
            </div>
          </div>
          <p className="text-sm mt-4 opacity-75">Open browser console to see layer toggle events</p>
        </div>
      </div>
    </div>
  )
}
