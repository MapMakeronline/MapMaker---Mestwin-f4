"use client"

import { IconButton, type IconButtonProps } from "@mui/material"
import { useMUILabels } from "@/hooks/use-mui-labels"
import type { BUTTON_LABELS } from "@/lib/mui-labels"
import type { ReactNode } from "react"

interface AccessibleIconButtonProps extends Omit<IconButtonProps, "aria-label" | "title"> {
  labelKey?: keyof typeof BUTTON_LABELS
  customLabel?: string
  shortcut?: string
  children: ReactNode
}

/**
 * Accessible IconButton component with consistent labeling
 * Dostępny komponent IconButton ze spójnym etykietowaniem
 */
export function AccessibleIconButton({
  labelKey,
  customLabel,
  shortcut,
  children,
  ...props
}: AccessibleIconButtonProps) {
  const { getIconButtonProps } = useMUILabels()

  // Użyj customLabel jeśli podano, w przeciwnym razie użyj labelKey
  const accessibilityProps = labelKey
    ? getIconButtonProps(labelKey, shortcut)
    : {
        "aria-label": customLabel || "Przycisk",
        title: customLabel || "Przycisk",
      }

  return (
    <IconButton {...accessibilityProps} {...props}>
      {children}
    </IconButton>
  )
}
