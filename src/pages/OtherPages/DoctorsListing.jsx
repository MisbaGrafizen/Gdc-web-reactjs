
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import BottomBar from "../../component/bottombar/BottomBar";
import { ApiGet } from "../../helper/axios";

export default function DoctorsListing() {
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  // const doctors = [
  //   {
  //     id: 1,
  //     name: "Dr Neelam Raina",
  //     specialty: "Psychiatry",
  //     experience: "15 years exp.",
  //     rating: 5,
  //     reviews: 5,
  //     fee: "₹500",
  //     available: true,
  //     image: "https://randomuser.me/api/portraits/women/44.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "Dr. Ankit Deepak",
  //     specialty: "General consultant",
  //     experience: "7 years exp.",
  //     rating: 0,
  //     reviews: 0,
  //     fee: "₹500",
  //     available: true,
  //     image: "https://randomuser.me/api/portraits/men/34.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "Dr. Priyank H Vasant",
  //     specialty: "Brain tumor surgery, Epilepsy surgery, Parkinson's and movement...",
  //     experience: "6 years exp.",
  //     rating: 5,
  //     reviews: 5,
  //     fee: "₹500",
  //     available: true,
  //     image: "https://randomuser.me/api/portraits/men/21.jpg",
  //   },
  //   {
  //     id: 4,
  //     name: "Dr. Kevin Ajudiya",
  //     specialty: "Pain management",
  //     experience: "7 years exp.",
  //     rating: 0,
  //     reviews: 0,
  //     fee: "₹500",
  //     available: true,
  //     image: "https://randomuser.me/api/portraits/men/62.jpg",
  //   },
  //   {
  //     id: 5,
  //     name: "Dr. Sarah Johnson",
  //     specialty: "Cardiology",
  //     experience: "12 years exp.",
  //     rating: 4,
  //     reviews: 8,
  //     fee: "₹700",
  //     available: false,
  //     image: "https://randomuser.me/api/portraits/women/22.jpg",
  //   },
  //   {
  //     id: 6,
  //     name: "Dr. Rajesh Patel",
  //     specialty: "Orthopedics",
  //     experience: "20 years exp.",
  //     rating: 5,
  //     reviews: 12,
  //     fee: "₹800",
  //     available: true,
  //     image: "https://randomuser.me/api/portraits/men/76.jpg",
  //   },
  //   {
  //     id: 7,
  //     name: "Dr. Meera Shah",
  //     specialty: "Dermatology",
  //     experience: "9 years exp.",
  //     rating: 4,
  //     reviews: 6,
  //     fee: "₹600",
  //     available: true,
  //     image: "https://randomuser.me/api/portraits/women/65.jpg",
  //   },
  // ]

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      setLoading(true);
      const res = await ApiGet('/admin/doctor');
      setDoctors(res.data || []);
    } catch (error) {
      console.error("Failed to fetch doctors:", error);
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
        const hash = name?.charCodeAt(0) % colors.length
        return colors[hash]
    }


  const filteredDoctors = doctors.filter((doctor) => {
    return (
      doctor.fullName?.toLowerCase().includes(searchQuery?.toLowerCase()) ||
      doctor.specialty?.toLowerCase().includes(searchQuery?.toLowerCase())
    )
  })

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


const handleDetails = (doctor) => {
  const nameSlug = doctor.fullName.toLowerCase().replace(/\s+/g, "-"); // e.g., "Dr Ayesha Sharma" → "dr-ayesha-sharma"
  navigate(`/doctor-details/${nameSlug}`, {
    state: { doctorId: doctor._id }, // pass ID via state
  });
};




  const handleback = () => {
    navigate(-1)
  }

  return (
    <>



      <Header />

      <div className="min-h-screen font-Poppins pt-[60px] md:pt-[110px] bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" onClick={handleback}>
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h1 className="text-2xl font-semibold text-gray-900">All Doctors</h1>
            </div>
          </div>
        </div>

        <div className="md:max-w-7xl mx-auto px-6 py-8">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl ">
              <div className="flex items-center bg-white rounded-full shadow-md border overflow-hidden">
                <div className="pl-5 pr-2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search doctors, specialties, diseases..."
                  className="flex-1 py-4 px-2 outline-none text-gray-700"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="p-3 hover:bg-gray-100 transition-colors">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-lg text-gray-600 font-medium">{filteredDoctors.length} doctors found</p>
          </div>

          {/* Doctor Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-2xl shadow-sm border hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    {/* Doctor Image */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center text-white text-lg font-semibold shadow-md"
                        style={{ backgroundColor: doctor.image ? "transparent" : undefined }}
                      >
                        {doctor.image ? (
                          <img
                            src={doctor.image}
                            alt={doctor.fullName}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className={`${getRandomColor()} w-full h-full flex items-center justify-center`}>
                            {getInitials(doctor.name)}
                          </div>
                        )}
                      </div>

                    </div>

                    {/* Doctor Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <h2 className="text-lg font-semibold text-gray-900 truncate">{doctor.fullName}</h2>
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${isDoctorAvailableToday(doctor)
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                            }`}
                        >
                          {isDoctorAvailableToday(doctor) ? "Today Available" : "Unavailable"}
                        </span>

                      </div>
                      <p className="mt-1 text-gray-600 truncate">{doctor.specialization?.join(',')}</p>
                      <p className="mt-1 text-gray-500 text-sm">{doctor.experience}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="flex mr-1">{renderStars(doctor.ratings?.count)}</div>
                          <span className="text-sm text-gray-600">
                            {doctor.ratings?.avarage} ({doctor.ratings?.count})
                          </span>
                        </div>
                        <span className="text-lg font-semibold text-blue-600">₹{doctor.consultationFee}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-6 py-4 bg-gray-50 rounded-b-2xl border-t">
                  <button className="w-full bg-gradient-to-br from-[#1b2644] to-blue-600  text-white font-medium py-2 px-4 rounded-lg transition-colors" onClick={() => handleDetails(doctor)}>
                    Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
      <BottomBar />
      <Footer />
    </>
  )
}
