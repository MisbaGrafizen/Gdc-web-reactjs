"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { X, CreditCard, Lock } from "lucide-react"

const PaymentModal = ({ plan, onClose, onSuccess }) => {
  const [processing, setProcessing] = useState(false)
  const [currency, setCurrency] = useState("USD")

  const currencies = {
    USD: { symbol: "$", rate: 1 },
    INR: { symbol: "₹", rate: 83 },
    EUR: { symbol: "€", rate: 0.85 },
  }

  const convertPrice = (price) => {
    return Math.round(price * currencies[currency].rate)
  }

  const handlePayment = async () => {
    setProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setProcessing(false)
    onSuccess()
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Complete Payment</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Plan Summary */}
        <div className="bg-gradient-to-r from-teal-50 to-indigo-50 rounded-lg p-4 mb-6 border border-teal-100">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-gray-900">{plan?.name} Plan</h4>
              <p className="text-sm text-gray-600">{plan?.doctor}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-2 mb-2">
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="text-sm border border-gray-300 rounded px-2 py-1"
                >
                  {Object.keys(currencies).map((curr) => (
                    <option key={curr} value={curr}>
                      {curr}
                    </option>
                  ))}
                </select>
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {currencies[currency].symbol}
                {convertPrice(plan?.price || 0)}
              </div>
            </div>
          </div>
        </div>

        {/* Mock Payment Form */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
            <div className="relative">
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent pl-12"
              />
              <CreditCard className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
              <input
                type="text"
                placeholder="123"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent"
            />
          </div>
        </div>

        {/* Security Notice */}
        <div className="bg-green-50 rounded-lg p-3 mb-6 border border-green-200">
          <div className="flex items-center space-x-2">
            <Lock className="w-4 h-4 text-green-600" />
            <span className="text-sm text-green-800">Your payment is secured with 256-bit SSL encryption</span>
          </div>
        </div>

        {/* Payment Button */}
        <motion.button
          whileHover={{ scale: processing ? 1 : 1.02 }}
          whileTap={{ scale: processing ? 1 : 0.98 }}
          onClick={handlePayment}
          disabled={processing}
          className={`w-full py-4 rounded-lg font-semibold text-white shadow-lg transition-all ${
            processing
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-900 to-indigo-600 hover:shadow-xl"
          }`}
        >
          {processing ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Processing...</span>
            </div>
          ) : (
            `Pay ${currencies[currency].symbol}${convertPrice(plan?.price || 0)}`
          )}
        </motion.button>

        <p className="text-xs text-gray-500 text-center mt-4">
          By completing this payment, you agree to our Terms of Service and Privacy Policy.
        </p>
      </motion.div>
    </motion.div>
  )
}

export default PaymentModal
