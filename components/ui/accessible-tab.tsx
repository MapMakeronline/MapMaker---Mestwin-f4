"use client"

import { Tab, type TabProps } from "@mui/material"
import { useMUILabels } from "@/hooks/use-mui-labels"
import type { TAB_LABELS } from "@/lib/mui-labels"

interface AccessibleTabProps extends Omit<TabProps, "label" | "aria-label" | "id" | "aria-controls"> {
  labelKey?: keyof typeof TAB_LABELS
  customLabel?: string
  index: number
}

/**
 * Accessible Tab component with consistent labeling
 * Dostępny komponent Tab ze spójnym etykietowaniem
 */
export function AccessibleTab({ labelKey, customLabel, index, ...props }: AccessibleTabProps) {
  const { getTabProps } = useMUILabels()

  // Użyj customLabel jeśli podano, w przeciwnym razie użyj labelKey
  const accessibilityProps = labelKey
    ? getTabProps(labelKey, index)
    : {
        label: customLabel || `Zakładka ${index + 1}`,
        "aria-label": customLabel || `Zakładka ${index + 1}`,
        id: `tab-${index}`,
        "aria-controls": `tabpanel-${index}`,
      }

  return <Tab {...accessibilityProps} {...props} />
}
