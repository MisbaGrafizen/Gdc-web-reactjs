import React from 'react'

import dentalImplant from "../../../public/servicePhoto/dentalimplant.avif"
import crown from "../../../public/servicePhoto/crown.avif"
import braceTreatment from "../../../public/servicePhoto/bracetreatment.avif"
import dentistry from "../../../public/servicePhoto/dentstriy.avif"
import fullMouth from "../../../public/servicePhoto/fullmouth.avif"
import invisible from "../../../public/servicePhoto/invisibleAlign.avif"
import whileMakeOver from "../../../public/servicePhoto/fullmouth.avif"
import teeth from "../../../public/servicePhoto/teeth.avif"
import wisdomTooth from "../../../public/servicePhoto/wisdomTooth.avif"







export default function ServiceCom() {

  const services = [
    {
      id: 1,
      title: "Dental Implants",
      description: "Permanent tooth replacement with titanium implants that look and feel completely natural.",
      image: dentalImplant,
      color: "from-blue-900 to-blue-900",
      stats: "95% Success Rate",
    },
    {
      id: 2,
      title: "Invisible Aligners",
      description: "Clear, removable aligners that straighten teeth discreetly without metal braces.",
      image: invisible,
      color: "from-cyan-500 to-blue-900",
      stats: "12-18 Months",
    },
    {
      id: 3,
      title: "Crowns & Bridges",
      description: "Custom-made restorations that restore damaged teeth to full function and beauty.",
      image: crown,
      color: "from-blue-900 to-cyan-600",
      stats: "15+ Years Lasting",
    },
    {
      id: 4,
      title: "Teeth Whitening",
      description: "Professional whitening treatments for a brighter, more confident smile.",
      image: teeth,
      color: "from-cyan-400 to-blue-900",
      stats: "8 Shades Whiter",
    },
    {
      id: 5,
      title: "Pediatric Dentistry",
      description: "Gentle, specialized dental care designed specifically for children and teens.",
      image: dentistry,
      color: "from-teal-400 to-cyan-500",
      stats: "Kid-Friendly Care",
    },
    {
      id: 6,
      title: "Braces Treatment",
      description: "Traditional and modern braces options for comprehensive teeth straightening.",
      image: braceTreatment ,
      color: "from-cyan-600 to-blue-900",
      stats: "All Ages Welcome",
    },
  ]


    return (
        <>


      <div className=" w-[83%] mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <h1 className="text-6xl md:text-[40px] font-[700] text-gray-900 mb-">
              Dental <span className="text-blue-900">Services</span>
            </h1>
      
          </div>

          <p className="text-[15px] text-gray-600 max-w-2xl mx-auto mt-2">
            Explore our dental services and patient transformations at
            <span className="text-blue-900 font-semibold"> Citysmile Dental and Aesthetic Clinic</span>
          </p>
        </div>

        {/* Creative Box Layout */}
        <div className="relative">
          {/* Background Decorative Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-teal-100 rounded-lg transform rotate-12 opacity-60"></div>
          <div className="absolute top-32 right-16 w-16 h-16 bg-cyan-100 rounded-2xl transform -rotate-12 opacity-60"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-teal-200 rounded-full opacity-60"></div>
          <div className="absolute bottom-40 right-10 w-24 h-24 bg-cyan-50 rounded-lg transform rotate-45 opacity-60"></div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`group relative overflow-hidden rounded-lg transform transition-all duration-500  
                  
                `}
            
              >
                {/* Main Card */}
                <div className="bg-white rounded-lg min-h-[300px]  border-1  border-blue-900 transition-all duration-300 overflow-hidden">
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Image Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                    ></div>

                    {/* Stats Badge on Image */}
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-blue-900 px-3 py-1 rounded-full text-xs font-semibold">
                      {service.stats}
                    </div>

                    {/* Floating Elements on Image */}
                    <div className="absolute top-4 right-4 w-4 h-4 bg-white/30 rounded-full"></div>
                    <div className="absolute top-8 right-8 w-3 h-3 bg-white/20 rounded-full"></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-3 space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
                    </div>

                    {/* Interactive Elements */}
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                        <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-teal-200 rounded-full"></div>
                      </div>

                      <button className="bg-gray-900 hover:bg-blue-900 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform group-hover:scale-110">
                        Learn More
                      </button>
                    </div>
                  </div>

                  {/* Bottom Accent Strip */}
                  <div className={`h-[4px] bg-gradient-to-r ${service.color}`}></div>
                </div>

                {/* Floating Number Badge */}
                <div className="absolute -top-3 -left-3 w-12 h-12 bg-blue-900 text-white rounded-2xl flex items-center justify-center font-bold text-lg shadow-lg transform group-hover:scale-110 transition-transform">
        <img  className="  w-[30px]" src={logo} />
                </div>

                {/* Side Accent */}
                <div
                  className={`absolute top-8 -right-2 w-6 h-16 bg-gradient-to-b ${service.color} rounded-l-full opacity-80 transform group-hover:scale-y-125 transition-transform origin-center`}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-24 mb-[50px] relative">
          <div className="bg-gradient-to-r from-blue-900 via-blue-900 to-blue-900 rounded-lg p-8 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white rounded-lg transform rotate-12"></div>
              <div className="absolute top-8 right-8 w-12 h-12 border-2 border-white rounded-2xl transform -rotate-12"></div>
              <div className="absolute bottom-4 left-1/3 w-8 h-8 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-8 right-1/4 w-20 h-20 border-2 border-white rounded-lg transform rotate-45"></div>
            </div>

            <div className="relative  z-10 text-center space-y-3">
              <h2 className="text-4xl lg:text-4xl font-bold">Ready to Transform Your Smile?</h2>
              <p className="text-sm text-teal-100 max-w-2xl pb-[30px] mx-auto">
                Book your consultation today and discover how our expert dental care can give you the confident smile
                you deserve.
              </p>

       

              {/* Stats */}
              <div className="grid md:grid-cols-4 gap-8 pt-3  border-t border-teal-400">
                <div className="text-center">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-teal-100">Happy Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">12+</div>
                  <div className="text-teal-100">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">6</div>
                  <div className="text-teal-100">Specialized Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">99%</div>
                  <div className="text-teal-100">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


        </>
    )
}
