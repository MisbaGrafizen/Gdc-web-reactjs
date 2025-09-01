"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FileText, ImageIcon, User, MapPin, Stethoscope } from "lucide-react"

const MessageReview = ({ formData, updateFormData, errors, updateErrors, onPrev, onConsultationSelect }) => {
  const [localErrors, setLocalErrors] = useState({})

  const handleConsentChange = (consentType, value) => {
    const consents = { ...formData.consents }
    consents[consentType] = value
    updateFormData({ consents })

    // Clear error when consent is given
    if (value && localErrors[consentType]) {
      const newErrors = { ...localErrors }
      delete newErrors[consentType]
      setLocalErrors(newErrors)
      updateErrors(newErrors)
    }
  }

  const handleContinue = () => {
    const newErrors = {}

    if (!formData.consents.accurateDetails) {
      newErrors.accurateDetails = "Please confirm that your details are accurate"
    }

    if (!formData.consents.dataProcessing) {
      newErrors.dataProcessing = "Please consent to data processing for consultation"
    }

    setLocalErrors(newErrors)
    updateErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      onConsultationSelect()
    }
  }
  

  const isFormValid = formData.consents.accurateDetails && formData.consents.dataProcessing

  const fileCount = (formData.dentalRecords?.length || 0) + (formData.xrays?.length || 0)
  const photoCount = Object.keys(formData.photos || {}).length

  return (
    <div className="space-y-8">
      <h3 className="text-xl font-semibold text-gray-900">Message & Review</h3>

      {/* Message to Doctor */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Message to Doctor (Optional)</label>
        <textarea
          value={formData.messageToDoctor}
          onChange={(e) => updateFormData({ messageToDoctor: e.target.value })}
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all"
          placeholder="Any specific questions or concerns you'd like to discuss..."
        />
      </div>

      {/* Summary Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-teal-50 to-indigo-50 rounded-2xl p-6 border border-teal-100"
      >
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Consultation Summary</h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <User className="w-5 h-5 text-blue-900" />
              <div>
                <p className="font-medium text-gray-900">{formData.fullName}</p>
                <p className="text-sm text-gray-600">{formData.email}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-blue-900" />
              <div>
                <p className="font-medium text-gray-900">
                  {formData.city}, {formData.country}
                </p>
                {formData.phone && <p className="text-sm text-gray-600">{formData.phone}</p>}
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Stethoscope className="w-5 h-5 text-blue-900" />
              <div>
                <p className="font-medium text-gray-900">{formData.treatment}</p>
                {formData.treatment === "Others" && formData.chiefComplaint && (
                  <p className="text-sm text-gray-600">{formData.chiefComplaint.substring(0, 50)}...</p>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FileText className="w-5 h-5 text-blue-900" />
              <div>
                <p className="font-medium text-gray-900">Files Uploaded</p>
                <p className="text-sm text-gray-600">{fileCount} files</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <ImageIcon className="w-5 h-5 text-blue-900" />
              <div>
                <p className="font-medium text-gray-900">Photos Uploaded</p>
                <p className="text-sm text-gray-600">{photoCount} photos</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Consents */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-900">Required Consents</h4>

        <div className="space-y-4">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className={`p-4 rounded-lg border-2 transition-all ${
              formData.consents.accurateDetails
                ? "border-teal-200 bg-teal-50"
                : localErrors.accurateDetails
                  ? "border-red-200 bg-red-50"
                  : "border-gray-200 bg-white"
            }`}
          >
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.consents.accurateDetails}
                onChange={(e) => handleConsentChange("accurateDetails", e.target.checked)}
                className="mt-1 text-blue-900 focus:ring-blue-900 rounded"
              />
              <div>
                <p className="font-medium text-gray-900">I confirm that all details provided are accurate</p>
                <p className="text-sm text-gray-600 mt-1">Please ensure all information is correct before proceeding</p>
              </div>
            </label>
            {localErrors.accurateDetails && <p className="text-red-500 text-sm mt-2">{localErrors.accurateDetails}</p>}
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            className={`p-4 rounded-lg border-2 transition-all ${
              formData.consents.dataProcessing
                ? "border-teal-200 bg-teal-50"
                : localErrors.dataProcessing
                  ? "border-red-200 bg-red-50"
                  : "border-gray-200 bg-white"
            }`}
          >
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.consents.dataProcessing}
                onChange={(e) => handleConsentChange("dataProcessing", e.target.checked)}
                className="mt-1 text-blue-900 focus:ring-blue-900 rounded"
              />
              <div>
                <p className="font-medium text-gray-900">
                  I consent to secure processing of medical data for consultation
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Your data will be processed securely and used only for consultation purposes
                </p>
              </div>
            </label>
            {localErrors.dataProcessing && <p className="text-red-500 text-sm mt-2">{localErrors.dataProcessing}</p>}
          </motion.div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onPrev}
          className="px-8 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all"
        >
          Previous
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleContinue}
          disabled={!isFormValid}
          className={`px-8 py-3 rounded-lg font-semibold transition-all ${
            isFormValid
              ? "bg-gradient-to-br from-[#1b2644] to-blue-600  text-white shadow-lg hover:shadow-xl"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Continue to Consultation Selection
        </motion.button>
      </div>
    </div>
  )
}

export default MessageReview
