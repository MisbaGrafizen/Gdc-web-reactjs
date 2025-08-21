import React from 'react'
import { Heart, Shield, Users, Eye, Target, Globe } from "lucide-react"

export default function MissonVission() {
    return (
        <>


            <div className="bg-gradient-to-b from-slate-50 to-white">
                {/* Mission Section */}
                <div className="md:py-12 px-4">
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
                                <div className="bg-white h-[300px] rounded-[10px] border-[1.4px] shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center relative overflow-hidden">
                                    {/* Decorative corners */}
                                    {/* <div className="absolute top-[0px]  z-[10] left-0 w-6 h-6 border-l-2 rounded-tl-[9px] border-t-2 border-blue-400"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-r-2   rounded-tr-[9px] border-t-2 border-blue-400"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-blue-400"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-blue-400"></div> */}

                                    <div className="mb-6">
                                        <div className="w-16 h-16 mx-auto bg-blue-700 rounded-full flex items-center justify-center border-4 border-blue-200 group-hover:bg-blue-800 transition-colors duration-300">
                                            <Shield className="w-8 h-8 text-white" />
                                        </div>
                                    </div>

                                    <h3 className="text-xl  font-bold text-blue-800 mb-4 tracking-wide">
                                        Accessibility and Quality
                                    </h3>
                                    <div className="w-12 h-px bg-blue-400 mx-auto mb-4"></div>
                                    <p className="text-gray-600 leading-relaxed ">
                                        Providing high-quality Dental care that is easily accessible to everyone.
                                    </p>
                                </div>
                            </div>

                            {/* Specialist Expertise */}
                            <div className="group">
                                <div className="bg-white h-[300px] rounded-[10px] border-[1.4px] shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center relative overflow-hidden">
                                    {/* <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-blue-400"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-blue-400"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-blue-400"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-blue-400"></div> */}

                                    <div className="mb-6">
                                        <div className="w-16 h-16 mx-auto bg-blue-700 rounded-full flex items-center justify-center border-4 border-blue-200 group-hover:bg-blue-800 transition-colors duration-300">
                                            <Heart className="w-8 h-8 text-white" />
                                        </div>
                                    </div>

                                    <h3 className="text-xl  font-bold text-blue-800 mb-4 tracking-wide">Specialist Expertise</h3>
                                    <div className="w-12 h-px bg-blue-400 mx-auto mb-4"></div>
                                    <p className="text-gray-600 leading-relaxed ">
                                        Combining the skills of top-tier doctors with convenient, community-based care.
                                    </p>
                                </div>
                            </div>

                            {/* Affordability */}
                            <div className="group">
                                <div className="bg-white h-[300px] rounded-[10px] border-[1.4px] shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center relative overflow-hidden">
                                    {/* <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-blue-400"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-blue-400"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-blue-400"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-blue-400"></div> */}

                                    <div className="mb-6">
                                        <div className="w-16 h-16 mx-auto bg-blue-700 rounded-full flex items-center justify-center border-4 border-blue-200 group-hover:bg-blue-800 transition-colors duration-300">
                                            <Users className="w-8 h-8 text-white" />
                                        </div>
                                    </div>

                                    <h3 className="text-xl  font-bold text-blue-800 mb-4 tracking-wide">Affordability</h3>
                                    <div className="w-12 h-px bg-blue-400 mx-auto mb-4"></div>
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

                {/* Vision Section */}
                <div className="py-10 px-4 bg-gradient-to-b font-Poppins from-white to-slate-50">
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
                        <div className="grid md:grid-cols-3 gap-8 mb-[70px] max-w-6xl mx-auto">
                            {/* Trust and Preference */}
                            <div className="group">
                                <div className="bg-white h-[300px] rounded-[10px] border-[1.4px] shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center relative overflow-hidden">
                                    {/* <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-blue-400"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-blue-400"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-blue-400"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-blue-400"></div> */}

                                    <div className="mb-6">
                                        <div className="w-16 h-16 mx-auto bg-blue-700 rounded-full flex items-center justify-center border-4 border-blue-200 group-hover:bg-blue-800 transition-colors duration-300">
                                            <Eye className="w-8 h-8 text-white" />
                                        </div>
                                    </div>

                                    <h3 className="text-[18px]  font-bold text-blue-800 mb-4 tracking-wide">Trust and Preference</h3>
                                    <div className="w-12 h-px bg-blue-400 mx-auto mb-4"></div>
                                    <p className="text-gray-600 leading-relaxed ">
                                        Becoming the most trusted and preferred Dental care provider in India.
                                    </p>
                                </div>
                            </div>

                            {/* Personalized and Expert Care */}
                            <div className="group">
                                <div className="bg-white h-[300px] rounded-[10px] border-[1.4px] shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center relative overflow-hidden">
                                    {/* <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-blue-400"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-blue-400"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-blue-400"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-blue-400"></div> */}

                                    <div className="mb-6">
                                        <div className="w-16 h-16 mx-auto bg-blue-700 rounded-full flex items-center justify-center border-4 border-blue-200 group-hover:bg-blue-800 transition-colors duration-300">
                                            <Target className="w-8 h-8 text-white" />
                                        </div>
                                    </div>

                                    <h3 className="text-[18px]  font-bold text-blue-800 mb-4 tracking-wide">
                                        Personalized and Expert Care
                                    </h3>
                                    <div className="w-12 h-px bg-blue-400 mx-auto mb-4"></div>
                                    <p className="text-gray-600 leading-relaxed ">
                                        Offering a unique blend of personalized attention and specialist expertise.
                                    </p>
                                </div>
                            </div>

                            {/* Community Empowerment */}
                            <div className="group">
                                <div className="bg-white h-[300px] rounded-[10px] border-[1.4px] shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center relative overflow-hidden">
                                    {/* <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-blue-400"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-blue-400"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-blue-400"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-blue-400"></div> */}

                                    <div className="mb-6">
                                        <div className="w-16 h-16 mx-auto bg-blue-700 rounded-full flex items-center justify-center border-4 border-blue-200 group-hover:bg-blue-800 transition-colors duration-300">
                                            <Globe className="w-8 h-8 text-white" />
                                        </div>
                                    </div>

                                    <h3 className="text-[18px]  font-bold text-blue-800 mb-4 tracking-wide">Community Empowerment</h3>
                                    <div className="w-12 h-px bg-blue-400 mx-auto mb-4"></div>
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
            </div>
        </>
    )
}
