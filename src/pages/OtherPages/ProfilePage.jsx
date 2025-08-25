
import  React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Footer from "../../component/footer/Footer"
import Header from "../../component/header/Header"

// ProfileData {
//   fullName,
//   email,
//   gender,
//   dateOfBirth,
//   age,
//   country,
//   state,
//   city,
//   height,
//   weight,
//   bloodGroup,
//   mobileNumber,
//   alternativeNumber,
//   chronicDiseases,
//   allergies,
// }

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("personal")
  const [isEditing, setIsEditing] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const [profileData, setProfileData] = useState({
    fullName: "John Doe",
    email: "john.doe@gmail.com",
    gender: "Male",
    dateOfBirth: "1990-01-15",
    age: "34",
    country: "India",
    state: "Maharashtra",
    city: "Mumbai",
    height: "175",
    weight: "70",
    bloodGroup: "O+",
    mobileNumber: "+91 9876543210",
    alternativeNumber: "+91 9876543211",
    chronicDiseases: ["Diabetes", "Hypertension"],
    allergies: ["Pollen", "Dust"],
  })

  const [editData, setEditData] = useState(profileData)

  const tabs = [
    { id: "personal", label: "Personal", icon: "👤" },
    { id: "medical", label: "Medical", icon: "🏥" },
    { id: "contact", label: "Contact", icon: "📞" },
  ]

  const chronicDiseaseOptions = [
    "Diabetes",
    "Hypertension(BP)",
    "Asthma",
    "Cancer",
    "Heart Disease",
    "Arthritis",
    "Obesity",
    "Kidney Disease",
    "Liver Disease",
    "Epilepsy",
    "Thyroid Disorder",
    "Alzheimer's Disease",
    "Parkinson's Disease",
    "Chronic Pain",
    "COPD",
    "Other",
  ]

  const allergyOptions = [
    "Pollen",
    "Dust",
    "Food",
    "Medication",
    "Insect Stings",
    "Mold",
    "Pet Dander",
    "Latex",
    "Shellfish",
    "Peanuts",
    "Dairy",
    "Eggs",
    "Wheat",
    "Soy",
    "Other",
  ]

  const bloodGroupOptions = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
  const genderOptions = ["Male", "Female", "Other", "Prefer not to say"]
  const countryOptions = ["India", "USA", "UK", "Canada", "Australia"]
  const stateOptions = ["Maharashtra", "Delhi", "Karnataka", "Tamil Nadu", "Gujarat"]
  const cityOptions = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Pune"]

  const handleEdit = () => {
    setIsEditing(true)
    setEditData(profileData)
  }

  const handleSave = () => {
    setProfileData(editData)
    setIsEditing(false)
    setOpenDropdown(null)
  }

  const handleCancel = () => {
    setEditData(profileData)
    setIsEditing(false)
    setOpenDropdown(null)
  }

  const handleInputChange = (field, value) => {
    setEditData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleArrayToggle = (field, value) => {
    setEditData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value) ? prev[field].filter((item) => item !== value) : [...prev[field], value],
    }))
  }

  const toggleDropdown = (dropdownId) => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId)
  }

  const selectOption = (field, value) => {
    handleInputChange(field, value)
    setOpenDropdown(null)
  }

  // Animation variants
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.15,
        ease: "easeIn",
      },
    },
  }

  const chipVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }
