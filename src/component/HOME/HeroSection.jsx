"use client"

import { useState, useEffect } from "react"
import basic from "../../../public/card/cardBasic.png"
import gold from "../../../public/card/cardGold.png"


export default function HeroSection() {
    const [activeCard, setActiveCard] = useState(0)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    // Auto-switch cards every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCard((prev) => (prev === 0 ? 1 : 0))
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    // Mouse parallax effect
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    const DentalCards = [
        {
            id: 0,
            image: basic
        },
        {
            id: 1,
            image: gold
        },
    ]

    return (
        <div className="  md:h-[550px] shadow-lg px-[20px] rounded-[20px] border-[#062f95]  bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900  border  2xl:w-[1330px] md:w-[84%] w-[95%]  mx-auto overflow-hidden relative">
            {/* Background subtle pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px)`,
                        backgroundSize: "50px 50px",
                    }}
                ></div>
            </div>

            <div className="relative z-10   mx-auto md:px-4 px-2 py-8  flex items-center">
                <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
                    {/* Left Side - Text Content */}
                    <div className="space-y-7 flex flex-col " >
                        {/* Badge */}
                        <div className="inline-flex w-fit items-center gap-2 backdrop-blur-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 border-[#062e95] rounded-full px-3 py-1">
                            <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                            <span className="text-green-300 font-medium text-[13px] tracking-wide">Dental care REVOLUTION</span>
                        </div>

                        {/* Main Heading */}
                        <div className="">
                            <h1 className=" text-[39px] md:text-7xl  text-[#fff] md:text-[38px] font-[700] leading-[45px] md:leading-[40px]">
                                The
                                future
                                of
                                <b className=" font-[700] text-[#fff] pl-[6px]">
                                    DENTAL CARE
                                </b>

                            </h1>
                        </div>

                        {/* Description */}
                        <div className="space-y-4 max-w-[500px]">
                            <p className="text-[15px] text-[#fff]   !font-[400] leading-tight">
                                Experience the next generation of Dental care with{" "}
                                <span className="text-[#fff] font-[500]">Gdc's innovative Dental </span>. We're transforming
                                how you access  .
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                    <span className="md:text-sm text-[12px] text-[#fff] ">Digital First</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    <span className="md:text-sm text-[12px] text-[#fff] ">Instant Access</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                    <span className="md:text-sm text-[12px] text-[#fff]  ">Secure</span>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 md:gap-8 gap-[10px] pt-6  border-dashed border-t border-[#ffffff]">
                            <div className="text-center border p-[10px] rounded-lg shadow-xl bg-white/10 backdrop-blur-md border-white/20">
                                <div className="md:text-3xl  text-[20px] font-bold  text-blue-500 md:mb-2">1M+</div>
                                <div className="text-white text-[13px] md:text-sm">Active Users</div>
                            </div>
                            <div className="text-center border p-[10px] rounded-lg shadow-xl bg-white/10 backdrop-blur-md border-white/20">
                                <div className="md:text-3xl  text-[20px] font-bold  text-green-500 md:mb-2">25+</div>
                                <div className="text-white text-[13px] md:text-sm">Years Experience</div>
                            </div>
                            <div className="text-center border p-[10px] rounded-lg shadow-xl bg-white/10 backdrop-blur-md border-white/20" >
                                <div className="md:text-3xl  text-[20px] font-bold  text-purple-500 md:mb-2">99.9%</div>
                                <div className="text-white text-[13px] md:text-sm">Uptime</div>
                            </div>
                        </div>

                        {/* Custom Buttons */}
                        <div className="flex flex-col pt-[20px] sm:flex-row gap-4">
                            <button className="group relative px-8 py-2  bg-[#062f95] rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                                <div className="absolute inset-0 bg-gradient-to-r group-hover:opacity-100 transition-opacity duration-300"></div>
                                <span className="relative z-10 text-[#fff]  text-[13px] flex items-center justify-center gap-2">
                                    DISCOVER FEATURES
                                    <svg
                                        className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </button>


                        </div>

                        {/* Trust Indicators */}
                        {/* <div className="flex items-center gap-6 pt-1">
                            <div className="flex items-center gap-2 text-gray-600 text-sm">
                                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>ISO Certified</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600 text-sm">
                                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>Bank-level Security</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600 text-sm">
                                <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>HIPAA Compliant</span>
                            </div>
                        </div> */}
                    </div>

                    {/* Right Side - Auto-Floating Dental Cards */}
                    {/* <div className="relative h-[300px] flex items-center justify-center">
                        {DentalCards.map((card, index) => (
                            <div
                                key={card.id}
                                className={`absolute md:w-80 md:h-52 transition-all duration-1000 ease-in-out ${activeCard === index ? "opacity-100 z-30 scale-110" : "opacity-40 z-10 scale-95"
                                    }`}
                                style={{
                                    transform: `
                    translate(
                      ${mousePosition.x * 0.02 + (activeCard === index ? 0 : index === 0 ? -40 : 40)}px, 
                      ${mousePosition.y * 0.02 + (activeCard === index ? -20 : index === 0 ? -60 : 60)}px
                    ) 
                    rotate(${activeCard === index ? 0 : index === 0 ? -8 : 8}deg)
                  `,
                                }}
                            >
                                <img className=" w-[300px] md:w-[460px] " src={card.image} />
                            </div>
                        ))}




                    </div> */}
                </div>
            </div>
        </div>
    )
}
