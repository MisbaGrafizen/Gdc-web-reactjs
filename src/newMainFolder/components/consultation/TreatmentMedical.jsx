"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Upload, X, FileText } from "lucide-react"

const TreatmentMedical = ({ formData, updateFormData, errors, updateErrors, onNext, onPrev }) => {
  const [localErrors, setLocalErrors] = useState({})

  const treatments = [
    "All-on-4 Implants",
    "All-on-6 Implants",
    "Veneers/Crowns",
    "Smile Makeover",
    "Aligners",
    "Others",
  ]

  const handleTreatmentChange = (treatment) => {
    updateFormData({ treatment })
    if (treatment !== "Others") {
      updateFormData({ chiefComplaint: "" })
    }
  }

  const handleFileUpload = (e, type) => {
    const files = Array.from(e.target.files)
    const validFiles = files.filter((file) => {
      const isValidType =
        type === "dentalRecords"
          ? ["application/pdf", "image/jpeg", "image/png", "image/jpg"].includes(file.type)
          : ["application/pdf", "image/jpeg", "image/png", "image/jpg"].includes(file.type)
      const isValidSize = file.size <= 25 * 1024 * 1024 // 25MB
      return isValidType && isValidSize
    })

    const currentFiles = formData[type] || []
    const newFiles = [...currentFiles, ...validFiles].slice(0, 10) // Max 10 files
    updateFormData({ [type]: newFiles })
  }

  const removeFile = (type, index) => {
    const files = [...formData[type]]
    files.splice(index, 1)
    updateFormData({ [type]: files })
  }

  const handleNext = () => {
    const newErrors = {}

    if (!formData.treatment) {
      newErrors.treatment = "Please select a treatment"
    }

    if (formData.treatment === "Others" && (!formData.chiefComplaint || formData.chiefComplaint.length < 8)) {
      newErrors.chiefComplaint = "Chief complaint must be at least 8 characters"
    }

    setLocalErrors(newErrors)
    updateErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      onNext()
    }
  }

  const isFormValid =
    formData.treatment &&
    (formData.treatment !== "Others" || (formData.chiefComplaint && formData.chiefComplaint.length >= 8))

  return (
    <div className="space-y-8">
      <h3 className="text-xl font-semibold text-gray-900">Treatment & Medical Information</h3>

      {/* Treatment Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">Treatment Choice *</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {treatments.map((treatment) => (
            <motion.div
              key={treatment}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleTreatmentChange(treatment)}
              className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                formData.treatment === treatment
                  ? "border-teal-500 bg-teal-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center">
                <input
                  type="radio"
                  name="treatment"
                  value={treatment}
                  checked={formData.treatment === treatment}
                  onChange={() => handleTreatmentChange(treatment)}
                  className="text-teal-500 focus:ring-teal-500"
                />
                <label className="ml-3 font-medium text-gray-900 cursor-pointer">{treatment}</label>
              </div>
            </motion.div>
          ))}
        </div>
        {localErrors.treatment && <p className="text-red-500 text-sm mt-2">{localErrors.treatment}</p>}
      </div>

      {/* Chief Complaint for Others */}
      {formData.treatment === "Others" && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <label className="block text-sm font-medium text-gray-700 mb-2">Chief Complaint *</label>
          <textarea
            value={formData.chiefComplaint}
            onChange={(e) => updateFormData({ chiefComplaint: e.target.value })}
            rows={4}
            className={`w-full px-4 py-3 rounded-xl border ${
              localErrors.chiefComplaint ? "border-red-300" : "border-gray-300"
            } focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all`}
            placeholder="Please describe your dental concern..."
          />
          {localErrors.chiefComplaint && <p className="text-red-500 text-sm mt-1">{localErrors.chiefComplaint}</p>}
        </motion.div>
      )}

      {/* File Uploads */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FileUploadSection
          title="Dental Records"
          type="dentalRecords"
          files={formData.dentalRecords || []}
          onFileUpload={handleFileUpload}
          onRemoveFile={removeFile}
          accept=".pdf,.jpg,.jpeg,.png"
        />
        <FileUploadSection
          title="X-rays/OPG"
          type="xrays"
          files={formData.xrays || []}
          onFileUpload={handleFileUpload}
          onRemoveFile={removeFile}
          accept=".pdf,.jpg,.jpeg,.png"
        />
      </div>

      {/* Medical History */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Medical History (Optional)</label>
        <textarea
          value={formData.medicalHistory}
          onChange={(e) => updateFormData({ medicalHistory: e.target.value })}
          rows={3}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
          placeholder="Any relevant medical history..."
        />
      </div>

      {/* Medical Questions */}
      <div className="space-y-4">
        <MedicalQuestion
          question="Are you on any medication?"
          value={formData.onMedication}
          details={formData.medicationDetails}
          onToggle={(value) => updateFormData({ onMedication: value })}
          onDetailsChange={(details) => updateFormData({ medicationDetails: details })}
        />
        <MedicalQuestion
          question="Do you have any drug allergies?"
          value={formData.drugAllergy}
          details={formData.allergyDetails}
          onToggle={(value) => updateFormData({ drugAllergy: value })}
          onDetailsChange={(details) => updateFormData({ allergyDetails: details })}
        />
        <MedicalQuestion
          question="Any recent surgery?"
          value={formData.recentSurgery}
          details={formData.surgeryDetails}
          onToggle={(value) => updateFormData({ recentSurgery: value })}
          onDetailsChange={(details) => updateFormData({ surgeryDetails: details })}
        />
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onPrev}
          className="px-8 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all"
        >
          Previous
        </motion.button>
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

const FileUploadSection = ({ title, type, files, onFileUpload, onRemoveFile, accept }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">{title} (Optional)</label>
      <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-gray-400 transition-colors">
        <input
          type="file"
          multiple
          accept={accept}
          onChange={(e) => onFileUpload(e, type)}
          className="hidden"
          id={`${type}-upload`}
        />
        <label htmlFor={`${type}-upload`} className="cursor-pointer">
          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
          <p className="text-xs text-gray-500 mt-1">PDF, JPG, PNG up to 25MB each (max 10 files)</p>
        </label>
      </div>

      {files.length > 0 && (
        <div className="mt-4 space-y-2">
          {files.map((file, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
              <div className="flex items-center">
                <FileText className="w-4 h-4 text-gray-500 mr-2" />
                <span className="text-sm text-gray-700 truncate">{file.name}</span>
              </div>
              <button onClick={() => onRemoveFile(type, index)} className="text-red-500 hover:text-red-700">
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

const MedicalQuestion = ({ question, value, details, onToggle, onDetailsChange }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-xl">
      <div className="flex items-center space-x-4 mb-3">
        <span className="text-sm font-medium text-gray-700">{question}</span>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name={question}
              checked={value === true}
              onChange={() => onToggle(true)}
              className="text-teal-500 focus:ring-teal-500"
            />
            <span className="ml-2 text-sm text-gray-700">Yes</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name={question}
              checked={value === false}
              onChange={() => onToggle(false)}
              className="text-teal-500 focus:ring-teal-500"
            />
            <span className="ml-2 text-sm text-gray-700">No</span>
          </label>
        </div>
      </div>
      {value === true && (
        <motion.textarea
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          value={details}
          onChange={(e) => onDetailsChange(e.target.value)}
          rows={2}
          className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-sm"
          placeholder="Please provide details..."
        />
      )}
    </div>
  )
}

export default TreatmentMedical