const CustomDropdown = ({ label, value, options, field, icon, placeholder }) => {

    const dropdownId = `dropdown-${field}`
    const isOpen = openDropdown === dropdownId

    return (
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
        {isEditing ? (
          <div className="relative">
            <motion.button
              type="button"
              onClick={() => toggleDropdown(dropdownId)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-left flex items-center justify-between"
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center">
                {icon}
                <span className={value ? "text-gray-900" : "text-gray-500"}>{value || placeholder}</span>
              </div>
              <motion.svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </motion.button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto"
                >
                  {options.map((option, index) => (
                    <motion.button
                      key={option}
                      type="button"
                      onClick={() => selectOption(field, option)}
                      className="w-full px-4 py-3 text-left hover:bg-blue-50 hover:text-blue-600 transition-colors first:rounded-t-xl last:rounded-b-xl"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: { delay: index * 0.05, duration: 0.2 },
                      }}
                      whileHover={{ backgroundColor: "#eff6ff", x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {option}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Backdrop */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-40"
                  onClick={() => setOpenDropdown(null)}
                />
              )}
            </AnimatePresence>
          </div>
        ) : (
          <motion.div
            className="flex items-center px-4 py-3 bg-gray-50 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {icon}
            <span className="text-gray-900">{value}</span>
          </motion.div>
        )}
      </div>
    )
  }

  const renderPersonalTab = () => (
    <motion.div variants={cardVariants} initial="hidden" animate="visible" className="space-y-8">
      {/* Personal Information */}
      <motion.div
        className="bg-white rounded-2xl shadow-sm border p-8"
        whileHover={{ y: -2, transition: { duration: 0.2 } }}
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <AnimatePresence mode="wait">
              {isEditing ? (
                <motion.input
                  key="input"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  type="text"
                  value={editData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              ) : (
                <motion.div
                  key="display"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center px-4 py-3 bg-gray-50 rounded-lg"
                >
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span className="text-gray-900">{profileData.fullName}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <AnimatePresence mode="wait">
              {isEditing ? (
                <motion.input
                  key="input"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  type="email"
                  value={editData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              ) : (
                <motion.div
                  key="display"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center px-4 py-3 bg-gray-50 rounded-lg"
                >
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-900">{profileData.email}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <CustomDropdown
            label="Gender"
            value={isEditing ? editData.gender : profileData.gender}
            options={genderOptions}
            field="gender"
            placeholder="Select gender"
            icon={
              <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            }
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
            <AnimatePresence mode="wait">
              {isEditing ? (
                <motion.input
                  key="input"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  type="date"
                  value={editData.dateOfBirth}
                  onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              ) : (
                <motion.div
                  key="display"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center px-4 py-3 bg-gray-50 rounded-lg"
                >
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-900">{profileData.dateOfBirth}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Location */}
      <motion.div
        className="bg-white rounded-2xl shadow-sm border p-8"
        whileHover={{ y: -2, transition: { duration: 0.2 } }}
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Location</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CustomDropdown
            label="Country"
            value={isEditing ? editData.country : profileData.country}
            options={countryOptions}
            field="country"
            placeholder="Select country"
            icon={
              <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
          />

          <CustomDropdown
            label="State"
            value={isEditing ? editData.state : profileData.state}
            options={stateOptions}
            field="state"
            placeholder="Select state"
            icon={
              <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            }
          />

          <CustomDropdown
            label="City"
            value={isEditing ? editData.city : profileData.city}
            options={cityOptions}
            field="city"
            placeholder="Select city"
            icon={
              <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0V9a2 2 0 012-2h2a2 2 0 012 2v12M13 7a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            }
          />
        </div>
      </motion.div>
    </motion.div>
  )

  const renderMedicalTab = () => (
    <motion.div variants={cardVariants} initial="hidden" animate="visible" className="space-y-8">
      {/* Physical Information */}
      <motion.div
        className="bg-white rounded-2xl shadow-sm border p-8"
        whileHover={{ y: -2, transition: { duration: 0.2 } }}
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Physical Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Height (cm)</label>
            <AnimatePresence mode="wait">
              {isEditing ? (
                <motion.input
                  key="input"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  type="number"
                  value={editData.height}
                  onChange={(e) => handleInputChange("height", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Height"
                />
              ) : (
                <motion.div
                  key="display"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center px-4 py-3 bg-gray-50 rounded-lg"
                >
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                    />
                  </svg>
                  <span className="text-gray-900">{profileData.height} cm</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Weight (kg)</label>
            <AnimatePresence mode="wait">
              {isEditing ? (
                <motion.input
                  key="input"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  type="number"
                  value={editData.weight}
                  onChange={(e) => handleInputChange("weight", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Weight"
                />
              ) : (
                <motion.div
                  key="display"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center px-4 py-3 bg-gray-50 rounded-lg"
                >
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <span className="text-gray-900">{profileData.weight} kg</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <CustomDropdown
            label="Blood Group"
            value={isEditing ? editData.bloodGroup : profileData.bloodGroup}
            options={bloodGroupOptions}
            field="bloodGroup"
            placeholder="Select blood group"
            icon={
              <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            }
          />
        </div>
      </motion.div>

      {/* Health Conditions */}
      <motion.div
        className="bg-white rounded-2xl shadow-sm border p-8"
        whileHover={{ y: -2, transition: { duration: 0.2 } }}
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Health Conditions</h2>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Chronic Diseases</h3>
          <motion.div
            className="flex flex-wrap gap-3"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {chronicDiseaseOptions.map((disease) => (
              <motion.button
                key={disease}
                variants={chipVariants}
                whileTap="tap"
                onClick={() => isEditing && handleArrayToggle("chronicDiseases", disease)}
                disabled={!isEditing}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  (isEditing ? editData : profileData).chronicDiseases.includes(disease)
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                } ${isEditing ? "cursor-pointer" : "cursor-default"}`}
              >
                {disease}
              </motion.button>
            ))}
          </motion.div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Allergies</h3>
          <motion.div
            className="flex flex-wrap gap-3"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {allergyOptions.map((allergy) => (
              <motion.button
                key={allergy}
                variants={chipVariants}
                whileTap="tap"
                onClick={() => isEditing && handleArrayToggle("allergies", allergy)}
                disabled={!isEditing}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  (isEditing ? editData : profileData).allergies.includes(allergy)
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                } ${isEditing ? "cursor-pointer" : "cursor-default"}`}
              >
                {allergy}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )

  const renderContactTab = () => (
    <motion.div variants={cardVariants} initial="hidden" animate="visible" className="space-y-8">
      <motion.div
        className="bg-white rounded-2xl shadow-sm border p-8"
        whileHover={{ y: -2, transition: { duration: 0.2 } }}
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
            <AnimatePresence mode="wait">
              {isEditing ? (
                <motion.input
                  key="input"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  type="tel"
                  value={editData.mobileNumber}
                  onChange={(e) => handleInputChange("mobileNumber", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter mobile number"
                />
              ) : (
                <motion.div
                  key="display"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center px-4 py-3 bg-gray-50 rounded-lg"
                >
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-gray-900">{profileData.mobileNumber}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Alternative Number</label>
            <AnimatePresence mode="wait">
              {isEditing ? (
                <motion.input
                  key="input"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  type="tel"
                  value={editData.alternativeNumber}
                  onChange={(e) => handleInputChange("alternativeNumber", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter alternative number"
                />
              ) : (
                <motion.div
                  key="display"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center px-4 py-3 bg-gray-50 rounded-lg"
                >
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-gray-900">{profileData.alternativeNumber}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )

  return (
    <>
    <Header />
    <div className="min-h-screen pt-[60px] font-Poppins bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r text-white">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <motion.button
                className="p-2 hover:bg-blue-700 rounded-full transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
              <h1 className="text-2xl font-semibold">My Profile</h1>
            </div>
          </div>

          {/* Profile Avatar and Name */}
          <div className="flex flex-col items-center mt-8">
            <motion.div
              className="w-32 h-32 bg-white rounded-full overflow-hidden flex items-center justify-center mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
           <img className=" w-[100%] h-[100%] " src="https://randomuser.me/api/portraits/men/21.jpg" />
            </motion.div>
            <h2 className="text-2xl  text-blue-700 font-semibold">{profileData.fullName}</h2>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Tab Navigation */}
        <motion.div
          className="bg-white rounded-2xl shadow-sm border mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex">
            {tabs.map((tab, index) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center space-x-2 py-4 px-6 font-medium transition-colors ${
                  index === 0 ? "rounded-l-2xl" : index === tabs.length - 1 ? "rounded-r-2xl" : ""
                } ${
                  activeTab === tab.id ? "bg-blue-600 text-white" : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-xl">{tab.icon}</span>
                <span>{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            {activeTab === "personal" && renderPersonalTab()}
            {activeTab === "medical" && renderMedicalTab()}
            {activeTab === "contact" && renderContactTab()}
          </motion.div>
        </AnimatePresence>

        {/* Edit/Save/Cancel Buttons */}
        <div className="fixed bottom-6 right-6 flex space-x-4">
          <AnimatePresence>
            {isEditing ? (
              <>
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={handleCancel}
                  className="w-14 h-14 bg-gray-500 hover:bg-gray-600 text-white rounded-full shadow-lg transition-colors flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={handleSave}
                  className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-colors flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.button>
              </>
            ) : (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={handleEdit}
                className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
<Footer />
    </>
  )
}
