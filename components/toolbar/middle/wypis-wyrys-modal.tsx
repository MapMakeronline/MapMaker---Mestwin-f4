"use client"

import { useState } from "react"
import { Modal } from "@/components/ui/modal"
import {
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  FormControlLabel,
  Box,
  IconButton,
  useTheme,
} from "@mui/material"
import { Close, ChevronLeft, ChevronRight } from "@mui/icons-material"

interface Dzialka {
  key: string
  obreb: string
  numer: string
}

interface Przeznaczenie {
  id: string
  nazwa: string
  procent: number
  children?: Przeznaczenie[]
}

interface WypisWyrysModalProps {
  isOpen: boolean
  onClose: () => void
}

export function WypisWyrysModal({ isOpen, onClose }: WypisWyrysModalProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedDzialka, setSelectedDzialka] = useState<Dzialka | null>(null)
  const [selectedPrzeznaczenia, setSelectedPrzeznaczenia] = useState<string[]>(["xxxix"])
  const theme = useTheme()

  const przeznaczenia: Przeznaczenie[] = [
    {
      id: "xxxix",
      nazwa: "XXXIX 338 2005 - przeznaczenie terenu",
      procent: 100.0,
      children: [
        { id: "ustalenia-ogolne", nazwa: "Ustalenia ogólne", procent: 0 },
        { id: "ustalenia-koncowe", nazwa: "Ustalenia końcowe", procent: 0 },
        { id: "r", nazwa: "R", procent: 68.2 },
        { id: "zl", nazwa: "ZL", procent: 16.7 },
        { id: "d6mnr", nazwa: "D 6MNR", procent: 15.1 },
        { id: "kdz", nazwa: "KDZ", procent: 0.0 },
        { id: "zl1", nazwa: "ZL 1", procent: 0.0 },
        { id: "h1mnr", nazwa: "H 1MNR", procent: 0.0 },
        { id: "c3mnr", nazwa: "C 3 MNR", procent: 0.0 },
        { id: "h14mnr", nazwa: "H 14MNR", procent: 0.0 },
      ],
    },
  ]

  const handleSelectDzialka = () => {
    setSelectedDzialka({
      key: "1",
      obreb: "KIEŁKOWICE",
      numer: "334/1",
    })
  }

  const handleRemoveDzialka = () => {
    setSelectedDzialka(null)
  }

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handlePrzeznaczeniaToggle = (id: string) => {
    setSelectedPrzeznaczenia((prev) => (prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]))
  }

  const handleClose = () => {
    setCurrentStep(1)
    setSelectedDzialka(null)
    setSelectedPrzeznaczenia(["xxxix"])
    onClose()
  }

  const renderPrzeznaczenie = (przeznaczenie: Przeznaczenie, level = 0) => (
    <Box key={przeznaczenie.id} sx={{ ml: level * 3, py: 0.5 }}>
      <FormControlLabel
        control={
          <Checkbox
            checked={selectedPrzeznaczenia.includes(przeznaczenie.id)}
            onChange={() => handlePrzeznaczeniaToggle(przeznaczenie.id)}
            size="small"
          />
        }
        label={
          <Typography variant="body2">
            {przeznaczenie.nazwa} {przeznaczenie.procent > 0 && `(${przeznaczenie.procent}%)`}
          </Typography>
        }
      />
      {przeznaczenie.children?.map((child) => renderPrzeznaczenie(child, level + 1))}
    </Box>
  )

  const renderStep1 = () => (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography variant="body2" color="text.secondary">
        Wskaż działkę na mapie, a następnie wybierz jedną z listy:
      </Typography>
      <TableContainer component={Paper} sx={{ backgroundColor: theme.palette.background.paper }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Obręb działki</TableCell>
              <TableCell>Numer działki</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {selectedDzialka ? (
              <TableRow>
                <TableCell>{selectedDzialka.obreb}</TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography>{selectedDzialka.numer}</Typography>
                    <IconButton size="small" onClick={handleRemoveDzialka}>
                      <Close fontSize="small" />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ) : (
              <TableRow>
                <TableCell colSpan={2} align="center" sx={{ py: 4 }}>
                  <Typography color="text.secondary">Brak wybranych działek</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {!selectedDzialka && (
        <Button onClick={handleSelectDzialka} variant="contained" fullWidth>
          Symuluj wybór działki z mapy
        </Button>
      )}
    </Box>
  )

  const renderStep2 = () => (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography variant="body2" color="text.secondary">
        Wskaż działkę na mapie, a następnie wybierz jedną z listy:
      </Typography>
      <TableContainer component={Paper} sx={{ backgroundColor: theme.palette.background.paper }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Obręb działki</TableCell>
              <TableCell>Numer działki</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {selectedDzialka && (
              <TableRow>
                <TableCell>{selectedDzialka.obreb}</TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography>{selectedDzialka.numer}</Typography>
                    <IconButton size="small" onClick={handleRemoveDzialka}>
                      <Close fontSize="small" />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )

  const renderStep3 = () => (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography variant="body2" color="text.secondary">
        Wybierz z listy dostępnych przeznaczeń te, na podstawie których ma zostać wygenerowany wypis
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2, py: 2 }}>
        <IconButton disabled>
          <ChevronLeft />
        </IconButton>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" sx={{ textDecoration: "underline" }}>
            Numer działki: {selectedDzialka?.numer}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Obręb działki: {selectedDzialka?.obreb}
          </Typography>
        </Box>
        <IconButton disabled>
          <ChevronRight />
        </IconButton>
      </Box>

      <Paper sx={{ p: 2, maxHeight: 256, overflow: "auto", backgroundColor: theme.palette.background.paper }}>
        {przeznaczenia.map((przeznaczenie) => renderPrzeznaczenie(przeznaczenie))}
      </Paper>
    </Box>
  )

  const footerContent = (
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Button variant="outlined" onClick={handleBack} disabled={currentStep === 1}>
        {currentStep === 1 ? "Powrót" : "Wstecz"}
      </Button>

      <Box sx={{ display: "flex", gap: 1 }}>
        {currentStep <= 2 && (
          <Button variant="outlined" disabled={!selectedDzialka}>
            Wyrys
          </Button>
        )}

        {currentStep < 3 ? (
          <Button onClick={handleNext} disabled={!selectedDzialka} variant="contained">
            Dalej
          </Button>
        ) : (
          <Button
            onClick={() => alert("Generowanie wypisu...")}
            disabled={selectedPrzeznaczenia.length === 0}
            variant="contained"
          >
            Generuj
          </Button>
        )}
      </Box>
    </Box>
  )

  return (
    <Modal title="Wypis i wyrys" isOpen={isOpen} onClose={handleClose} footer={footerContent} size="md">
      <Box sx={{ py: 1 }}>
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}
      </Box>
    </Modal>
  )
}
