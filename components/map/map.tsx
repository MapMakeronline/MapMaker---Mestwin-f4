"use client"

interface MapProps {
  className?: string
}

export function Map({ className = "" }: MapProps) {
  return (
    <div className={`w-full h-full bg-green-200 relative overflow-hidden ${className}`}>
      {/* Simulated map with parcels */}
      <div className="absolute inset-0">
        {/* Yellow parcels */}
        <div className="absolute top-20 left-40 w-80 h-60 bg-yellow-200 border-2 border-red-400 flex items-center justify-center text-blue-600 font-bold">
          331/2
        </div>
        <div className="absolute top-10 left-20 w-60 h-40 bg-yellow-200 border-2 border-red-400 flex items-center justify-center text-blue-600 font-bold">
          331/1
        </div>
        <div className="absolute top-60 left-60 w-40 h-30 bg-yellow-200 border-2 border-red-400 flex items-center justify-center text-blue-600 font-bold">
          332
        </div>

        {/* Green parcels */}
        <div className="absolute top-40 right-40 w-60 h-80 bg-green-300 border-2 border-red-400 flex items-center justify-center text-blue-600 font-bold">
          333/6
        </div>
        <div className="absolute bottom-20 left-20 w-50 h-40 bg-green-300 border-2 border-red-400 flex items-center justify-center text-blue-600 font-bold">
          335/12
        </div>

        {/* Scale bar */}
        <div className="absolute bottom-4 left-4 bg-white px-2 py-1 text-xs border">50 m</div>
      </div>
    </div>
  )
}
