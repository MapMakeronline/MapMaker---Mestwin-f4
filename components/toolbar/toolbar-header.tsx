"use client"

interface ToolbarHeaderProps {
  className?: string
}

export function ToolbarHeader({ className = "" }: ToolbarHeaderProps) {
  const HomeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  )

  return (
    <div className={`flex-shrink-0 flex flex-col items-center py-4 ${className}`}>
      <button className="p-3 hover:bg-secondary/80 rounded text-destructive transition-colors" title="Strona główna">
        <HomeIcon />
      </button>
    </div>
  )
}
