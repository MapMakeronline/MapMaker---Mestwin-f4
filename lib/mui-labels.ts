/**
 * Spójny system etykietowania funkcji dla komponentów MUI
 * Consistent function labeling system for MUI components
 */

// Główne etykiety dla przycisków i akcji / Main labels for buttons and actions
export const BUTTON_LABELS = {
  // Podstawowe akcje / Basic actions
  SAVE: "Zapisz",
  CANCEL: "Anuluj",
  CLOSE: "Zamknij",
  OPEN: "Otwórz",
  EDIT: "Edytuj",
  DELETE: "Usuń",
  ADD: "Dodaj",
  REMOVE: "Usuń",
  SEARCH: "Szukaj",
  FILTER: "Filtruj",
  CLEAR: "Wyczyść",
  RESET: "Resetuj",
  SUBMIT: "Wyślij",
  CONFIRM: "Potwierdź",

  // Nawigacja / Navigation
  HOME: "Strona główna",
  BACK: "Wstecz",
  FORWARD: "Dalej",
  UP: "W górę",
  DOWN: "W dół",
  LEFT: "W lewo",
  RIGHT: "W prawo",

  // Widoczność / Visibility
  SHOW: "Pokaż",
  HIDE: "Ukryj",
  EXPAND: "Rozwiń",
  COLLAPSE: "Zwiń",

  // Ustawienia / Settings
  SETTINGS: "Ustawienia",
  PREFERENCES: "Preferencje",
  OPTIONS: "Opcje",

  // Kontakt i pomoc / Contact and help
  CONTACT: "Kontakt",
  HELP: "Pomoc",
  INFO: "Informacje",

  // Specyficzne dla aplikacji GIS / GIS-specific
  ZOOM_IN: "Przybliż",
  ZOOM_OUT: "Oddal",
  ZOOM_TO_EXTENT: "Przybliż do zasięgu",
  PAN: "Przesuń mapę",
  IDENTIFY: "Identyfikuj obiekt",
  MEASURE: "Pomiar",
  DRAW: "Rysuj",
  SELECT: "Wybierz",
  LAYER_VISIBILITY: "Widoczność warstwy",
  LAYER_PROPERTIES: "Właściwości warstwy",
} as const

// Etykiety dla pól formularzy / Form field labels
export const FORM_LABELS = {
  // Podstawowe pola / Basic fields
  NAME: "Nazwa",
  DESCRIPTION: "Opis",
  EMAIL: "Email",
  PHONE: "Telefon",
  ADDRESS: "Adres",
  DATE: "Data",
  TIME: "Czas",

  // Pola wyszukiwania / Search fields
  SEARCH_QUERY: "Zapytanie wyszukiwania",
  SEARCH_RESULTS: "Wyniki wyszukiwania",
  FILTER_BY: "Filtruj według",
  SORT_BY: "Sortuj według",

  // Specyficzne dla GIS / GIS-specific
  PARCEL_NUMBER: "Numer działki",
  CADASTRAL_UNIT: "Obręb ewidencyjny",
  COORDINATES: "Współrzędne",
  LAYER_NAME: "Nazwa warstwy",
  GEOMETRY_TYPE: "Typ geometrii",
} as const

// Etykiety dla modalów i okien dialogowych / Modal and dialog labels
export const MODAL_LABELS = {
  // Tytuły modalów / Modal titles
  SETTINGS_MODAL: "Ustawienia aplikacji",
  SEARCH_MODAL: "Wyszukiwanie obiektów",
  CONTACT_MODAL: "Formularz kontaktowy",
  HELP_MODAL: "Pomoc i instrukcje",
  SHORTCUTS_MODAL: "Skróty klawiszowe",
  LAYER_PROPERTIES_MODAL: "Właściwości warstwy",
  DRAWING_TOOLS_MODAL: "Narzędzia rysowania",
  IDENTIFICATION_MODAL: "Identyfikacja obiektu",
  EXTRACT_MODAL: "Wypis i wyrys",

  // Komunikaty potwierdzenia / Confirmation messages
  CONFIRM_DELETE: "Czy na pewno chcesz usunąć ten element?",
  CONFIRM_CLEAR: "Czy na pewno chcesz wyczyścić wszystkie dane?",
  CONFIRM_RESET: "Czy na pewno chcesz zresetować ustawienia?",

  // Komunikaty błędów / Error messages
  ERROR_LOADING: "Błąd podczas ładowania danych",
  ERROR_SAVING: "Błąd podczas zapisywania",
  ERROR_NETWORK: "Błąd połączenia sieciowego",
} as const

