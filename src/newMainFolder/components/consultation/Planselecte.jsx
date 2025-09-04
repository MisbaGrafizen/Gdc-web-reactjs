"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { PhoneCall, FileText, ListChecks, ShieldCheck, HeartPulse, Globe2 } from "lucide-react"

const plans = [
  {
    id: "essential",
    tag: "ESSENTIAL",
    title: "Essential Dental Care",
    price: "$49",
    color: "blue",
    icon: PhoneCall,
    features: [
      { icon: FileText, text: "Review of history, photos, reports" },
      { icon: PhoneCall, text: "Live call 20–30 min" },
      { icon: ListChecks, text: "Summary email & guidance" },
      { icon: ListChecks, text: "Discussion of treatment options" },
    ],
  },
  {
    id: "comprehensive",
    tag: "COMPREHENSIVE",
    title: "Comprehensive Dental Care",
    price: "$99",
    color: "yellow",
    icon: Globe2,
    features: [
      { icon: FileText, text: "Full expert review of clinical data, reports, X-rays" },
      { icon: ShieldCheck, text: "One follow-up within 7 days" },
      { icon: HeartPulse, text: "Personalized travel guidance to India" },
      { icon: ListChecks, text: "Ideal for complex cases & NRIs" },
    ],
  },
]

export default function PlanSelect({ onPrev, onNext, loading }) {
  const [selectedPlan, setSelectedPlan] = useState("essential")

  const handleSelect = (id) => setSelectedPlan(id)

  const handleNext = () => {
    if (onNext) onNext(selectedPlan)
    // Scroll to payment or trigger next step
  }

  return (
    <div className="pb-16 px-4 lg:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Choose Your Consultation Plan</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {plans.map((plan) => {
          const selected = selectedPlan === plan.id
          const Icon = plan.icon

          return (
            <motion.div
              key={plan.id}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
   className={`rounded-2xl p-6 border-2 relative transition-all duration-300 cursor-pointer flex flex-col items-center text-center ${
  selectedPlan === plan.id
    ? plan.color === "blue"
      ? "border-blue-600 bg-blue-50 shadow-xl"
      : "border-yellow-600 bg-yellow-50 shadow-xl"
    : "border-gray-200 bg-white shadow"
}`}
              onClick={() => handleSelect(plan.id)}
            >
              {/* Tag */}
              <div
                className={`absolute top-0 left-0 m-3 px-3 py-1 text-xs font-bold rounded-full shadow text-white ${
                  plan.color === "blue" ? "bg-blue-600" : "bg-yellow-600"
                }`}
              >
                {plan.tag}
              </div>

              {/* Main Icon */}
              <div
                className={`mb-4 w-14 h-14 rounded-full flex items-center justify-center ${
                  plan.color === "blue" ? "bg-blue-100 text-blue-600" : "bg-yellow-100 text-yellow-600"
                }`}
              >
                <Icon className="w-7 h-7" />
              </div>

              {/* Title & Price */}
              <h3 className="text-xl font-bold text-gray-800 mb-1">{plan.title}</h3>
              <p className="text-sm text-gray-600 mb-4">
                <span className="font-semibold">Active now just at:</span> {plan.price}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6 text-left w-full px-2">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm">
                    <f.icon className="w-4 h-4 text-gray-500 shrink-0 mt-1" />
                    {f.text}
                  </li>
                ))}
              </ul>

              {/* Selection Indicator */}
              {selected && (
                <div className="absolute top-3 right-3 w-4 h-4 bg-green-600 rounded-full shadow-lg ring-2 ring-white" />
              )}
            </motion.div>
          )
        })}
      </div>

      {/* NEXT Button */}
      <div className="text-center mt-12">
        <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
  onClick={handleNext}
  disabled={loading}
  className={`${
    loading ? "opacity-60 cursor-not-allowed" : ""
  } bg-gradient-to-r from-blue-900 to-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition`}
>
  {loading ? "Submitting..." : "Continue to Payment"}
</motion.button>
      </div>
    </div>
  )
}
