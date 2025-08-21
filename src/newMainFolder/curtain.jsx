"use client"

import { motion } from "framer-motion"

export const Curtain = ({ side, isOpen }) => {
  // Define the animation states for the curtain
  const curtainVariants = {
    closed: {
      x: 0,
      y: 0,
      opacity: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", // Full curtain
    },
    open: {
      x: side === "left" ? "-100%" : "100%", // Move fully off-screen
      y: -50, // Move slightly upwards
      opacity: 0, // Fade out
      clipPath:
        side === "left" ? "polygon(0 0, 100% 0, 70% 100%, 0% 100%)" : "polygon(0 0, 100% 0, 100% 100%, 30% 100%)", // Still show the tied back shape initially
    },
  }

  const curtainStyle = {
    background: `linear-gradient(to ${side === "left" ? "right" : "left"}, #8B0000 0%, #B22222 50%, #8B0000 100%)`,
    boxShadow: side === "left" ? "inset -10px 0 20px rgba(0,0,0,0.5)" : "inset 10px 0 20px rgba(0,0,0,0.5)",
  }

  return (
    <motion.div
      className={`absolute top-0 h-full w-1/2 z-20 overflow-hidden`}
      style={{
        left: side === "left" ? 0 : "auto",
        right: side === "right" ? 0 : "auto",
        ...curtainStyle,
      }}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={curtainVariants}
      transition={{ duration: 2.5, ease: "easeOut" }} // Increased duration for slower removal
    >
      {/* Top Valance */}
      <div
        className="absolute top-0 w-full h-12 bg-red-900"
        style={{
          background: `linear-gradient(to bottom, #660000, #8B0000)`,
          boxShadow: "0 5px 15px rgba(0,0,0,0.5)",
        }}
      />

      {/* Simulated folds/pleats - using multiple divs for depth */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="absolute h-full w-1/5 bg-red-900 opacity-20"
          style={{
            left: `${i * 20}%`,
            background: `linear-gradient(to ${side === "left" ? "right" : "left"}, rgba(0,0,0,0.3), transparent)`,
          }}
        />
      ))}

      {/* Tied-back rope effect - this will also fade out with the curtain */}
      <motion.div
        className="absolute w-1/4 h-full bg-red-900 opacity-70"
        style={{
          [side === "left" ? "right" : "left"]: "10%",
          transformOrigin: side === "left" ? "right" : "left",
        }}
        initial={{ scaleX: 1, rotate: 0 }}
        animate={{
          scaleX: isOpen ? 0.5 : 1,
          rotate: isOpen ? (side === "left" ? -10 : 10) : 0, // Slight rotation for tied effect
        }}
        transition={{ duration: 2.5, ease: "easeOut" }} // Increased duration for slower removal
      >
        {/* Rope visual */}
        <div
          className="absolute w-full h-4 bg-red-700 rounded-full"
          style={{
            top: "50%",
            transform: "translateY(-50%)",
            boxShadow: "inset 0 0 5px rgba(0,0,0,0.5)",
          }}
        />
      </motion.div>
    </motion.div>
  )
}
