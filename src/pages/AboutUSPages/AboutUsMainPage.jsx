import React from 'react'
import AboutUs from '../../component/aboutUS/AboutUs'
import Header from '../../component/header/Header'
import IntroDuction from '../../component/aboutUS/IntroDuction'
import Madamintro from '../../component/aboutUS/Madamintro'
import image from '../../../public/aboutus/image.webp'; 
import Faq from '../../component/HOME/Faqs'
import Blog from '../../component/HOME/Blog'
import Testimonials from '../../component/HOME/Testimonials'
import Footer from '../../component/footer/Footer'
import { Heart, Shield,MessageCircle, Users, Eye, Target, Globe } from "lucide-react"

import { ArrowRight, Plus, FileText } from "lucide-react"
import aboutus1 from "../../../public/aboutus/about-img_1.jpg"
import aboutus2 from "../../../public/aboutus/about-img_2.jpg"
import Introthird from '../../component/aboutUS/introthird'
import MissonVission from '../../component/aboutUS/MissonVission'
import BottomBar from '../../component/bottombar/BottomBar'
import { motion } from "framer-motion"

export default function AboutUsMainPage() {
  return (
    <>
      <Header />
      <div className=" font-Poppins flex md:pt-[180px] pt-[100px]  gap-[90px] flex-col bg-[#ffffff57] w-[100%] h-[100%]">

        <section className=" md77px-4  mb-[40px] md11:px-8">
          <div className="  w-[90%] md:w-[85%] mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Images */}
              <div className="relative">
                {/* Main doctor image */}
                <div className="relative md11:w-[90%]    rounded-[20px]">
                  <img src={image} alt="Smiling male doctor in white coat with stethoscope giving thumbs up" className="w-[500px]  mx-auto h-[400px] rounded-[20px] rounded-b-[20px] object-cover" />
                </div>
                {/* Smaller doctor image - positioned as overlay */}
                <div className="absolute -bottom-8 md77:-left-8 w-48 h-48 rounded-[30px] overflow-hidden border-[10px] border-white shadow-lg">
                  <img src={aboutus2} alt="Female Dental care professional with glasses and stethoscope" width={200} height={200} className="w-[400px] h-
                   object-cover" />
                </div>
              </div>
              {/* Right side - Content */}
              <div className="space-y-4">
                {/* Subtitle */}
                {/* <p className="text-gray-500 text-sm font-medium tracking-wide uppercase">
                </p> */}

                <div className="flex bg-[#cfd8eb] border-[#062f95] border-1 w-fit px-4 py-1 text-[#062f95] rounded-full text-sm font-medium mb-4">
                 WELCOME TO GLOBAL DENTAL CARE
                </div>

                {/* Main heading */}
                <h1 className="text-4xl md:text-[40px] font-[700] !leading-[50px] text-[#062f95] ">
                 We make smiles beautiful
                </h1>
                {/* Feature items */}

                {/* Description text */}
                <p className="text-gray-600 leading-relaxed">
                 Experience the highest standards of dental healthcare with state-of-the-art technology, durable bio-friendly materials that focus on all preventive, painless, and cosmetic dental procedures in Rajkot at City Dental Hospital.At City Dental Hospital, the top Dental Hospital in Gujarat, we offer flexible timing, individual attention, affordability, accurate explanation of treatments, and excellent patient care. Here, we follow strict and stringent hygiene protocols.
                </p>

                <div className=" grid grid-cols-2 gap-6">
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-10  md:w-12  h-10 md:h-12 rounded-full flex items-center justify-center  border  border-[#062f95] transition-all duration-300
                        ? "border-[#062f95] text-[#ffffff] bg-gradient-to-br from-[#1b2644] to-blue-600 rotate-180"
                        : "  group-hover:text-[#062f95] text-[#062f95]"`}>
                      <Plus className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm mb-1">Professionals</p>
                      <h3 className=" text-sm md:text-xl font-semibold text-gray-900">Doctors</h3>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-10  md:w-12  h-10 md:h-12 rounded-full flex items-center justify-center  border  border-[#062f95] transition-all duration-300
                        ? "border-[#062f95] text-[#ffffff] bg-gradient-to-br from-[#1b2644] to-blue-600 rotate-180"
                        : "  group-hover:text-[#062f95] text-[#062f95]"`}>
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm mb-1">Using Modern</p>
                      <h3 className=" text-sm md:text-xl font-semibold text-gray-900">Equipments</h3>
                    </div>
                  </div>
                </div>
                {/* CTA Button */}
                <button className="bg-gradient-to-br from-[#1b2644] to-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-sm font-medium inline-flex items-center space-x-2">
                  <span>CONTACT WITH US</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>


        <MissonVission />
        <IntroDuction />

              <div className=" px-4 bg-gradient-to-b font-Poppins from-white to-slate-50">
                    <div className="max-w-7xl mx-auto">
                        {/* Vision Header */}
                        <div className="text-center mb-10">
                            <div className="inline-block">
                                <h2 className="text-4xl font-[600]  text-blue-800 mb-4 relative">
                                    Our Noble Vision
                                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-blue-600"></div>
                                </h2>
                            </div>
                            <p className="text-lg text-gray-700 mt-6 max-w-2xl mx-auto  leading-tight">
                                Our vision is to be the most trusted, innovative, and community-focused Dental care provider in India.
                            </p>
                        </div>

                        {/* Vision Cards */}
                        <div className="grid md:grid-cols-3 gap-8 mb-[30px] max-w-6xl mx-auto">
                            {/* Trust and Preference */}
                            <div className="group">
                          <div className="bg-white h-[240px] rounded-[10px] border-blue-200 border-[1.4px] shadow-lg hover:shadow-xl transition-all duration-300 p-5 text-center relative overflow-hidden">
                                    {/* <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-blue-400"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-blue-400"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-blue-400"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-blue-400"></div> */}

                                    <div className="mb-5">
                                        <div className="w-14 h-14 mx-auto bg-gradient-to-tr  from-blue-600 via-blue-900 to-slate-600 rounded-[8px] flex items-center justify-center  border-blue-200 group-hover:bg-blue-800 transition-colors duration-300">
                                            <Eye className="w-6 h-6 text-white" />
                                        </div>
                                    </div>

                                    <h3 className="text-[18px]  font-bold text-blue-800 mb-4 tracking-wide">Trust and Preference</h3>
                                    {/* <div className="w-12 h-px bg-blue-400 mx-auto mb-4"></div> */}
                                    <p className="text-gray-600 leading-relaxed ">
                                        Becoming the most trusted and preferred Dental care provider in India.
                                    </p>
                                </div>
                            </div>

                            {/* Personalized and Expert Care */}
                            <div className="group">
                          <div className="bg-white h-[240px] rounded-[10px] border-blue-200 border-[1.4px] shadow-lg hover:shadow-xl transition-all duration-300 p-5 text-center relative overflow-hidden">
                                    {/* <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-blue-400"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-blue-400"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-blue-400"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-blue-400"></div> */}

                                    <div className="mb-5">
                                        <div className="w-14 h-14 mx-auto bg-gradient-to-tr  from-blue-600 via-blue-900 to-slate-600 rounded-[8px] flex items-center justify-center  border-blue-200 group-hover:bg-blue-800 transition-colors duration-300">
                                            <Target className="w-6 h-6 text-white" />
                                        </div>
                                    </div>

                                    <h3 className="text-[18px]  font-bold text-blue-800 mb-4 tracking-wide">
                                        Personalized and Expert Care
                                    </h3>
                                    {/* <div className="w-12 h-px bg-blue-400 mx-auto mb-4"></div> */}
                                    <p className="text-gray-600 leading-relaxed ">
                                        Offering a unique blend of personalized attention and specialist expertise.
                                    </p>
                                </div>
                            </div>

                            {/* Community Empowerment */}
                            <div className="group">
                          <div className="bg-white h-[240px] rounded-[10px] border-blue-200 border-[1.4px] shadow-lg hover:shadow-xl transition-all duration-300 p-5 text-center relative overflow-hidden">
                                    {/* <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-blue-400"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-blue-400"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-blue-400"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-blue-400"></div> */}

                                    <div className="mb-5">
                                        <div className="w-14 h-14 mx-auto bg-gradient-to-tr  from-blue-600 via-blue-900 to-slate-600 rounded-[8px] flex items-center justify-center  border-blue-200 group-hover:bg-blue-800 transition-colors duration-300">
                                            <Globe className="w-6 h-6 text-white" />
                                        </div>
                                    </div>

                                    <h3 className="text-[18px]  font-bold text-blue-800 mb-4 tracking-wide">Community Empowerment</h3>
                                    {/* <div className="w-12 h-px bg-blue-400 mx-auto mb-4"></div> */}
                                    <p className="text-gray-600 leading-relaxed ">
                                        Empowering communities to live healthier, happier lives through cost-effective Dental care solutions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Vision Decorative Element */}
                        {/* <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-2">
              <div className="w-8 h-px bg-blue-400"></div>
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <div className="w-16 h-px bg-blue-400"></div>
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <div className="w-8 h-px bg-blue-400"></div>
            </div>
          </div> */}
                    </div>
                </div>
        <Madamintro />

        <div className=' flex flex-col gap-[50px]'>

          
          <Faq />
        </div>


        
        <Blog />

      </div>
       <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-[50px] text-center font-Poppins w-[90%] md11:w-[66%] mx-auto"
        >
          <div className="bg-gradient-to-r from-teal-50 to-indigo-50 rounded-2xl border border-teal-100 p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              Our support team is here to help you with any additional questions about the consultation process.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-900 to-indigo-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Contact Support</span>
            </motion.button>
          </div>
        </motion.div>
      <Footer />
      <BottomBar />
    </>
  )
}
