"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import PatientDetails from "./consultation/PatientDetails"
import TreatmentMedical from "./consultation/TreatmentMedical"
import PhotoUpload from "./consultation/PhotoUpload"
import MessageReview from "./consultation/MessageReview"
import Stepper from "./consultation/Stepper"

const OnlineConsultation = ({ onPlanSelect }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1
    fullName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    // Step 2
    treatment: "",
    chiefComplaint: "",
    dentalRecords: [],
    xrays: [],
    medicalHistory: "",
    onMedication: false,
    medicationDetails: "",
    drugAllergy: false,
    allergyDetails: "",
    recentSurgery: false,
    surgeryDetails: "",
    // Step 3
    photos: {},
    // Step 4
    messageToDoctor: "",
    consents: {
      accurateDetails: false,
      dataProcessing: false,
    },
  })

  const [errors, setErrors] = useState({})

  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  const updateErrors = (newErrors) => {
    setErrors((prev) => ({ ...prev, ...newErrors }))
  }

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleConsultationSelect = () => {
    // Validate final step
    const finalErrors = {}
    if (!formData.consents.accurateDetails) {
      finalErrors.accurateDetails = "Please confirm details are accurate"
    }
    if (!formData.consents.dataProcessing) {
      finalErrors.dataProcessing = "Please consent to data processing"
    }

    if (Object.keys(finalErrors).length > 0) {
      setErrors(finalErrors)
      return
    }

    // Proceed to pricing
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PatientDetails
            formData={formData}
            updateFormData={updateFormData}
            errors={errors}
            updateErrors={updateErrors}
            onNext={nextStep}
          />
        )
      case 2:
        return (
          <TreatmentMedical
            formData={formData}
            updateFormData={updateFormData}
            errors={errors}
            updateErrors={updateErrors}
            onNext={nextStep}
            onPrev={prevStep}
          />
        )
      case 3:
        return (
          <PhotoUpload
            formData={formData}
            updateFormData={updateFormData}
            errors={errors}
            updateErrors={updateErrors}
            onNext={nextStep}
            onPrev={prevStep}
          />
        )
      case 4:
        return (
          <MessageReview
            formData={formData}
            updateFormData={updateFormData}
            errors={errors}
            updateErrors={updateErrors}
            onPrev={prevStep}
            onConsultationSelect={handleConsultationSelect}
          />
        )
      default:
        return null
    }
  }

  return (
    <section id="consultation" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Online Consultation</h2>
          <p className="text-gray-600">Complete the form below to get started with your consultation</p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl p-8"
        >
          <Stepper currentStep={currentStep} />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default OnlineConsultation
