"use client"

import { Modal } from "@/components/ui/modal"

interface SkrotyKlawiszoweModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SkrotyKlawiszoweModal({ isOpen, onClose }: SkrotyKlawiszoweModalProps) {
  const shortcuts = [
    {
      keys: "Backspace",
      description:
        "Skrót dostępny podczas rysowania. Używając przycisk backspace możesz usunąć ostatni narysowany punkt.",
    },
    {
      keys: "LPM + Shift",
      description: "Skrót dostępny na mapie. Powoduje przybliżenie do zaznaczonego obszaru.",
    },
    {
      keys: "LLP + Shift + Alt",
      description: "Skrót dostępny na mapie. Powoduje obrót mapy.",
    },
    {
      keys: "Ctrl + Z",
      description: "Cofnij ostatnią operację na mapie.",
    },
    {
      keys: "Ctrl + Y",
      description: "Ponów ostatnią cofniętą operację.",
    },
    {
      keys: "Escape",
      description: "Anuluj bieżącą operację lub zamknij aktywny modal.",
    },
    {
      keys: "Spacja",
      description: "Przełącz tryb przesuwania mapy.",
    },
    {
      keys: "Ctrl + F",
      description: "Otwórz okno wyszukiwania.",
    },
  ]

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Skróty klawiszowe" size="lg">
      <div className="space-y-4">
        <p className="text-muted-foreground text-sm">
          Poniżej znajdują się wszystkie możliwości użycia skrótów klawiszowych w aplikacji MapMaker
        </p>

        <div className="space-y-3 max-h-96 overflow-y-auto">
          {shortcuts.map((shortcut, index) => (
            <div key={index} className="flex gap-4 p-3 rounded-lg bg-muted/30 border border-border">
              <div className="flex-shrink-0">
                <kbd className="px-3 py-1.5 text-sm font-semibold bg-background border border-border rounded-md shadow-sm">
                  {shortcut.keys}
                </kbd>
              </div>
              <div className="flex-1">
                <p className="text-sm text-foreground leading-relaxed">{shortcut.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-4 border-t border-border">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors font-medium"
          >
            Zamknij
          </button>
        </div>
      </div>
    </Modal>
  )
}
