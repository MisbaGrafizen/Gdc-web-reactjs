"use client"

import { useState, useEffect, useCallback } from "react"
import {
    ChevronLeft,
    ChevronRight,
    Search,
    Mic,
    MapPin,
    Star,
    ArrowLeft,
    X,
    RefreshCcw,
    CalendarDays,
    Clock,
    User,
} from "lucide-react"
import {
    format,
    startOfMonth,
    endOfMonth,
    eachDayOfInterval,
    isSameMonth,
    isToday,
    isPast,
    isSameDay,
    addMonths,
    addDays,
} from "date-fns"
import { ApiGet, ApiPost } from "../../helper/axios"


const today = new Date()
const tomorrow = addDays(today, 1)
const dayAfterTomorrow = addDays(today, 2)
const nextWeek = addDays(today, 7)
const twoWeeksLater = addDays(today, 14)

const clinics = [
    {
        id: "clinic-Gdc",
        name: "Gdc Clinic",
        type: "Private",
        rating: 4.5,
        address: "Gdc clinic Sharanam Saffron, Ambika Township Mukhya Marg No-4, Jivraj Par...",
        distance: "Distance unavailable",
    },
    {
        id: "clinic-madhuram",
        name: "Madhuram Hospital",
        type: "Private",
        rating: 4.5,
        address: "123 Hospital Road, City Center, Ahmedabad",
        distance: "2.5 km",
    },
]

const doctors = [
    {
        id: "doctor-neelam",
        name: "Dr. Neelam Raina",
        specialty: "Psychiatry",
        fees: 500,
        reviews: 5,
        rating: 0,

        fee: "₹500",
        available: true,
        experience: "15 years experience",
        imageUrl: "https://randomuser.me/api/portraits/men/21.jpg",
        availableDates: [
            format(today, "yyyy-MM-dd"),
            format(tomorrow, "yyyy-MM-dd"),
            format(dayAfterTomorrow, "yyyy-MM-dd"),
            format(nextWeek, "yyyy-MM-dd"),
            format(addDays(today, 13), "yyyy-MM-dd"),
            format(addDays(today, 15), "yyyy-MM-dd"),
        ],
        timeSlots: {
            [format(today, "yyyy-MM-dd")]: ["09:00 AM", "10:00 AM", "11:00 AM"],
            [format(tomorrow, "yyyy-MM-dd")]: ["02:00 PM", "03:00 PM", "04:00 PM"],
            [format(dayAfterTomorrow, "yyyy-MM-dd")]: ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM"],
            [format(nextWeek, "yyyy-MM-dd")]: ["09:00 AM", "10:00 AM"],
            [format(addDays(today, 13), "yyyy-MM-dd")]: ["09:30 AM", "10:30 AM", "01:00 PM", "02:00 PM", "07:00 PM", "08:00 PM"],
            [format(addDays(today, 15), "yyyy-MM-dd")]: ["09:00 AM", "10:00 AM", "11:00 AM"],
        },
    },
    {
        id: "doctor-priyank",
        name: "Dr. Priyank H Vasavada",
        specialty: "Brain tumor surgery, Epilepsy surgery, Parkinson's and movement disorder surgery (DBS) + more",
        fees: 500,
        reviews: 5,
        experience: "6 years experience",
        imageUrl: "https://randomuser.me/api/portraits/men/34.jpg",
        availableDates: [
            format(today, "yyyy-MM-dd"),
            format(addDays(today, 3), "yyyy-MM-dd"),
            format(twoWeeksLater, "yyyy-MM-dd"),
        ],
        timeSlots: {
            [format(today, "yyyy-MM-dd")]: ["10:00 AM", "11:00 AM"],
            [format(addDays(today, 3), "yyyy-MM-dd")]: ["09:00 AM", "10:00 AM", "02:00 PM"],
            [format(twoWeeksLater, "yyyy-MM-dd")]: ["03:00 PM", "04:00 PM"],
        },
    },
]

