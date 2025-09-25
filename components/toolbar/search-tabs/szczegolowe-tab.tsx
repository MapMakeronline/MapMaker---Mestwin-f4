"use client"

import { useState } from "react"
import { Button } from "../../ui/button"
import { Label } from "../../ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card"
import { MaterialIcon } from "../../ui/material-icon"

interface SzczegoloweTabProps {
  onSearch: (type: string, data: any) => void
  onShowInTable: (data: any) => void
}

export function SzczegoloweTab({ onSearch, onShowInTable }: SzczegoloweTabProps) {
  const [selectedWarstwa, setSelectedWarstwa] = useState("")
  const [selectedKolumna, setSelectedKolumna] = useState("")
  const [selectedWartosc, setSelectedWartosc] = useState("")

  const handleSearch = () => {
    onSearch("szczegółowe", {
      warstwa: selectedWarstwa,
      kolumna: selectedKolumna,
      wartosc: selectedWartosc,
    })
  }

  const handleShowInTable = () => {
    onShowInTable({
      warstwa: selectedWarstwa,
      kolumna: selectedKolumna,
      wartosc: selectedWartosc,
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MaterialIcon name="search" size={20} />
          Wyszukiwanie szczegółowe
        </CardTitle>
        <CardDescription>
          Wskaż warstwę, a następnie wybierz z listy wartości, według których chcesz przeszukać warstwę
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label>Wybierz warstwę</Label>
            <Select value={selectedWarstwa} onValueChange={setSelectedWarstwa}>
              <SelectTrigger>
                <SelectValue placeholder="Wybierz warstwę" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dzialki">Działki</SelectItem>
                <SelectItem value="budynki">Budynki</SelectItem>
                <SelectItem value="drogi">Drogi</SelectItem>
                <SelectItem value="lasy">Lasy</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Wybierz kolumnę</Label>
            <Select value={selectedKolumna} onValueChange={setSelectedKolumna}>
              <SelectTrigger>
                <SelectValue placeholder="Wybierz kolumnę" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nazwa">Nazwa</SelectItem>
                <SelectItem value="typ">Typ</SelectItem>
                <SelectItem value="powierzchnia">Powierzchnia</SelectItem>
                <SelectItem value="wlasciciel">Właściciel</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Wybierz wartość</Label>
            <Select value={selectedWartosc} onValueChange={setSelectedWartosc}>
              <SelectTrigger>
                <SelectValue placeholder="Wybierz wartość" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="wartosc1">Wartość 1</SelectItem>
                <SelectItem value="wartosc2">Wartość 2</SelectItem>
                <SelectItem value="wartosc3">Wartość 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex gap-2">
          <Button onClick={handleShowInTable} variant="outline">
            Pokaż w tabeli atrybutów
          </Button>
          <Button onClick={handleSearch} className="bg-blue-600 hover:bg-blue-700">
            Wyszukaj
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
