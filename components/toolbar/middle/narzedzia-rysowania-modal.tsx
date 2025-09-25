"use client"

import type React from "react"

import { useState } from "react"
import { Modal } from "@/components/ui/modal"
import { Button, Typography, Grid, Card, CardContent, Box, Alert, useTheme, IconButton, Tooltip } from "@mui/material"
import {
  RadioButtonUnchecked,
  TrendingUp,
  Home,
  Circle,
  Percent,
  Layers,
  MyLocation,
  CropSquare,
  Settings,
  Menu,
  Edit,
  Architecture,
  Straighten,
  GpsFixed,
  Clear,
  Draw,
  Stop,
  Info,
} from "@mui/icons-material"

interface DrawingTool {
  id: string
  name: string
  icon: React.ReactNode
  category: "basic" | "advanced"
  color?: string
}

interface NarzedziaRysowaniaModalProps {
  isOpen: boolean
  onClose: () => void
}

export function NarzedziaRysowaniaModal({ isOpen, onClose }: NarzedziaRysowaniaModalProps) {
  const [selectedTool, setSelectedTool] = useState<string | null>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const theme = useTheme()

  const basicTools: DrawingTool[] = [
    { id: "select", name: "Wybierz", icon: <RadioButtonUnchecked />, category: "basic" },
    { id: "line", name: "Linia", icon: <TrendingUp />, category: "basic" },
    { id: "polygon", name: "Wielokąt", icon: <Home />, category: "basic" },
    { id: "circle", name: "Okrąg", icon: <Circle />, category: "basic" },
    { id: "percentage", name: "Procent", icon: <Percent />, category: "basic" },
  ]

  const advancedTools: DrawingTool[] = [
    { id: "layers", name: "Warstwy", icon: <Layers />, category: "advanced" },
    { id: "crosshair", name: "Celownik", icon: <MyLocation />, category: "advanced" },
    { id: "rectangle", name: "Prostokąt", icon: <CropSquare />, category: "advanced" },
    { id: "settings", name: "Ustawienia", icon: <Settings />, category: "advanced" },
    { id: "menu", name: "Menu", icon: <Menu />, category: "advanced" },
  ]

  const rightTools: DrawingTool[] = [
    { id: "pencil", name: "Ołówek", icon: <Edit />, category: "basic", color: "error" },
    { id: "compass", name: "Cyrkiel", icon: <Architecture />, category: "basic", color: "error" },
    { id: "ruler", name: "Linijka", icon: <Straighten />, category: "basic", color: "error" },
    { id: "target", name: "Cel", icon: <GpsFixed />, category: "basic", color: "error" },
  ]

  const handleToolSelect = (toolId: string) => {
    setSelectedTool(toolId)
    console.log(`[v0] Selected drawing tool: ${toolId}`)
  }

  const handleStartDrawing = () => {
    if (selectedTool) {
      setIsDrawing(true)
      console.log(`[v0] Started drawing with tool: ${selectedTool}`)
    }
  }

  const handleStopDrawing = () => {
    setIsDrawing(false)
    console.log(`[v0] Stopped drawing`)
  }

  const handleClearAll = () => {
    setSelectedTool(null)
    setIsDrawing(false)
    console.log(`[v0] Cleared all drawing tools`)
  }

  const renderToolGrid = (tools: DrawingTool[], title: string) => (
    <Box sx={{ mb: 3 }}>
      <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
        {title}
      </Typography>
      <Grid container spacing={1}>
        {tools.map((tool) => (
          <Grid item xs={2.4} key={tool.id}>
            <Tooltip title={tool.name}>
              <IconButton
                onClick={() => handleToolSelect(tool.id)}
                color={selectedTool === tool.id ? "primary" : "default"}
                sx={{
                  width: 40,
                  height: 40,
                  border: selectedTool === tool.id ? 2 : 1,
                  borderColor: selectedTool === tool.id ? "primary.main" : "divider",
                  backgroundColor: selectedTool === tool.id ? "primary.main" : "transparent",
                  color:
                    tool.color === "error"
                      ? "error.main"
                      : selectedTool === tool.id
                        ? "primary.contrastText"
                        : "text.primary",
                  "&:hover": {
                    backgroundColor: selectedTool === tool.id ? "primary.dark" : "action.hover",
                  },
                }}
              >
                {tool.icon}
              </IconButton>
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </Box>
  )

  const footerContent = (
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Button variant="outlined" onClick={handleClearAll} startIcon={<Clear />} size="small">
        Wyczyść
      </Button>

      <Box sx={{ display: "flex", gap: 1 }}>
        {selectedTool && !isDrawing && (
          <Button onClick={handleStartDrawing} variant="contained" startIcon={<Draw />} size="small">
            Rozpocznij rysowanie
          </Button>
        )}

        {isDrawing && (
          <Button onClick={handleStopDrawing} variant="contained" color="error" startIcon={<Stop />} size="small">
            Zakończ rysowanie
          </Button>
        )}

        <Button variant="outlined" onClick={onClose} size="small">
          Zamknij
        </Button>
      </Box>
    </Box>
  )

  return (
    <Modal title="Narzędzia edycji" isOpen={isOpen} onClose={onClose} footer={footerContent} size="md">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {selectedTool && (
          <Alert severity="info" icon={<Info />} sx={{ backgroundColor: theme.palette.background.paper }}>
            <Typography variant="body2">
              Wybrane narzędzie:{" "}
              <strong>{basicTools.concat(advancedTools, rightTools).find((t) => t.id === selectedTool)?.name}</strong>
              {isDrawing && (
                <Typography component="span" color="success.main" sx={{ ml: 1 }}>
                  (Aktywne rysowanie)
                </Typography>
              )}
            </Typography>
          </Alert>
        )}

        <Grid container spacing={3}>
          {/* Basic and Advanced tools */}
          <Grid item xs={12} lg={8}>
            {renderToolGrid(basicTools, "Narzędzia podstawowe")}
            {renderToolGrid(advancedTools, "Narzędzia zaawansowane")}
          </Grid>

          {/* Right side tools */}
          <Grid item xs={12} lg={4}>
            <Box sx={{ borderLeft: { lg: 1 }, borderColor: "divider", pl: { lg: 2 } }}>
              {renderToolGrid(rightTools, "Narzędzia precyzyjne")}
            </Box>
          </Grid>
        </Grid>

        <Card sx={{ backgroundColor: theme.palette.background.paper }}>
          <CardContent>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              Instrukcje:
            </Typography>
            <Box component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2" color="text.secondary">
                Wybierz narzędzie z dostępnych opcji
              </Typography>
              <Typography component="li" variant="body2" color="text.secondary">
                Kliknij "Rozpocznij rysowanie" aby aktywować tryb rysowania
              </Typography>
              <Typography component="li" variant="body2" color="text.secondary">
                Użyj narzędzi na mapie zgodnie z wybraną funkcją
              </Typography>
              <Typography component="li" variant="body2" color="text.secondary">
                Kliknij "Zakończ rysowanie" aby zakończyć edycję
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Modal>
  )
}
