"use client"
import { motion } from "framer-motion"
import { Phone, Calendar } from "lucide-react"

const Header = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-[100%] left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-white/20"
    >
      <div className=" mx-auto  w-[80%] ">
        <div className="flex items-center justify-between h-16">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">GD</span>
            </div>
            <span className="font-semibold text-gray-900">Global Dental</span>
          </motion.div>

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("consultation")}
              className="flex items-center space-x-2 px-4 py-2 text-teal-600 hover:text-teal-700 font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>Online Consultation</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("pricing")}
              className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-teal-500 to-indigo-600 text-white rounded-full font-medium shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Pricing</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
