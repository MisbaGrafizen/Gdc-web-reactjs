"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Curtain } from "./curtain" // Import the new Curtain component

const ConfettiPiece = ({ index }) => {
  const colors = ["#FFD700", "#FF6347", "#6A5ACD", "#3CB371", "#FF1493"] // Gold, Tomato, SlateBlue, MediumSeaGreen, DeepPink

  return (
    <motion.div
      className="absolute rounded-sm"
      style={{
        backgroundColor: colors[index % colors.length],
        width: Math.random() * 10 + 5, // Random width between 5 and 15px
        height: Math.random() * 10 + 5, // Random height between 5 and 15px
        left: `${Math.random() * 100}%`, // Random horizontal position
        top: 0, // Start from the top
      }}
      initial={{ y: -50, opacity: 1, rotate: 0 }} // Start slightly above the top
      animate={{
        y: Math.random() * 400 + 100, // Fly downwards to a random height
        x: Math.random() * 200 - 100, // Spread horizontally
        opacity: 0,
        rotate: Math.random() * 720 - 360, // Spin randomly
      }}
      transition={{
        duration: Math.random() * 1.5 + 1, // Random duration between 1 and 2.5 seconds
        ease: "easeOut",
        delay: Math.random() * 0.5, // Staggered delay
      }}
    />
  )
}

export default function CurtainShow() {
  const [curtainsOpen, setCurtainsOpen] = useState(false)
  const [blastActive, setBlastActive] = useState(false)
  const [popupVisible, setPopupVisible] = useState(false)
  const [resetKey, setResetKey] = useState(0) // Key to re-mount components for replay

  useEffect(() => {
    // Reset state for replay
    setCurtainsOpen(false)
    setBlastActive(false)
    setPopupVisible(false)

    const openCurtains = setTimeout(() => {
      setCurtainsOpen(true)
    }, 200) // Slight delay before curtains start opening

    const startBlast = setTimeout(() => {
      setBlastActive(true)
    }, 2700) // Blast starts right after curtains finish their 2.5s animation (200ms delay + 2500ms duration)

    const showPopup = setTimeout(() => {
      setPopupVisible(true)
    }, 4700) // Popup opens 2 seconds after blast starts (2700ms blast start + 2000ms delay)

    return () => {
      clearTimeout(openCurtains)
      clearTimeout(startBlast)
      clearTimeout(showPopup)
    }
  }, [resetKey]) // Re-run effect when resetKey changes

  const handleReplay = () => {
    setResetKey((prev) => prev + 1) // Increment key to re-trigger useEffect
  }

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-white">
      {/* Background content revealed by curtains */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-8 text-center">
        <button
          onClick={handleReplay}
          className="px-6 py-3 mt-8 text-lg font-semibold text-white bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-300"
        >
          {"Replay"}
        </button>
      </div>

      {/* Curtains */}
      <Curtain key={`left-curtain-${resetKey}`} side="left" isOpen={curtainsOpen} />
      <Curtain key={`right-curtain-${resetKey}`} side="right" isOpen={curtainsOpen} />

      {/* Confetti Blast */}
      <AnimatePresence>{blastActive && <ConfettiBlast key={`confetti-container-${resetKey}`} />}</AnimatePresence>

      {/* Popup */}
      <AnimatePresence>
        {popupVisible && (
          <motion.div
            key={`popup-${resetKey}`}
            className="fixed inset-0 flex items-center justify-center z-40 bg-transparent p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative p-8 bg-white rounded-lg shadow-xl max-w-md w-full text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <h2 className="text-2xl font-bold text-gray-900">{"A Special Reveal!"}</h2>
              <p className="mt-4 text-gray-700">{"Thank you for joining us. Enjoy the show!"}</p>
              <button
                onClick={() => setPopupVisible(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
                aria-label="Close popup"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Re-export ConfettiBlast for clarity, though it's used internally
export const ConfettiBlast = ({ numPieces = 250 }) => {
  // Increased to 250 pieces for "more more" blast
  return (
    <motion.div className="absolute top-0 left-0 right-0 h-1/2 overflow-hidden z-30">
      {" "}
      {/* Changed to top-0 */}
      {Array.from({ length: numPieces }).map((_, i) => (
        <ConfettiPiece key={i} index={i} />
      ))}
    </motion.div>
  )
}
