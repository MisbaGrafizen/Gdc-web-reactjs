import React, { useState } from "react";
import about1 from '../../.././public/whyChooseUs.webp'
import image from '../../../public/gdc/herosection/aboutUs.webp'; 
import { Link } from "react-router-dom";
import { Calculator, TrendingUp, Shield, Award, Users, BarChart3, PieChart } from "lucide-react"

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("expertise")
  return (
    <>
      <div className="md:w-[85%] 2xl:w-[1350px] font-Poppins pt-[10px] mx-auto bg-white">
        {/* Header */}


        {/* About Us Section */}
        <section className=" w-[100%] ">
          <div className=" mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Content */}
              <div className="space-y-3">
                {/* Badge */}
                <div className="inline-block">
                  <span className="px-4 py-1 bg-blue-100 text-[#062f95] border border-[#062f95] rounded-full text-[14px] font-semibold tracking-wide uppercase">
                    Welcome to City Dental Hospital
                  </span>
                </div>

                {/* Main Content */}
                <div className="space-y-3">
                  <h1 className='   font-[600]  leading-[40px] text-[#0f0f0f] pt-[10px] text-[35px] md:text-[35px]'>
                     We make smiles
                    <b className="font-[600] text-[#062f95] pl-[10px]">
           beautiful
                    </b>
                  </h1>


                  <p className="text-[14px] text-gray-600 leading-relaxed text-justifyfont-[400]">
                    A healthy smile and better well-being, all start at <b>City Dental Hospital</b>.
                  </p>
      

                  <p className="text-[14px] text-gray-600 leading-relaxed text-justify font-[400]">
   Experience the highest standards of dental healthcare with state-of-the-art technology, durable bio-friendly materials that focus on all preventive, <span className="text-blue-600 font-medium">painless</span>, and cosmetic dental procedures in Rajkot at City Dental Hospital.
                  </p>
                    <p className="text-[14px] text-gray-600 leading-relaxed font-[400]">
    With years of experience, we are committed to providing patients with superior dental health and a complete range of services to give you the smile you deserve.
  </p>
  
  <p className="text-[14px] text-gray-600 leading-relaxed font-[400]">
    At City Dental Hospital, the top Dental Hospital in Gujarat, we offer flexible timing, individual attention, affordability, accurate treatment explanations, and excellent patient care. Here, we follow strict and stringent hygiene protocols.
  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900">15+</div>
                    <div className="text-sm text-gray-500 font-medium">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900">500+</div>
                    <div className="text-sm text-gray-500 font-medium">Clients Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900">98%</div>
                    <div className="text-sm text-gray-500 font-medium">Success Rate</div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-5">
                  <button className="px-4 py-2 inset-0  bg-gradient-to-br from-[#222f52] to-blue-600 flex  gap-[10px]  items-center text-white text-[14px] rounded-md font-[500] hover:bg-gray-800 transition-colors shadow-lg">
                    Schedule a Consultation <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="relative">
                <div className="relative">
                  {/* Main Image Container */}
                  <div className="md:h-[490px] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                    <img
                      src={image}
                      alt="Professional financial services concept with wooden blocks showing intellectual property terms"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Floating Card */}
                  {/* <div className="absolute -bottom-8 -left-8 border bg-white p-6 rounded-lg shadow-xl  border-gray-100">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                        <span className="text-slate-600 font-bold">CA</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Chartered Accountants</div>
                        <div className="text-sm text-gray-500">Certified Professionals</div>
                      </div>
                    </div>
                  </div> */}

                  {/* Background Decoration */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-slate-200 rounded-full -z-10"></div>
                  <div className="absolute top-1/2 -right-8 w-16 h-16 bg-slate-100 rounded-full -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Section */}
        {/* <section className="py-10 w-[90%]  mt-[70px] mx-auto rounded-[20px]  shadow-md border bg-slate-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our <b className="  text-[#062f95] font-[700]">  Financial Services?</b></h2>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              We believe in building lasting relationships with our clients through transparency, expertise, and
              unwavering commitment to excellence. Our comprehensive approach ensures that your financial goals are not
              just met, but exceeded.
            </p>
          </div>
        </section> */}
      </div>
    </>
  );
}
