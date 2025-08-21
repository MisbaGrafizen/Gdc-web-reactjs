"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Info, MoreVertical, MessageSquare, Printer, Share2, Pill } from "lucide-react"

const prescriptionData = [
  {
    id: 1,
    drug: "Coxved-KT(ketorolac tromethamine 10mg)",
    dosage: "Morning 1, Noon 1, Night 1",
    duration: "3 Days",
    totalQty: "9",
    instruction: "After Food",
  },
  {
    id: 2,
    drug: "Claved-CV 625(amoxicillin500mg+clavulanic acid125mg)",
    dosage: "Morning 1, Night 1",
    duration: "3 Days",
    totalQty: "6",
    instruction: "After Food",
  },
  {
    id: 3,
    drug: "Rozved-DSR(Rabeprazole 20mg+domperidone30mg)",
    dosage: "Morning 1, Night 1",
    duration: "3 Days",
    totalQty: "6",
    instruction: "Before Food",
  },
]

const receiptsData = [
  {
    id: 1,
    voucher: "1120",
    mode: "Cash",
    amount: "450.00",
    particulars: "",
    doctor: "Kaushik-KTH",
  },
]

const DropdownMenu = ({ isOpen, onClose, onEdit, onCopyPrescription, onCopyAll, onDelete }) => {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.1 }}
        className="absolute right-0 top-8 bg-white rounded-lg shadow-lg border border-gray-200 py-2 w-48 z-50"
      >
        <button
          onClick={onEdit}
          className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Edit
        </button>
        <button
          onClick={onCopyPrescription}
          className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Copy Prescription
        </button>
        <button
          onClick={onCopyAll}
          className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Copy All Prescription
        </button>
        <button
          onClick={onDelete}
          className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 transition-colors"
        >
          Delete
        </button>
      </motion.div>
    </AnimatePresence>
  )
}

export default function PrescriptionDashboard() {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [prescriptions, setPrescriptions] = useState(prescriptionData)

  const handleDropdownToggle = (id) => {
    setOpenDropdown(openDropdown === id ? null : id)
  }

  const handleEdit = (id) => {
    console.log("Edit prescription:", id)
    setOpenDropdown(null)
  }

  const handleCopyPrescription = (id) => {
    console.log("Copy prescription:", id)
    setOpenDropdown(null)
  }

  const handleCopyAll = () => {
    console.log("Copy all prescriptions")
    setOpenDropdown(null)
  }

  const handleDelete = (id) => {
    setPrescriptions(prescriptions.filter((p) => p.id !== id))
    setOpenDropdown(null)
  }

  const handleRemove = (id) => {
    setPrescriptions(prescriptions.filter((p) => p.id !== id))
  }

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
          <h1 className="text-xl font-semibold text-gray-800">PRESCRIPTION</h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 text-green-600 hover:bg-green-50 rounded">
            <MessageSquare className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded">
            <Printer className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Prescription Table */}
      <div className="bg-white rounded-lg shadow-sm mb-8 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 w-8"></th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Drug</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Dosage</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Duration</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Total Qty</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Instruction</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 w-32"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {prescriptions.map((prescription) => (
              <tr key={prescription.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Pill className="w-4 h-4 text-blue-600" />
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">{prescription.drug}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{prescription.dosage}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{prescription.duration}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{prescription.totalQty}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{prescription.instruction}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => handleRemove(prescription.id)}
                      className="p-1 text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-blue-600 hover:text-blue-800">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                        <Info className="w-3 h-3 text-white" />
                      </div>
                    </button>
                    <div className="relative">
                      <button
                        onClick={() => handleDropdownToggle(prescription.id)}
                        className="p-1 text-gray-400 hover:text-gray-600"
                      >
                        <MoreVertical className="w-4 h-4" />
                      </button>
                      <DropdownMenu
                        isOpen={openDropdown === prescription.id}
                        onClose={() => setOpenDropdown(null)}
                        onEdit={() => handleEdit(prescription.id)}
                        onCopyPrescription={() => handleCopyPrescription(prescription.id)}
                        onCopyAll={handleCopyAll}
                        onDelete={() => handleDelete(prescription.id)}
                      />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Receipts Section */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
        <h2 className="text-xl font-semibold text-blue-700">RECEIPTS, REFUNDS, CREDIT NOTES</h2>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Voucher #</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Mode</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Amount</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Particulars</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Doctor</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 w-32"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="6" className="px-6 py-2">
                <div className="text-sm font-medium text-green-600">Receipts</div>
              </td>
            </tr>
            {receiptsData.map((receipt) => (
              <tr key={receipt.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">{receipt.voucher}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{receipt.mode}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{receipt.amount}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{receipt.particulars}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{receipt.doctor}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-1 text-gray-400 hover:text-gray-600">
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-gray-600">
                      <Printer className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-gray-600">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Click outside to close dropdown */}
      {openDropdown && <div className="fixed inset-0 z-40" onClick={() => setOpenDropdown(null)} />}
    </div>
  )
}
