"use client"

interface ToolbarMiddleProps {
  className?: string
  onWypisWyrysClick?: () => void
  onIdentyfikacjaObiektuClick?: () => void
  onWyszukiwanieClick?: () => void
}

export function ToolbarMiddle({
  className = "",
  onWypisWyrysClick,
  onIdentyfikacjaObiektuClick,
  onWyszukiwanieClick,
}: ToolbarMiddleProps) {
  const InfoCircleIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,7H13V9H11V7M11,11H13V17H11V11Z" />
    </svg>
  )

  const DocumentIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
    </svg>
  )

  const SearchIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
    </svg>
  )

  return (
    <div className={`flex-1 flex flex-col items-center gap-2 overflow-y-auto px-2 py-2 ${className}`}>
      <button
        className="p-3 hover:bg-secondary/80 rounded text-muted-foreground hover:text-foreground transition-colors"
        onClick={onWypisWyrysClick}
        title="Wypis i wyrys"
      >
        <DocumentIcon />
      </button>

      <button
        className="p-3 hover:bg-secondary/80 rounded text-muted-foreground hover:text-foreground transition-colors"
        onClick={onIdentyfikacjaObiektuClick}
        title="Identyfikacja obiektu"
      >
        <InfoCircleIcon />
      </button>

      <button
        className="p-3 hover:bg-secondary/80 rounded text-muted-foreground hover:text-foreground transition-colors"
        onClick={onWyszukiwanieClick}
        title="Wyszukiwanie"
      >
        <SearchIcon />
      </button>
    </div>
  )
}
