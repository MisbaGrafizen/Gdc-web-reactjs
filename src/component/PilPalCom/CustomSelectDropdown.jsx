"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomSelectDropdown({
  options,
  value,
  onChange,
  placeholder = "Select option",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selectedOption = options.find((option) => option.value === value);

  const handleSelect = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full px-4 py-1 border-[1.3px] border-gray-300 rounded-[8px] bg-gradient-to-r from-white to-gray-50 text-left focus:outline-none focus:border-blue-400 focus:shadow-lg transition-all duration-300 group"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {selectedOption ? (
              <>
                {selectedOption.icon && (
                  <div className="w-6 h-6 text-blue-600 mr-3">
                    {selectedOption.icon}
                  </div>
                )}
                <span className="font-medium text-gray-900">
                  {selectedOption.label}
                </span>
              </>
            ) : (
              <span className="text-gray-500">{placeholder}</span>
            )}
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center"
          >
            <div className="w-8 h-8 justify-center flex items-center transition-colors">
              <svg
                className="w-4 h-4 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: -90 }}
            className="absolute z-50 mt-3 w-full bg-white border border-gray-100 rounded-2xl shadow-lg overflow-hidden"
            style={{ transformOrigin: "left center" }}
          >
            <div className="max-h-60 overflow-y-auto">
              {options.map((option) => (
                <motion.button
                  key={option.value}
                //   initial={{ opacity: 0, y: 20 }}
                //   animate={{ opacity: 1, y: 0 }}
                  whileHover={{ backgroundColor: "#F9FAFB" }}
                  onClick={() => handleSelect(option.value)}
                  className="w-full p-4 text-left flex items-center hover:bg-gray-50 transition-all duration-200 group border-b border-gray-50 last:border-b-0"
                >
                  {/* Optional icon */}
                  {option.icon && (
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="w-6 h-6 text-blue-600 mr-3"
                    >
                      {option.icon}
                    </motion.div>
                  )}
                  <span className="font-medium group-hover:text-blue-600 transition-colors">
                    {option.label}
                  </span>

                  {/* Checkmark if selected */}
                  {selectedOption?.value === option.value && (
                    <motion.div
                      className="ml-auto w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
