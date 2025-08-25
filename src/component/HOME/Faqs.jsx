// import React, { useEffect, useState } from "react"

// // import first from "../../../public/Blogs/blog2.jpg"
// // import seconds from "../../../public/Blogs/blog3.jpg"
// // import third from "../../../public/Blogs/blog4.jpg"
// // import four from "../../../public/Blogs/blog5.jpg"



// import { motion, AnimatePresence } from "framer-motion";


// export default function Faq() {
//     const [openIndex, setOpenIndex] = useState(null); // State to track which accordion is open


//     //   const handleNext = () => {
//     //     setImages((prevImages) => {
//     //       const [first, ...rest] = prevImages;
//     //       return [...rest, first];
//     //     });
//     //   };

//     //   const handlePrev = () => {
//     //     setImages((prevImages) => {
//     //       const last = prevImages[prevImages.length - 1];
//     //       const rest = prevImages.slice(0, prevImages.length - 1);
//     //       return [last, ...rest];
//     //     });
//     //   };

//     //   useEffect(() => {
//     //     const interval = setInterval(() => {
//     //       setImages((prevImages) => {
//     //         const [first, ...rest] = prevImages;
//     //         return [...rest, first];
//     //       });
//     //     }, 3000); // Change image every 3 seconds

//     //     return () => clearInterval(interval); // Cleanup interval on unmount
//     //   }, []);


// const faqData = [
//   {
//     id: 1,
//     title: "What products does Chhapia Associates offer?",
//     content:
//       "Chhapia Associates offers a diverse range of products, including edible oils, packaged foods, spices, and advanced vacuum packaging machinery through its engineering division.",
//   },
//   {
//     id: 2,
//     title: "Are your machines customizable for different industries?",
//     content:
//       "Yes, our engineering team provides tailored automation and vacuum systems suited for food, pharma, and other industrial applications.",
//   },
//   {
//     id: 3,
//     title: "Do you provide after-sales service and technical support?",
//     content:
//       "Absolutely. We offer full after-sales support including installation, training, periodic maintenance, and spare parts availability.",
//   },
//   {
//     id: 4,
//     title: "Which sectors does Chhapia Associates operate in?",
//     content:
//       "We operate across food manufacturing, machinery automation, and luxury hospitality through our Basalt Paradise resort chain.",
//   },
//   {
//     id: 5,
//     title: "Where can I buy Chhapia Associates’ food products?",
//     content:
//       "Our products are available through major retail chains, online marketplaces, and select distributors across India.",
//   },
// ];




//     const toggleAccordion = (index) => {
//         setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
//     };

//     const toggleAccordion1 = (index) => {
//         setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
//     };

//     return (
//         <>
//             <div className="flex font-Poppins  relative  pt-[0px] 2xl:w-[1370px]  w-[100%] md:w-[86%] mx-auto ">
//                 <div className="flex flex-col gap-[20px] w-[100%]">

//                     <div>
//                         <h3 className="text-[#083d5c] border font-[600] px-[10px] rounded-full  py-[2px] border-[#083d5c] w-fit uppercase tracking-widest text-[14px]">FAQ's</h3>
//                         <h1 className=' flex font-[600] text-[#0f0f0f] pt-[10px] text-[35px] md:text-[43px]'>
//                             Why City Smile
//                         </h1>
//                     </div>
//                     <div className=" flex md:flex-row flex-col gap-[10px] justify-between min-h-0px] items-center w-[100%] ">
//                         <div className="flex md:order-1  order-2  md:w-[45%] w-[100%] flex-col gap-[13px]">
//                             {faqData.map((item, index) => (
//                                 <div
//                                     key={item.id}
//                                     className="flex flex-col gap-[5px] shadow-sm border border-[#083d5c] p-[10px] md:px-[15px] md:py-[4px] rounded-[5px]  rounded-tl-[18px] custom-shadow1"
//                                 >
//                                     {/* Accordion Header */}
//                                     <div
//                                         className="flex w-[100%] justify-between items-center cursor-pointer"
//                                         onClick={() => toggleAccordion(index)}
//                                     >
//                                         <div className="flex items-center gap-[20px]">
//                                             {/* <img
//                                                 className="flex w-[20px] md:w-[25px]"
//                                                 src={item.icon}
//                                                 alt="icon"
//                                             /> */}
//                                             <p className="flex font-[400] text-[#0e0e0ec8] text-[15px] md:text-[16px] py-[5px]">
//                                                 {item.title}
//                                             </p>
//                                         </div>
//                                         <i
//                                             className={`fa-solid fa-chevron-right grafizen text-center items-center text-[13px] md:text-[16px] flex transition-transform duration-300 ${openIndex === index ? "rotate-90" : "rotate-0"
//                                                 }`}
//                                         ></i>
//                                     </div>

