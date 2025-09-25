"use client"

import type React from "react"

import { useState } from "react"
import { Modal } from "@/components/ui/modal"
import { Tabs, Tab, Box, Card, CardContent, CardHeader, Typography, Chip, Button, useTheme } from "@mui/material"
import { LocationOn } from "@mui/icons-material"

import { DzialkiTab } from "../search-tabs/dzialki-tab"
import { SzczegoloweTab } from "../search-tabs/szczegolowe-tab"
import { SlowaKluczoweTab } from "../search-tabs/slowa-kluczowe-tab"
import { WyszukiwanieGlobalneTab } from "../search-tabs/wyszukiwanie-globalne-tab"

interface WyszukiwanieModalProps {
  isOpen: boolean
  onClose: () => void
}

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`search-tabpanel-${index}`}
      aria-labelledby={`search-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

export function WyszukiwanieModal({ isOpen, onClose }: WyszukiwanieModalProps) {
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [tabValue, setTabValue] = useState(0)
  const theme = useTheme()

  // Mock search results
  const mockResults = [
    {
      id: 1,
      warstwa: "Działki",
      nazwa: "Działka 123/1",
      obreb: "Obręb 1",
      opis: "Działka budowlana w centrum miasta",
    },
    {
      id: 2,
      warstwa: "Budynki",
      nazwa: "Budynek mieszkalny",
      adres: "ul. Główna 15",
      opis: "Budynek mieszkalny wielorodzinny",
    },
  ]

  const handleSearch = (type: string, data: any) => {
    console.log(`Wyszukiwanie ${type}:`, data)
    setSearchResults(mockResults)
  }

  const handleZoom = (data: any) => {
    console.log("Przybliż do:", data)
  }

  const handleShowInTable = (data: any) => {
    console.log("Pokaż w tabeli atrybutów:", data)
  }

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Wyszukiwanie" size="xl">
      <Box sx={{ width: "100%", maxHeight: "80vh", overflow: "auto" }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="search tabs"
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <Tab label="Działki" />
          <Tab label="Szczegółowe" />
          <Tab label="Słowa kluczowe" />
          <Tab label="Wyszukiwanie globalne" />
        </Tabs>

        <TabPanel value={tabValue} index={0}>
          <DzialkiTab onSearch={handleSearch} onZoom={handleZoom} />
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <SzczegoloweTab onSearch={handleSearch} onShowInTable={handleShowInTable} />
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <SlowaKluczoweTab onSearch={handleSearch} onZoom={handleZoom} />
        </TabPanel>

        <TabPanel value={tabValue} index={3}>
          <WyszukiwanieGlobalneTab onSearch={handleSearch} onZoom={handleZoom} />
        </TabPanel>

        {searchResults.length > 0 && (
          <Card sx={{ mt: 2, backgroundColor: theme.palette.background.paper }}>
            <CardHeader>
              <Typography variant="h6">Wyniki wyszukiwania</Typography>
            </CardHeader>
            <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {searchResults.map((result) => (
                <Card key={result.id} variant="outlined" sx={{ backgroundColor: theme.palette.background.default }}>
                  <CardContent>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 1 }}>
                      <Chip label={result.warstwa} variant="outlined" size="small" />
                      <Button
                        size="small"
                        variant="outlined"
                        onClick={() => handleZoom(result)}
                        startIcon={<LocationOn />}
                      >
                        Przybliż
                      </Button>
                    </Box>
                    <Typography variant="subtitle1" sx={{ mb: 1 }}>
                      {result.nazwa}
                    </Typography>
                    {result.obreb && (
                      <Typography variant="body2" color="text.secondary">
                        Obręb: {result.obreb}
                      </Typography>
                    )}
                    {result.adres && (
                      <Typography variant="body2" color="text.secondary">
                        Adres: {result.adres}
                      </Typography>
                    )}
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {result.opis}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        )}
      </Box>
    </Modal>
  )
}
