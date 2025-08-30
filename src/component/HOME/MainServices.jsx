// import React, { useState } from "react";

// import { Calculator, Shield, TrendingUp, Building2, Users, ArrowRight, CheckCircle } from "lucide-react"
// import { useNavigate } from "react-router-dom";



// export default function MainServices() {
//   const navigate = useNavigate();

//   const [activeService, setActiveService] = useState(0)

//   const services = [
//     {
//       id: 0,
//       title: "Tax Planning & Compliance",
//       shortDesc: "Strategic tax optimization and regulatory compliance",
//       fullDesc:
//         "Comprehensive tax  strategies designed to minimize your tax burden while ensuring full regulatory compliance. Our expert team stays current with tax law changes to maximize your savings strategies designed to minimize your tax burden while ensuring full regulatory compliance. Our expert team stays current with tax law changes to maximize your savings.",
//       icon: Calculator,
//       features: ["Tax Strategy Development", "Compliance Management", "Risk Assessment", "Quarterly Reviews"],
//       stats: { clients: "200+", savings: "30%" },
//     },
//     {
//       id: 1,
//       title: "Audit & Assurance",
//       shortDesc: "Professional auditing with detailed financial analysis",
//       fullDesc:
//         "Independent audit services that provide stakeholders with confidence in your financial statements. We deliver thorough examinations with actionable insights for business improvement.",
//       icon: Shield,
//       features: ["Financial Audits", "Internal Controls", "Risk Management", "Compliance Reviews"],
//       stats: { clients: "150+", accuracy: "99.8%" },
//     },
//     {
//       id: 2,
//       title: "Business Advisory",
//       shortDesc: "Strategic consulting for sustainable growth",
//       fullDesc:
//         "Expert guidance to help you navigate complex business decisions and achieve sustainable growth. Our advisors work closely with you to develop strategies that drive results.",
//       icon: TrendingUp,
//       features: ["Growth Strategy", "Financial Planning", "Performance Analysis", "Market Insights"],
//       stats: { clients: "300+", growth: "45%" },
//     },
//     {
//       id: 3,
//       title: "Corporate Services",
//       shortDesc: "Complete corporate solutions and compliance",
//       fullDesc:
//         "End-to-end corporate services from company formation to ongoing compliance management. We handle the administrative burden so you can focus on growing your business.",
//       icon: Building2,
//       features: ["Company Formation", "Secretarial Services", "Board Support", "Governance"],
//       stats: { clients: "180+", compliance: "100%" },
//     },
//     {
//       id: 4,
//       title: "SME Solutions",
//       shortDesc: "Tailored solutions for small and medium enterprises",
//       fullDesc:
//         "Specialized financial management solutions designed specifically for SMEs. We understand the unique challenges of smaller businesses and provide cost-effective solutions.",
//       icon: Users,
//       features: ["Bookkeeping", "Payroll Management", "Financial Reports", "Cash Flow Analysis"],
//       stats: { clients: "400+", efficiency: "60%" },
//     },
//   ]
//   const handleService = () => {

//     navigate('/services')
//   }
//   return (
//     <>
//       <div className=" 2xl:w-[1350px] flex flex-col font-Poppins ]  md:w-[80%] w-[90%] mx-auto ">

//         <div>
//           <h3 className="text-[#062f95] border font-[600] px-[10px] bg-[#062f95]/10  rounded-full  py-[2px] border-[#062f95] w-fit uppercase tracking-widest text-[14px]">PROFESSIONAL SERVICES</h3>
//           <h1 className='   font-[600]  leading-[42px] text-[#0f0f0f] pt-[10px] text-[35px] md:text-[43px]'>
//             Financial Excellence
//             <b className="font-[600] text-[#062f95] pl-[10px]">
//               Delivered
//             </b>
//           </h1>
//         </div>
//         <div className=" md:w-[100%] mx-auto mt-[30px]">
//           <div className="grid lg:grid-cols-12 gap-8">
//             {/* Services Navigation */}
//             <div className="lg:col-span-4">
//               <div className="sticky top-8">

