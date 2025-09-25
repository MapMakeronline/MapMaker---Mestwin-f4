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
  useTheme,
} from "@mui/material"
import { Public, Search } from "@mui/icons-material"

interface WyszukiwanieGlobalneTabProps {
  onSearch: (type: string, data: any) => void
  onZoom: (data: any) => void
}

export function WyszukiwanieGlobalneTab({ onSearch, onZoom }: WyszukiwanieGlobalneTabProps) {
  const [selectedWarunek, setSelectedWarunek] = useState("")
  const theme = useTheme()

  const handleSearch = () => {
    onSearch("globalne", { warunek: selectedWarunek })
  }

  const handleZoom = () => {
    onZoom({ warunek: selectedWarunek })
  }

  return (
    <Card sx={{ backgroundColor: theme.palette.background.paper }}>
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
          <Public />
          <Typography variant="h6">Wyszukiwanie globalne</Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Przeszukaj wszystkie warstwy w projekcie
        </Typography>

        <Box sx={{ mb: 3 }}>
          <FormControl fullWidth size="small">
            <InputLabel>Wybierz warunek</InputLabel>
            <Select
              value={selectedWarunek}
              onChange={(e) => setSelectedWarunek(e.target.value)}
              label="Wybierz warunek"
            >
              <MenuItem value="wszystkie">Wszystkie warstwy</MenuItem>
              <MenuItem value="widoczne">Tylko widoczne warstwy</MenuItem>
              <MenuItem value="wybrane">Wybrane warstwy</MenuItem>
              <MenuItem value="aktywne">Aktywne warstwy</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            onClick={handleSearch}
            variant="contained"
            startIcon={<Search />}
            sx={{
              backgroundColor: theme.palette.warning.main,
              "&:hover": {
                backgroundColor: theme.palette.warning.dark,
              },
            }}
          >
            Szukaj
          </Button>
          <Button onClick={handleZoom} variant="outlined">
            Przybliż
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}
