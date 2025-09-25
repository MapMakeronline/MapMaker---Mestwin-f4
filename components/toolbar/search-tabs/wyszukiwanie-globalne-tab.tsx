"use client"

import { useState } from "react"
import { Button } from "../../ui/button"
import { Label } from "../../ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card"
import { Globe, Search } from "lucide-react"

interface WyszukiwanieGlobalneTabProps {
  onSearch: (type: string, data: any) => void
  onZoom: (data: any) => void
}

export function WyszukiwanieGlobalneTab({ onSearch, onZoom }: WyszukiwanieGlobalneTabProps) {
  const [selectedWarunek, setSelectedWarunek] = useState("")

  const handleSearch = () => {
    onSearch("globalne", { warunek: selectedWarunek })
  }

  const handleZoom = () => {
    onZoom({ warunek: selectedWarunek })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Globe className="h-5 w-5" />
          Wyszukiwanie globalne
        </CardTitle>
        <CardDescription>Przeszukaj wszystkie warstwy w projekcie</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Wybierz warunek</Label>
          <Select value={selectedWarunek} onValueChange={setSelectedWarunek}>
            <SelectTrigger>
              <SelectValue placeholder="Wybierz z listy" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wszystkie">Wszystkie warstwy</SelectItem>
              <SelectItem value="widoczne">Tylko widoczne warstwy</SelectItem>
              <SelectItem value="wybrane">Wybrane warstwy</SelectItem>
              <SelectItem value="aktywne">Aktywne warstwy</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-2">
          <Button onClick={handleSearch} className="bg-orange-600 hover:bg-orange-700">
            <Search className="h-4 w-4 mr-2" />
            Szukaj
          </Button>
          <Button onClick={handleZoom} variant="outline">
            Przybliż
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
