"use client"
import { motion } from "framer-motion"
import { Check, Star, Users, Clock, Phone, Video, Mail, MapPin } from "lucide-react"

const Pricing = ({ onPlanSelect, consultationData }) => {
  const plans = [
    {
      id: "basic",
      name: "Basic",
      price: 49,
      doctor: "Dr. Hiba",
      features: [
        "Review of history, photos, reports",
        "Live call 20–30 min",
        "Summary email & guidance",
        "Discussion of treatment options",
      ],
      icon: Phone,
      color: "from-blue-900 to-blue-900",
      popular: false,
    },
    {
      id: "premium",
      name: "Premium",
      price: 99,
      doctor: "Dr. Hiba + Dr. Anand Jasani",
      features: [
        "Full expert review of clinical data, reports, X-rays",
        "One follow-up within 7 days",
        "Personalized travel guidance to 🇮🇳 India",
        "Ideal for complex cases (All-on-4/6, full-mouth rehab, cosmetic makeovers, veneers, aligners) & NRIs",
      ],
      icon: Video,
      color: "from-[#1b2644] to-blue-600 ",
      popular: true,
    },
  ]

  const handlePlanSelect = (plan) => {
    onPlanSelect(plan, consultationData)
  }

  return (
    <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Consultation Selection</h2>
          <p className="text-gray-600">Choose the consultation plan that best fits your needs</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`relative bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl p-8 ${
                plan.popular ? "ring-2 ring-indigo-500" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-br from-[#1b2644] to-blue-600  text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} mb-4`}
                >
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  ${plan.price}
                  <span className="text-lg font-normal text-gray-600">/consultation</span>
                </div>
                <p className="text-gray-600 font-medium">{plan.doctor}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handlePlanSelect(plan)}
                className={`w-full py-4 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all bg-gradient-to-br  ${plan.color}`}
              >
                Select {plan.name} Plan
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg p-6">
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-900" />
                <span className="text-gray-700">Quick Response</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-900" />
                <span className="text-gray-700">Expert Doctors</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-blue-900" />
                <span className="text-gray-700">Follow-up Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-900" />
                <span className="text-gray-700">Global Access</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
