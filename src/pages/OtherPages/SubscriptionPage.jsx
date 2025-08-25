import React from 'react'
import Footer from '../../component/footer/Footer'
import Header from '../../component/header/Header'
import card1 from "../../../public/card/cardbasic.png"
import card2 from "../../../public/card/cardGold.png"
import { useNavigate } from 'react-router-dom'


export default function SubscriptionPage() {
  const navigate = useNavigate()

  const handleDetails = () => {
    navigate("/subcriptions-details")
  }
  return (
    <>
      <Header />
      <div className=" pb-20 pt-[180px]  font-Poppins px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-yellow-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl font-[600] text-[#062f95] mb-6 tracking-tight">
              Choose Your               Health Journey
              <span className=" text-[#062f95]">

              </span>
            </h1>
            <p className="text-l text-slate-900 max-w-2xl mx-auto leading-tight">
              Two powerful plans designed to transform your Dental care experience
            </p>
          </div>

          {/* Cards Container */}
          <div className="relative mx-auto max-w-[880px]">
            {/* Connection Line */}

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-8">
              {/* Essential Card */}
              <div className="group cursor-pointer" onClick={handleDetails}>
                <div className="relative">
                  {/* Card Shadow Layers */}
                  {/* <div className="absolute inset-0 bg-black/20 rounded-[19px] border-[1.2px] transform rotate-3 group-hover:rotate-6 transition-all duration-500 blur-sm"></div>
                <div className="absolute inset-0 bg-black/10 rounded-[19px] border-[1.2px] transform -rotate-1 group-hover:-rotate-3 transition-all duration-500 blur-sm"></div> */}

                  {/* Main Card Container */}
                  <div className="relative bg-white rounded-[19px] border-[1.2px] p-6 transform  transition-all duration-500 shadow-2xl group-hover:shadow-blue-500/25">
                    {/* Card Image Container */}
                    <div className="relative mb-5">
                      <div className="w-full">
                        {/* Placeholder for card image */}
                        <img
                          src={card1}
                          alt="Essential Health Card"
                          className="w-full h-[200px]"
                        />

                      </div>

                      {/* Card Type Badge */}
                      <div className="absolute -top-9 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-[10px] font-[600] shadow-lg">
                        ESSENTIAL
                      </div>
                    </div>

                    {/* Plan Details */}
                    <div className="text-center mb-5">
                      <h2 className="text-[17px] font-[700] text-gray-800 mb-">Essential Dental Care</h2>
                      <p className="text-gray-600  text-[13px] mb-4">Perfect for individuals</p>

                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {[
                        "Unlimited GP Consultations",
                        "6 Specialist Consultations FREE",
                        "Pharmacy - Up to 15% OFF",
                        "Lab Tests - Up to 25% OFF",
                        "FREE Nutritionist Consultation",
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center group/item">
                          <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3 group-hover/item:bg-blue-200 transition-colors">
                            <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-[13px] font-[500] group-hover/item:text-gray-900 transition-colors">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-[600] py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform  shadow-lg">
                      Active now just at   :-  ₹ XXX
                    </button>


                  </div>
                </div>
              </div>

              {/* Comprehensive Card */}
              <div className="group cursor-pointer" onClick={() => onCardClick("comprehensive")}>
                <div className="relative">
                  {/* Card Shadow Layers */}
                  {/* <div className="absolute inset-0 bg-black/20 rounded-[19px] border-[1.2px] transform -rotate-3 group-hover:-rotate-6 transition-all duration-500 blur-sm"></div>
                <div className="absolute inset-0 bg-black/10 rounded-[19px] border-[1.2px] transform rotate-1 group-hover:rotate-3 transition-all duration-500 blur-sm"></div> */}

                  {/* Main Card Container */}
                  <div className="relative bg-white rounded-[19px] border-[1.2px] p-6 transform  transition-all duration-500 shadow-2xl group-hover:shadow-yellow-500/25 ">
                    {/* Premium Badge */}
                    {/* <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-2xl font-[600] text-sm transform rotate-12 group-hover:rotate-6 transition-all duration-500 shadow-lg z-20">
                    PREMIUM
                  </div> */}

                    {/* Card Image Container */}
                    <div className="relative mb-6">
                      <div className="w-full ">
                        {/* Placeholder for card image */}
                        <div className="w-full">
                          {/* Placeholder for card image */}
                          <img
                            src={card2}
                            alt="Essential Health Card"
                            className="w-full h-[200px]"
                          />

                        </div>
                      </div>

                      {/* Card Type Badge */}
                      <div className="absolute -top-9 left-4 bg-yellow-600 text-white px-4 py-1 rounded-full text-[10px] font-[600] shadow-lg">
                        COMPREHENSIVE
                      </div>
                    </div>

          


                      <div className="text-center mb-4">
                        <h2 className="text-[17px] font-[700] text-gray-800 mb-">Comprehensive Dental Care</h2>
                        <p className="text-gray-600 mb-4">Ideal for families</p>

                        {/* Price Display */}

                      </div>
         
                    

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {[
                        "Everything in Essential +",
                        "Family Coverage (4 members)",
                        "Priority Booking",
                        "Annual Health Check-up",
                        "24/7 Telemedicine Support",
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center group/item">
                          <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center mr-3 group-hover/item:bg-yellow-200 transition-colors">
                            <svg className="w-3 h-3 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-[13px] font-[500] group-hover/item:text-gray-900 text-[] transition-colors">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-700 text-white font-[600] py-3 px-6 rounded-lg hover:from-yellow-700 hover:to-yellow-800 transition-all duration-300 transform  shadow-lg">
                      Active now just at   :-  ₹ XXX
                    </button>


                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="text-center mt-20">
            <p className="text-slate-400 text-lg">Click on any card to explore detailed benefits and features</p>
          </div>
        </div>
      </div>

      <Footer />

    </>
  )
}
