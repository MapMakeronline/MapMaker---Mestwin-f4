export type LayerNode = {
  id: string // unikalny id w UI
  name: string // etykieta w UI
  visible?: boolean // domyślna widoczność
  layerIds?: string[] // id warstw w mapie (Mapbox/OL) sterowanych jednym węzłem
  children?: LayerNode[]
  disabled?: boolean
}
