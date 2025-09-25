"use client"

import { useState } from "react"
import { Modal } from "@/components/ui/modal"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

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
    <div key={przeznaczenie.id} style={{ marginLeft: level * 24 }} className="py-1">
      <div className="flex items-center space-x-2">
        <Checkbox
          id={przeznaczenie.id}
          checked={selectedPrzeznaczenia.includes(przeznaczenie.id)}
          onCheckedChange={() => handlePrzeznaczeniaToggle(przeznaczenie.id)}
        />
        <label htmlFor={przeznaczenie.id} className="text-sm cursor-pointer">
          {przeznaczenie.nazwa} {przeznaczenie.procent > 0 && `(${przeznaczenie.procent}%)`}
        </label>
      </div>
      {przeznaczenie.children?.map((child) => renderPrzeznaczenie(child, level + 1))}
    </div>
  )

  const renderStep1 = () => (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">Wskaż działkę na mapie, a następnie wybierz jedną z listy:</p>
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Obręb działki</TableHead>
              <TableHead>Numer działki</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {selectedDzialka ? (
              <TableRow>
                <TableCell>{selectedDzialka.obreb}</TableCell>
                <TableCell>
                  <div className="flex items-center justify-between">
                    <span>{selectedDzialka.numer}</span>
                    <Button variant="ghost" size="sm" onClick={handleRemoveDzialka} className="h-6 w-6 p-0">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              <TableRow>
                <TableCell colSpan={2} className="text-center text-muted-foreground py-8">
                  Brak wybranych działek
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {!selectedDzialka && (
        <Button onClick={handleSelectDzialka} className="w-full">
          Symuluj wybór działki z mapy
        </Button>
      )}
    </div>
  )

  const renderStep2 = () => (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">Wskaż działkę na mapie, a następnie wybierz jedną z listy:</p>
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Obręb działki</TableHead>
              <TableHead>Numer działki</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {selectedDzialka && (
              <TableRow>
                <TableCell>{selectedDzialka.obreb}</TableCell>
                <TableCell>
                  <div className="flex items-center justify-between">
                    <span>{selectedDzialka.numer}</span>
                    <Button variant="ghost" size="sm" onClick={handleRemoveDzialka} className="h-6 w-6 p-0">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )

  const renderStep3 = () => (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Wybierz z listy dostępnych przeznaczeń te, na podstawie których ma zostać wygenerowany wypis
      </p>

      <div className="flex items-center justify-center space-x-4 py-4">
        <Button variant="ghost" size="sm" disabled>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="text-center">
          <div className="underline text-sm">Numer działki: {selectedDzialka?.numer}</div>
          <div className="text-sm text-muted-foreground">Obręb działki: {selectedDzialka?.obreb}</div>
        </div>
        <Button variant="ghost" size="sm" disabled>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="border rounded-md bg-muted/50 p-4 max-h-64 overflow-y-auto">
        {przeznaczenia.map((przeznaczenie) => renderPrzeznaczenie(przeznaczenie))}
      </div>
    </div>
  )

  const footerContent = (
    <div className="flex items-center justify-between">
      <Button variant="outline" onClick={handleBack} disabled={currentStep === 1}>
        {currentStep === 1 ? "Powrót" : "Wstecz"}
      </Button>

      <div className="flex items-center space-x-2">
        {currentStep <= 2 && (
          <Button variant="outline" disabled={!selectedDzialka}>
            Wyrys
          </Button>
        )}

        {currentStep < 3 ? (
          <Button onClick={handleNext} disabled={!selectedDzialka}>
            Dalej
          </Button>
        ) : (
          <Button onClick={() => alert("Generowanie wypisu...")} disabled={selectedPrzeznaczenia.length === 0}>
            Generuj
          </Button>
        )}
      </div>
    </div>
  )

  return (
    <Modal title="Wypis i wyrys" isOpen={isOpen} onClose={handleClose} footer={footerContent} size="md">
      <div className="py-2">
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}
      </div>
    </Modal>
  )
}