//                 <div className="space-y-3">
//                   {services.map((service, index) => {
//                     const IconComponent = service.icon
//                     return (
//                       <button
//                         key={service.id}
//                         onClick={() => setActiveService(index)}
//                         className={`w-full text-left p-3 rounded-[9px] h-fit min-h-[80px]  transition-all duration-300 ${activeService === index
//                             ? "bg-[#062f95] text-white shadow-lg"
//                             : "bg-gray-50 border text-gray-700 hover:bg-gray-100"
//                           }`}
//                       >
//                         <div className="flex space-x-4">
//                           <div
//                             className={`p-2 h-fit rounded-md ${activeService === index ? "bg-white/20" : "bg-[#062f95]/10"}`}
//                           >
//                             <IconComponent
//                               className={`w-4 h-4 ${activeService === index ? "text-white" : "text-[#062f95]"}`}
//                             />
//                           </div>
//                           <div className="flex-1">
//                             <div className="font-semibold">{service.title}</div>
//                             <div className={`text-[13px] ${activeService === index ? "text-white/80" : "text-gray-500"}`}>
//                               {service.shortDesc}
//                             </div>
//                           </div>
//                         </div>
//                       </button>
//                     )
//                   })}
//                 </div>
//               </div>
//             </div>

//             {/* Active Service Details */}
//             <div className="lg:col-span-8">
//               <div className="bg-gradient-to-br from-gray-50 to-white rounded-[9px] p-5 shadow-md border-[1px] border-[#062f9563]">
//                 <div className="flex items-start justify-between mb-4">
//                   <div className="flex items-center space-x-4">
//                     <div className="p-3 bg-[#062f95] rounded-[9px]">
//                       {(() => {
//                         const IconComponent = services[activeService].icon
//                         return <IconComponent className="w-6 h-6 text-white" />
//                       })()}
//                     </div>
//                     <div>
//                       <h2 className="text-[20px] font-[600] text-gray-900">{services[activeService].title}</h2>
//                       <p className="text-[#062f95] text-[14px] font-medium">{services[activeService].shortDesc}</p>
//                     </div>
//                   </div>

//                   {/* Stats */}
//                   <div className="text-right">
//                     <div className="text-2xl font-[600] text-[#062f95]">
//                       {Object.values(services[activeService].stats)[0]}
//                     </div>
//                     <div className="text-sm text-gray-500">{Object.keys(services[activeService].stats)[0]}</div>
//                   </div>
//                 </div>

//                 <p className="text-[14px] text-gray-700 leading-relaxed mb-8">{services[activeService].fullDesc}</p>

//                 {/* Features Grid */}
//                 <div className="grid md:grid-cols-2 gap-2 mb-8">
//                   {services[activeService].features.map((feature, index) => (
//                     <div key={index} className="flex items-center space-x-3">
//                       <CheckCircle className="w-4 h-4 text-[#062f95] flex-shrink-0" />
//                       <span className="text-gray-700  text-[14px] font-[500]">{feature}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <button className="flex-1 bg-[#062f95] text-white px-2 py-2 rounded-md font-semibold hover:bg-[#014a75] transition-colors flex items-center justify-center space-x-2">
//                     <span>Get Started</span>
//                     <ArrowRight className="w-5 h-5" />
//                   </button>
//                   <button className="flex-1 border border-[#062f95] text-[#062f95] px-2 py-2 rounded-md font-semibold hover:bg-[#062f95] hover:text-white transition-colors">
//                     Learn More
//                   </button>
//                 </div>
//               </div>

