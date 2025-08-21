import React from "react";
import { Shield } from "lucide-react";

export default function Banner() {
    return (
        <>
            <div className=" md:w-[65%] mx-auto  w-[100%] p-4">
                <div className="bg-[#fff]  rounded-[20px]  border-[1.2px] shadow-md border-gray-100 md:h-[170px] p-[20px]">
                    <div className="flex items-center w-[100%] gap-[14%]">
                        <div className="flex items-center  relative gap-6">
                            <div
                                className="bg-gradient-to-br shadow-lg z-[10] w-[50px]  justify-center items-center h-[50px]   from-[#5e89d3] to-[#160090] p-3  rounded-[50px]"
                                style={{ boxShadow: "0px 2px 4px rgba(255, 138, 0, 0.1)" }}
                            >
      <i className="fa-regular fa-stethoscope text-white text-[22px]"></i>
                            </div>

                            <div className="  absolute text-left shadow-md gap-[5px] items-center flex  leadeing-[20px]   justify-start  h-[38px] left-[18px] font-[600] font-Poppins text-[#fff]  pl-[40px] px-[20px] items-   rounded-[20px] text-[14px]  bg-[#4e6de7] w-[210px]">
                                       <span>Trusted</span>
          <span>Dental care</span>
                            </div>
                        </div>
                        {/* Title */}
                        <h2 className="md:text-[26px] pl-[55px]  md:flex hidden font-[600]  text-gray-900 font-Poppins">
                         Your Health, Our Priority
                        </h2>
                    </div>

                    {/* Message */}
                <p className="mt-4 text-[15px] text-justify leading-[21px] text-gray-600 font-Poppins ">
      Gdc Dental care offers comprehensive care tailored to your needs.
      From expert medical consultations to home-based services and wellness
      support, we ensure quality and compassion at every step. Visit us at{" "}
      <span className="text-[#13167d] hover:underline">
        GdcDental care.web.app
      </span>{" "}
      or book an appointment today.
    </p>

                    {/* Read More Button */}
                    <div className="flex md:justify-end mt-[10px] md:mt-[-32px]">
                        {/* <button className="bg-[#F85A2A] font-Poppins text-white px-5 py-2 rounded-lg text-[15px] font-medium hover:bg-[#F85A2A]/90 transition-colors">
              Read More
            </button> */}
                    </div>
                </div>
            </div>
        </>
    );
}