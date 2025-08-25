"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function CustomTimePicker({ value, onChange, placeholder = "Select time" }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedHour, setSelectedHour] = useState(value.split(":")[0] || "08")
  const [selectedMinute, setSelectedMinute] = useState(value.split(":")[1] || "00")

  const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, "0"))
  const minutes = Array.from({ length: 12 }, (_, i) => (i * 5).toString().padStart(2, "0"))

  const handleTimeSelect = () => {
    const time = `${selectedHour}:${selectedMinute}`
    onChange(time)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full px-4 py-2 border-[1.3px] border-gray-300 rounded-[8px] bg-gradient-to-r from-white to-gray-50 text-left  transition-all duration-300 group"
      >
        <div className="flex items-center justify-between">
          <span className={value ? "text-gray-900" : "text-gray-500"}>{value || placeholder}</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center"
          >
            <div className="w-6 h-6 bg-blue-100 rounded-[5px] flex items-center justify-center group-hover:bg-blue-200 transition-colors">
              <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            exit={{ opacity: 0, rotateX: -90 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="absolute z-50 mt-3 w-full bg-white border-2 border-gray-100 rounded-2xl shadow-2xl overflow-hidden"
            style={{ transformOrigin: "top" }}
          >
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3">
              <h3 className="font-bold text-white text-center flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Select Time
              </h3>
            </div>
            <div className="p-6">
              <div className="flex space-x-6">
                <div className="flex-1">
                  <label className="block text-sm font-bold text-gray-700 mb-3 text-center">Hour</label>
                  <div className="max-h-40 overflow-y-auto border-2 border-gray-100 rounded-lg bg-gray-50">
                    {hours.map((hour, index) => (
                      <motion.button
                        key={hour}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.02 }}
                        whileHover={{ backgroundColor: "#3B82F6", color: "white", scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedHour(hour)}
                        className={`w-full p-3 text-left transition-all duration-200 font-medium ${
                          selectedHour === hour ? "bg-blue-500 text-white shadow-lg" : "hover:bg-blue-100 text-gray-700"
                        }`}
                      >
                        {hour}:00
                      </motion.button>
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-bold text-gray-700 mb-3 text-center">Minute</label>
                  <div className="max-h-40 overflow-y-auto border-2 border-gray-100 rounded-lg bg-gray-50">
                    {minutes.map((minute, index) => (
                      <motion.button
                        key={minute}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.03 }}
                        whileHover={{ backgroundColor: "#3B82F6", color: "white", scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedMinute(minute)}
                        className={`w-full p-3 text-left transition-all duration-200 font-medium ${
                          selectedMinute === minute
                            ? "bg-blue-500 text-white shadow-lg"
                            : "hover:bg-blue-100 text-gray-700"
                        }`}
                      >
                        :{minute}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleTimeSelect}
                className="w-full mt-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-[8px] font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Confirm Time: {selectedHour}:{selectedMinute}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
