
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import BottomBar from "../../component/bottombar/BottomBar";
import { Star, MapPin, Clock, Phone, Mail, Award, GraduationCap, Stethoscope } from "lucide-react"

export default function DoctorsListing() {



  const handleback = () => {
    navigate(-1)
  }


    const doctors= [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialization: "Cardiologist",
      qualification: "MBBS, MD (Cardiology)",
      experience: "15+ Years",
      rating: 4.9,
      location: "New York Medical Center",
      availability: "Mon-Fri: 9AM-5PM",
      phone: "+1 (555) 123-4567",
      email: "dr.sarah@hospital.com",
      image: "/professional-doctor-woman.png",
      about:
        "Dr. Sarah Johnson is a renowned cardiologist with over 15 years of experience in treating heart conditions. She specializes in interventional cardiology and has performed over 2000 successful procedures.",
      achievements: ["Best Doctor Award 2023", "Published 50+ Research Papers", "International Speaker"],
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialization: "Neurologist",
      qualification: "MBBS, MD (Neurology)",
      experience: "12+ Years",
      rating: 4.8,
      location: "Central Hospital",
      availability: "Tue-Sat: 10AM-6PM",
      phone: "+1 (555) 234-5678",
      email: "dr.michael@hospital.com",
      image: "/professional-doctor-man.png",
      about:
        "Dr. Michael Chen is an expert neurologist specializing in brain disorders and stroke treatment. He has been instrumental in developing new treatment protocols for neurological conditions.",
      achievements: ["Excellence in Medicine 2022", "Stroke Treatment Specialist", "Research Grant Recipient"],
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialization: "Pediatrician",
      qualification: "MBBS, MD (Pediatrics)",
      experience: "10+ Years",
      rating: 4.9,
      location: "Children's Medical Center",
      availability: "Mon-Sat: 8AM-4PM",
      phone: "+1 (555) 345-6789",
      email: "dr.emily@hospital.com",
      image: "/images/doctor-1.png",
      about:
        "Dr. Emily Rodriguez is a dedicated pediatrician who has been caring for children's health for over a decade. She specializes in child development and preventive care.",
      achievements: ["Pediatric Excellence Award", "Community Health Champion", "Child Wellness Advocate"],
    },
  ]

  return (
    <>



      <Header />

       <div className=" pt-[160px] pb-[60px] font-Poppins 2xl:w-[1350px] mx-auto  w-[80%]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Meet Our Expert Doctors</h1>
          <p className="text-[14px] text-gray-600 max-w-3xl mx-auto">
            Our highly skilled professionals encourage better oral health and assist people to feel good, look good, and
            be more confident
          </p>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] border border-blue-100"
            >
              {/* Doctor Image */}
              <div className="relative">
                <img src={doctor.image || "/placeholder.svg"} alt={doctor.name} className="w-full h-[230px] object-cover" />
                <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 shadow-lg">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-bold text-gray-900">{doctor.rating}</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-3">
                  <h3 className="text-2xl leading-5 font-[600] text-white mb-1">{doctor.name}</h3>
                  <p className="text-blue-200 font-medium">{doctor.specialization}</p>
                </div>
              </div>
              <div className="p-4">
                {/* Qualification & Experience */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                    <span className="text-[12px] font-medium text-gray-700">{doctor.qualification}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-purple-600" />
                    <span className="text-[12px]  flex-shrink-0 font-medium text-gray-700">{doctor.experience}</span>
                  </div>
                </div>

                {/* Location & Availability */}
                <div className="space-y-1 mb-2">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span className="text-[13px] text-gray-600">{doctor.location}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 text-green-500" />
                    <span className="text-[13px] text-gray-600">{doctor.availability}</span>
                  </div>
                </div>

                {/* About */}
                <div className="mb-2">
                  <p className="text-[12px] text-gray-600 leading-[15px] line-clamp-4">{doctor.about}</p>
                </div>

                {/* Achievements */}
                <div className="mb-1">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                  <div className="space-y-1">
                    {doctor.achievements.slice(0, 2).map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-xs text-gray-600">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

           
                {/* Specialization Badge */}
                {/* <div className="mt-4 text-center">
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full">
                    <Stethoscope className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-800">Specialist in {doctor.specialization}</span>
                  </div>
                </div> */}
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
