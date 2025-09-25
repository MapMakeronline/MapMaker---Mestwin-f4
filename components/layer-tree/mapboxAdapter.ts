import type mapboxgl from "mapbox-gl"
import type { LayerNode } from "@/types/layers"

export const makeMapboxToggle = (map: mapboxgl.Map) => (node: LayerNode, visible: boolean) => {
  ;(node.layerIds ?? []).forEach((id) => {
    if (!map.getLayer(id)) return
    map.setLayoutProperty(id, "visibility", visible ? "visible" : "none")
  })
}