//                                     <AnimatePresence initial={false}>
//                                         {openIndex === index && (
//                                             <motion.div
//                                                 key={item.id}
//                                                 initial="collapsed"
//                                                 animate="open"
//                                                 exit="collapsed"
//                                                 variants={{
//                                                     open: { opacity: 1, height: "auto" },
//                                                     collapsed: { opacity: 0, height: 0 },
//                                                 }}
//                                                 transition={{
//                                                     duration: 0.4,
//                                                     ease: [0.4, 0, 0.2, 1],
//                                                 }}
//                                                 className="overflow-hidden text-[13px] text-[#333] font-[400]"
//                                             >
//                                                 <p className="pt-[5px]">{item.content}</p>
//                                             </motion.div>
//                                         )}
//                                     </AnimatePresence>

//                                 </div>
//                             ))}
//                         </div>



// {/* 
//                         <div className="relative md:w-[49%] md:gap-[10px] gap-[6px] md:order-2  order-1 flex justify-center items-center min-h-[220px]">
//                        <img className=" flex md:w-[300px] h-[270px] rounded-tl-[14px] rounded-r-[14px]  md:rounded-r-[0px] rounded-bl-[14px] object-cover" src={seconds} /> 
//                                <img className=" hidden md:flex md:w-[300px] rounded-tr-[14px]  rounded-br-[14px] h-[270px]  object-cover" src={first} /> 
//                         </div> */}






//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
import React, { useState } from "react";
import faq from "../../../Public/mainimage.avif";
import { Plus, Minus, Heart, Shield, Clock, MapPin } from "lucide-react"

