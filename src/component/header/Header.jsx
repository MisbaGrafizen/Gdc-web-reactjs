import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../public/clinicLogo.png";
import AppointmentBookingModalRefined from "../modals/AppointmentBookingModalRefined";

export default function Header() {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentPath = location.pathname;

  const navLinks = [
    { path: "/home", label: "Home" },
    { path: "/about-us", label: "About Us" },
    { path: "/doctor-listing", label: "Doctors" },
    { path: "/subcriptions", label: "Subscription" },
    { path: "/contact-us", label: "Contact Us" },
  ];

  return (
    <>
      <div className="bg-[#fff] flex flex-col w-full font-Poppins !z-[1350] mx-auto fixed">

        {/* Top Bar */}
        <div className="w-full border-b px-[40px] hidden md:flex items-center justify-between bg-[#ffffff] h-[54px]">
          <div className="flex gap-[15px] w-fit">
            <div className="flex items-center gap-[4px]">
              <div className="flex md:w-[32px] w-[25px] h-[25px] md:h-[32px] justify-center items-center rounded-full bg-[#062f951d]">
                <i className="fa-solid fa-phone-volume text-[#062f95] text-[14px] md:text-[15px]"></i>
              </div>
              <p className="text-[10px] md:text-[13px] font-[500]">+91 9876543210</p>
            </div>

            <div className="flex items-center gap-[4px]">
              <div className="flex md:w-[32px] w-[25px] h-[25px] md:h-[32px] justify-center items-center rounded-full bg-[#062f951d]">
                <i className="fa-solid fa-envelope text-[#062f95] text-[15px]"></i>
              </div>
              <p className="text-[10px] md:text-[13px] font-[500]">contact@gdc.com</p>
            </div>
          </div>

          <div className="items-center px-[14px] gap-[10px] shadow-md flex w-[300px] h-[40px] border-[1.3px] rounded-[20px]">
            <i className="fa-regular fa-magnifying-glass"></i>
            <input
              placeholder="search for departments, doctors..."
              className="h-full font-[400] w-full text-[14px] outline-none"
              type="text"
            />
          </div>

          <div className="flex gap-2">
            {["facebook-f", "twitter", "instagram", "linkedin-in"].map((icon) => (
              <div key={icon} className="flex w-[36px] h-[36px] justify-center items-center rounded-full bg-[#062f951d]">
                <i className={`fab fa-${icon} text-[#062f95] text-[18px]`}></i>
              </div>
            ))}
          </div>
        </div>

        {/* Logo and Nav */}
        <div className="flex md:w-[84%] 2xl:w-[1330px] w-[90%] h-[50px] md:h-[62px] mt-[10px] mx-auto flex-col">
          <div className="flex w-full justify-between relative items-center">
            <Link className="w-fit" to="/">
              {/* <img className="w-[130px] md:w-[140px] bg-white" src={logo} alt="clinic Logo" /> */}
                            <h1 className=' font-[500] text-[45px] w-fit mx-auto leading-[40px] mb-[-20px] font-Borel-cursive text-[#062f95]'>gdc</h1>
            </Link>

            <div className="flex md:w-[80%] 2xl:w-[830px] mt-[5px] items-center justify-end px-[20px] md:items-start">
              <div className="w-fit flex justify-end">
                <div className="xl:text-[14px] gap-[15px] text-[#000] items-center pl-[20px] font-Montserrat mt-[-0.4%] flex font-[600] justify-end md36:hidden md:flex">
                  {navLinks.map(({ path, label }, index) => (
                    <React.Fragment key={path}>
                      <Link
                        to={path}
                        className={`cursor-pointer font-[400] font-Poppins ${currentPath === path ? "text-[#062f95]" : "text-[#000]"}`}
                      >
                        {label}
                      </Link>
                      {index !== navLinks.length - 1 && (
                        <span className="flex h-[22px] w-[1.5px] bg-[#062f95]"></span>
                      )}
                    </React.Fragment>
                  ))}

                  <button
                    className="flex text-[#fff] font-[500] py-[8px] w-fit px-[10px] rounded-[7px] bg-gradient-to-br from-[#1b2644] to-blue-600"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Appointment
                  </button>
                </div>
              </div>

              <span className="absolute h-[1px] bg-gradient-to-br from-[#1b2644] to-blue-600 top-[47px] hidden right-[-0.2%] md:flex w-[95%]"></span>
            </div>

            {/* Mobile Button */}
            <button
              className="flex md:hidden h-[35px] text-[#fff] text-[14px] font-[500] items-center w-fit px-[10px] rounded-[7px] bg-gradient-to-br from-[#1b2644] to-blue-600"
              onClick={() => setIsModalOpen(true)}
            >
              Appointment
            </button>
          </div>
        </div>
      </div>

      <AppointmentBookingModalRefined isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
