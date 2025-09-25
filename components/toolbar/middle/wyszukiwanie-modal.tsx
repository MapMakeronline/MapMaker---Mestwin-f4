"use client"

import { useState } from "react"
import { Modal } from "@/components/ui/modal"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MaterialIcon } from "@/components/ui/material-icon"

import { DzialkiTab } from "../search-tabs/dzialki-tab"
import { SzczegoloweTab } from "../search-tabs/szczegolowe-tab"
import { SlowaKluczoweTab } from "../search-tabs/slowa-kluczowe-tab"
import { WyszukiwanieGlobalneTab } from "../search-tabs/wyszukiwanie-globalne-tab"

interface WyszukiwanieModalProps {
  isOpen: boolean
  onClose: () => void
}

export function WyszukiwanieModal({ isOpen, onClose }: WyszukiwanieModalProps) {
  const [searchResults, setSearchResults] = useState<any[]>([])

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

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Wyszukiwanie" size="xl">
      <div className="max-h-[80vh] overflow-y-auto">
        <Tabs defaultValue="dzialki" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="dzialki">Działki</TabsTrigger>
            <TabsTrigger value="szczegolowe">Szczegółowe</TabsTrigger>
            <TabsTrigger value="slowa">Słowa kluczowe</TabsTrigger>
            <TabsTrigger value="globalne">Wyszukiwanie globalne</TabsTrigger>
          </TabsList>

          <TabsContent value="dzialki" className="space-y-4">
            <DzialkiTab onSearch={handleSearch} onZoom={handleZoom} />
          </TabsContent>

          <TabsContent value="szczegolowe" className="space-y-4">
            <SzczegoloweTab onSearch={handleSearch} onShowInTable={handleShowInTable} />
          </TabsContent>

          <TabsContent value="slowa" className="space-y-4">
            <SlowaKluczoweTab onSearch={handleSearch} onZoom={handleZoom} />
          </TabsContent>

          <TabsContent value="globalne" className="space-y-4">
            <WyszukiwanieGlobalneTab onSearch={handleSearch} onZoom={handleZoom} />
          </TabsContent>
        </Tabs>

        {searchResults.length > 0 && (
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Wyniki wyszukiwania</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {searchResults.map((result) => (
                <div key={result.id} className="border rounded-lg p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{result.warstwa}</Badge>
                    <Button size="sm" variant="outline" onClick={() => handleZoom(result)}>
                      <MaterialIcon name="location_on" className="h-4 w-4 mr-2" />
                      Przybliż
                    </Button>
                  </div>
                  <h4 className="font-medium">{result.nazwa}</h4>
                  {result.obreb && <p className="text-sm text-muted-foreground">Obręb: {result.obreb}</p>}
                  {result.adres && <p className="text-sm text-muted-foreground">Adres: {result.adres}</p>}
                  <p className="text-sm">{result.opis}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    </Modal>
  )
}