//               {/* Additional Stats */}
//               <div className="grid grid-cols-3 gap-6 mt-6">
//                 {Object.entries(services[activeService].stats).map(([key, value], index) => (
//                   <div key={index} className="text-center p-5 bg-white rounded-lg shadow-md border border-gray-200">
//                     <div className="text-3xl font-bold text-[#062f95] mb-2">{value}</div>
//                     <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</div>
//                   </div>
//                 ))}
//                 <div className="text-center p-5 bg-white rounded-lg shadow-md border border-gray-100">
//                   <div className="text-3xl font-bold text-[#062f95] mb-2">24/7</div>
//                   <div className="text-sm text-gray-600">Support</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// }
import React, { useState } from "react";
import {
  Stethoscope,
  FlaskConical,
  HeartPulse,
  ClipboardList,
  Home,
  Brain,
  Pill,
  ShieldCheck,
  Plus,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function MainServices() {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState(0);
const services = [
  {
    id: 0,
    title: "Dental Consultation",
    shortDesc: "General & specialist dental checkups",
    fullDesc:
      "Comprehensive dental consultation with general dentists and specialists like orthodontists, endodontists, and oral surgeons.",
    icon: Stethoscope,
        features: [
      "Digital X-rays & OPG",
      "3D CBCT scanning",
      "Intraoral cameras",
      "Cephalometric analysis",
    ],
    stats: { Dentists: "15+", Specialties: "8+" },
  },
  {
    id: 1,
    title: "Dental Imaging & Diagnostics",
    shortDesc: "X-rays and advanced dental scans",
    fullDesc:
      "State-of-the-art diagnostic facilities including digital X-rays, OPG, CBCT scans, and intraoral cameras for accurate treatment planning.",
    icon: FlaskConical,
    features: [
      "Digital X-rays & OPG",
      "3D CBCT scanning",
      "Intraoral cameras",
      "Cephalometric analysis",
    ],
    stats: { Scans: "5000+", Accuracy: "99.9%" },
  },
  {
    id: 2,
    title: "Orthodontics & Braces",
    shortDesc: "Teeth alignment and smile correction",
    fullDesc:
      "Specialized orthodontic treatments including metal braces, ceramic braces, clear aligners, and retainers for children & adults.",
    icon: HeartPulse,
    features: [
      "Metal & ceramic braces",
      "Invisible aligners (Invisalign)",
      "Lingual braces",
      "Retainers & smile design",
    ],
    stats: { Patients: "2000+", SuccessRate: "92%" },
  },
  {
    id: 3,
    title: "Preventive Dentistry",
    shortDesc: "Cleaning, scaling & preventive care",
    fullDesc:
      "Regular dental cleaning, scaling, fluoride therapy, sealants, and preventive checkups to maintain long-term oral health.",
    icon: ClipboardList,
    features: [
      "Scaling & polishing",
      "Fluoride treatment",
      "Pit & fissure sealants",
      "Routine oral health checkups",
    ],
    stats: { Patients: "3000+", HygieneSuccess: "95%" },
  },
  {
    id: 4,
    title: "Implants & Restorations",
    shortDesc: "Permanent tooth replacements",
    fullDesc:
      "Advanced dental implants, crowns, bridges, and dentures designed to restore function and aesthetics.",
    icon: Home,
    features: [
      "Single & multiple implants",
      "Crowns and bridges",
      "Removable & fixed dentures",
      "Full-mouth rehabilitation",
    ],
    stats: { Implants: "1500+", SuccessRate: "98%" },
  },
  {
    id: 5,
    title: "Pediatric Dentistry",
    shortDesc: "Gentle care for children’s teeth",
    fullDesc:
      "Dedicated pediatric dentistry for children, including preventive treatments, cavity care, and habit correction.",
    icon: Brain,
    features: [
      "Child-friendly checkups",
      "Fluoride & sealants for kids",
      "Habit-breaking appliances",
      "Early orthodontic care",
    ],
    stats: { KidsTreated: "1200+", ParentSatisfaction: "97%" },
  },
];


  const handleService = () => navigate("/services");

  return (
    <div className="2xl:w-[1350px] flex flex-col font-Poppins md:w-[80%] w-[90%] mx-auto">
      <div>
        <h3 className="text-[#062f95] border font-[600] px-[10px] bg-[#062f95]/10  rounded-full  py-[2px] border-[#062f95] w-fit uppercase tracking-widest text-[14px]">OUR SERVICES</h3>
        <h1 className='font-[600] leading-[42px] text-[#0f0f0f] pt-[10px] text-[35px] md:text-[43px]'>
          Dental care That
          <b className="font-[600] text-[#062f95] pl-[10px]">Cares</b>
        </h1>
      </div>
      <div className="md:w-[100%] mx-auto mt-[30px]">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(index)}
                    className={`w-full text-left p-3 rounded-[9px] transition-all duration-300 ${activeService === index
                      ? "inset-0  bg-gradient-to-br from-[#1b2644] to-blue-600 text-white shadow-lg"
                      : "bg-gray-50 border text-gray-700 hover:bg-gray-100"}`}
                  >
                    <div className="flex space-x-4">
                      <div className={`p-2 h-fit rounded-md ${activeService === index ? "bg-white/20" : "bg-[#062f95]/10"}`}>
                        <Icon className={`w-4 h-4 ${activeService === index ? "text-white" : "text-[#062f95]"}`} />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold">{service.title}</div>
                        <div className={`text-[13px] ${activeService === index ? "text-white/80" : "text-gray-500"}`}>
                          {service.shortDesc}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="lg:col-span-8     flex  flex-col  h-[100%] justify-between">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-[9px] p-5 shadow-md border-[1px] border-[#062f9563]">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-[#062f95] rounded-[9px]">
                    {(() => {
                      const Icon = services[activeService].icon;
                      return <Icon className="w-6 h-6 text-white" />;
                    })()}
                  </div>
                  <div className=" ">
                    <h2 className="text-[20px] font-[600] text-gray-900">{services[activeService].title}</h2>
                    <p className="text-[#062f95] text-[10px] md:text-[14px] font-medium">{services[activeService].shortDesc}</p>
                  </div>
                </div>
                <div className="text-right md:block hidden">
                  <div className="text-2xl font-[600] text-[#062f95]">
                    {Object.values(services[activeService].stats)[0]}
                  </div>
                  <div className="text-sm text-gray-500">
                    {Object.keys(services[activeService].stats)[0]}
                  </div>
                </div>
              </div>
              <p className="text-[14px] text-gray-700 leading-relaxed mb-8">{services[activeService].fullDesc}</p>
              <div className="grid md:grid-cols-2 gap-2 mb-8">
                {services[activeService].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-[#062f95] flex-shrink-0" />
                    <span className="text-gray-700 text-[14px] font-[500]">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-br from-[#1b2644] to-blue-600 text-white px-2 py-2 rounded-md font-semibold hover:bg-[#014a75] transition-colors flex items-center justify-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="flex-1 border border-[#062f95] text-[#062f95] px-2 py-2 rounded-md font-semibold hover:bg-[#062f95] hover:text-white transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-[10px] md:gap-6 pb-[2px] mt-5">
              {Object.entries(services[activeService].stats).map(([key, value], index) => (
                <div key={index} className="text-center p-4 md:p-5 bg-white rounded-lg shadow-md border border-gray-100">
                  <div className="md:text-3xl  text-[20px] font-bold text-[#062f95] mb-2">{value}</div>
                  <div className="t text-[12px] md:text-sm text-gray-600">{key.replace(/([A-Z])/g, " $1").trim()}</div>
                </div>
              ))}
              <div className="text-center p-4 md:p-5 bg-white rounded-lg shadow-md border border-gray-100">
                <div className="md:text-3xl  text-[20px] font-bold text-[#062f95] mb-2">24/7</div>
                <div className=" text-[12px] md:text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
