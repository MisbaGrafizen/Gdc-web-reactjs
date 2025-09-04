"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import PatientDetails from "./consultation/PatientDetails"
import TreatmentMedical from "./consultation/TreatmentMedical"
import PhotoUpload from "./consultation/PhotoUpload"
import MessageReview from "./consultation/MessageReview"
import Stepper from "./consultation/Stepper"
import PlanSelect from "./consultation/Planselecte"
import uploadToHPanel from "../../helper/uploadToHpanel"
import { ApiPost } from "../../helper/axios"


const OnlineConsultation = ({ onPlanSelect }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false)
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

  // Move to plan selection
  setCurrentStep(5)
}

const loadRazorpayScript = () =>
  new Promise((resolve) => {
    const s = document.createElement("script")
    s.src = "https://checkout.razorpay.com/v1/checkout.js"
    s.onload = () => resolve(true)
    s.onerror = () => resolve(false)
    document.body.appendChild(s)
  })

const submitFinalConsultation = async (selectedPlan) => {
  const price = selectedPlan === "comprehensive" ? 9900 : 4900

  try {
    setLoading(true)

    // 1) Upload files
    const dentalRecords = await Promise.all((formData.dentalRecords || []).map(uploadToHPanel))
    const xrays = await Promise.all((formData.xrays || []).map(uploadToHPanel))

    // 2) Load Razorpay SDK
    const ok = await loadRazorpayScript()
    if (!ok) {
      alert("Razorpay SDK failed to load. Are you online?")
      setLoading(false)
      return
    }

    // 3) Create Order
    const orderRes = await ApiPost("/create-razorpay-order", { amount: price })
    const order = orderRes?.data?.order
    if (!order?.id) {
      alert("Failed to create Razorpay order")
      setLoading(false)
      return
    }

    // 4) Razorpay options
    const options = {
      key: "rzp_live_RCixhI6IwAX9ZY",
      amount: order.amount,
      currency: "INR",
      name: "City Dental Hospital",
      description: "Online Dental Consultation Payment",
      image: "/logo.png",
      order_id: order.id,

      // ✅ closes = setLoading(false)
      modal: {
        confirm_close: true,
        escape: true,
        handleback: true,
        ondismiss: () => {
          // user closed the checkout without paying
          setLoading(false)
        },
      },

      handler: async function (response) {
        // 5) Final submission payload
        const payload = {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          city: formData.city,
          treatment: formData.treatment,
          chiefComplaint: formData.chiefComplaint,
          medicalHistory: formData.medicalHistory,
          onMedication: formData.onMedication,
          medicationDetails: formData.medicationDetails,
          drugAllergy: formData.drugAllergy,
          allergyDetails: formData.allergyDetails,
          recentSurgery: formData.recentSurgery,
          surgeryDetails: formData.surgeryDetails,
          messageToDoctor: formData.messageToDoctor,

          consentMedicalProcessing: formData.consents.dataProcessing,
          confirmDetailsAccurate: formData.consents.accurateDetails,
          treatmentChoice: selectedPlan,

          dentalRecords: dentalRecords.filter(Boolean),
          xrays: xrays.filter(Boolean),
          photos: formData.photos,

          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
        }

        try {
          const res = await ApiPost("/consultations", payload)
          if (res.success) {
            alert("Consultation submitted successfully!")
            // TODO: navigate to thank-you page if needed
          } else {
            alert(res.message || "Submission failed.")
          }
        } catch (err) {
          console.error("Consultation creation failed:", err)
          alert("Something went wrong.")
        } finally {
          // ✅ success path completes -> stop loading too
          setLoading(false)
        }
      },

      prefill: {
        name: formData.fullName,
        email: formData.email,
        contact: formData.phone,
      },
      theme: {
        color: "#0f172a",
      },
    }

    const rzp = new window.Razorpay(options)

    // Already handled by modal.ondismiss, but keep this for explicit failures
    rzp.on("payment.failed", function () {
      alert("Payment failed.")
      setLoading(false)
    })

    rzp.open()
  } catch (err) {
    console.error("Razorpay process error:", err)
    alert("Unexpected error. Please try again.")
    setLoading(false)
  }
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

  case 5:
  return (
      <PlanSelect
      onPrev={prevStep}
      onNext={submitFinalConsultation}
      loading={loading}
    />
  )



      default:
        return null
    }
  }

  return (
    <section id="consultation" className="py-16 px-4 lg:px-8">
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
          className="bg-white/60 backdrop-blur-sm  rounded-2xl border  shadow-xl p-[16px] md77:p-8"
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
