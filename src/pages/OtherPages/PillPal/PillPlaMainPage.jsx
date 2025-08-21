import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import MedicineTypeDropdown from "../../../component/PilPalCom/MedicineTypeDropdown"
import CustomDatePicker from "../../../component/PilPalCom/CustomDatePicker"
import CustomTimePicker from "../../../component/PilPalCom/CustomTimePicker"
import CustomSelectDropdown from "../../../component/PilPalCom/CustomSelectDropdown"
import Header from "../../../component/header/Header"


export default function PillPlaMainPage() {
    const [selectedTypeId, setSelectedTypeId] = useState(null);

    const handleSelect = (id) => {
        setSelectedTypeId(id);
    };


    const [isModalOpen, setIsModalOpen] = useState(false)
    const [medicines, setMedicines] = useState([])
    const [showSuccessPopup, setShowSuccessPopup] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        type: "",
        dose: "",
        unit: "drops",
        timing: "",
        customTiming: "",
        startDate: "",
        endDate: "",
        duration: "",
        durationType: "months",
        notes: "",
        mealTimings: [],
    })

    const addMealTiming = (meal) => {
        const newTiming = {
            id: Date.now().toString(),
            meal,
            intake: 1,
            time: "08:00",
        }
        setFormData((prev) => ({
            ...prev,
            mealTimings: [...prev.mealTimings, newTiming],
        }))
    }

    const removeMealTiming = (id) => {
        setFormData((prev) => ({
            ...prev,
            mealTimings: prev.mealTimings.filter((timing) => timing.id !== id),
        }))
    }

    const updateMealTiming = (id, field, value) => {
        setFormData((prev) => ({
            ...prev,
            mealTimings: prev.mealTimings.map((timing) => (timing.id === id ? { ...timing, [field]: value } : timing)),
        }))
    }

    const filteredTypes = [
        {
            id: "drops",
            name: "Drops",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3V1m0 20v-2m5-9h2.586a1 1 0 01.707.293L17 12l-1.707 1.707a1 1 0 01-.707.293H13v-2z"
                    />
                </svg>
            ),
            description: "Liquid medication",
        },
        {
            id: "cream",
            name: "Cream",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                </svg>
            ),
            description: "Topical application",
        },
        {
            id: "tablet",
            name: "Tablet",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                </svg>
            ),
            description: "Oral solid dose",
        },
        {
            id: "capsule",
            name: "Capsule",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                </svg>
            ),
            description: "Encapsulated medicine",
        },
        {
            id: "syrup",
            name: "Syrup",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                </svg>
            ),
            description: "Sweet liquid medicine",
        },
        {
            id: "injection",
            name: "Injection",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 12l3-3 3 3 4-4M8 21l4-4 4-4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                </svg>
            ),
            description: "Injectable medicine",
        },
        {
            id: "inhaler",
            name: "Inhaler",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                </svg>
            ),
            description: "Respiratory medicine",
        },
        {
            id: "ointment",
            name: "Ointment",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                </svg>
            ),
            description: "Thick topical cream",
        },
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
        const newMedicine = {
            id: Date.now().toString(),
            ...formData,
            isActive: false,
        }
        setMedicines((prev) => [...prev, newMedicine])
    
        setFormData({
            name: "",
            type: "",
            dose: "",
            unit: "drops",
            timing: "",
            customTiming: "",
            startDate: "",
            endDate: "",
            duration: "",
            durationType: "months",
            notes: "",
            mealTimings: [],
        })
            setIsModalOpen(false)
    }

    const toggleMedicineActive = (id) => {
        setMedicines((prev) =>
            prev.map((medicine) => (medicine.id === id ? { ...medicine, isActive: !medicine.isActive } : medicine)),
        )
        setShowSuccessPopup(true)
        setTimeout(() => setShowSuccessPopup(false), 3000)
    }

    return (
        <>
        <Header />
            <div className="min-h-screen pt-[120px] bg-gray-50">
                {/* Header */}
                <div className="bg-white  font-Poppins border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <h1 className="text-2xl font-[600] text-gray-900">Medication Reminders</h1>
                                <p className="text-gray-600 mt-2">Manage your daily medication schedule</p>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                Add Medicine
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-6 py-8">
                    {medicines.length === 0 ? (
                        <div className="text-center font-Poppins py-16">
                            <div className="w-24 h-24 bg-gray-200 rounded-full flex font-Poppins items-center justify-center mx-auto mb-6">
                                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold  text-gray-900 mb-2">No medication reminders found</h3>
                            <p className="text-gray-600">Click the "Add Medicine" button to create your first medication reminder</p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {medicines.map((medicine) => (
                                <div key={medicine.id} className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900">{medicine.name}</h3>
                                            <p className="text-gray-600 capitalize">{medicine.type}</p>
                                        </div>
                                        <button
                                            onClick={() => toggleMedicineActive(medicine.id)}
                                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${medicine.isActive
                                                ? "bg-blue-100 text-blue-800 hover:bg-blue-200"
                                                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                                }`}
                                        >
                                            {medicine.isActive ? "Active" : "Inactive"}
                                        </button>
                                    </div>
                                    <div className="space-y-2 text-sm text-gray-600">
                                        <p>
                                            <span className="font-medium">Dose:</span> {medicine.dose} {medicine.unit}
                                        </p>
                                        <p>
                                            <span className="font-medium">Timing:</span> {medicine.timing}
                                        </p>
                                        <p>
                                            <span className="font-medium">Duration:</span> {medicine.duration} {medicine.durationType}
                                        </p>
                                        <p>
                                            <span className="font-medium">Start:</span> {medicine.startDate}
                                        </p>
                                        <p>
                                            <span className="font-medium">End:</span> {medicine.endDate}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Add Medicine Modal */}
                <AnimatePresence>
                    {isModalOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black font-Poppins bg-opacity-50 flex items-center justify-center z-50 p-4"
                        >
                            <motion.div
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.95, opacity: 0 }}
                                className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                            >
                                <div className="p-6 border-b border-gray-200">
                                    <div className="flex justify-between items-center">
                                        <h2 className="text-2xl font-bold text-gray-900">Add Medicine Reminder</h2>
                                        <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                                    <div className=" flex w-full gap-[10px] ">
                                        <div className=" w-[40%]">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Prescription</h3>
                                            <div className="border-2 h-[260px] border-dashed border-blue-300 rounded-lg p-8 text-center">
                                                <svg
                                                    className="w-12 h-12 mt-[40px] text-blue-500 mx-auto mb-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                                    />
                                                </svg>
                                                <p className="text-blue-600 font-medium">Upload Prescription</p>
                                                <p className="text-gray-500 text-sm">Take a photo or select from gallery</p>
                                            </div>
                                        </div>
                                        <div className=" w-[60%]">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Add Medicine</h3>

                                            <div className="grid w-[100%] grid-cols-1 md:grid-cols-2 gap-4">
                                                {filteredTypes.map((type, index) => (
                                                    <motion.div
                                                        key={type.id}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: index * 0.05 }}

                                                        whileTap={{ scale: 0.98 }}
                                                        onClick={() => handleSelect(type.id)}
                                                        className="w-full p-2 text-left flex items-center justify-between hover:bg-gray-50 rounded-[7px] transition-all duration-200 group cursor-pointer border"
                                                    >
                                                        {/* Left: Icon and Text */}
                                                        <div className="flex items-center space-x-4">
                                                            <motion.div
                                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                                className="w-9 h-9 rounded-[5px] border flex items-center  text-blue-600 justify-center te shadow-sm group-hover:shadow-xl transition-shadow"
                                                            >
                                                                {type.icon}
                                                            </motion.div>
                                                            <div>
                                                                <h4 className="font-semibold text-blue-600 transition-colors">
                                                                    {type.name}
                                                                </h4>
                                                                <p className="text-[7px] text-gray-500">{type.description}</p>
                                                            </div>
                                                        </div>

                                                        <div className="flex items-center justify-center">
                                                            <div
                                                                className={`w-6 h-6 rounded-md border-[1.3px] flex items-center justify-center transition-all duration-300 ${selectedTypeId === type.id ? "border-blue-500 bg-blue-500" : "border-gray-300 bg-white"
                                                                    }`}
                                                            >
                                                                {selectedTypeId === type.id && (
                                                                    <motion.svg
                                                                        initial={{ scale: 0 }}
                                                                        animate={{ scale: 1 }}
                                                                        // transition={{ type: "spring", stiffness: 300 }}
                                                                        className="w-4 h-4 text-white"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        stroke="currentColor"
                                                                    >
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                                    </motion.svg>
                                                                )}
                                                            </div>
                                                        </div>

                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div>

                                        <div className="grid md:grid-cols-2 gap-6">

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                                <input
                                                    type="text"
                                                    value={formData.name}
                                                   
                                                    placeholder="Enter medicine name"
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-[8px] focus:outline-none 0"
                                                    r
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Dose</label>
                                                <div className="flex space-x-2">
                                                    <input
                                                        type="text"
                                                        value={formData.dose}
                                                      
                                                        placeholder="Enter dose value"
                                                        className="flex-1 px-4 py-2 border border-gray-300 rounded-[8px] focus:outline-none"
                                                        r
                                                    />
                                                    <CustomSelectDropdown
                                                        options={[
                                                            {
                                                                value: "drops",
                                                                label: "Drops",
                                                                icon: (
                                                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            strokeWidth={2}
                                                                            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4z"
                                                                        />
                                                                    </svg>
                                                                ),
                                                            },
                                                            {
                                                                value: "mg",
                                                                label: "Milligrams",
                                                                icon: (
                                                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            strokeWidth={2}
                                                                            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                                                                        />
                                                                    </svg>
                                                                ),
                                                            },
                                                            {
                                                                value: "ml",
                                                                label: "Milliliters",
                                                                icon: (
                                                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            strokeWidth={2}
                                                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                                        />
                                                                    </svg>
                                                                ),
                                                            },
                                                            {
                                                                value: "tablets",
                                                                label: "Tablets",
                                                                icon: (
                                                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            strokeWidth={2}
                                                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                                        />
                                                                    </svg>
                                                                ),
                                                            },
                                                            {
                                                                value: "capsules",
                                                                label: "Capsules",
                                                                icon: (
                                                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            strokeWidth={2}
                                                                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                                                        />
                                                                    </svg>
                                                                ),
                                                            },
                                                        ]}
                                                        value={formData.unit}
                                                        // onChange={(unit) => setFormData((prev) => ({ ...prev, unit }))}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Timing */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Timing Relative to Meals</h3>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            {["Before Food", "After Food", "Bed Time", "Custom"].map((option) => (
                                                <label key={option} className="flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="timing"
                                                        value={option}
                                                        checked={formData.timing === option}
                                                        onChange={(e) => setFormData((prev) => ({ ...prev, timing: e.target.value }))}
                                                        className="mr-2 w-[20px] h-[20px]"
                                                    />
                                                    <span className="text-sm">{option}</span>
                                                </label>
                                            ))}
                                        </div>
                                        {formData.timing === "Custom" && (
                                            <div className="mt-4">
                                                <textarea
                                                    value={formData.customTiming}
                                                    onChange={(e) => setFormData((prev) => ({ ...prev, customTiming: e.target.value }))}
                                                    placeholder="Enter custom timing instructions"
                                                    className="w-full px-4 py-[9px] text-[13px] h-[40px] justify-center items-center border border-gray-300 rounded-lg  outline-none"
                                                    rows={3}
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {/* Meal Timings */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Meal Timings</h3>
                                        <div className="space-y-4">
                                            {formData.mealTimings.map((timing) => (
                                                <div key={timing.id} className="border border-gray-200 rounded-lg p-3">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <h4 className="font-medium text-gray-900 capitalize">{timing.meal}</h4>
                                                        <button
                                                            type="button"
                                                            onClick={() => removeMealTiming(timing.id)}
                                                            className="text-red-500 hover:text-red-700"
                                                        >
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={2}
                                                                    d="M6 18L18 6M6 6l12 12"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    <div className="grid md:grid-cols-2 gap-4">
                                                        <div>
                                                            <label className="block text-sm font-medium text-gray-700 mb-">Intake</label>
                                                            <CustomSelectDropdown
                                                                options={[
                                                                    {
                                                                        value: "1",
                                                                        label: "1 dose",
                                                                        icon: (
                                                                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                <path
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    strokeWidth={2}
                                                                                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                                                                                />
                                                                            </svg>
                                                                        ),
                                                                    },
                                                                    {
                                                                        value: "2",
                                                                        label: "2 doses",
                                                                        icon: (
                                                                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                <path
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    strokeWidth={2}
                                                                                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                                                                                />
                                                                            </svg>
                                                                        ),
                                                                    },
                                                                    {
                                                                        value: "3",
                                                                        label: "3 doses",
                                                                        icon: (
                                                                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                <path
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    strokeWidth={2}
                                                                                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                                                                                />
                                                                            </svg>
                                                                        ),
                                                                    },
                                                                    {
                                                                        value: "4",
                                                                        label: "4 doses",
                                                                        icon: (
                                                                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                <path
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    strokeWidth={2}
                                                                                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                                                                                />
                                                                            </svg>
                                                                        ),
                                                                    },
                                                                    {
                                                                        value: "5",
                                                                        label: "5 doses",
                                                                        icon: (
                                                                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                <path
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    strokeWidth={2}
                                                                                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                                                                                />
                                                                            </svg>
                                                                        ),
                                                                    },
                                                                ]}
                                                                value={timing.intake.toString()}
                                                                // onChange={(intake) => updateMealTiming(timing.id, "intake", Number.parseInt(intake))}
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="block text-sm font-medium text-gray-700 mb-">Time</label>
                                                            <CustomTimePicker
                                                                value={timing.time}
                                                                // onChange={(time) => updateMealTiming(timing.id, "time", time)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}

                                            <div className="grid md:grid-cols-2 gap-4">
                                                {["Breakfast", "Lunch", "Evening", "Dinner"].map(
                                                    (meal) =>
                                                        !formData.mealTimings.find((t) => t.meal.toLowerCase() === meal.toLowerCase()) && (
                                                            <button
                                                                key={meal}
                                                                type="button"
                                                                onClick={() => addMealTiming(meal)}
                                                                className="border-[1.5px] items-center gap-[10px] border-dashed flex text-[14px]  border-[#] w-[100%] justify-center rounded-[8px] py-[10px] text-blue-600 hover:border-blue-400 hover:bg-blue-50 transition-colors"
                                                            >
                                                            <i className="fa-solid fa-plus"></i>
                                                    
                                                                Add {meal} Timing
                                                            </button>
                                                        ),
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Duration and Dates */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                                            <div className="flex space-x-2">
                                                <input
                                                    type="number"
                                                    value={formData.duration}
                                                    onChange={(e) => setFormData((prev) => ({ ...prev, duration: e.target.value }))}
                                                    placeholder="7"
                                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none "
                                                    r
                                                />
                                                <CustomSelectDropdown
                                                    options={[
                                                        {
                                                            value: "days",
                                                            label: "Days",
                                                            icon: (
                                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                                    />
                                                                </svg>
                                                            ),
                                                        },
                                                        {
                                                            value: "weeks",
                                                            label: "Weeks",
                                                            icon: (
                                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                                    />
                                                                </svg>
                                                            ),
                                                        },
                                                        {
                                                            value: "months",
                                                            label: "Months",
                                                            icon: (
                                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                                    />
                                                                </svg>
                                                            ),
                                                        },
                                                    ]}
                                                    value={formData.durationType}
                                                    onChange={(durationType) => setFormData((prev) => ({ ...prev, durationType }))}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                                            <CustomDatePicker
                                                value={formData.startDate}
                                                onChange={(date) => setFormData((prev) => ({ ...prev, startDate: date }))}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                                            <CustomDatePicker
                                                value={formData.endDate}
                                                onChange={(date) => setFormData((prev) => ({ ...prev, endDate: date }))}
                                            />
                                        </div>
                                    </div>

                                    {/* Notes */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                                        <textarea
                                            value={formData.notes}
                                            onChange={(e) => setFormData((prev) => ({ ...prev, notes: e.target.value }))}
                                            placeholder="Any special instructions"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg  outline-none"
                                            rows={4}
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="flex justify-end space-x-4">
                                        <button
                                            type="button"
                                            onClick={() => setIsModalOpen(false)}
                                            className="px-6 py-1 border border-gray-300 rounded-[8px] text-gray-700 hover:bg-gray-50 transition-colors"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="px-6 py-1 bg-blue-600 text-white rounded-[8px] hover:bg-blue-700 transition-colors"
                                        >
                                            Save Reminder
                                        </button>
                                    </div>
                                </form>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Success Popup */}
                <AnimatePresence>
                    {showSuccessPopup && (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            className="fixed bottom-8 right-8 bg-blue-500 text-white px-6 py-4 rounded-lg shadow-lg z-50"
                        >
                            <div className="flex items-center">
                                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Your medicine reminder is now active!
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    )
}
