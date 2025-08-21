import { useState, React } from "react";
import Footer from '../../component/footer/Footer'
import why from "../../../public/why.jpg"
import logo from "../../../public/Hygoblack.png"
import { useNavigate } from "react-router-dom";
export default function LandingLogin() {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    name: "",
    number: "",
  })
  const [showThankYou, setShowThankYou] = useState(false)
  const [errors, setErrors] = useState({
    name: "",
    number: "",
  })

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^[6-9]\d{9}$/
    return phoneRegex.test(number)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {
      name: "",
      number: "",
    }

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.number.trim()) {
      newErrors.number = "Phone number is required"
    } else if (!validatePhoneNumber(formData.number)) {
      newErrors.number = "Please enter a valid 10-digit Indian mobile number"
    }

    setErrors(newErrors)

    if (!newErrors.name && !newErrors.number) {
      setShowThankYou(true)
    }
  }

  const closeThankYou = () => {
    setShowThankYou(false);
    setFormData({ name: "", number: "" });
    navigate("/home"); 
  };



  return (
    <>
      {/* <Header />
      <div className=" font-Poppins flex pt-[40px] gap-[90px] md:pt-[140px] flex-col bg-[#ffffff57] w-[100%] h-[100%]">
        <HeroSection />
        <AboutUs />

        <Banner />
        <MainServices />
        <WhyChooseUs />
        <CoFounders />
        <div className=" flex flex-col gap-[80px]">
          <Faq />

          
          <Blog />
        </div>
        <Footer />

      </div> */}
      <div className="min-h-screen font-Poppins bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>

        {/* Logo Section */}
        <div className="relative z-10 container mx-auto px-4 pt-8">
          <div className="flex justify-center">
            <div className="flex items-center space-x-3">
              <a className="w-[100%] mx-auto">
                <img className=' w-[200px] mx-auto ' src={logo} alt="..." />
              </a>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative z-10 container mx-auto md:px-4  lg:py-10">
          <div className="md:max-w-7xl mx-auto text-center">


            <h1 className="text-5xl md:text-7xl lg:text-5xl font-[700] text-white mb-8 leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Gdc
              </span>
            </h1>

            {/* 365 Consultation Highlight */}
            <div className="mb-3">
              <div className="inline-flex items-center space-x-4 backdrop-blur-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full px-5 py-1 border border-green-400/30">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-[15px] md:text-[20px] font-[600] text-green-300">Up to 365 Consultations FREE</span>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>

            <p className="text-[14px] md:text-[14px] text-slate-300 mb-16 max-w-3xl mx-auto md:leading-relaxed">
              Revolutionary Dental care platform offering unlimited consultations, specialist care, and comprehensive
              health services at unbeatable prices.
            </p>
          </div>

          {/* Modern Contact Form */}
          <div className="max-w-[450px] mx-auto">
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl md:w-[450px] p-4 md:p-6 border border-white/20 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-1">Join Gdc Today</h2>
                <p className="text-slate-300 text-[14px]">Start your Dental care journey with us</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 px-[10px]">
                <div className=" flex flex-col gap-[20px]">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className={`w-full px-6 py-[9px] md:py-3 bg-white/10 backdrop-blur-sm border ${errors.name ? "border-red-400" : "border-white/30"
                      } rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300`}
                  />
                  {errors.name && <p className="text-red-400 text-sm ml-2">{errors.name}</p>}
                </div>

                <div className="space-y-2">
             <input
  type="tel"
  name="number"
  value={formData.number}
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    if (value.length <= 10) {
      setFormData((prev) => ({
        ...prev,
        number: value,
      }));
      if (errors.number) {
        setErrors((prev) => ({ ...prev, number: "" }));
      }
    }
  }}
  placeholder="Enter your mobile number"
  maxLength={10}
  className={`w-full px-6 py-[9px] md:py-3 bg-white/10 backdrop-blur-sm border ${errors.number ? "border-red-400" : "border-white/30"
    } rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300`}
