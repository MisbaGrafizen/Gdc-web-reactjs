"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Shield, Clock, RefreshCw, DollarSign, FileText, MessageCircle } from "lucide-react"

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How secure is my data?",
      answer:
        "Your data is encrypted end-to-end and stored securely. We comply with international healthcare data protection standards including HIPAA. All uploads are processed through secure channels and your information is never shared with third parties.",
      icon: Shield,
    },
    {
      question: "How long does the consultation process take?",
      answer:
        "After you submit your information, our coordinators will contact you within 24 hours to schedule your consultation. The actual consultation call lasts 20-30 minutes for Basic plan and up to 45 minutes for Premium plan.",
      icon: Clock,
    },
    {
      question: "Can I reschedule my consultation?",
      answer:
        "Yes, you can reschedule your consultation up to 24 hours before the scheduled time. Contact our support team or use the rescheduling link in your confirmation email.",
      icon: RefreshCw,
    },
    {
      question: "What is your refund policy?",
      answer:
        "We offer a full refund if you cancel within 24 hours of booking. After the consultation is completed, refunds are considered on a case-by-case basis for service quality issues.",
      icon: DollarSign,
    },
    {
      question: "What files and photos help most for consultation?",
      answer:
        "Recent X-rays, OPG, dental records, and clear photos of your teeth from multiple angles are most helpful. The more comprehensive information you provide, the better our doctors can assess your case.",
      icon: FileText,
    },
    {
      question: "How does the follow-up process work?",
      answer:
        "For Premium consultations, you get one follow-up call within 7 days. For Basic consultations, you can book additional consultations at a discounted rate. All patients receive a detailed summary email with recommendations.",
      icon: MessageCircle,
    },
    {
      question: "Do you provide treatment in India?",
      answer:
        "Yes, we have a state-of-the-art clinic in India. Premium consultation includes personalized travel guidance and treatment planning for patients who wish to visit India for their dental treatment.",
      icon: MessageCircle,
    },
    {
      question: "What if I need emergency dental advice?",
      answer:
        "For dental emergencies, please contact your local dentist immediately. Our consultation service is for planned treatments and second opinions, not emergency care.",
      icon: MessageCircle,
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Find answers to common questions about our consultation service</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg overflow-hidden"
            >
              <motion.button
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between "
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-900 to-indigo-600 rounded-lg flex items-center justify-center">
                    <faq.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                </div>
                <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <div className="pl-11">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-teal-50 to-indigo-50 rounded-2xl border border-teal-100 p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              Our support team is here to help you with any additional questions about the consultation process.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-900 to-indigo-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Contact Support</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
