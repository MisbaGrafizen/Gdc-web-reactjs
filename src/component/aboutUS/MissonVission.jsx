import React from 'react'
import { Heart, Shield, Users, Eye, Target, Globe } from "lucide-react"

export default function MissonVission() {
    return (
        <>


            <div className="bg-gradient-to-b from-slate-50 to-white">
                {/* Mission Section */}
                <div className="md:pb-12 px-4">
                    <div className=" md:w-[85%] w-[95%] mx-auto">
                        {/* Mission Header */}
                        <div className="text-center mb-10">
                            <div className="inline-block">
                                <h2 className="text-4xl font-[600]  text-blue-800 mb-4 relative">
                                    Our Sacred Mission
                                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-blue-600"></div>
                                </h2>
                            </div>
                            <p className="text-[16px] text-gray-700 mt- max-w-2xl mx-auto  leading-tight">
                                Our mission is to provide exceptional Dental care services with compassion and unwavering dedication.
                            </p>
                        </div>

                        {/* Mission Cards */}
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* Accessibility and Quality */}
                            <div className="group">
                                <div className="bg-white h-[270px] rounded-[10px] border-blue-200 border-[1.4px] shadow-lg hover:shadow-xl transition-all duration-300 p-5 text-center relative overflow-hidden">
                                    {/* Decorative corners */}
                                    {/* <div className="absolute top-[0px]  z-[10] left-0 w-6 h-6 border-l-2 rounded-tl-[9px] border-t-2 border-blue-400"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-r-2   rounded-tr-[9px] border-t-2 border-blue-400"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-blue-400"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-blue-400"></div> */}

                                    <div className="mb-6">
                                        <div className="w-14 h-14 mx-auto bg-gradient-to-tr  from-blue-600 via-blue-900 to-slate-600 rounded-[8px] flex items-center justify-center  border-blue-200 group-hover:bg-blue-800 transition-colors duration-300">
                                            <Shield className="w-6 h-6 text-white" />
                                        </div>
                                    </div>

                                    <h3 className="text-xl  font-bold text-blue-800 mb-4 tracking-wide">
                                        Accessibility and Quality
                                    </h3>
                                    {/* <div className="w-12 h-px bg-blue-400 mx-auto mb-4"></div> */}
                                    <p className="text-gray-600 leading-relaxed ">
                                        Providing high-quality Dental care that is easily accessible to everyone.
                                    </p>
                                </div>
                            </div>

                            {/* Specialist Expertise */}
                            <div className="group">
                                <div className="bg-white h-[270px] rounded-[10px] border-blue-200 border-[1.4px] shadow-lg hover:shadow-xl transition-all duration-300 p-5 text-center relative overflow-hidden">
                                    {/* <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-blue-400"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-blue-400"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-blue-400"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-blue-400"></div> */}

                                    <div className="mb-6">
                                       <div className="w-14 h-14 mx-auto bg-gradient-to-tr  from-blue-600 via-blue-900 to-slate-600 rounded-[8px] flex items-center justify-center  border-blue-200 group-hover:bg-blue-800 transition-colors duration-300">
                                            <Heart className="w-6 h-6 text-white" />
                                        </div>
                                    </div>

                                    <h3 className="text-xl  font-bold text-blue-800 mb-4 tracking-wide">Specialist Expertise</h3>
                                    {/* <div className="w-12 h-px bg-blue-400 mx-auto mb-4"></div> */}
                                    <p className="text-gray-600 leading-relaxed ">
                                        Combining the skills of top-tier doctors with convenient, community-based care.
                                    </p>
                                </div>
                            </div>

                            {/* Affordability */}
                            <div className="group">
                                <div className="bg-white h-[270px] rounded-[10px] border-blue-200 border-[1.4px] shadow-lg hover:shadow-xl transition-all duration-300 p-5 text-center relative overflow-hidden">
                                    {/* <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-blue-400"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-blue-400"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-blue-400"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-blue-400"></div> */}

                                    <div className="mb-6">
                                        <div className="w-14 h-14 mx-auto bg-gradient-to-tr  from-blue-600 via-blue-900 to-slate-600 rounded-[8px] flex items-center justify-center  border-blue-200 group-hover:bg-blue-800 transition-colors duration-300">
                                            <Users className="w-6 h-6 text-white" />
                                        </div>
                                    </div>

                                    <h3 className="text-xl  font-bold text-blue-800 mb-4 tracking-wide">Affordability</h3>
                                    {/* <div className="w-12 h-px bg-blue-400 mx-auto mb-4"></div> */}
                                    <p className="text-gray-600 leading-relaxed ">
                                        Ensuring premium Dental care services are available at affordable prices.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Mission Decorative Element */}
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

              
          
            </div>
        </>
    )
}
