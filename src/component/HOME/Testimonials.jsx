import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import test1 from '../../../public/testimonials/img3.jpeg';
import test2 from '../../../public/testimonials/boy1.jpg';
import test3 from '../../../public/testimonials/girl1.jpeg';
import test4 from '../../../public/testimonials/boy2.jpg';
// import logo from "../../../public/logo-black.avif"

export default function Testimonials() {
    const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Chief Executive Officer",
      company: "TechFlow Solutions Inc.",
      image:test1,
      text: "The professionalism and expertise demonstrated throughout our partnership has been exemplary. Their strategic approach and attention to detail have significantly enhanced our operational efficiency and market position.",
      location: "San Francisco, CA",
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Vice President of Operations",
      company: "Global Dynamics Corporation",
      image:test3,
      text: "We have experienced remarkable improvements in our business processes since implementing their solutions. The level of service and commitment to excellence consistently exceeds industry standards.",
      location: "New York, NY",
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Director of Innovation",
      company: "Future Systems Ltd.",
      image: test2,
      text: "Their comprehensive approach to problem-solving and innovative methodologies have transformed our organizational capabilities. The return on investment has been substantial and measurable.",
      location: "London, UK",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Senior Strategy Consultant",
      company: "Apex Advisory Group",
      image: test4,
      text: "The quality of deliverables and professional standards maintained throughout our engagement have been outstanding. Their expertise has been instrumental in achieving our strategic objectives.",
      location: "Toronto, CA",
    },
  ]

    const controls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      while (true) {
        await controls.start({
          x: '-50%',
          transition: { duration: 15, ease: "linear" },
        });
        controls.set({ x: 0 }); // reset position
      }
    };
    animate();
  }, [controls]);

  return (
    <div className=" px-4">
      <div className="w-[100%] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-7">
                 {/* <h3 className="text-[#062f95] border font-[600] px-[10px] bg-[#062f95]/10  rounded-full  py-[2px] border-[#062f95] w-fit uppercase tracking-widest text-[14px] mx-auto mb-2">TESTIMONIALS</h3> */}
          <h1 className="text-4xl md:text-[40px] font-[600] text-gray-900 mb-3">
            What Our Clients Say About
            <span className="text-[#062f95] ml-2">Gdc Dental care</span>
          </h1>
   
          <p className="text-[14px] text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by industry leaders worldwide, our commitment to excellence is reflected in the testimonials from
            our valued clients and partners.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="flex gap-[24px]   overflow-x-auto mb-2">
   <motion.div
          className="flex gap-6 w-max"
          animate={controls}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border mb-[20px] shadow-lg h-[230px] w-[400px] flex flex-col shrink-0 p-5 hover:shadow-md border-[#062f95] transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-2">
                <svg className="w-4 h-4 text-[#062f95]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>
              <blockquote className="text-gray-700 text-[13px] leading-[20px] mb-3 font-[400]">
                {testimonial.text}
              </blockquote>
              <div className="flex mt-[15px] items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#062f95] mr-4"
                />
                <div className="flex-grow">
                  <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                  <div className="text-[#062f95] text-[12px] font-medium">{testimonial.role}</div>
                </div>
                {/* Stars */}
                <div className="flex-shrink-0 ml-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 mt-1 text-center">5.0</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        </div>

      </div>
    </div>
  )
}
