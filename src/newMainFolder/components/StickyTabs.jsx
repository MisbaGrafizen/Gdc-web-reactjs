"use client"
import { motion } from "framer-motion"

const StickyTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "consultation", label: "Online Consultation" },
    { id: "pricing", label: "Pricing" },
    { id: "photo-guide", label: "Photo Guide" },
    { id: "faq", label: "FAQ" },
  ]

  const scrollToSection = (sectionId) => {
    setActiveTab(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-16 z-40 bg-white/80 backdrop-blur-lg border-b border-white/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 overflow-x-auto">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(tab.id)}
              className={`relative py-4 px-2 font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.id ? "text-[#05206d]" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-br from-[#1b2644] to-blue-600 "
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default StickyTabs
