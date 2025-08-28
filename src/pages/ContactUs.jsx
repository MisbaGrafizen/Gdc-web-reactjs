import { useEffect, useState } from "react";
import { Mail, MapPin, Phone, SendHorizontal, Clock } from "lucide-react";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import BottomBar from "../component/bottombar/BottomBar";
import { ApiPost } from "../helper/axios";
import main from '../../public/gdc/contactus/image1.webp'
import secondImage from '../../public/gdc/contactus/image2.webp'
import thirdImage from '../../public/gdc/contactus/image3.webp'




export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await ApiPost("/contact-us", formData);
      console.log('response', response)

      if (response.status === 200 || response.status === 201) {
        alert("Your inquiry has been submitted successfully!");
        setFormData({ firstName: "", lastName: "", phone: "", email: "", serviceType: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

    const images = [main, secondImage, thirdImage]; // Add your image imports here
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen  font-Poppins bg-gradient-to-br pt-[20px] md:pt-[110px] from-gray-50 to-blue-50">
        {/* Hero Section with Medical Focus */}
        <div className="relative bg-white">
          <div className="absolute  to-transparent"></div>
          <div className="relative max-w-7xl mx-auto px-6 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-[#062e9520] rounded-full text-sm font-medium text-[#062f95] mb-6">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Trusted Dental care Provider
                </div>
                <h1 className="text-5xl font-[600] text-gray-900 mb-7 leading-[46px]">
                  Expert Medical Care
                  <span style={{ color: "#062f95" }} className="block">
                    Just a Call Away
                  </span>
                </h1>
                <p className="text-[17px] md:text-[16px]    font-[400] leading-[1.8] md:leading-[23px] mb-10 max-w-3xl">
                  Connect with our team of experienced Dental care professionals. We’re here to provide personalized medical solutions,
                  expert guidance, and compassionate care to help you achieve optimal health outcomes and long-term wellness.
                </p>

                <div className="flex flex-wrap gap-4">
                  <button

                    className="px-8 py-3 bg-gradient-to-br from-[#1b2644] to-blue-600 text-white font-semibold rounded-[10px] hover:opacity-90 transition-opacity shadow-lg"
                  >
                    Book Consultation
                  </button>
                  <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold  rounded-[10px] hover:border-gray-400 transition-colors">
                    Emergency Contact
                  </button>
                </div>
              </div>
              <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl overflow-hidden h-96 flex items-center justify-center">
      <img
        className="w-[100%] h-[100%] object-cover"
        src={images[currentIndex]}
        alt="Slideshow"
      />
    </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Contact Section */}
        <div className="py-10">
          <div className="md:w-[80%] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch with Our Medical Team</h2>
              <p className="text-md text-gray-600 max-w-3xl mx-auto">
                Whether you need a consultation, have questions about our services, or require immediate medical
                attention, we're here to help.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Contact Form - Modern Medical Style */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                  <div className="flex md:items-center mb-8">
                    <div

                      className="w-12 h-12 bg-gradient-to-br flex-shrink-0 from-[#1b2644] to-blue-600 rounded-lg flex items-center justify-center mr-4"
                    >
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-[600] text-gray-900">Patient Inquiry Form</h3>
                      <p className="text-gray-600 text-[14px]">Fill out your details for personalized medical assistance</p>
                    </div>
                  </div>

                  <form className="space-y-2" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-">
                        <label className="text-sm font-semibold text-gray-700">First Name *</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-200 rounded-md outline-none bg-gray-50 transition-all"
                          placeholder="Enter first name"
                          name="firstName"
                          value={formData?.firstName}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-">
                        <label className="text-sm font-semibold text-gray-700">Last Name *</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-200 rounded-md outline-none bg-gray-50 transition-all"
                          placeholder="Enter last name"
                          name="lastName"
                          value={formData?.lastName}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-">
                        <label className="text-sm font-semibold text-gray-700">Phone Number *</label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 border border-gray-200 rounded-md outline-none bg-gray-50 transition-all"
                          placeholder="+91 XXXXX XXXXX"
                          name="phone"
                          value={formData?.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-">
                        <label className="text-sm font-semibold text-gray-700">Email Address *</label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 border border-gray-200 rounded-md outline-none bg-gray-50 transition-all"
                          placeholder="your.email@example.com"
                          name="email"
                          value={formData?.email}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="space-y-">
                      <label className="text-sm font-semibold text-gray-700">Service Type</label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-md outline-none bg-gray-50 transition-all">
                        <option>General Consultation</option>
                        <option>Specialized Treatment</option>
                        <option>Medical Tourism</option>
                        <option>Emergency Care</option>
                        <option>Health Checkup</option>
                      </select>
                    </div>

                    <div className="space-y-">
                      <label className="text-sm font-semibold text-gray-700">Message *</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-200 rounded-md outline-none bg-gray-50 resize-none transition-all"
                        placeholder="Describe your medical inquiry or concern..."
                        name="message"
                        value={formData?.message}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>

                    <div className="flex items-center space-x-3 py-[10px] px-[10px]">
                      <input type="checkbox" id="privacy" className="w-5 h-5 text-blue-600 rounded" />
                      <label htmlFor="privacy" className="text-sm text-gray-600">
                        I agree to the privacy policy and consent to medical data processing
                      </label>
                    </div>

                    <button
                      type="submit"

                      className="w-full bg-gradient-to-br from-[#1b2644] to-blue-600 py-4 px-6 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg"
                    >
                      Submit Medical Inquiry
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact Information - Medical Focus */}
              <div className="space-y-6 flex justify-between  flex-col h-[100%] font-Poppins">
                {/* Quick Contact */}
                <div className="bg-white rounded-lg shadow-xl p-6 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                      <div

                        className="w-12 bg-gradient-to-br from-[#1b2644] to-blue-600 h-12 rounded-lg flex items-center justify-center"
                      >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-500">24/7 Medical Helpline</p>
                        <a href="tel:+918849642442" className="text-lg font-[600] text-gray-800">
                          +91 8849642442
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                      <div

                        className="w-12 h-12 bg-gradient-to-br from-[#1b2644] to-blue-600 rounded-lg flex items-center justify-center"
                      >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-[500] text-gray-600">Medical Inquiries</p>
                        <a href="mailto:info@gdcdentalcare.com" className="text-sm font-[600] text-gray-800">
                          info@gdcdentalcare.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Office Location */}
                <div className="bg-white rounded-lg shadow-xl p-6 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Medical Center Location</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div
                        style={{ backgroundColor: "#062f95" }}
                        className="w-10 h-10 rounded-lg flex items-center justify-center mt-1"
                      >
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Gdc Dental care Center</p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          303, Om Decora, 9 Square
                          <br />
                          150ft Ring Road, Nana Mauva
                          <br />
                          Rajkot, Gujarat 360003
                        </p>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Operating Hours</p>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex justify-between">
                          <span>Monday - Friday</span>
                          <span>9:00 AM - 7:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday</span>
                          <span>9:00 AM - 5:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday</span>
                          <span>Emergency Only</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                {/* <div style={{ backgroundColor: "#062f95" }} className="rounded-3xl shadow-xl p-6 text-white">
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                  <h3 className="text-xl font-bold">Medical Emergency</h3>
                </div>
                <p className="text-blue-100 mb-4">
                  For urgent medical situations, call our emergency line immediately.
                </p>
                <button className="w-full bg-white text-blue-900 font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors">
                  Emergency: +91 8849642442
                </button>
              </div> */}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-lg border border-gray-100">
                <div
                  style={{ backgroundColor: "#062f95" }}
                  className="w-16 h-16 rounded-full  flex items-center justify-center mx-auto mb-4"
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Certified Medical Team</h3>
                <p className="text-sm text-gray-600">Licensed Dental care professionals</p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
                <div
                  style={{ backgroundColor: "#062f95" }}
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">24/7 Availability</h3>
                <p className="text-sm text-gray-600">Round-the-clock medical support</p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
                <div
                  style={{ backgroundColor: "#062f95" }}
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Patient-Centered Care</h3>
                <p className="text-sm text-gray-600">Personalized treatment approach</p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
                <div
                  style={{ backgroundColor: "#062f95" }}
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Advanced Technology</h3>
                <p className="text-sm text-gray-600">State-of-the-art medical equipment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <BottomBar />
    </>
  );
}