export default function Faq() {
    const [openFaq, setOpenFaq] = useState(0)

    const faqData = [
        {
            id: 1,
            icon: <Heart className="w-4 h-4" />,
            question: "What types of Dental care services does Gdc provide?",
            answer:
                "Gdc offers comprehensive Dental care services including general physician consultations, specialist consultations, pharmacy services, lab tests, home care services, and nutritionist consultations. Our Dental Cares provide access to a wide network of Dental care providers.",
            category: "Services",
            color: "from-[#062f95] to-blue-600",
        },
        {
            id: 2,
            icon: <MapPin className="w-4 h-4" />,
            question: "Where are Gdc Dental care facilities located?",
            answer:
                "Gdc has an extensive network of 100+ clinics and 25+ hospitals across major cities. Our services are available nationwide with plans to expand to 1M+ lives by 2030. You can find our nearest facility through our mobile app or website.",
            category: "Locations",
            color: "from-[#062f95] to-blue-600",
        },
        {
            id: 3,
            icon: <Clock className="w-4 h-4" />,
            question: "What are the operating hours for Gdc services?",
            answer:
                "Our digital services are available 24/7 through our mobile app. Physical clinics operate from 8:00 AM to 8:00 PM on weekdays and 9:00 AM to 6:00 PM on weekends. Emergency services are available round the clock at select locations.",
            category: "Hours",
            color: "from-[#062f95] to-blue-600",
        },
        {
            id: 4,
            icon: <Shield className="w-4 h-4" />,
            question: "Do you offer emergency Dental care services?",
            answer:
                "Yes, Gdc provides 24/7 emergency Dental care services through our network of partner hospitals. Emergency services are covered under our Comprehensive Dental Care plan, and we also offer telemedicine consultations for urgent but non-critical situations.",
            category: "Emergency",
            color: "from-[#062f95] to-blue-600",
        },
        {
            id: 5,
            icon: <Heart className="w-4 h-4" />,
            question: "How do I apply for a Gdc Dental Care?",
            answer:
                "You can apply for a Gdc Dental Care through our website, mobile app, or by visiting any of our clinics. The application process is simple and takes just a few minutes. Choose between our Essential (₹600/year) or Comprehensive (₹1200/year) plans based on your needs.",
            category: "Application",
            color: "from-[#062f95] to-blue-600",
        },
        {
            id: 6,
            icon: <Shield className="w-4 h-4" />,
            question: "What makes Gdc different from other Dental care providers?",
            answer:
                "Gdc combines traditional Dental care with modern technology, offering integrated digital Dental Cares, transparent pricing, and a patient-first approach. Our 25+ years of experience, extensive network, and commitment to making Dental care accessible sets us apart.",
            category: "About",
            color: "from-[#062f95] to-blue-600",
        },
    ]

    const toggleFaq = (id) => {
        setOpenFaq(openFaq === id ? null : id)
    }


    return (
        <div className="md:w-[83%] w-[90%]   flex flex-col gap-[30px]  mx-auto">
            <div className="w-[100%] flex flex-col md:gap-[10px]">
                <div className="flex flex-col">
                    <h3 className="text-[#062f95] border font-[600] px-[10px] bg-[#062f95]/10  rounded-full  py-[2px] border-[#062f95] w-fit uppercase tracking-widest text-[14px]">FAQ'S</h3>
                    <h1 className="flex font-[600] text-[35px] font-Poppins">
                        Frequently Asked  Questions
                    </h1>

                </div>

                <div className="flex w-[100%] gap-[30px] mt-[20px] flex-col justify-between">
                    <div className="w-[100%] flex md:flex-row flex-col justify-between">
                        {/* <div className="md:w-[30%]  ">
                            <img
                                className="  w-[500px] flex flex-shrink-0 md:h-[300px]  rounded-[10px]  shadow-md"
                                src={faq}
                                alt="FAQ"
                            />
                        </div> */}



                        <div className="grid  w-[100%] lg:grid-cols-2 gap-6">
                            {faqData.map((faq, index) => (
                                <div
                                    key={faq.id}
                                    className={`group relative  h-fit overflow-hidden rounded-lg border  border-[#062e957b] transition-all duration-500 hover:shadow-xl ${openFaq === faq.id
                                        ? "bg-white shadow-2xl  scale-[1.02]"
                                        : "bg-white/80 backdrop-blur-sm hover:border-gray-300"
                                        }`}
                                >
                                    {/* Background Gradient */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${faq.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                                    ></div>


                                    {/* FAQ Content */}
                                    <div className="relative p-3">
                                        {/* Question Header */}
                                        <button
                                            onClick={() => toggleFaq(faq.id)}
                                            className="w-full text-left focus:outline-none  focus:ring-offset-2 rounded-lg"
                                        >
                                            <div className="flex items-center justify-between gap-4 ">
                                                <div className=" flex gap-[15px] items-center">
                                                    <div
                                                        className={`w-10 h-10 flex-shrink-0 rounded-[8px] bg-gradient-to-br ${faq.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                                    >
                                                        {faq.icon}
                                                    </div>

                                                    <div className="">
                                                        <h3 className="text-[16px]  leading-[20px] font-[500] text-gray-900 mb-2 group-hover:text-[#062f95] transition-colors duration-300">
                                                            {faq.question}
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div
                                                    className={`w-5 h-5 rounded-full border flex items-center flex-shrink-0  border-[#062f95] justify-center transition-all duration-300 ${openFaq === faq.id
                                                        ? "border-[#062f95] text-[#ffffff] bg-[#062f95] rotate-180"
                                                        : "  group-hover:text-[#062f95] text-[#062f95]"
                                                        }`}
                                                >
                                                    {openFaq === faq.id ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                                                </div>
                                            </div>
                                        </button>

                                        {/* Answer Content */}
                                        <div
                                            className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === faq.id ? "max-h-96 mt-[15px]  opacity-100" : "max-h-0 opacity-0"
                                                }`}
                                        >
                                            <div className=" ">
                                                <div className="w-full mb-[10px] h-px bg-gradient-to-r from-blue-200 to-transparent mb-270"></div>
                                                <p className="text-gray-600 leading-relaxed text-[13px]">{faq.answer}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover Effect Border */}
                                    <div
                                        className={`absolute inset-0 rounded-lg  border-transparent bg-[#062e9546] opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}
                                    ></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Inline styles for icon rotation */}
            {/* <style jsx>{`
          .rotate {
            transform: rotate(180deg);
            transition: transform 0.7s ease-out;
          }
          .rotate-reverse {
            transform: rotate(0deg);
            transition: transform 0.7s ease-out;
          }
          .fa-circle-plus,
          .fa-circle-minus {
            transition: transform 0.7s ease-out;
          }
        `}</style> */}
        </div>
    );
}