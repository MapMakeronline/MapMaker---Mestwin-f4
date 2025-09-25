"use client"

import type React from "react"

import type { ReactNode } from "react"
import { useState, useRef, useEffect } from "react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
  footer?: ReactNode
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
}

export function Modal({ isOpen, onClose, title, children, footer, className = "", size = "md" }: ModalProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const modalRef = useRef<HTMLDivElement>(null)

  const sizeClasses = {
    sm: "w-80", // 320px - original size
    md: "w-96", // 384px - medium
    lg: "w-[32rem]", // 512px - large
    xl: "w-[40rem]", // 640px - extra large
  }

  const modalWidth = {
    sm: 320,
    md: 384,
    lg: 512,
    xl: 640,
  }

  useEffect(() => {
    if (isOpen) {
      const width = modalWidth[size]
      const centerX = (window.innerWidth - width) / 2
      const centerY = (window.innerHeight - 400) / 2 // approximate modal height
      setPosition({
        x: Math.max(0, centerX),
        y: Math.max(0, centerY),
      })
    }
  }, [isOpen, size])

  const handleMouseDown = (e: React.MouseEvent) => {
    if (modalRef.current) {
      setIsDragging(true)
      const rect = modalRef.current.getBoundingClientRect()
      setDragStart({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const newX = e.clientX - dragStart.x
        const newY = e.clientY - dragStart.y

        const width = modalWidth[size]
        const maxX = window.innerWidth - width
        const maxY = window.innerHeight - 400 // approximate modal height

        setPosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY)),
        })
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, dragStart, size])

  if (!isOpen) return null

  return (
    <div
      ref={modalRef}
      className="fixed z-50"
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      <div
        className={`bg-gray-800 text-white rounded-lg shadow-2xl border border-gray-600 ${sizeClasses[size]} ${className}`}
      >
        {/* Modal Header */}
        <div
          className={`bg-gray-700 px-4 py-3 rounded-t-lg flex items-center justify-between ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          onMouseDown={handleMouseDown}
          style={{ userSelect: "none" }}
        >
          <h2 className="text-lg font-medium">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4">{children}</div>

        {/* Modal Footer */}
        {footer && <div className="border-t border-gray-600 p-4">{footer}</div>}
      </div>
    </div>
  )
}
