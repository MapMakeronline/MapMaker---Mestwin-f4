"use client"

import { useState } from "react"
import {
  Checkbox,
  IconButton,
  Tooltip,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material"
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import PlaceIcon from "@mui/icons-material/Place"
import TimelineIcon from "@mui/icons-material/Timeline"
import CropFreeIcon from "@mui/icons-material/CropFree"
import ImageIcon from "@mui/icons-material/Image"
import PublicIcon from "@mui/icons-material/Public"
import FolderIcon from "@mui/icons-material/Folder"
import { MaterialIcon } from "@/components/ui/material-icon"
import type { LayerNode, LayerType } from "@/types/layers"

type Props = {
  data: LayerNode[]
  onToggleVisibility?: (node: LayerNode, visible: boolean) => void // tu podpinamy mapę
  className?: string
  isVisible?: boolean
  onTogglePanel?: () => void
}

const getLayerTypeIcon = (type?: LayerType) => {
  switch (type) {
    case "point":
      return <PlaceIcon sx={{ fontSize: 16, color: "#10b981" }} />
    case "line":
      return <TimelineIcon sx={{ fontSize: 16, color: "#3b82f6" }} />
    case "polygon":
      return <CropFreeIcon sx={{ fontSize: 16, color: "#f59e0b" }} />
    case "raster":
      return <ImageIcon sx={{ fontSize: 16, color: "#8b5cf6" }} />
    case "wms":
      return <PublicIcon sx={{ fontSize: 16, color: "#ef4444" }} />
    case "group":
      return <FolderIcon sx={{ fontSize: 16, color: "#6b7280" }} />
    default:
      return <FolderIcon sx={{ fontSize: 16, color: "#6b7280" }} />
  }
}

export default function LayerTree({ data, onToggleVisibility, className, isVisible = true, onTogglePanel }: Props) {
  const [state, setState] = useState<Record<string, boolean>>(
    Object.fromEntries(flatten(data).map((n) => [n.id, !!n.visible])),
  )

  const [expanded, setExpanded] = useState<Record<string, boolean>>(
    Object.fromEntries(data.filter((n) => n.visible && n.children).map((n) => [n.id, true])),
  )

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedMap, setSelectedMap] = useState("Google Maps")

  const handleCheck = (node: LayerNode) => {
    const next = !state[node.id]
    setState((s) => ({ ...s, [node.id]: next }))
    onToggleVisibility?.(node, next)
  }

  const handleExpand = (nodeId: string) => {
    setExpanded((prev) => ({ ...prev, [nodeId]: !prev[nodeId] }))
  }

  const renderTreeNode = (node: LayerNode, level = 0) => {
    const hasChildren = node.children && node.children.length > 0
    const isExpanded = expanded[node.id]
    const isChecked = !!state[node.id]

    return (
      <div key={node.id}>
        <ListItem
          disablePadding
          sx={{
            pl: level * 2,
            "&:hover": {
              backgroundColor: "rgba(75, 85, 99, 0.5)",
            },
          }}
        >
          <ListItemButton
            onClick={() => hasChildren && handleExpand(node.id)}
            sx={{
              minHeight: 32,
              px: 1,
              py: 0.5,
            }}
          >
            <ListItemIcon sx={{ minWidth: 24 }}>
              {hasChildren ? (
                isExpanded ? (
                  <ExpandMoreIcon sx={{ color: "white", fontSize: 16 }} />
                ) : (
                  <ChevronRightIcon sx={{ color: "white", fontSize: 16 }} />
                )
              ) : (
                <div style={{ width: 16 }} />
              )}
            </ListItemIcon>

            <Checkbox
              size="small"
              checked={isChecked}
              onChange={() => handleCheck(node)}
              disabled={node.disabled}
              sx={{
                color: "rgba(156, 163, 175, 1)",
                "&.Mui-checked": {
                  color: "rgba(59, 130, 246, 1)",
                },
                padding: 0,
                mr: 1,
              }}
            />

            <ListItemIcon sx={{ minWidth: 20, mr: 1 }}>{getLayerTypeIcon(node.type)}</ListItemIcon>

            <ListItemText
              primary={node.name}
              sx={{
                "& .MuiListItemText-primary": {
                  color: "white",
                  fontSize: "0.875rem",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                },
              }}
            />

            <Tooltip title={isChecked ? "Ukryj warstwę" : "Pokaż warstwę"}>
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation()
                  handleCheck(node)
                }}
                sx={{ color: "white", p: 0.5 }}
              >
                {isChecked ? <VisibilityIcon fontSize="small" /> : <VisibilityOffIcon fontSize="small" />}
              </IconButton>
            </Tooltip>
          </ListItemButton>
        </ListItem>

        {hasChildren && (
          <Collapse in={isExpanded} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {node.children!.map((child) => renderTreeNode(child, level + 1))}
            </List>
          </Collapse>
        )}
      </div>
    )
  }

  return (
    <div className="relative">
      <div
        className={`${isVisible ? "w-80" : "w-0"} h-screen bg-gray-800 text-white flex flex-col transition-all duration-300 ease-in-out overflow-hidden ${className ?? ""}`}
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
          <TextField
            placeholder="Znajdź warstwę lub grupę"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            size="small"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "rgba(55, 65, 81, 1)",
                color: "white",
                "& fieldset": {
                  borderColor: "rgba(75, 85, 99, 1)",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(107, 114, 128, 1)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "rgba(147, 197, 253, 1)",
                },
              },
              "& .MuiOutlinedInput-input": {
                color: "white",
                "&::placeholder": {
                  color: "rgba(156, 163, 175, 1)",
                  opacity: 1,
                },
              },
            }}
          />
        </div>

        {/* Layers Section - Scrollable middle section with custom tree */}
        <div className="flex-1 overflow-y-auto layer-tree-panel bg-gray-900/60">
          <List
            component="nav"
            aria-label="Layer tree"
            sx={{
              width: "100%",
              bgcolor: "transparent",
              p: 1,
            }}
          >
            {data.map((node) => renderTreeNode(node))}
          </List>
        </div>

        {/* Settings Section - Fixed at bottom */}
        <div className="flex-shrink-0 border-t border-gray-700 p-4">
          <h3 className="text-sm font-semibold mb-2">Właściwości projektu</h3>

          <div className="mt-4">
            <h4 className="text-sm font-semibold mb-2">Wybór mapy podkładowej</h4>
            <FormControl fullWidth size="small">
              <Select
                value={selectedMap}
                onChange={(e) => setSelectedMap(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "rgba(55, 65, 81, 1)",
                    color: "white",
                    "& fieldset": {
                      borderColor: "rgba(75, 85, 99, 1)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(107, 114, 128, 1)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "rgba(147, 197, 253, 1)",
                    },
                  },
                  "& .MuiSelect-select": {
                    color: "white",
                  },
                  "& .MuiSvgIcon-root": {
                    color: "white",
                  },
                }}
              >
                <MenuItem value="Google Maps">Google Maps</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="mt-2 text-xs text-gray-400">Rozpocznij poradnik</div>
        </div>
      </div>

      {/* Toggle buttons */}
      <div
        className={`absolute top-4 z-50 flex flex-col gap-1 transition-all duration-300 ease-in-out ${
          isVisible ? "left-[320px]" : "left-4"
        }`}
        style={{
          transform: isVisible ? "translateX(-40px)" : "translateX(0)",
        }}
      >
        <button
          onClick={onTogglePanel}
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

function flatten(nodes: LayerNode[]): LayerNode[] {
  return nodes.flatMap((n) => [n, ...(n.children ? flatten(n.children) : [])])
}
