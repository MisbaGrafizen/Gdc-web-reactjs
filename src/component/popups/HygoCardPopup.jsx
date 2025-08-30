"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"



export default function GdcCardPopup({ isOpen, onClose }) {
    const [step, setStep] = useState(1) // 1: Card Details, 2: OTP Verification
    const [cardNumber, setCardNumber] = useState("")
    const [hscCode, setHscCode] = useState("")
    const [otp, setOtp] = useState(["", "", "", "", "", ""])
    const [isLoading, setIsLoading] = useState(false)

    // Handle card number input (only last 4 digits)
    const handleCardNumberChange = (e) => {
        const value = e.target.value.replace(/\D/g, "")
        if (value.length <= 4) {
            setCardNumber(value)
        }
    }

    // Handle HSC code input (only 3 digits)
    const handleHscCodeChange = (e) => {
        const value = e.target.value.replace(/\D/g, "")
        if (value.length <= 3) {
            setHscCode(value)
        }
    }

    // Handle OTP input
    const handleOtpChange = (index, value) => {
        const newValue = value.replace(/\D/g, "")
        if (newValue.length <= 1) {
            const newOtp = [...otp]
            newOtp[index] = newValue
            setOtp(newOtp)

            // Auto-focus next input
            if (newValue && index < 5) {
                const nextInput = document.getElementById(`otp-${index + 1}`)
                if (nextInput) nextInput.focus()
            }
        }
    }

    // Handle backspace in OTP
    const handleOtpKeyDown = (index, e) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            const prevInput = document.getElementById(`otp-${index - 1}`)
            if (prevInput) prevInput.focus()
        }
    }

    // Handle next button click
    const handleNext = async () => {
        if (cardNumber.length === 4 && hscCode.length === 3) {
            setIsLoading(true)
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500))
            setIsLoading(false)
            setStep(2)
        }
    }

    // Handle OTP submit
    const handleOtpSubmit = async () => {
        const otpValue = otp.join("")
        if (otpValue.length === 6) {
            setIsLoading(true)
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 2000))
            setIsLoading(false)
            // Success - close popup
            onClose()
            // Reset form
            setStep(1)
            setCardNumber("")
            setHscCode("")
            setOtp(["", "", "", "", "", ""])
        }
    }

    // Reset form when popup closes
    const handleClose = () => {
        setStep(1)
        setCardNumber("")
        setHscCode("")
        setOtp(["", "", "", "", "", ""])
        onClose()
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black font-Poppins bg-opacity-50 flex items-center justify-center z-50 p-4"
                    onClick={handleClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="bg-white rounded-2xl  shadow-2xl w-full max-w-md overflow-hidden"
                        style={{ height: "440px" }}
                        onClick={(e) => e.stopPropagation()}
                    >

                        {/* Header with Logo - Compact */}
                        <div className=" px-6 rounded-[10px] py-4 text-center relative">
                            <button
                                onClick={handleClose}
                                className="absolute top-3 right-4 text-white/80 hover:text-white transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <img className=" w-[160px] my-[px]  mx-auto [" src={logo} />

                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-xl mt-[5px] font-[600] text-[#13008E] mb-1"
                            >
                                Welcome to Gdc Card
                            </motion.h2>
                            {/* <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-blue-100  text-sm"
              >
                {step === 1 ? "Enter your card details" : "Enter verification code"}
              </motion.p> */}
                        </div>

                        {/* Step Indicator - Compact */}
                        {/* <div className="px-6 py-3 bg-gray-50 border-b">
              <div className="flex items-center justify-center space-x-3">
                <div className="flex items-center">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-[600] ${
                      step >= 1 ? "bg-[#13008E] text-white" : "bg-gray-300 text-gray-600"
                    }`}
                  >
                    1
                  </div>
                  <span className="ml-2 text-xs font-medium text-gray-700">Card</span>
                </div>
                <div className="w-6 h-0.5 bg-gray-300">
                  <motion.div
                    className="h-full bg-[#13008E]"
                    initial={{ width: "0%" }}
                    animate={{ width: step >= 2 ? "100%" : "0%" }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="flex items-center">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-[600] ${
                      step >= 2 ? "bg-[#13008E] text-white" : "bg-gray-300 text-gray-600"
                    }`}
                  >
                    2
                  </div>
                  <span className="ml-2 text-xs font-medium text-gray-700">OTP</span>
                </div>
              </div>
            </div> */}

                        {/* Content Area - Fixed Height */}
                        <div className="flex-1 p-6 overflow-hidden" style={{ height: "calc(460px - 140px)" }}>
                            <AnimatePresence mode="wait">
                                {step === 1 ? (
                                    <motion.div
                                        key="step1"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="h-full flex flex-col justify-between"
                                    >
                                        <div className="space-y-2">
                                            {/* Card Number Display - Compact */}
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">Card Number</label>
                                                <div className="relative">
                                                    <div className="w-full px-3 py-3 border-[1.3px] border-gray-200 rounded-md bg-gray-100 text-center">
                                                        <div className="flex items-center justify-center space-x-1 text-base font-mono">
                                                            <span className="text-gray-400">XXXX</span>
                                                            <span className="text-gray-400">XXXX</span>
                                                            <span className="text-gray-400">XXXX</span>
                                                            <span className="text-[#13008E] font-[600]">
                                                                {cardNumber.padEnd(4, "•").split("").join("")}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="absolute top-2 right-2">
                                                        <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                                                <i className=" text-[#13008E]  text-[19px] fa-regular fa-credit-card"></i>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Input Fields */}
                                            <div className="grid grid-cols-2 !pt-[10px] gap-3">
                                                {/* Last 4 Digits Input */}
                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                                        Last 4 Digits <span className="text-red-500">*</span>
                                                    </label>
                                                    <motion.input
                                                        whileFocus={{ scale: 1.02 }}
                                                        type="text"
                                                        value={cardNumber}
                                                        onChange={handleCardNumberChange}
                                                        placeholder="XXXX"
                                                        maxLength={4}
                                                        className="w-full px-3 py-2 border-[1.3px] border-gray-200 rounded-md text-center text-base font-mono tracking-wider  outline-none focus:ring-blue-100 transition-all duration-300"
                                                    />
                                                </div>

                                                {/* HSC Code Input */}
                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                                        HSC Code <span className="text-red-500">*</span>
                                                    </label>
                                                    <motion.input
                                                        whileFocus={{ scale: 1.02 }}
                                                        type="text"
                                                        value={hscCode}
                                                        onChange={handleHscCodeChange}
                                                        placeholder="123"
                                                        maxLength={3}
                                                        className="w-full px-3 py-2 border-[1.3px] border-gray-200 rounded-md text-center text-base font-mono tracking-wider outline-none focus:ring-blue-100 transition-all duration-300"
                                                    />
                                                </div>
                                            </div>

                                            <div className="text-center">
                                                <p className="text-xs text-gray-500">Enter last 4 digits and 3-digit security code</p>
                                            </div>
                                        </div>

                                        {/* Next Button */}
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={handleNext}
                                            disabled={cardNumber.length !== 4 || hscCode.length !== 3 || isLoading}
                                            className={`w-full py-3 rounded-lg font-[600] text-base transition-all duration-300 ${cardNumber.length === 4 && hscCode.length === 3 && !isLoading
                                                    ? "bg-gradient-to-r from-[#13008E] to-blue-700 text-white shadow-lg hover:shadow-xl"
                                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                                }`}
                                        >
                                            {isLoading ? (
                                                <div className="flex items-center justify-center">
                                                    <motion.div
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                                        className="w-5 h-5 border-[1.3px] border-white border-t-transparent rounded-full mr-2"
                                                    />
                                                    Verifying...
                                                </div>
                                            ) : (
                                                "Next"
                                            )}
                                        </motion.button>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="step2"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="h-full  mt-[-10px] flex flex-col justify-between"
                                    >
                                        <div className="space-y-4">
                                            {/* OTP Info - Compact */}
                                            <div className="text-center">
                                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                                    <svg className="w-6 h-6 text-[#13008E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                                        />
                                                    </svg>
                                                </div>
                                                <h3 className="text-base font-[600] text-gray-900 mb-2">Enter Verification Code</h3>
                                                <p className="text-gray-600 text-xs">Code sent to ••••1234</p>
                                            </div>

                                            {/* OTP Input */}
                                            <div>
                                                {/* <label className="block text-sm font-semibold text-gray-700 mb-3 text-center">
                                                    6-Digit OTP <span className="text-red-500">*</span>
                                                </label> */}
                                                <div className="flex justify-center space-x-2">
                                                    {otp.map((digit, index) => (
                                                        <motion.input
                                                            key={index}
                                                            id={`otp-${index}`}
                                                            whileFocus={{ scale: 1.1 }}
                                                            type="text"
                                                            value={digit}
                                                            onChange={(e) => handleOtpChange(index, e.target.value)}
                                                            onKeyDown={(e) => handleOtpKeyDown(index, e)}
                                                            maxLength={1}
                                                            className="w-12 h-[49px] border-[1.3px] border-gray-200 rounded-lg text-center text-base font-[600] focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                                                        />
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Resend OTP */}
                                            <div className="text-center">
                                                <p className="text-xs text-gray-600 mb-">Didn't receive code?</p>
                                                <button className="text-[#13008E] font-semibold text-xs hover:text-blue-700 transition-colors">
                                                    Resend OTP
                                                </button>
                                            </div>
                                        </div>

                                        <div className="space-y-1 pt-[14px]">
                                            {/* Submit Button */}
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={handleOtpSubmit}
                                                disabled={otp.join("").length !== 6 || isLoading}
                                                className={`w-full py-3 rounded-lg font-[600] text-base transition-all duration-300 ${otp.join("").length === 6 && !isLoading
                                                        ? "bg-gradient-to-r from-[#13008E] to-blue-700 text-white shadow-lg hover:shadow-xl"
                                                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                                    }`}
                                            >
                                                {isLoading ? (
                                                    <div className="flex items-center justify-center">
                                                        <motion.div
                                                            animate={{ rotate: 360 }}
                                                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                                            className="w-5 h-5 border-[1.3px] border-white border-t-transparent rounded-full mr-2"
                                                        />
                                                        Verifying...
                                                    </div>
                                                ) : (
                                                    "Submit"
                                                )}
                                            </motion.button>

                                            {/* Back Button */}

                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
