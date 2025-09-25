import {
  BUTTON_LABELS,
  FORM_LABELS,
  MODAL_LABELS,
  TAB_LABELS,
  ICON_LABELS,
  STATUS_LABELS,
  createAriaLabel,
  createTooltip,
  createModalTitle,
} from "@/lib/mui-labels"

/**
 * Custom hook for consistent MUI component labeling
 * Niestandardowy hook dla spójnego etykietowania komponentów MUI
 */
export function useMUILabels() {
  return {
    // Główne kategorie etykiet / Main label categories
    buttons: BUTTON_LABELS,
    forms: FORM_LABELS,
    modals: MODAL_LABELS,
    tabs: TAB_LABELS,
    icons: ICON_LABELS,
    status: STATUS_LABELS,

    // Funkcje pomocnicze / Helper functions
    createAriaLabel,
    createTooltip,
    createModalTitle,

    // Funkcje dla konkretnych przypadków użycia / Functions for specific use cases
    getButtonProps: (labelKey: keyof typeof BUTTON_LABELS, shortcut?: string) => ({
      "aria-label": BUTTON_LABELS[labelKey],
      title: createTooltip(BUTTON_LABELS[labelKey], shortcut),
    }),

    getIconButtonProps: (labelKey: keyof typeof BUTTON_LABELS, shortcut?: string) => ({
      "aria-label": BUTTON_LABELS[labelKey],
      title: createTooltip(BUTTON_LABELS[labelKey], shortcut),
      "aria-describedby": undefined, // Można dodać ID elementu z opisem
    }),

    getTextFieldProps: (labelKey: keyof typeof FORM_LABELS, required = false) => ({
      label: FORM_LABELS[labelKey],
      "aria-label": FORM_LABELS[labelKey],
      required,
      "aria-required": required,
    }),

    getModalProps: (titleKey: keyof typeof MODAL_LABELS) => ({
      "aria-labelledby": "modal-title",
      "aria-describedby": "modal-description",
      title: createModalTitle(MODAL_LABELS[titleKey]),
    }),

    getTabProps: (labelKey: keyof typeof TAB_LABELS, index: number) => ({
      label: TAB_LABELS[labelKey],
      "aria-label": TAB_LABELS[labelKey],
      id: `tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    }),

    getLayerToggleProps: (layerName: string, isVisible: boolean) => ({
      "aria-label": createAriaLabel(isVisible ? BUTTON_LABELS.HIDE : BUTTON_LABELS.SHOW, `warstwa ${layerName}`),
      title: createTooltip(isVisible ? `${BUTTON_LABELS.HIDE} warstwę` : `${BUTTON_LABELS.SHOW} warstwę`, "Space"),
    }),
  }
}

// Typ dla właściwości dostępności / Type for accessibility properties
export interface AccessibilityProps {
  "aria-label"?: string
  "aria-labelledby"?: string
  "aria-describedby"?: string
  "aria-required"?: boolean
  title?: string
  role?: string
}
