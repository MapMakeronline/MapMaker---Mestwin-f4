"use client"

import { useState } from "react"
import { Button } from "../../ui/button"
import { Label } from "../../ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card"
import { MaterialIcon } from "../../ui/material-icon"

interface DzialkiTabProps {
  onSearch: (type: string, data: any) => void
  onZoom: (data: any) => void
}

export function DzialkiTab({ onSearch, onZoom }: DzialkiTabProps) {
  const [selectedObreb, setSelectedObreb] = useState("")
  const [selectedNumer, setSelectedNumer] = useState("")

  const handleSearch = () => {
    onSearch("działki", { obreb: selectedObreb, numer: selectedNumer })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MaterialIcon name="database" size={20} />
          Wyszukiwanie działek
        </CardTitle>
        <CardDescription>Wybierz obręb i numer działki</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Obręb działki:</Label>
            <Select value={selectedObreb} onValueChange={setSelectedObreb}>
              <SelectTrigger>
                <SelectValue placeholder="Wybierz z listy" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="obreb1">Obręb 1</SelectItem>
                <SelectItem value="obreb2">Obręb 2</SelectItem>
                <SelectItem value="obreb3">Obręb 3</SelectItem>
                <SelectItem value="obreb4">Obręb 4</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Numer działki:</Label>
            <Select value={selectedNumer} onValueChange={setSelectedNumer}>
              <SelectTrigger>
                <SelectValue placeholder="Wybierz z listy" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="123/1">123/1</SelectItem>
                <SelectItem value="124/2">124/2</SelectItem>
                <SelectItem value="125/3">125/3</SelectItem>
                <SelectItem value="126/4">126/4</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex gap-2">
          <Button onClick={handleSearch} className="bg-red-600 hover:bg-red-700">
            Wyszukaj
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
