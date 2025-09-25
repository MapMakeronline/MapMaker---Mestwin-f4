"use client"

interface MaterialIconProps {
  name: string
  className?: string
  size?: number
  filled?: boolean
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700
  grade?: -25 | 0 | 200
  opticalSize?: 20 | 24 | 40 | 48
  variant?: "outlined" | "rounded" | "sharp"
}

export function MaterialIcon({
  name,
  className = "",
  size = 24,
  filled = false,
  weight = 400,
  grade = 0,
  opticalSize = 24,
  variant = "outlined",
}: MaterialIconProps) {
  const getIconClass = () => {
    switch (variant) {
      case "rounded":
        return "material-symbols-rounded"
      case "sharp":
        return "material-symbols-sharp"
      default:
        return "material-symbols-outlined"
    }
  }

  const iconClass = getIconClass()

  const style = {
    fontSize: `${size}px`,
    fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opticalSize}`,
    userSelect: "none" as const,
  }

  return (
    <span className={`${iconClass} ${className}`} style={style} aria-hidden="true">
      {name}
    </span>
  )
}

export function createMaterialIcon(name: string, defaultProps?: Partial<MaterialIconProps>) {
  return function Icon(props?: Partial<MaterialIconProps>) {
    return <MaterialIcon name={name} {...defaultProps} {...props} />
  }
}

export const CommonIcons = {
  Home: createMaterialIcon("home"),
  Settings: createMaterialIcon("settings"),
  Search: createMaterialIcon("search"),
  Close: createMaterialIcon("close"),
  Menu: createMaterialIcon("menu"),
  Add: createMaterialIcon("add"),
  Remove: createMaterialIcon("remove"),
  Edit: createMaterialIcon("edit"),
  Delete: createMaterialIcon("delete"),
  Save: createMaterialIcon("save"),
  Cancel: createMaterialIcon("cancel"),
  Check: createMaterialIcon("check"),
  ChevronLeft: createMaterialIcon("chevron_left"),
  ChevronRight: createMaterialIcon("chevron_right"),
  ChevronUp: createMaterialIcon("expand_less"),
  ChevronDown: createMaterialIcon("expand_more"),
  Visibility: createMaterialIcon("visibility"),
  VisibilityOff: createMaterialIcon("visibility_off"),
  Info: createMaterialIcon("info"),
  Warning: createMaterialIcon("warning"),
  Error: createMaterialIcon("error"),
  Success: createMaterialIcon("check_circle"),
}
