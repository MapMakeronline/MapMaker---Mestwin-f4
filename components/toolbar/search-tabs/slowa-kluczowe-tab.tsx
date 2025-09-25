"use client"

import { useState } from "react"
import { Button, TextField, Card, CardContent, Typography, Box, useTheme } from "@mui/material"
import { Description, TextFields } from "@mui/icons-material"

interface SlowaKluczoweTabProps {
  onSearch: (type: string, data: any) => void
  onZoom: (data: any) => void
}

export function SlowaKluczoweTab({ onSearch, onZoom }: SlowaKluczoweTabProps) {
  const [keywordQuery, setKeywordQuery] = useState("")
  const theme = useTheme()

  const handleSearch = () => {
    onSearch("słowa kluczowe", { query: keywordQuery })
  }

  const handleZoom = () => {
    onZoom({ query: keywordQuery })
  }

  return (
    <Card sx={{ backgroundColor: theme.palette.background.paper }}>
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
          <Description />
          <Typography variant="h6">Wyszukiwanie słów kluczowych</Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Wpisz tekst, po którym zostaną przeszukane warstwy w projekcie
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
            <TextFields sx={{ fontSize: 16 }} />
            <Typography variant="body2" fontWeight="medium">
              Aa
            </Typography>
            <Typography variant="body2" fontWeight="medium">
              ABC
            </Typography>
          </Box>
          <TextField
            placeholder="Wprowadź słowa kluczowe..."
            value={keywordQuery}
            onChange={(e) => setKeywordQuery(e.target.value)}
            fullWidth
            variant="outlined"
            size="small"
          />
        </Box>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            onClick={handleSearch}
            variant="contained"
            sx={{
              backgroundColor: theme.palette.success.main,
              "&:hover": {
                backgroundColor: theme.palette.success.dark,
              },
            }}
          >
            Wyszukaj
          </Button>
          <Button onClick={handleZoom} variant="outlined">
            Przybliż
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}
