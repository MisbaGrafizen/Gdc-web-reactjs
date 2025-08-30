import React from "react";
import { Shield } from "lucide-react";

export default function Banner() {
    return (
        <>
           <div className="md:w-[65%] mx-auto w-full p-4">
  <div className="bg-white rounded-[20px] border-[1.2px] shadow-md border-gray-100 md:h-[170px] p-[20px]">
    <div className="flex items-center w-full gap-[14%]">
      {/* Icon + Label */}
      <div className="flex items-center relative gap-6">
        <div
          className="bg-gradient-to-br shadow-lg z-10 w-[50px] h-[50px] flex justify-center items-center from-[#5e89d3] to-[#160090] p-3 rounded-full"
          style={{ boxShadow: "0px 2px 4px rgba(255, 138, 0, 0.1)" }}
        >
          <i className="fa-solid fa-tooth text-white text-[22px]"></i>
        </div>

        <div className="absolute shadow-md flex gap-[5px] items-center justify-start h-[38px] left-[18px] font-[600] font-Poppins text-white pl-[40px] px-[0px] rounded-[20px] text-[14px] bg-[#4e6de7] w-[230px]">
          <span>Exceptional Dental Care</span>
         
        </div>
      </div>

      {/* Title */}
      <h2 className="md:text-[26px] pl-[105px] md:flex hidden font-[600] text-gray-900 font-Poppins">
        We Make Smiles Beautiful
      </h2>
    </div>

    {/* Message */}
    <p className="mt-4 text-[15px] text-justify leading-[21px] text-gray-600 font-Poppins">
      At City Dental Hospital, we are committed to enhancing your dental health
      with painless procedures, bio-friendly materials, and cutting-edge
      technology. From preventive to cosmetic treatments, we offer personalized
      care with a smile. Visit{" "}
      <span className="text-[#13167d] hover:underline">
      www.rajkotdentist.com
      </span>{" "}
      or book your consultation today.
    </p>

    {/* Button (optional) */}
    <div className="flex md:justify-end mt-[10px] md:mt-[-32px]">
      {/* Uncomment to enable button */}
      {/* <button className="bg-[#062f95] font-Poppins text-white px-5 py-2 rounded-lg text-[15px] font-medium hover:bg-[#041e5a] transition-colors">
        Read More
      </button> */}
    </div>
  </div>
</div>

        </>
    );
}