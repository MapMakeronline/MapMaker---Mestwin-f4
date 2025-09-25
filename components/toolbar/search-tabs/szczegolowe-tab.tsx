"use client"

import { useState } from "react"
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  useTheme,
} from "@mui/material"
import { Search } from "@mui/icons-material"

interface SzczegoloweTabProps {
  onSearch: (type: string, data: any) => void
  onShowInTable: (data: any) => void
}

export function SzczegoloweTab({ onSearch, onShowInTable }: SzczegoloweTabProps) {
  const [selectedWarstwa, setSelectedWarstwa] = useState("")
  const [selectedKolumna, setSelectedKolumna] = useState("")
  const [selectedWartosc, setSelectedWartosc] = useState("")
  const theme = useTheme()

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
    <Card sx={{ backgroundColor: theme.palette.background.paper }}>
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
          <Search />
          <Typography variant="h6">Wyszukiwanie szczegółowe</Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Wskaż warstwę, a następnie wybierz z listy wartości, według których chcesz przeszukać warstwę
        </Typography>

        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth size="small">
              <InputLabel>Wybierz warstwę</InputLabel>
              <Select
                value={selectedWarstwa}
                onChange={(e) => setSelectedWarstwa(e.target.value)}
                label="Wybierz warstwę"
              >
                <MenuItem value="dzialki">Działki</MenuItem>
                <MenuItem value="budynki">Budynki</MenuItem>
                <MenuItem value="drogi">Drogi</MenuItem>
                <MenuItem value="lasy">Lasy</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={4}>
            <FormControl fullWidth size="small">
              <InputLabel>Wybierz kolumnę</InputLabel>
              <Select
                value={selectedKolumna}
                onChange={(e) => setSelectedKolumna(e.target.value)}
                label="Wybierz kolumnę"
              >
                <MenuItem value="nazwa">Nazwa</MenuItem>
                <MenuItem value="typ">Typ</MenuItem>
                <MenuItem value="powierzchnia">Powierzchnia</MenuItem>
                <MenuItem value="wlasciciel">Właściciel</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={4}>
            <FormControl fullWidth size="small">
              <InputLabel>Wybierz wartość</InputLabel>
              <Select
                value={selectedWartosc}
                onChange={(e) => setSelectedWartosc(e.target.value)}
                label="Wybierz wartość"
              >
                <MenuItem value="wartosc1">Wartość 1</MenuItem>
                <MenuItem value="wartosc2">Wartość 2</MenuItem>
                <MenuItem value="wartosc3">Wartość 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Button onClick={handleShowInTable} variant="outlined">
            Pokaż w tabeli atrybutów
          </Button>
          <Button
            onClick={handleSearch}
            variant="contained"
            sx={{
              backgroundColor: theme.palette.info.main,
              "&:hover": {
                backgroundColor: theme.palette.info.dark,
              },
            }}
          >
            Wyszukaj
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}
