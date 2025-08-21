import React, { useEffect, useState } from 'react'
import Header from '../../component/header/Header'
import Footer from '../../component/footer/Footer'
import { useLocation, useNavigate } from 'react-router-dom'
import { ApiGet } from '../../helper/axios';

export default function DoctorDetails() {
    const [activeTab, setActiveTab] = useState("about");
    const [doctor, setDoctor] = useState(null);
    const [loading, setLoading] = useState(false);

    const location = useLocation();
    const doctorId = location.state?.doctorId;


    useEffect(() => {
        if (doctorId) {
            fetchDoctorDetails(doctorId);
        }
    }, [doctorId]);

    const fetchDoctorDetails = async (id) => {
        try {
            setLoading(true);
            const response = await ApiGet(`/admin/doctor/${id}`);
            setDoctor(response.data);
        } catch (error) {
            console.error("Error fetching doctor details:", error);
        } finally {
            setLoading(false);
        }
    };


    const getToday = () => {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return days[new Date().getDay()];
    };

    const isDoctorAvailableToday = (doctor) => {
        const today = getToday();
        return doctor.availability?.some((slot) => slot.day === today);
    };
    



    const tabs = [
        { id: "about", label: "About" },
        { id: "qualifications", label: "Qualifications" },
        { id: "reviews", label: "Reviews" },
        { id: "availability", label: "Availability" },
    ]

    const reviews = [
        {
            id: 1,
            name: "Sarah Johnson",
            initial: "S",
            rating: 5,
            time: "2 weeks ago",
            comment: "Dr. Dr Neelam Raina was very thorough and took the time to explain everything. Highly recommend!",
        },
        {
            id: 2,
            name: "Michael Chen",
            initial: "M",
            rating: 4,
            time: "1 month ago",
            comment: "Great doctor with excellent bedside manner. Wait time was a bit long but worth it.",
        },
        {
            id: 3,
            name: "Emily Davis",
            initial: "E",
            rating: 5,
            time: "3 weeks ago",
            comment: "Excellent consultation. Very professional and caring approach to patient care.",
        },
    ]

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

    const formatDate = (dateStr) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', options);
    };


    const navigate = useNavigate()

    const handleback = () => {
        navigate(-1)
    }

    return (
        <>

            <Header />

            <div className="min-h-screen pt-[110px] font-Poppins bg-gray-50">
                {/* Header */}
                <div className="bg-white shadow-sm border-b">
                    <div className="max-w-4xl mx-auto px-6 py-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" onClick={handleback}>
                                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <h1 className="text-xl font-semibold text-gray-900">Doctor Profile</h1>
                            </div>
                            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-6 py-8">
                    {/* Doctor Profile Card */}
                    <div className="bg-white rounded-2xl shadow-sm border p-8 mb-6">
                        <div className="flex items-start space-x-6">
                            {/* Doctor Image */}
                            <div className="flex-shrink-0">
                                <div className="w-32 h-32 bg-gray-200 rounded-2xl overflow-hidden">
                                    <img
                                        src="https://randomuser.me/api/portraits/men/34.jpg"
                                        alt="Dr Neelam Raina"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Doctor Info */}
                            <div className="flex-1">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <div className="flex items-center space-x-3 mb-2">
                                            <h2 className="text-2xl font-bold text-gray-900">{doctor?.fullName}</h2>
                                            <div className="w-6 h-6 bg-gradient-to-br from-[#1b2644] to-[#13008E] rounded-full flex items-center justify-center">
                                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="text-lg text-gray-600 mb-3">{doctor?.specializations?.join(',') || "General Physician"}</p>
                                        <div className="flex items-center space-x-2 mb-3">
                                            <div className="flex">{renderStars(doctor?.ratings?.count)}</div>
                                            <span className="text-lg font-semibold">{doctor?.ratings?.average}</span>
                                            <span className="text-gray-500">({doctor?.ratings?.count})</span>
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
                                                />
                                            </svg>
                                            <span>{doctor?.experience} years experience</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-4 gap-4 mb-6">
                                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                            <svg className="w-6 h-6 text-[#13008E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-1">Experience</p>
                                        <p className="font-semibold">{doctor?.experience} Years</p>
                                    </div>

                                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                            <svg className="w-6 h-6 text-[#13008E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-1">Qualification</p>
                                        <p className="font-semibold">{doctor?.qualifications?.length}</p>
                                    </div>

                                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                            <svg className="w-6 h-6 text-[#13008E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-1">Languages</p>
                                        <p className="font-semibold">{doctor?.languagesSpoken?.length}</p>
                                    </div>

                                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                            <svg className="w-6 h-6 text-[#13008E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-1">Fee</p>
                                        <p className="font-semibold">₹{doctor?.consultationFee}</p>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex space-x-4">
                                    <button className="flex-1 flex items-center justify-center space-x-2 py-3 px-6 bg-blue-50 text-[#13008E] rounded-xl hover:bg-blue-100 transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                        <span>Call</span>
                                    </button>

                                    <button className="flex-1 flex items-center justify-center space-x-2 py-3 px-6 bg-blue-50 text-[#13008E] rounded-xl hover:bg-blue-100 transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                            />
                                        </svg>
                                        <span>Message</span>
                                    </button>

                                    <button className="flex-1 flex items-center justify-center space-x-2 py-3 px-6 bg-blue-50 text-[#13008E] rounded-xl hover:bg-blue-100 transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                            />
                                        </svg>
                                        <span>Video</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tab Navigation */}
                    <div className="bg-white rounded-2xl shadow-sm border mb-6">
                        <div className="border-b">
                            <nav className="flex space-x-8 px-8">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${activeTab === tab.id
                                            ? "border-[#13008E] text-[#13008E]"
                                            : "border-transparent text-gray-500 hover:text-gray-700"
                                            }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </nav>
                        </div>

                        {/* Tab Content */}
                        <div className="p-8">
                            {activeTab === "about" && (
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4">About Dr. Dr Neelam Raina</h3>
                                        <div className="text-gray-700 space-y-4">
                                            <p>
                                                My main interests are adult psychiatry, child and adolescent psychiatry, and trauma-focused care.
                                                I believe in compassionate, evidence-based treatment that recognizes the complexity of each
                                                individual's experience.
                                            </p>
                                            <p>
                                                My approach lies within the bio-psycho-social framework, integrating biological, psychological,
                                                and social factors to understand and treat mental health conditions holistically. Believing that
                                                no two individuals are alike, I plan personalized care tailored to each patient's unique needs,
                                                strengths, and circumstances.
                                            </p>
                                            <p>
                                                I strive to create a safe, supportive environment where patients feel heard, respected, and
                                                empowered in their healing journey.
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Specializations</h4>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm">{doctor?.specializations?.join(", ")}</span>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Languages Spoken</h4>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm">{doctor?.languagesSpoken?.join(", ")}</span>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Professional Information</h4>
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="flex justify-between py-3 border-b border-gray-100">
                                                <span className="text-gray-600">Registration Number</span>
                                                <span className="font-semibold">{doctor?.registrationNumber}</span>
                                            </div>
                                            <div className="flex justify-between py-3 border-b border-gray-100">
                                                <span className="text-gray-600">Staff ID</span>
                                                <span className="font-semibold">{doctor?.staffID}</span>
                                            </div>
                                            <div className="flex justify-between py-3 border-b border-gray-100">
                                                <span className="text-gray-600">Status</span>
                                                <span className="font-semibold text-[#13008E] flex items-center">
                                                    <div className="w-2 h-2 bg-[#13008E] rounded-full mr-2"></div>
                                                    Active
                                                </span>
                                            </div>
                                            <div className="flex justify-between py-3 border-b border-gray-100">
                                                <span className="text-gray-600">Verified</span>
                                                <span className="font-semibold text-[#13008E] flex items-center">
                                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    Verified
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === "qualifications" && (
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-6">Education & Qualifications</h3>
                                        <div className="space-y-4">
                                            {doctor?.qualifications?.map((item, index) => (
                                                <div key={index} className="flex items-center p-6 border border-blue-200 rounded-xl bg-blue-50">
                                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                                        <svg className="w-6 h-6 text-[#13008E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex justify-between items-start">
                                                            <div>
                                                                <h4 className="text-lg font-semibold text-gray-900">{item?.degree}</h4>
                                                                <p className="text-gray-600">{item?.institution}</p>
                                                            </div>
                                                            <span className="text-[#13008E] font-semibold">{item?.year}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}

                                            {/* <div className="flex items-center p-6 border border-blue-200 rounded-xl bg-blue-50">
                                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                                    <svg className="w-6 h-6 text-[#13008E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                                        />
                                                    </svg>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <h4 className="text-lg font-semibold text-gray-900">MD</h4>
                                                            <p className="text-gray-600">PGI</p>
                                                        </div>
                                                        <span className="text-[#13008E] font-semibold">2009</span>
                                                    </div>
                                                </div>
                                            </div>  */}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-6">Professional Experience</h3>
                                        <div className="bg-gray-50 rounded-xl p-6">
                                            <div className="flex items-center mb-4">
                                                <div className="w-16 h-16 bg-[#13008E] rounded-full flex items-center justify-center mr-4">
                                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-2xl font-bold text-gray-900">{doctor?.experience} Years</h4>
                                                    <p className="text-gray-600">Total Experience</p>
                                                </div>
                                            </div>
                                            <div className="border-t border-gray-200 pt-4">
                                                <div className="flex items-center text-gray-600">
                                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
                                                        />
                                                    </svg>
                                                    <span>Joined on {formatDate(doctor?.joinDate)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === "reviews" && (
                                <div className="space-y-6">
                                    <div className="bg-gray-50 rounded-xl p-6">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="flex items-baseline space-x-2 mb-2">
                                                    <span className="text-4xl font-bold text-gray-900">5</span>
                                                    <span className="text-xl text-gray-600">/5</span>
                                                </div>
                                                <p className="text-gray-600">Based on 5 reviews</p>
                                            </div>
                                            <div className="text-right">
                                                <div className="flex mb-2">{renderStars(5)}</div>
                                                <p className="text-gray-600">5 patients</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-6">Patient Reviews</h3>
                                        <div className="space-y-4">
                                            {reviews.map((review) => (
                                                <div key={review.id} className="bg-white border rounded-xl p-6">
                                                    <div className="flex items-start space-x-4">
                                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                                            <span className="text-[#13008E] font-semibold">{review.initial}</span>
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="flex items-center justify-between mb-2">
                                                                <h4 className="font-semibold text-gray-900">{review.name}</h4>
                                                                <div className="flex items-center space-x-2">
                                                                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                                    </svg>
                                                                    <span className="font-semibold">{review.rating}</span>
                                                                </div>
                                                            </div>
                                                            <p className="text-gray-500 text-sm mb-3">{review.time}</p>
                                                            <p className="text-gray-700">{review.comment}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === "availability" && (
                                <div className="space-y-6">
                                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h3 className="text-xl font-semibold text-blue-900 mb-1">Consultation Fee</h3>
                                                <p className="text-blue-700">Per session</p>
                                            </div>
                                            <div className="text-3xl font-bold text-[#13008E]">₹{doctor?.consultationFee}</div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Current Status</h3>
                                        <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                                            <div className="flex items-center">
                                                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                                                <span className="text-green-800 font-semibold">{isDoctorAvailableToday(doctor) ? "Available Today" : "Not Available Today"}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center space-x-3 mb-4">
                                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                                <svg className="w-5 h-5 text-[#13008E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0V9a2 2 0 012-2h2a2 2 0 012 2v12M13 7a1 1 0 11-2 0 1 1 0 012 0z"
                                                    />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-semibold text-gray-900">Clinic Locations & Availability</h3>
                                        </div>

                                        {doctor?.availability && doctor.availability.length > 0 ? (
                                            <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                                                <h4 className="text-lg font-semibold text-gray-900">Doctor's Availability</h4>

                                                {doctor.availability.map((item, index) => {
                                                    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
                                                    const isToday = item.day === today;

                                                    return (
                                                        <div
                                                            key={index}
                                                            className={`p-4 rounded-xl border ${isToday ? 'bg-green-50 border-green-300' : 'bg-white border-gray-200'}`}
                                                        >
                                                            <div className="flex justify-between items-center mb-2">
                                                                <h5 className="font-semibold text-gray-800">{item.day} {isToday && <span className="text-green-600">(Today)</span>}</h5>
                                                                <span className={`text-sm px-2 py-1 rounded-full ${doctor.isAvailableNow && isToday ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                                                                    {doctor.isAvailableNow && isToday ? 'Available Now' : 'Not Available'}
                                                                </span>
                                                            </div>
                                                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                                                {item.slots.map((slot, idx) => (
                                                                    <li key={idx}>
                                                                        {slot.startTime} - {slot.endTime} (Booked: {slot.bookedCount}/{slot.appointmentLimit})
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        ) : (
                                            <div className="bg-gray-50 rounded-xl p-8 text-center">
                                                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                                                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0V9a2 2 0 012-2h2a2 2 0 012 2v12M13 7a1 1 0 11-2 0 1 1 0 012 0z"
                                                        />
                                                    </svg>
                                                </div>
                                                <h4 className="text-lg font-semibold text-gray-900 mb-3">No Clinic Information Available</h4>
                                                <p className="text-gray-600 mb-4">
                                                    We're currently updating clinic location and availability information for Dr. {doctor?.fullName}.
                                                </p>
                                                <p className="text-gray-500 text-sm">
                                                    Please contact the doctor directly for appointment scheduling.
                                                </p>
                                            </div>
                                        )}

                                    </div>

                                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                                        <h4 className="font-semibold text-blue-900 mb-3">Schedule Type: {doctor?.scheduleType}</h4>
                                    </div>

                                    <div className="bg-gray-50 rounded-xl p-6">
                                        <div className="flex items-start space-x-3">
                                            <svg className="w-6 h-6 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                            <div className="text-gray-600 text-sm space-y-2">
                                                <p>• Appointment times may vary based on clinic location</p>
                                                <p>• Please call ahead to confirm availability</p>
                                                <p>• Emergency consultations may be available outside scheduled hours</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Book Appointment Button */}
                    <div className="sticky bottom-6">
                        <button className="w-full bg-gradient-to-br from-[#1b2644] to-[#13008E] text-white font-semibold py-4 px-8 rounded-2xl transition-colors shadow-lg">
                            Book Appointment - ₹500
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
