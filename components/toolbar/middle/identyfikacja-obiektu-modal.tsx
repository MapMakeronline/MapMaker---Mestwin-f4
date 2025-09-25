"use client"

import type React from "react"

import { useState } from "react"
import { Modal } from "@/components/ui/modal"
import {
  Button,
  TextField,
  Typography,
  Tabs,
  Tab,
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  useTheme,
} from "@mui/material"
import { LocationOn, Info, Description } from "@mui/icons-material"

interface IdentyfikacjaObiektuModalProps {
  isOpen: boolean
  onClose: () => void
}

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

export function IdentyfikacjaObiektuModal({ isOpen, onClose }: IdentyfikacjaObiektuModalProps) {
  const [objectInfo, setObjectInfo] = useState<any>(null)
  const [tabValue, setTabValue] = useState(0)
  const theme = useTheme()

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
    setObjectInfo(mockObjectData)
    setTabValue(1) // Switch to results tab
  }

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Identyfikacja obiektu" size="lg">
      <Box sx={{ width: "100%", maxHeight: "80vh", overflow: "auto" }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="identification tabs"
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <Tab label="Kliknij na mapie" />
          <Tab label="Wyniki" />
        </Tabs>

        <TabPanel value={tabValue} index={0}>
          <Card sx={{ backgroundColor: theme.palette.background.paper }}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                <LocationOn />
                <Typography variant="h6">Identyfikacja przez kliknięcie</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Kliknij na obiekt na mapie, aby uzyskać informacje
              </Typography>

              <Box sx={{ textAlign: "center", py: 4 }}>
                <LocationOn sx={{ fontSize: 48, color: "text.secondary", mb: 2 }} />
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                  Kliknij na dowolny obiekt na mapie, aby wyświetlić jego informacje
                </Typography>
                <Button onClick={handleMapClick} variant="outlined" startIcon={<LocationOn />}>
                  Symuluj kliknięcie na mapie
                </Button>
              </Box>
            </CardContent>
          </Card>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          {objectInfo ? (
            <Card sx={{ backgroundColor: theme.palette.background.paper }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
                  <Info />
                  <Typography variant="h6">Informacje o obiekcie</Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      Warstwa:
                    </Typography>
                    <Chip label={objectInfo.warstwa} variant="outlined" sx={{ mt: 0.5 }} />
                  </Box>

                  <Divider />

                  <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary">
                        OGC FID:
                      </Typography>
                      <Typography variant="body2">{objectInfo.ogc_fid}</Typography>
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary">
                        F_nasza:
                      </Typography>
                      <Typography variant="body2">{objectInfo.f_nasza}</Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary">
                        F_mpzp:
                      </Typography>
                      <Typography variant="body2">{objectInfo.f_mpzp}</Typography>
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary">
                        Opis:
                      </Typography>
                      <Typography variant="body2">{objectInfo.opis}</Typography>
                    </Box>
                  </Box>

                  <Divider />

                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      Ścieżka:
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {objectInfo.sciezka}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      Nr uchwały:
                    </Typography>
                    <Typography variant="body2">{objectInfo.nr_uchwala}</Typography>
                  </Box>

                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      Nazwa MPZP:
                    </Typography>
                    <TextField
                      value={objectInfo.nazwa_mpzp}
                      multiline
                      rows={2}
                      fullWidth
                      InputProps={{ readOnly: true }}
                      variant="outlined"
                      sx={{ mt: 0.5 }}
                    />
                  </Box>

                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      Treść uchwały:
                    </Typography>
                    <TextField
                      value={objectInfo.n_uchwala}
                      multiline
                      rows={3}
                      fullWidth
                      InputProps={{ readOnly: true }}
                      variant="outlined"
                      sx={{ mt: 0.5 }}
                    />
                  </Box>

                  <Divider />

                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Button variant="outlined" size="small" startIcon={<Description />}>
                      Eksportuj
                    </Button>
                    <Button variant="outlined" size="small" startIcon={<LocationOn />}>
                      Pokaż na mapie
                    </Button>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ) : (
            <Card sx={{ backgroundColor: theme.palette.background.paper }}>
              <CardContent sx={{ textAlign: "center", py: 4 }}>
                <Info sx={{ fontSize: 48, color: "text.secondary", mb: 2 }} />
                <Typography variant="body1" color="text.secondary">
                  Brak wyników. Kliknij na obiekt na mapie, aby wyświetlić informacje.
                </Typography>
              </CardContent>
            </Card>
          )}
        </TabPanel>
      </Box>
    </Modal>
  )
}
