
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import BottomBar from "../../component/bottombar/BottomBar";
import { Star, MapPin, Clock, Phone, Mail, Award, GraduationCap, Stethoscope } from "lucide-react"
import sakshimadam from "../../../public/gdc/doctors/mainfirst.webp"
import khusboomadam from "../../../public/gdc/doctors/Dr-Khushboo.webp"
import nainaswaribamadam from "../../../public/gdc/doctors/nainaswariba.webp"
import rahulsir from "../../../public/gdc/doctors/rahul.webp"




export default function DoctorsListing() {



  const handleback = () => {
    navigate(-1)
  }


const doctors = [
  {
    id: 1,
    name: "Dr. Sakshi Doshi",
    specialization: "Prosthodontist and Crown Bridge Specialist",
    qualification: "B.D.S. & M.D.S. in Prosthodontics and Crown & Bridge",
    experience: "10+ Years",
    rating: 4.9,
    location: "Rajkot",
    availability: "Mon-Sat: 10AM-6PM",
    phone: "+91 98765 43210",
    email: "dr.sakshi@gdcdental.com",
    image: sakshimadam,
    about:
      "Dr. Sakshi has treated cancer patients with maxillofacial prostheses. She’s also trained many patients since the pandemic. Her expertise includes crowns, bridges, and implants, with a commitment to patient care and comfort.",
    achievements: [
      "PG in Oral Implantology - Manipal University",
      "Speaker at Indian Dental Conferences",
      "Clinical Lead at GDC Dental"
    ],
  },
  {
    id: 2,
    name: "Dr. Nayniswarthiben Rana",
    specialization: "Restorative Dental Surgeon",
    qualification: "B.D.S. - Government Dental College & Hospital, Ahmedabad",
    experience: "5+ Years",
    rating: 4.7,
    location: "Rajkot",
    availability: "Mon-Fri: 9AM-5PM",
    phone: "+91 98765 43211",
    email: "dr.rana@gdcdental.com",
    image: nainaswaribamadam,
    about:
      "Dr. Nayniswarthiben brings an artistic touch to cosmetic and restorative dentistry. She’s worked in urban and rural setups, with a strong belief in creating awareness through aesthetic dental care.",
    achievements: [
      "Completed Internship at Civil Hospital Rajkot",
      "Speaker at IDA Events",
      "Corporate Wellness Dental Advisor"
    ],
  },
  {
    id: 3,
    name: "Dr. Khushboo Changani",
    specialization: "Oral & Maxillofacial Surgeon",
    qualification: "B.D.S. & M.D.S. (OMFS) – NPDCH, Visnagar",
    experience: "6+ Years",
    rating: 4.8,
    location: "Gujarat",
    availability: "Mon-Sat: 9AM-6PM",
    phone: "+91 98765 43212",
    email: "dr.khushboo@gdcdental.com",
    image: khusboomadam,
    about:
      "With vast experience in surgeries, Dr. Khushboo specializes in cysts, tumors, and trauma-related cases. Her passion lies in improving patients’ lives through minimally invasive surgery and comprehensive treatment planning.",
    achievements: [
      "OMFS Gold Medalist",
      "Specialist in Impacted Teeth Surgery",
      "Community Health Educator"
    ],
  },
  {
    id: 4,
    name: "Dr. Rahul Porecha",
    specialization: "Orthodontist",
    qualification: "M.D.S. (Orthodontics & Dentofacial Orthopedics)",
    experience: "8+ Years",
    rating: 4.9,
    location: "Rajkot",
    availability: "Mon-Fri: 10AM-4PM",
    phone: "+91 98765 43213",
    email: "dr.rahul@gdcdental.com",
    image: rahulsir,
    about:
      "Dr. Rahul specializes in clear aligner and braces treatment. With a keen interest in facial aesthetics and smile design, he has published multiple research papers in national and international journals.",
    achievements: [
      "Published Author in Orthodontics",
      "Expert in Clear Aligners",
      "Consultant for Smile Makeovers"
    ],
  },
];

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
              className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] border border-blue-200"
            >
              {/* Doctor Image */}
              <div className="relative">
                <img src={doctor.image || "/placeholder.svg"} alt={doctor.name} className="w-full h-[230px] object-contain" />
                <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 shadow-lg">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-bold text-gray-900">{doctor.rating}</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <h3 className="text-xl leading-5 font-[600] text-white mb-1">{doctor.name}</h3>
                  <p className="text-blue-200 text-[10px] font-medium">{doctor.specialization}</p>
                </div>
              </div>
              <div className="p-4">
                {/* Qualification & Experience */}
                <div className=" items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                    <span className="text-[12px] leading-3 font-medium text-gray-700">{doctor.qualification}</span>
                  </div>
                  <div className="flex mt-[10px] items-center space-x-2">
                    <Award className="w-5 h-5 text-purple-600" />
                    <span className="text-[12px]  flex-shrink-0 font-medium text-gray-700">{doctor.experience}</span>
                  </div>
                </div>

                {/* Location & Availability */}
                <div className="space-y-1 w-[100%] flex justify-between mb-2">
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
