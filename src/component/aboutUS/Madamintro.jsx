import React, { useState } from 'react'
import doctor from "../../../public/CoFounders/Priyank.png"
import { Calendar, MapPin, Clock, CheckCircle, ArrowRight } from "lucide-react"


export default function Madamintro() {
  const [showForm, setShowForm] = useState(false)


  return (
    <>
      <section className=" pt-[30px] w-[95%] md:w-[83%] mx-auto ">

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 ">
          {/* Left side - Doctor profile */}
          <div className=" order-1">
            <div className="relative rounded-2xl border">
              {/* Main image with decorative elements */}
              <div className="relative z-10 bg-white md:w-[400px] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <div className=" h-[390px] relative">
                  {/* <img
                    src={doctor}
                    alt="Dr. Priya Khant"
                    fill
                    className=" h-[100%] object-cover w-[100%]"
                  /> */}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 -left-4 w-24 h-24 rounded-full bg-blue-100 z-0"></div>
              <div className="absolute bottom-8 -right-6 w-32 h-32 rounded-full bg-blue-100 z-0"></div>

              {/* Credentials badge */}
              <div className="absolute -bottom-4  w-[290px] md:w-fit border border-[rgba(255,230,230,0.42)] left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-full py-2 px-2 z-20">
                <p className="text-center text-[12px] md:text-[13px] font-medium text-gray-800">      Consultant Dental Surgeon </p>
              </div>
            </div>

            {/* Doctor info */}
            <div className="pt-5 text-center">
              {/* <h3 className="text-2xl text-[#062f95] font-bold  ">Dr. Priya Khant</h3>
              <p className="CDH-gradiant font-medium">  B.D.S |  Orthodontics </p> */}
              <div className="mt-2 flex justify-center space-x-4">
                <span className="inline-flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  Rajkot, India
                </span>
                <span className="inline-flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-1" />
                  12+ Years Experience
                </span>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:w-7/12 w-[95%] mx-auto md:mx-0 flex order-2 flex-col">
            {/* Optional tag or badge */}
            <div className="flex bg-[#cfd8eb] border-[#062f95] border-1 text-[#062f95]  w-fit px-4 py-1 rounded-full text-sm font-medium mb-4">
              Meet Our Specialist
            </div>

            {/* Title */}
            <h2 className="text-[27px] md:text-3xl font-[700] text-[#062f95]  leading-[33px] md:leading-[40px] mb-3">
              DR. PRIYA KHANT  <span className="CDH-gradiant text-black"> — Orthodontic Expert</span>
            </h2>

            {/* Bio paragraph */}
            <p className="text-[15px] text-gray-700 text-justify mb-6">
              Dr. Priya Khant is a highly skilled Consultant Dental Surgeon and Clinical Orthodontist, known for her precision, passion, and dedication to smile designing. With a Bachelor’s degree in Dental Surgery (B.D.S) and a Master Certificate in Orthodontics (2016), she combines academic excellence with hands-on clinical expertise.
            </p>

            {/* Achievements list */}
            <div className="bg-gradient-to-br from-[#1b2644] to-blue-600 hover:bg-blue-700 rounded-xl border shadow-md p-4 mb-8">
              <h3 className="font-bold text-[#fff] text-lg mb-2">Professional Highlights:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#fff] mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-[14px] text-[#fff]">
                    Bachelor’s in Dental Surgery (B.D.S)
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#fff] mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-[14px] text-[#fff]">
                    Master Certificate in Orthodontics – 2016
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#fff] mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-[14px] text-[#fff]">
                    Specialized in advanced smile designing techniques
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#fff] mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-[14px] text-[#fff]">
                    2,000+ root canal treatments performed successfully
                  </span>
                </li>


              </ul>
            </div>
          </div>

        </div>

      </section>


    </>
  )
}
