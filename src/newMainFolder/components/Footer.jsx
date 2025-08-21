"use client"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Shield, FileText } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 mb-4"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">GD</span>
              </div>
              <span className="font-semibold text-xl">Global Dental</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-300 mb-6 max-w-md"
            >
              Expert dental consultation from anywhere in the world. Get professional guidance from Dr. Hiba and Dr.
              Anand Jasani for all your dental needs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-2 text-sm text-gray-400"
            >
              <Shield className="w-4 h-4" />
              <span>HIPAA Compliant • End-to-End Encrypted</span>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-semibold text-lg mb-4"
            >
              Contact
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4" />
                <span className="text-sm">support@globaldental.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 94282 25282</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Mumbai, India</span>
              </div>
            </motion.div>
          </div>

          {/* Legal Links */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-semibold text-lg mb-4"
            >
              Legal
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-3"
            >
              <motion.a
                whileHover={{ scale: 1.05, color: "#14b8a6" }}
                href="#"
                className="flex items-center space-x-2 text-gray-300 hover:text-teal-400 transition-colors text-sm"
              >
                <FileText className="w-4 h-4" />
                <span>Privacy Policy</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, color: "#14b8a6" }}
                href="#"
                className="flex items-center space-x-2 text-gray-300 hover:text-teal-400 transition-colors text-sm"
              >
                <FileText className="w-4 h-4" />
                <span>Terms of Service</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, color: "#14b8a6" }}
                href="#"
                className="flex items-center space-x-2 text-gray-300 hover:text-teal-400 transition-colors text-sm"
              >
                <Shield className="w-4 h-4" />
                <span>Data Protection</span>
              </motion.a>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm">© 2024 Global Dental Consultation. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