/>
{errors.number && <p className="text-red-400 text-sm ml-2">{errors.number}</p>}

                </div>
                <button
                  type="submit"
                  className="w-[100%] bg-gradient-to-r  !mb-[10px] !mt-[20px] md:mt-[40px]  mx-auto from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white mt-[40px] font-bold py-3 px-8 rounded-xl transition-all duration-300 transform  hover:shadow-2xl focus:outline-none focus:ring-blue-400/50"
                >
                  Get Started Now
                </button>
              </form>


            </div>
          </div>
        </div>

        {/* Membership Benefits Section */}
        <div className="relative 2xl:w-[1300px] z-10 container mx-auto mt-[30px] px-4 py-10">
          <div className="md:w-[95%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-[700] text-white mb-4">
                Membership{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Benefits</span>
              </h2>
              <p className=" text-[14px] md:text-[17px] text-slate-300 max-w-2xl mx-auto">
                Discover the comprehensive Dental care benefits that come with your Gdc membership
              </p>
            </div>

            <div className="grid md:grid-cols-2   gap-2 items-center">
              {/* Benefits Image */}
              <div className="order-2 lg:order-1">
                <div className="backdrop-blur-xl md:w-[520px] h-[330px] md:mt-0 mt-[40px] md:h-[470px] bg-white/10 rounded-3xl border border-white/20 shadow-2xl">
                  <img
                    src={why}
                    alt="Gdc Dental care Benefits"

                    className="  w-[100%] h-[100%] !object-cover  rounded-2xl"
                  />
                </div>
              </div>

              {/* Benefits List */}
              <div className="order-1 lg:order-2 gap-x-4 gap-y-5 w-[100%] flex flex-col  md:grid grid-cols-2">
                {[
                  {
                    icon: "💬",
                    title: "General Physician Consultation",
                    subtitle: "Up to 365 FREE/Year",
                    description:
                      "24/7 access to qualified general physicians with unlimited consultations throughout the year",
                  },
                  {
                    icon: "👨‍⚕️",
                    title: "6 Specialists Consultation",
                    subtitle: "FREE/Year",
                    description: "Annual free consultations with specialized doctors across various medical fields",
                  },
                  {
                    icon: "💊",
                    title: "Pharmacy Benefits",
                    subtitle: "Up to 15% OFF",
                    description: "Significant savings on all your prescription medications and health supplements",
                  },
                  {
                    icon: "🔬",
                    title: "Laboratory Tests",
                    subtitle: "Up to 25% OFF",
                    description: "Comprehensive diagnostic tests at discounted rates for better health monitoring",
                  },
                  {
                    icon: "🏥",
                    title: "Other Services",
                    subtitle: "Flat 10% OFF",
                    description: "Additional Dental care services including imaging and specialized treatments",
                  },
                  {
                    icon: "🏠",
                    title: "Home Care Services",
                    subtitle: "Up to 10% OFF",
                    description: "Professional Dental care services delivered to your doorstep with convenience",
                  },
          
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="backdrop-blur-xl bg-white/10 h-[130px] rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                  >
                    <div className="flex flex-col items-start gap-[10px]">

                      <div className="flex gap-[10px]">
                        <div className="text-[19px]">{benefit.icon}</div>
                        <div className="flex items-start justify-between m">
                          <h3 className="text-[15px] pt-[5px] font-bold text-white group-hover:text-blue-300 leading-[18px] transition-colors">
                            {benefit.title}
                          </h3>
                          <span className="text-[10px] font-[500] hidden text-cyan-400 bg-cyan-400/20 px-3  absolute py-[2px] rounded-full">
                            {benefit.subtitle}
                          </span>
                        </div>

                      </div>
                      <p className="text-slate-300 text-[12px] leading-[17px]">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Why Gdc Section */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-[700] text-white mb-6">
                Why{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Gdc?</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "∞",
                  title: "Up to 365 General Consultations/Year",
                  description: "You read that right: Up to 365 consultations FREE, no extra payment*",
                  highlight: "365 FREE",
                },
                {
                  icon: "👥",
                  title: "Specialists For All Ages",
                  description:
                    "Offering all essential Dental care services - from consultation to diagnostics under one roof",
                  highlight: "All Ages",
                },
                {
                  icon: "💳",
                  title: "₹99/Month Gdc Health Card",
                  description: "Get health security for the whole family at half the price of a fancy dinner",
                  highlight: "₹99/Month",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="backdrop-blur-xl bg-white/10  h-[310px] rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group text-center"
                >
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h3 className="text-[20px] font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 mb-3 leading-[17px] text-[13px]">{item.description}</p>
                  <span className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white  w-fit font-[500] px-4 py-1 mx-auto left-0 right-0 bottom-6 absolute rounded-[8px] text-sm">
                    {item.highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>



        {/* Thank You Popup */}
        {showThankYou && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeThankYou}></div>
            <div className="relative backdrop-blur-xl bg-white/20 rounded-3xl p-8 border border-white/30 shadow-2xl max-w-md w-full text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Thank You!</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Thank you for your interest in Gdc! Our Dental care experts will contact you soon to help you get started
                with your wellness journey.
              </p>
              <button
                onClick={closeThankYou}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-3 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105"
              >
                Continue Exploring
              </button>
            </div>
          </div>
        )}
  <Footer />

      </div>
  
    </>
  );
}