// Etykiety dla zakładek / Tab labels
export const TAB_LABELS = {
  PARCELS: "Działki",
  DETAILED_SEARCH: "Wyszukiwanie szczegółowe",
  KEYWORDS: "Słowa kluczowe",
  GLOBAL_SEARCH: "Wyszukiwanie globalne",
  LAYERS: "Warstwy",
  PROPERTIES: "Właściwości",
  SETTINGS: "Ustawienia",
} as const

// Etykiety dla ikon i przycisków narzędziowych / Icon and tool button labels
export const ICON_LABELS = {
  // Podstawowe ikony / Basic icons
  HOME_ICON: "Ikona strony głównej",
  MENU_ICON: "Ikona menu",
  CLOSE_ICON: "Ikona zamknięcia",
  SEARCH_ICON: "Ikona wyszukiwania",
  SETTINGS_ICON: "Ikona ustawień",

  // Ikony nawigacji / Navigation icons
  ARROW_UP: "Strzałka w górę",
  ARROW_DOWN: "Strzałka w dół",
  ARROW_LEFT: "Strzałka w lewo",
  ARROW_RIGHT: "Strzałka w prawo",

  // Ikony widoczności / Visibility icons
  VISIBILITY_ON: "Ikona widoczności włączonej",
  VISIBILITY_OFF: "Ikona widoczności wyłączonej",

  // Ikony GIS / GIS icons
  MAP_ICON: "Ikona mapy",
  LAYER_ICON: "Ikona warstwy",
  POINT_ICON: "Ikona punktu",
  LINE_ICON: "Ikona linii",
  POLYGON_ICON: "Ikona wielokąta",
  RASTER_ICON: "Ikona rastra",
} as const

// Etykiety dla komunikatów statusu / Status message labels
export const STATUS_LABELS = {
  LOADING: "Ładowanie...",
  SAVING: "Zapisywanie...",
  SEARCHING: "Wyszukiwanie...",
  PROCESSING: "Przetwarzanie...",
  COMPLETE: "Zakończono",
  ERROR: "Błąd",
  SUCCESS: "Sukces",
  WARNING: "Ostrzeżenie",
  INFO: "Informacja",
} as const

// Funkcje pomocnicze do tworzenia etykiet / Helper functions for creating labels
export const createAriaLabel = (action: string, target?: string): string => {
  return target ? `${action} ${target}` : action
}

export const createTooltip = (action: string, shortcut?: string): string => {
  return shortcut ? `${action} (${shortcut})` : action
}

export const createModalTitle = (title: string): string => {
  return `Okno dialogowe: ${title}`
}

// Typ dla wszystkich etykiet / Type for all labels
export type ButtonLabel = (typeof BUTTON_LABELS)[keyof typeof BUTTON_LABELS]
export type FormLabel = (typeof FORM_LABELS)[keyof typeof FORM_LABELS]
export type ModalLabel = (typeof MODAL_LABELS)[keyof typeof MODAL_LABELS]
export type TabLabel = (typeof TAB_LABELS)[keyof typeof TAB_LABELS]
export type IconLabel = (typeof ICON_LABELS)[keyof typeof ICON_LABELS]
export type StatusLabel = (typeof STATUS_LABELS)[keyof typeof STATUS_LABELS]
