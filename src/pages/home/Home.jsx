
import { useState, React } from "react";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";




import Faq from "../../component/HOME/Faqs";
import Testimonials from "../../component/HOME/Testimonials";
import Blog from "../../component/HOME/Blog";
import AboutUs from "../../component/HOME/AboutUs";
import MainServices from "../../component/HOME/MainServices";
import WhyChooseUs from "../../component/HOME/WhyChooseUs";
import ProfileCard from "../../component/reactBits/ProfileCardComponent";
import CoFounders from "../../component/HOME/CoFounders";
import Banner from "../../component/HOME/Banner";
import HeroSection from "../../component/HOME/HeroSection";
import BottomBar from "../../component/bottombar/BottomBar";
import Hero from "../../newMainFolder/components/Hero";
import { motion } from "framer-motion"
import { Shield, Star,MessageCircle, Users, ArrowDown } from "lucide-react"


export default function Home() {

  const scrollToConsultation = () => {
    document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" })
  }

  const trustBadges = [
    { icon: Shield, text: "Encrypted Uploads", color: "text-green-600" },
    { icon: Star, text: "4.9/5 Reviews", color: "text-yellow-500" },
    { icon: Users, text: "1000+ Patients", color: "text-blue-600" },
  ]


  return (
    <>
      {/* <Header /> */}
      <Header />
      <div className=" font-Poppins flex pt-[90px] gap-[100px] md:pt-[140px] flex-col bg-[#ffffff57] w-[100%] h-[100%]">
        <HeroSection />
        <div className=" flex flex-col gap-[70px]">

<section className=" pb-[10px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Global Online{" "}
            <span className=" bg-gradient-to-br from-[#1b2644] to-blue-600 bg-clip-text text-transparent">
              Dental Consultation
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Expert guidance from Dr. Hiba and Dr. Anand Jasani—anywhere in the world.
          </motion.p>

          <motion.button
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToConsultation}
            className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-br from-[#1b2644] to-blue-600  text-white rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <span>Start Consultation</span>
            <ArrowDown className="w-5 h-5" />
          </motion.button>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-8 mt-12"
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-2xl border border-white/20"
              >
                <badge.icon className={`w-5 h-5 ${badge.color}`} />
                <span className="text-gray-700 font-medium">{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>


        <AboutUs />

        <Banner />
        <MainServices />
                </div>
        <WhyChooseUs />
       
        <div className=" flex flex-col gap-[80px]">
          <div className=" flex flex-col gap-[90px]">
            <Faq />

            
          </div>
          <Blog />
        </div>
       

      </div>
       <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-[50px] text-center font-Poppins w-[66%] mx-auto"
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
  );
}
