"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { countries } from "../../data/countries"

const PatientDetails = ({ formData, updateFormData, errors, updateErrors, onNext }) => {
  const [localErrors, setLocalErrors] = useState({})

  const validateField = (name, value) => {
    const newErrors = { ...localErrors }

    switch (name) {
      case "fullName":
        if (!value || value.length < 2) {
          newErrors.fullName = "Name must be at least 2 characters"
        } else {
          delete newErrors.fullName
        }
        break
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!value) {
          newErrors.email = "Email is required"
        } else if (!emailRegex.test(value)) {
          newErrors.email = "Please enter a valid email"
        } else {
          delete newErrors.email
        }
        break
      case "country":
        if (!value) {
          newErrors.country = "Country is required"
        } else {
          delete newErrors.country
        }
        break
      case "city":
        if (!value) {
          newErrors.city = "City is required"
        } else if (value.length < 2 || value.length > 64) {
          newErrors.city = "City must be 2-64 characters"
        } else {
          delete newErrors.city
        }
        break
      default:
        break
    }

    setLocalErrors(newErrors)
    updateErrors(newErrors)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    updateFormData({ [name]: value })
    validateField(name, value)
  }

  const handleNext = () => {
    // Validate all fields
    const fieldsToValidate = ["fullName", "email", "country", "city"]
    fieldsToValidate.forEach((field) => {
      validateField(field, formData[field])
    })

    // Check if there are any errors
    const hasErrors =
      Object.keys(localErrors).length > 0 ||
      !formData.fullName ||
      !formData.email ||
      !formData.country ||
      !formData.city

    if (!hasErrors) {
      onNext()
    }
  }

  const isFormValid =
    formData.fullName && formData.email && formData.country && formData.city && Object.keys(localErrors).length === 0

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Patient Details</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border ${
              localErrors.fullName ? "border-red-300" : "border-gray-300"
            } focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all`}
            placeholder="Enter your full name"
          />
          {localErrors.fullName && <p className="text-red-500 text-sm mt-1">{localErrors.fullName}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border ${
              localErrors.email ? "border-red-300" : "border-gray-300"
            } focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all`}
            placeholder="Enter your email"
          />
          {localErrors.email && <p className="text-red-500 text-sm mt-1">{localErrors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone (Optional)</label>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
            placeholder="Enter your phone number"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
          <motion.select
            whileFocus={{ scale: 1.02 }}
            name="country"
            value={formData.country}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border ${
              localErrors.country ? "border-red-300" : "border-gray-300"
            } focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all`}
          >
            <option value="">Select your country</option>
            {countries.map((country) => (
              <option key={country.code} value={country.name}>
                {country.name}
              </option>
            ))}
          </motion.select>
          {localErrors.country && <p className="text-red-500 text-sm mt-1">{localErrors.country}</p>}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border ${
              localErrors.city ? "border-red-300" : "border-gray-300"
            } focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all`}
            placeholder="Enter your city"
          />
          {localErrors.city && <p className="text-red-500 text-sm mt-1">{localErrors.city}</p>}
        </div>
      </div>

      <div className="flex justify-end pt-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}
          disabled={!isFormValid}
          className={`px-8 py-3 rounded-xl font-semibold transition-all ${
            isFormValid
              ? "bg-gradient-to-r from-teal-500 to-indigo-600 text-white shadow-lg hover:shadow-xl"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Next Step
        </motion.button>
      </div>
    </div>
  )
}

export default PatientDetails
