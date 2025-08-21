"use client"

import { useEffect, useState } from "react"
import HygoCardPopup from "../component/popups/HygoCardPopup" // adjust path as needed

export default function CardValidPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  useEffect(() => {
    // Automatically open popup when page loads
    setIsPopupOpen(true)
  }, [])

  const handleClose = () => {
    setIsPopupOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {/* You can show something behind the popup if needed */}
      <HygoCardPopup isOpen={isPopupOpen} onClose={handleClose} />
    </div>
  )
}
