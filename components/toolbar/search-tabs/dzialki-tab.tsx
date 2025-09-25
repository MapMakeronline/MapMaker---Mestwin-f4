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
import { Storage } from "@mui/icons-material"

interface DzialkiTabProps {
  onSearch: (type: string, data: any) => void
  onZoom: (data: any) => void
}

export function DzialkiTab({ onSearch, onZoom }: DzialkiTabProps) {
  const [selectedObreb, setSelectedObreb] = useState("")
  const [selectedNumer, setSelectedNumer] = useState("")
  const theme = useTheme()

  const handleSearch = () => {
    onSearch("działki", { obreb: selectedObreb, numer: selectedNumer })
  }

  return (
    <Card sx={{ backgroundColor: theme.palette.background.paper }}>
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
          <Storage />
          <Typography variant="h6">Wyszukiwanie działek</Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Wybierz obręb i numer działki
        </Typography>

        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth size="small">
              <InputLabel>Obręb działki</InputLabel>
              <Select value={selectedObreb} onChange={(e) => setSelectedObreb(e.target.value)} label="Obręb działki">
                <MenuItem value="obreb1">Obręb 1</MenuItem>
                <MenuItem value="obreb2">Obręb 2</MenuItem>
                <MenuItem value="obreb3">Obręb 3</MenuItem>
                <MenuItem value="obreb4">Obręb 4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth size="small">
              <InputLabel>Numer działki</InputLabel>
              <Select value={selectedNumer} onChange={(e) => setSelectedNumer(e.target.value)} label="Numer działki">
                <MenuItem value="123/1">123/1</MenuItem>
                <MenuItem value="124/2">124/2</MenuItem>
                <MenuItem value="125/3">125/3</MenuItem>
                <MenuItem value="126/4">126/4</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            onClick={handleSearch}
            variant="contained"
            sx={{
              backgroundColor: theme.palette.error.main,
              "&:hover": {
                backgroundColor: theme.palette.error.dark,
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
