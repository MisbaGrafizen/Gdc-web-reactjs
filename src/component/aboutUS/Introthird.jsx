import React from "react"

import { MapPin, Clock, CheckCircle } from "lucide-react"

export default function Introthird() {
  return (
    <section className="md:w-[83%] w-[95%] mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Left side - Doctor image */}
        <div className=" flex flex-col  md:order-2 ">
          <div className="relative  rounded-2xl border">
            <div className="relative z-10 md:w-[400px] bg-white rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <div className="h-[390px] relative">
                <img
                  // src={doctor}
                  alt="Dr. Haard Vasavada"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            <div className="absolute top-4 -left-4 w-24 h-24 rounded-full bg-blue-100 z-0"></div>
            <div className="absolute bottom-8 -right-6 w-32 h-32 rounded-full bg-blue-100 z-0"></div>

            <div className="absolute -bottom-4 w-[270px] md:w-fit border border-[rgba(255,230,230,0.42)] left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-full py-2 px-2 z-20">
              <p className="text-center text-[10px] md:text-[13px] font-medium text-gray-800">
                Consultant Neurosurgeon
              </p>
            </div>
          </div>

          <div className="pt-5 text-center">
            <h3 className="text-2xl font-bold text-[#062f95]">Dr. Shrut Vasavada</h3>
            <p className="CDH-gradiant font-medium text-sm">
         MBBS, MS (Orthopaedics), FISS, FMISS
            </p>
            <div className="mt-2 flex justify-center space-x-4">
              <span className="inline-flex items-center text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-1" />
                India
              </span>
              <span className="inline-flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-1" />
                10+ Years Experience
              </span>
            </div>
          </div>
        </div>

        {/* Right side - Doctor content */}
        <div className="lg:w-7/12  md:mx-0 mx-auto flex flex-col  order-1">
          <div className="flex bg-[#cfd8eb] border-[#062f95] border text-[#062f95] w-fit px-4 py-1 rounded-full text-sm font-medium mb-4">
            Meet Your Neurosurgery Specialist
          </div>

          <h2 className="text-[27px] md:text-3xl font-[700] text-[#062f95] leading-[33px] md:leading-[40px] mb-3">
          Dr. Shrut Vasavada{" "}
            <span className="CDH-gradiant text-black">
              — Consultant Neurosurgeon
            </span>
          </h2>

          <p className="text-[15px] text-gray-700 text-justify mb-6">
            Dr. Shrut Vasavada specializes in advanced neurosurgical procedures, including brain tumor
            surgeries, spinal surgeries, and minimally invasive techniques. He is known for his
            patient-centered approach and dedication to improving neurological health.
          </p>

          <div className="bg-gradient-to-br from-[#1b2644] to-blue-600 rounded-lg border shadow-md p-4 mb-8">
            <h3 className="font-bold  text-[#fff] text-lg mb-2">Professional Highlights:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-[#fff] mr-2 mt-0.5" />
                <span className="text-[14px] text-[#fff]">
   MBBS, MS (Orthopaedics), FISS, FMISS
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-[#fff] mr-2 mt-0.5" />
                <span className="text-[14px] text-[#fff]">
                  Expert in brain tumor, spinal, and minimally invasive surgeries
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-[#fff] mr-2 mt-0.5" />
                <span className="text-[14px] text-[#fff]">
                  Known for patient-centered approach and outcome-based care
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-[#fff] mr-2 mt-0.5" />
                <span className="text-[14px] text-[#fff]">
                  Dedicated to improving neurological health
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
