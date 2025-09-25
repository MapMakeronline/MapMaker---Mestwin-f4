"use client"

import { useState } from "react"
import { Button } from "../../ui/button"
import { Input } from "../../ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card"
import { MaterialIcon } from "../../ui/material-icon"

interface SlowaKluczoweTabProps {
  onSearch: (type: string, data: any) => void
  onZoom: (data: any) => void
}

export function SlowaKluczoweTab({ onSearch, onZoom }: SlowaKluczoweTabProps) {
  const [keywordQuery, setKeywordQuery] = useState("")

  const handleSearch = () => {
    onSearch("słowa kluczowe", { query: keywordQuery })
  }

  const handleZoom = () => {
    onZoom({ query: keywordQuery })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MaterialIcon name="description" size={20} />
          Wyszukiwanie słów kluczowych
        </CardTitle>
        <CardDescription>Wpisz tekst, po którym zostaną przeszukane warstwy w projekcie</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-2">
            <MaterialIcon name="text_fields" size={16} />
            <span className="text-sm font-medium">Aa</span>
            <span className="text-sm font-medium">ABC</span>
          </div>
          <Input
            placeholder="Wprowadź słowa kluczowe..."
            value={keywordQuery}
            onChange={(e) => setKeywordQuery(e.target.value)}
            className="w-full"
          />
        </div>

        <div className="flex gap-2">
          <Button onClick={handleSearch} className="bg-green-600 hover:bg-green-700">
            Wyszukaj
          </Button>
          <Button onClick={handleZoom} variant="outline">
            Przybliż
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
