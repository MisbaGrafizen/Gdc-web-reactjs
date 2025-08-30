"use client"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

const Stepper = ({ currentStep }) => {
  const steps = [
    { number: 1, title: "Patient Details" },
    { number: 2, title: "Treatment & Medical" },
    { number: 3, title: "Photos" },
    { number: 4, title: "Review" },
  ]

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className={`flex items-center flex-shrink-0 justify-center w-10 h-10 rounded-full border-2 ${
                currentStep > step.number
                  ? "bg-blue-800 border-blue-800 text-white"
                  : currentStep === step.number
                    ? "border-blue-800 text-blue-800 bg-white"
                    : "border-gray-300 text-gray-400 bg-white"
              }`}
            >
              {currentStep > step.number ? (
                <Check className="w-5 h-5" />
              ) : (
                <span className="font-semibold">{step.number}</span>
              )}
            </motion.div>

            <div className="ml-3">
              <p className={` md77:block hidden text-[12px] md77:text-sm font-medium ${currentStep >= step.number ? "text-gray-900" : "text-gray-400"}`}>
                {step.title}
              </p>
            </div>

            {index < steps.length - 1 && (
              <div className={`flex-1 h-0.5 mx-4 ${currentStep > step.number ? "bg-blue-900" : "bg-gray-300"}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stepper
