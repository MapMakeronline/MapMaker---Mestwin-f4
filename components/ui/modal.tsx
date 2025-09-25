"use client"
import type { ReactNode } from "react"
import { Dialog, DialogTitle, DialogContent, DialogActions, IconButton, useTheme } from "@mui/material"
import { Close } from "@mui/icons-material"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
  footer?: ReactNode
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
}

export function Modal({ isOpen, onClose, title, children, footer, size = "md" }: ModalProps) {
  const theme = useTheme()

  // Map size props to MUI maxWidth values
  const maxWidthMap = {
    sm: "xs" as const,
    md: "sm" as const,
    lg: "md" as const,
    xl: "lg" as const,
  }

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      fullWidth
      maxWidth={maxWidthMap[size]}
      PaperProps={{
        sx: {
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: theme.palette.background.paper,
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        {title}
        <IconButton
          onClick={onClose}
          size="small"
          sx={{
            color: theme.palette.text.secondary,
            "&:hover": {
              color: theme.palette.text.primary,
            },
          }}
        >
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent
        dividers
        sx={{
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
        }}
      >
        {children}
      </DialogContent>

      {footer && (
        <DialogActions
          sx={{
            backgroundColor: theme.palette.background.paper,
            borderTop: `1px solid ${theme.palette.divider}`,
          }}
        >
          {footer}
        </DialogActions>
      )}
    </Dialog>
  )
}