export default function AppointmentBookingModalRefined({ isOpen, onClose }) {
    const [step, setStep] = useState(1)
    const [clinics, setClinics] = useState([])
    const [doctors, setDoctors] = useState([])
    const [selectedClinic, setSelectedClinic] = useState(null)
    const [selectedDoctor, setSelectedDoctor] = useState(null)
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedTimeSlot, setSelectedTimeSlot] = useState(null)
    const [currentMonth, setCurrentMonth] = useState(new Date())
    const [timePeriodFilter, setTimePeriodFilter] = useState("morning")

    useEffect(() => {
        if (isOpen) {
            fetchClinics()
        }
    }, [isOpen])

    useEffect(() => {
        if (!isOpen) {
            // Reset state when modal closes
            setStep(1)
            setSelectedClinic(null)
            setSelectedDoctor(null)
            setSelectedDate(null)
            setSelectedTimeSlot(null)
            setCurrentMonth(new Date())
            setTimePeriodFilter("all")
        }
    }, [isOpen])

    const fetchClinics = async () => {
        try {
            const response = await ApiGet("/admin/clinic")
            console.log('response', response)
            setClinics(response.data)
        } catch (error) {
            console.error("Error fetching clinics:", error)
        }
    }


    const fetchDoctors = async (clinicId) => {
        try {
            const response = await ApiGet(`/admin/doctors/clinic/${clinicId}`)

            const processedDoctors = response.data.map((doctor) => {
                const availableDates = new Set()
                const timeSlots = {}

                const today = new Date()
                const todayDay = format(today, "EEEE") // e.g., "Monday"
                let isAvailableNow = false

                if (doctor.availability?.length) {
                    doctor.availability.forEach((entry) => {
                        const dayOfWeek = entry.day
                        const futureDates = getNextNDatesByDay(dayOfWeek, 30)

                        futureDates.forEach((dateStr) => {
                            availableDates.add(dateStr)
                            if (!timeSlots[dateStr]) timeSlots[dateStr] = []

                            entry.slots.forEach((slot) => {
                                if (slot.bookedCount < slot.appointmentLimit) {
                                    timeSlots[dateStr].push(slot)
                                }
                            })
                        })

                        // ✅ Check for availability today
                        if (dayOfWeek === todayDay) {
                            const hasAvailableSlotsToday = entry.slots.some(
                                (slot) => slot.bookedCount < slot.appointmentLimit
                            )
                            if (hasAvailableSlotsToday) {
                                isAvailableNow = true
                            }
                        }
                    })
                }

                return {
                    ...doctor,
                    availableDates: [...availableDates],
                    timeSlots,
                    isAvailableNow, // ✅ Injected here
                }
            })

            setDoctors(processedDoctors)
        } catch (error) {
            console.error("Error fetching doctors:", error)
        }
    }

    const handleConfirmAppointment = async () => {
        if (!selectedClinic || !selectedDoctor || !selectedDate || !selectedTimeSlot) return

        const payload = {
            doctor: selectedDoctor?._id,
            clinic: selectedClinic?._id,
            appointmentDate: selectedDate,
            timeSlot: {
                from: selectedTimeSlot?.startTime,
                to: selectedTimeSlot?.endTime,
            },
            consultationFee: selectedDoctor?.consultationFee || 0,
            mode: "InPerson",
            purpose: "General Consultation",
            symptoms: "",
            isFollowUp: false,
        }

        try {
            const response = await ApiPost("/appointment", payload)
            console.log("Appointment created:", response.data)
            onClose()
        } catch (error) {
            console.error("Failed to create appointment:", error)
        }
    }


    const getInitials = (name) => {
        if (!name) return ""

        const prefixesToRemove = ["Dr.", "Dr", "Mr.", "Mr", "Ms.", "Ms", "Mrs.", "Mrs"]
        const names = name
            .split(" ")
            .filter((word) => !prefixesToRemove.includes(word.trim()))

        const initials = names.map((n) => n.charAt(0).toUpperCase()).slice(0, 2).join("")
        return initials
    }


    const getRandomColor = (name) => {
        const colors = [
            "bg-red-100 text-red-700",
            "bg-green-100 text-green-700",
            "bg-blue-100 text-blue-700",
            "bg-yellow-100 text-yellow-700",
            "bg-purple-100 text-purple-700",
            "bg-pink-100 text-pink-700",
            "bg-indigo-100 text-indigo-700",
        ]
        const hash = name.charCodeAt(0) % colors.length
        return colors[hash]
    }



    const handleClinicSelect = (clinic) => {
        setSelectedClinic(clinic)
        fetchDoctors(clinic._id)
        setStep(2)
    }



    function getNextNDatesByDay(dayName, count = 30) {
        const dates = []
        const dayIndex = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].indexOf(dayName)

        let current = new Date()
        let added = 0

        while (added < count) {
            if (current.getDay() === dayIndex) {
                dates.push(format(current, "yyyy-MM-dd"))
                added++
            }
            current = addDays(current, 1)
        }

        return dates
    }

    const handleDoctorSelect = (doctor) => {
        setSelectedDoctor(doctor)
        setStep(3) // Move to Date & Time Selection
    }

    const handleDateSelect = (date) => {
        setSelectedDate(date)
        setSelectedTimeSlot(null) // Reset time slot when date changes
        setTimePeriodFilter("all") // Reset time period filter
    }

    const handleTimeSlotSelect = (slot) => {
        setSelectedTimeSlot(slot)
        // Potentially move to confirmation step or close modal
    }

    const getDaysInMonth = useCallback(() => {
        const start = startOfMonth(currentMonth)
        const end = endOfMonth(currentMonth)
        return eachDayOfInterval({ start, end })
    }, [currentMonth])

    const days = getDaysInMonth()
    const firstDayOfMonth = days[0].getDay() // 0 for Sunday, 1 for Monday, etc.

    const getDayStatus = (date) => {
        const formattedDate = format(date, "yyyy-MM-dd")
        if (isPast(date) && !isToday(date)) return "past"
        if (selectedDoctor?.availableDates?.includes(formattedDate)) {
            return "available"
        }
        return "unavailable"
    }

    const getAvailableTimeSlots = (date) => {
        if (!date || !selectedDoctor) return []
        const dayName = format(date, "EEEE")
        const dayAvailability = selectedDoctor.availability?.find(
            (entry) => entry.day === dayName
        )
        return dayAvailability?.slots || []
    }


    const allAvailableSlots = getAvailableTimeSlots(selectedDate)
    const filterSlotsByPeriod = (slots, period) => {
        return slots.filter((slot) => {
            const [time, ampm] = slot.startTime?.split(" ")
            const [hourStr] = time?.split(":")
            let hour = parseInt(hourStr, 10)

            if (ampm === "PM" && hour !== 12) hour += 12
            if (ampm === "AM" && hour === 12) hour = 0

            if (period === "morning") return hour >= 6 && hour < 12
            if (period === "afternoon") return hour >= 12 && hour < 18
            if (period === "evening") return hour >= 18 && hour < 24
            return true
        })
    }



    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <svg
                key={i}
                className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))
    }
    const filteredSlots =
        timePeriodFilter === "all" ? allAvailableSlots : filterSlotsByPeriod(allAvailableSlots, timePeriodFilter)

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-[2000] flex items-center font-Poppins justify-center bg-black bg-opacity-60 p-4">
            <div className="relative h-[90vh] w-full max-w-3xl overflow-hidden rounded-xl bg-white shadow-2xl">
                {/* Modal Header */}
                <div className="flex items-center justify-between bg-gradient-to-br from-[#1b2644] to-blue-600 p-2 text-white shadow-md">
                    {step > 1 && (
                        <button onClick={() => setStep(step - 1)} className="rounded-full p-2 hover:bg-blue-700">
                            <ArrowLeft className="h-6 w-6" />
                        </button>
                    )}
                    <h2 className="flex-1 text-center text-2xl font-semibold">Book Appointment</h2>
                    <button onClick={onClose} className="rounded-full p-2 hover:bg-blue-700">
                        <X className="h-6 w-6" />
                    </button>
                </div>

                {/* Top Bar for Selected Clinic/Doctor */}
                {/* {(selectedClinic || selectedDoctor) && (
          <div className="bg-blue-700 p-4 text-white shadow-inner">
            {selectedClinic && (
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5" />
                <span className="text-lg font-medium">{selectedClinic.name}</span>
                {selectedDoctor && (
                  <>
                    <ChevronRight className="h-4 w-4" />
                    <User className="h-5 w-5" />
                    <span className="text-lg font-medium">{selectedDoctor.name}</span>
                  </>
                )}
              </div>
            )}
          </div>
        )} */}

                {/* Modal Content */}
                <div className="h-[calc(100%-120px)] overflow-y-auto p-6">
                    {/* Step 1: Clinic List */}
                    {step === 1 && (
                        <div>
                            <div className="mb-4 flex items-center rounded-lg border border-gray-300 bg-white px-3 py-1 shadow-sm">
                                <Search className="h-5 w-5 text-gray-500" />
                                <input
                                    type="text"
                                    placeholder="Search by Doctor, Clinic, or Symptom"
                                    className="flex-1 bg-transparent text-[14px] px-4 py-1 text-gray-800 outline-none placeholder:text-gray-500"
                                />

                            </div>

                            {/* <div className="mb-8 flex rounded-lg border border-blue-600 bg-blue-50 p-1">
                <button className="flex-1 rounded-md bg-blue-600 px-6 py-3 text-white shadow-sm">Clinic</button>
                <button className="flex-1 rounded-md px-6 py-3 text-blue-600">Doctor</button>
              </div> */}

                            {/* <div className="mb-8 rounded-lg border border-red-300 bg-red-50 p-4 text-red-800">
                <div className="flex items-center gap-3">
                  <span className="text-lg font-semibold">Location Unavailable</span>
                  <span className="text-sm text-red-600">Enable location services for better results</span>
                  <button className="ml-auto text-sm font-semibold text-red-600 hover:underline">Retry</button>
                </div>
              </div> */}

                            <div className="mb-3 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <MapPin className="h-6 w-6 text-blue-600" />
                                    <span className="text-lg font-semibold text-gray-800">All Available Clinics</span>
                                </div>
                                <button className="flex items-center gap-2 text-blue-600 text-[] hover:underline">
                                    <RefreshCcw className="h-4 w-4" />
                                    Refresh
                                </button>
                            </div>

                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                {clinics?.map((clinic) => (
                                    <div key={clinic.id} className="rounded-lg border border-blue-200 bg-white p-4 shadow-md">
                                        <div className="mb-4 flex items-center justify-between">
                                            <div className="flex gap-3">
                                                <MapPin className="h-5 w-5 mt-[4px] flex-shrink-0 text-blue-600" />
                                                <div>
                                                    <h4 className="text-lg font-semibold text-gray-800">{clinic.clinicName}</h4>
                                                    <p className="text-[12px] text-gray-600">{clinic.clinicType}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1 text-gray-600">
                                                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                                <span className="text-base">{clinic.clinicRating || "4.5"}</span>
                                            </div>
                                        </div>
                                        {/* <p className="mb-2 text-sm text-gray-500">{clinic.distance}</p> */}
                                        <p className="mb-6 text-[12px] min-h-[40px] text-gray-500"> {`${clinic.clinicAddress.addressLine}, ${clinic.clinicAddress.city}, ${clinic.clinicAddress.state} - ${clinic.clinicAddress.zipCode}, ${clinic.clinicAddress.country}`}</p>
                                        <button
                                            onClick={() => handleClinicSelect(clinic)}
                                            className="w-full rounded-md bg-gradient-to-br from-[#1b2644] to-blue-600 py-2 text-md font-semibold text-white hover:bg-blue-700"
                                        >
                                            Book Appointment
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step 2: Doctor List */}
                    {step === 2 && (
                        <div>
                            <h3 className="mb-8 text-2xl font-semibold text-gray-800">Select a Doctor</h3>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                {doctors.map((doctor) => (
                                    <div
                                        key={doctor.id}
                                        className="bg-white rounded-2xl shadow-sm border hover:shadow-md transition-shadow cursor-pointer"
                                    >
                                        <div className="p-5 min-h-[160px]">
                                            <div className="flex items-start space-x-4">
                                                {/* Doctor Image */}
                                                <div className="flex-shrink-0">
                                                    <div className="w-20 h-20 rounded-full flex items-center justify-center text-xl font-semibold overflow-hidden shadow-md">
                                                        {doctor.profileImage ? (
                                                            <img
                                                                src={doctor.profileImage}
                                                                alt={doctor.fullName}
                                                                className="w-full h-full object-cover rounded-full"
                                                            />
                                                        ) : (
                                                            <div className={`w-full h-full flex items-center justify-center rounded-full ${getRandomColor(doctor.fullName)}`}>
                                                                {getInitials(doctor.fullName)}
                                                            </div>
                                                        )}
                                                    </div>

                                                </div>

                                                {/* Doctor Info */}
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-start justify-between">
                                                        <h2 className="text-lg font-semibold text-gray-900 truncate">{doctor.fullName}</h2>
                                                        <span
                                                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${doctor.isAvailableNow ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                                                                }`}
                                                        >
                                                            {doctor.isAvailableNow ? "Available" : "Unavailable"}
                                                        </span>
                                                    </div>
                                                    <p className="mt-1 text-gray-600 truncate">  {doctor?.specializations?.join(", ") || "General Physician"}</p>
                                                    <p className="mt-1 text-gray-500 text-sm">{doctor.experience} Years</p>
                                                    <div className="mt-2 flex items-center justify-between">
                                                        <div className="flex items-center">
                                                            <div className="flex mr-1">{renderStars(doctor.ratings?.count)}</div>
                                                            <span className="text-sm text-gray-600">
                                                                {doctor.ratings?.count}
                                                            </span>
                                                        </div>
                                                        <span className="text-lg font-semibold text-blue-600">{doctor.consultationFee}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-4 py-4 bg-gray-50 rounded-b-2xl border-t">
                                            <button className="w-full bg-gradient-to-br from-[#1b2644] to-blue-600  text-white font-medium py-2 px-4 rounded-lg transition-colors" onClick={() => handleDoctorSelect(doctor)}>
                                                Book Appointment
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step 3: Date & Time Slot Selection */}
                    {step === 3 && selectedDoctor && (
                        <div className="grid">

                            <div className=" flex w-[100%] justify-between gap-[10px]">
                                <div className=" flex flex-col ">
                                    <div className="mb-5 w-[350px] rounded-lg h-fit border border-gray-200 bg-white p-6 shadow-md">
                                        <div className="flex  pb-[10px] gap-5">
                                            {selectedDoctor.profileImage ? (
                                                <img
                                                    src={selectedDoctor.profileImage}
                                                    alt={selectedDoctor.fullName}
                                                    className="h-20 w-20 rounded-full object-cover ring-2 ring-blue-200"
                                                />
                                            ) : (
                                                <div className={`h-20 w-20 rounded-full flex items-center justify-center text-xl font-semibold ring-2 ring-blue-200 ${getRandomColor(selectedDoctor.fullName)}`}>
                                                    {getInitials(selectedDoctor.fullName)}
                                                </div>
                                            )}

                                            <div className="flex-1">
                                                <h4 className="text-xl font-semibold text-gray-800">{selectedDoctor.fullName}</h4>

                                            </div>
                                        </div>
                                        <p className="text-[12px] text-gray-600">  {selectedDoctor?.specializations?.join(", ") || "General Physician"}</p>
                                        <p className="text-xl mt-[5px] font-bold text-blue-600">₹{selectedDoctor.consultationFee || "500"}</p>
                                    </div>


                                    {selectedDate && (
                                        <div>
                                            <div className="rounded-lg w-[350px] border border-gray-200 bg-white p-4 shadow-md">
                                                <h3 className="mb-2 border-l-4 border-blue-600 pl-3 text-xl font-semibold text-gray-800">
                                                    Available Time Slots
                                                </h3>

                                                <div className="mb-6 flex justify-between rounded-lg bg-gray-100 p-1">
                                                    <button
                                                        onClick={() => setTimePeriodFilter("morning")}
                                                        className={`flex-1 rounded-md px-3 py-1 text-center text-[14px] font-medium transition-colors duration-200 ${timePeriodFilter === "morning"
                                                            ? "bg-gradient-to-br from-[#1b2644] to-blue-600  text-white shadow-sm"
                                                            : "text-gray-700 hover:bg-gray-200"
                                                            }`}
                                                    >
                                                        Morning
                                                    </button>
                                                    <button
                                                        onClick={() => setTimePeriodFilter("afternoon")}
                                                        className={`flex-1 rounded-md px-3 py-1 text-center text-[14px] font-medium transition-colors duration-200 ${timePeriodFilter === "afternoon"
                                                            ? "bg-gradient-to-br from-[#1b2644] to-blue-600  text-white shadow-sm"
                                                            : "text-gray-700 hover:bg-gray-200"
                                                            }`}
                                                    >
                                                        Afternoon
                                                    </button>
                                                    <button
                                                        onClick={() => setTimePeriodFilter("evening")}
                                                        className={`flex-1 rounded-md px-3 py-1 text-center text-[14px] font-medium transition-colors duration-200 ${timePeriodFilter === "evening"
                                                            ? "bg-gradient-to-br from-[#1b2644] to-blue-600  text-white shadow-sm"
                                                            : "text-gray-700 hover:bg-gray-200"
                                                            }`}
                                                    >
                                                        Evening
                                                    </button>
                                                </div>

                                                {filteredSlots.length > 0 ? (
                                                    <div className="grid grid-cols-1 max-h-[170px] gap-2">
                                                        {filteredSlots.map((slot) => (
                                                            <button
                                                                key={`${slot.startTime}-${slot.endTime}`}
                                                                onClick={() => handleTimeSlotSelect(slot)}
                                                                className={`flex items-center justify-center rounded-[10px] border px-4 py-2 text-base font-medium transition-all duration-200 ${selectedTimeSlot?.startTime === slot.startTime &&
                                                                    selectedTimeSlot?.endTime === slot.endTime
                                                                    ? "bg-blue-50 border-blue-400 text-blue-700 shadow-lg"
                                                                    : "border-gray-300 bg-white text-gray-800 hover:bg-blue-50 hover:border-blue-400"
                                                                    }`}
                                                            >
                                                                {slot.startTime} - {slot.endTime}
                                                            </button>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <div className="text-center text-gray-500">
                                                        <CalendarDays className="mx-auto mb-4 h-12 w-12 text-gray-400" />
                                                        <p className="text-lg">No slots available for this period.</p>
                                                    </div>
                                                )}

                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="rounded-lg w-[350px] border h-[450px] border-gray-200 bg-white p-4 shadow-md">
                                    <h3 className="mb-3 border-l-4 border-blue-600 pl-3 text-xl font-semibold text-gray-800">
                                        Select Date
                                    </h3>
                                    <div className="mb- flex items-center justify-between">
                                        <button
                                            onClick={() => setCurrentMonth(addMonths(currentMonth, -1))}
                                            className="rounded-full p-2 text-gray-600 hover:bg-gray-100"
                                        >
                                            <ChevronLeft className="h-6 w-6" />
                                        </button>
                                        <span className="text-lg font-semibold text-gray-800">{format(currentMonth, "MMMM yyyy")}</span>
                                        <button
                                            onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                                            className="rounded-full p-2 text-gray-600 hover:bg-gray-100"
                                        >
                                            <ChevronRight className="h-6 w-6" />
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium text-gray-600">
                                        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                                            <div key={day} className="py-2">
                                                {day}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="grid grid-cols-7 gap-2 text-center">
                                        {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                                            <div key={`empty-${i}`} className=" "></div>
                                        ))}
                                        {days.map((date) => {
                                            const status = getDayStatus(date)
                                            const isSelected = selectedDate && isSameDay(date, selectedDate)
                                            const isCurrentMonth = isSameMonth(date, currentMonth)

                                            let dayClasses =
                                                "h-[35px] !w-[35px] w-full flex items-center justify-center text-sm font-medium rounded-md transition-all duration-200"

                                            if (!isCurrentMonth) {
                                                dayClasses += " text-gray-300"
                                            } else if (status === "past") {
                                                dayClasses += " bg-gray-100 text-gray-400 cursor-not-allowed"
                                            } else if (status === "available") {
                                                dayClasses += " border border-green-400 text-green-700 hover:bg-green-50"
                                            } else if (status === "unavailable") {
                                                dayClasses += " border border-red-400 text-red-700 cursor-not-allowed"
                                            }

                                            if (isSelected) {
                                                dayClasses =
                                                    " w-full flex items-center justify-center text-[15px] font-[500] rounded-md bg-gradient-to-br from-[#1b2644] to-blue-600  text-white shadow-md"
                                            }

                                            return (
                                                <button
                                                    key={format(date, "yyyy-MM-dd")}
                                                    className={dayClasses}
                                                    onClick={() => {
                                                        if (status === "available" || isToday(date)) {
                                                            handleDateSelect(date)
                                                        }
                                                    }}
                                                    disabled={status === "past" || status === "unavailable"}
                                                >
                                                    {format(date, "d")}
                                                </button>
                                            )
                                        })}
                                    </div>

                                    <div className="mt-3 text-sm text-gray-600">
                                        <p className="mb-1 font-semibold">Legend:</p>
                                        <div className="flex flex-wrap gap-x-4 gap-y-2">
                                            <div className="flex items-center gap-2">
                                                <span className="h-3 w-3 rounded-full bg-green-400"></span> Available
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="h-3 w-3 rounded-full bg-red-400"></span> No availability
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="h-3 w-3 rounded-full bg-gray-400"></span> Past date
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="h-3 w-3   rounded-full bg-blue-600"></span> Selected
                                            </div>
                                        </div>
                                    </div>

                                    {/* {selectedDate && (
                                        <div className="mt-8 rounded-lg bg-blue-50 p-5 text-blue-800">
                                            <p className="text-lg font-semibold">Selected: {format(selectedDate, "EEEE, MMMM d, yyyy")}</p>
                                            <p className="text-base">{allAvailableSlots.length} time slot(s) available</p>
                                        </div>
                                    )} */}
                                </div>
                            </div>

                            {/* Right Column: Time Slots */}

                        </div>
                    )}
                </div>

                {/* Fixed Bottom Button */}
                {step === 3 && (
                    <div className="absolute bottom-0 left-0 w-full border-t border-gray-200 bg-white p-5 shadow-lg">
                        <button
                            className="w-full rounded-md bg-gradient-to-br from-[#1b2644] to-blue-600  py-3 text-lg font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
                            disabled={!selectedDate || !selectedTimeSlot}
                            onClick={handleConfirmAppointment}
                        >
                            Confirm Appointment
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
