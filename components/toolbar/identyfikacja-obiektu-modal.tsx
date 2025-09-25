"use client"

import { useState } from "react"
import { Modal } from "../ui/modal"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Separator } from "../ui/separator"
import { MapPin, Info, FileText } from "lucide-react"

interface IdentyfikacjaObiektuModalProps {
  isOpen: boolean
  onClose: () => void
}

export function IdentyfikacjaObiektuModal({ isOpen, onClose }: IdentyfikacjaObiektuModalProps) {
  const [objectInfo, setObjectInfo] = useState<any>(null)

  const mockObjectData = {
    warstwa: "XXXIX_338_2005 - przeznaczenie terenu",
    ogc_fid: "121",
    f_nasza: "L",
    f_mpzp: "ZL",
    opis: "tereny lasów",
    sciezka: "Wypisy/gmina/2005/H_Podzamcze/",
    nr_uchwala: "XXXIX/338/2005",
    n_uchwala:
      "Uchwała Rady Miejskiej w Ogrodzieńcu z dnia 28 listopada 2005r. w sprawie miejscowego planu zagospodarowania przestrzennego gminy Ogrodzieniec",
    nazwa_mpzp: "Miejscowy plan zagospodarowania przestrzennego gminy Ogrodzieniec",
  }

  const handleMapClick = () => {
    // Mock map click functionality
    setObjectInfo(mockObjectData)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Identyfikacja obiektu" size="lg">
      <div className="max-h-[80vh] overflow-y-auto">
        <Tabs defaultValue="map" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="map">Kliknij na mapie</TabsTrigger>
            <TabsTrigger value="results">Wyniki</TabsTrigger>
          </TabsList>

          <TabsContent value="map" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Identyfikacja przez kliknięcie
                </CardTitle>
                <CardDescription>Kliknij na obiekt na mapie, aby uzyskać informacje</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center py-8">
                  <MapPin className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground mb-4">
                    Kliknij na dowolny obiekt na mapie, aby wyświetlić jego informacje
                  </p>
                  <Button onClick={handleMapClick} variant="outline">
                    <MapPin className="h-4 w-4 mr-2" />
                    Symuluj kliknięcie na mapie
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="results" className="space-y-4">
            {objectInfo ? (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5" />
                    Informacje o obiekcie
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Warstwa:</Label>
                      <Badge variant="secondary">{objectInfo.warstwa}</Badge>
                    </div>

                    <Separator />

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">OGC FID:</Label>
                        <p className="text-sm">{objectInfo.ogc_fid}</p>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">F_nasza:</Label>
                        <p className="text-sm">{objectInfo.f_nasza}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">F_mpzp:</Label>
                        <p className="text-sm">{objectInfo.f_mpzp}</p>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Opis:</Label>
                        <p className="text-sm">{objectInfo.opis}</p>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Ścieżka:</Label>
                      <p className="text-sm text-muted-foreground">{objectInfo.sciezka}</p>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Nr uchwały:</Label>
                      <p className="text-sm">{objectInfo.nr_uchwala}</p>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Nazwa MPZP:</Label>
                      <Textarea value={objectInfo.nazwa_mpzp} readOnly className="min-h-[60px] resize-none" />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Treść uchwały:</Label>
                      <Textarea value={objectInfo.n_uchwala} readOnly className="min-h-[80px] resize-none" />
                    </div>
                  </div>

                  <Separator />

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      Eksportuj
                    </Button>
                    <Button variant="outline" size="sm">
                      <MapPin className="h-4 w-4 mr-2" />
                      Pokaż na mapie
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="text-center py-8">
                  <Info className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">
                    Brak wyników. Kliknij na obiekt na mapie, aby wyświetlić informacje.
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </Modal>
  )
}
