"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import Header from "./components/Header"
import Hero from "./components/Hero"
import StickyTabs from "./components/StickyTabs"
import OnlineConsultation from "./components/OnlineConsultation"
import Pricing from "./components/Pricing"
import PhotoGuide from "./components/PhotoGuide"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
import PaymentModal from "./components/PaymentModal"
import SuccessModal from "./components/SuccessModal"

function App() {
  const [activeTab, setActiveTab] = useState("consultation")
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [consultationData, setConsultationData] = useState(null)

  const handlePlanSelect = (plan, data) => {
    setSelectedPlan(plan)
    setConsultationData(data)
    setShowPaymentModal(true)
  }

  const handlePaymentSuccess = () => {
    setShowPaymentModal(false)
    setShowSuccessModal(true)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["consultation", "pricing", "photo-guide", "faq"]
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen  font-Poppins bg-gradient-to-br from-teal-50 via-indigo-50 to-purple-50">
      <Header />
      <Hero />
      <StickyTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="relative">
        <OnlineConsultation onPlanSelect={handlePlanSelect} />
        <Pricing onPlanSelect={handlePlanSelect} consultationData={consultationData} />
        <PhotoGuide />
        <FAQ />
      </main>

      <Footer />

      <AnimatePresence>
        {showPaymentModal && (
          <PaymentModal
            plan={selectedPlan}
            onClose={() => setShowPaymentModal(false)}
            onSuccess={handlePaymentSuccess}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSuccessModal && <SuccessModal onClose={() => setShowSuccessModal(false)} />}
      </AnimatePresence>
    </div>
  )
}

export default App
