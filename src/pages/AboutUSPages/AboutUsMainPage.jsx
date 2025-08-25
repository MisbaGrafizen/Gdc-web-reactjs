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

import { ArrowRight, Plus, FileText } from "lucide-react"
import aboutus1 from "../../../public/aboutus/about-img_1.jpg"
import aboutus2 from "../../../public/aboutus/about-img_2.jpg"
import Introthird from '../../component/aboutUS/introthird'
import MissonVission from '../../component/aboutUS/MissonVission'
import BottomBar from '../../component/bottombar/BottomBar'

export default function AboutUsMainPage() {
  return (
    <>
      <Header />
      <div className=" font-Poppins flex md:pt-[180px] pt-[100px]  gap-[90px] flex-col bg-[#ffffff57] w-[100%] h-[100%]">

        <section className=" px-4 mb-[40px] md:px-8">
          <div className="  w-[90%] md:w-[85%] mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Images */}
              <div className="relative">
                {/* Main doctor image */}
                <div className="relative md:w-[90%] shadow-xl rounded-[20px]">
                  <img src={image} alt="Smiling male doctor in white coat with stethoscope giving thumbs up" className="w-full h-auto rounded-[20px] rounded-b-[20px] object-cover" />
                </div>
                {/* Smaller doctor image - positioned as overlay */}
                <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-[30px] overflow-hidden border-[10px] border-white shadow-lg">
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
        <Madamintro />

        <div className=' flex flex-col gap-[50px]'>

          
          <Faq />
        </div>


        
        <Blog />

      </div>
      <Footer />
      <BottomBar />
    </>
  )
}
