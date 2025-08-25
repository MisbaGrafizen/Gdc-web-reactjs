"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Check, X, Calendar, Mail, Phone } from "lucide-react"

const SuccessModal = ({ onClose }) => {
  const referenceId = `GD${Date.now().toString().slice(-8)}`

  useEffect(() => {
    // Create confetti effect
    const createConfetti = () => {
      const colors = ["#14b8a6", "#3b82f6", "#8b5cf6", "#f59e0b", "#ef4444"]
      const confettiContainer = document.createElement("div")
      confettiContainer.style.position = "fixed"
      confettiContainer.style.top = "0"
      confettiContainer.style.left = "0"
      confettiContainer.style.width = "100%"
      confettiContainer.style.height = "100%"
      confettiContainer.style.pointerEvents = "none"
      confettiContainer.style.zIndex = "9999"
      document.body.appendChild(confettiContainer)

      for (let i = 0; i < 50; i++) {
        const confetti = document.createElement("div")
        confetti.style.position = "absolute"
        confetti.style.width = "10px"
        confetti.style.height = "10px"
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
        confetti.style.left = Math.random() * 100 + "%"
        confetti.style.top = "-10px"
        confetti.style.borderRadius = "50%"
        confetti.style.animation = `fall ${Math.random() * 2 + 2}s linear forwards`
        confettiContainer.appendChild(confetti)
      }

      // Add CSS animation
      const style = document.createElement("style")
      style.textContent = `
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `
      document.head.appendChild(style)

      // Clean up after animation
      setTimeout(() => {
        document.body.removeChild(confettiContainer)
        document.head.removeChild(style)
      }, 4000)
    }

    createConfetti()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <Check className="w-10 h-10 text-white" />
        </motion.div>

        {/* Success Message */}
        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold text-gray-900 mb-4"
        >
          Payment Successful!
        </motion.h3>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 mb-6"
        >
          Payment received. Our coordinators will contact you; doctor notified.
        </motion.p>

        {/* Reference ID */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-gray-50 rounded-lg p-4 mb-6"
        >
          <p className="text-sm text-gray-600 mb-1">Reference ID</p>
          <p className="font-mono font-semibold text-gray-900">{referenceId}</p>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-left mb-6"
        >
          <h4 className="font-semibold text-gray-900 mb-3">What happens next?</h4>
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-blue-900" />
              <span className="text-sm text-gray-600">Our coordinator will call you within 24 hours</span>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="w-4 h-4 text-blue-900" />
              <span className="text-sm text-gray-600">Schedule your consultation at a convenient time</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-blue-900" />
              <span className="text-sm text-gray-600">Receive consultation summary via email</span>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex space-x-4"
        >
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Back to Home
          </button>
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-900 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            View Summary
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default SuccessModal
