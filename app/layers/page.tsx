"use client"

import { useState } from "react"
import LayerTree from "@/components/layer-tree/LayerTree"
import type { LayerNode } from "@/types/layers"

const demoLayerData: LayerNode[] = [
  {
    id: "demo-root-1",
    name: "Demo Group 1",
    visible: true,
    layerIds: ["demo-layer-1"],
    children: [
      {
        id: "demo-child-1-1",
        name: "Child Layer 1.1",
        visible: true,
        layerIds: ["demo-child-1-1-layer"],
      },
      {
        id: "demo-child-1-2",
        name: "Child Layer 1.2",
        visible: false,
        layerIds: ["demo-child-1-2-layer"],
      },
    ],
  },
  {
    id: "demo-root-2",
    name: "Demo Group 2",
    visible: false,
    layerIds: ["demo-layer-2"],
    children: [
      {
        id: "demo-child-2-1",
        name: "Child Layer 2.1",
        visible: false,
        layerIds: ["demo-child-2-1-layer"],
        children: [
          {
            id: "demo-grandchild-2-1-1",
            name: "Grandchild Layer 2.1.1",
            visible: false,
            layerIds: ["demo-grandchild-2-1-1-layer"],
          },
        ],
      },
    ],
  },
  {
    id: "demo-root-3",
    name: "Simple Layer (No Children)",
    visible: true,
    layerIds: ["demo-simple-layer"],
  },
  {
    id: "demo-root-4",
    name: "Disabled Layer",
    visible: false,
    disabled: true,
    layerIds: ["demo-disabled-layer"],
  },
]

export default function LayersDemo() {
  const [isVisible, setIsVisible] = useState(true)

  const handleLayerToggle = (node: LayerNode, visible: boolean) => {
    console.log(`Demo: Layer ${node.name} visibility changed to: ${visible}`)
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
          <p className="text-lg mb-8">Test the new @mui/x-tree-view based layer tree implementation</p>
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 max-w-md">
            <h2 className="text-xl font-semibold mb-4">Features Demonstrated:</h2>
            <ul className="text-left space-y-2">
              <li>✓ @mui/x-tree-view TreeView component</li>
              <li>✓ Hierarchical layer structure</li>
              <li>✓ Checkbox visibility controls</li>
              <li>✓ Expand/collapse functionality</li>
              <li>✓ Disabled layer support</li>
              <li>✓ Semi-transparent backdrop</li>
              <li>✓ Toggle panel visibility</li>
              <li>✓ Console logging for layer changes</li>
            </ul>
          </div>
          <p className="text-sm mt-4 opacity-75">Open browser console to see layer toggle events</p>
        </div>
      </div>
    </div>
  )
}
