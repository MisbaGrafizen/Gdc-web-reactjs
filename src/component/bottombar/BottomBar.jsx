import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function BottomBar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine the active tab based on the current pathname
  const getActiveTab = () => {
    const path = location.pathname;
    if (path === "/home") return "Home";
    if (path === "/about-us") return "About";
    if (path === "/doctor-listing") return "Doctros";
    if (path === "/contact-us") return "Contact";
    if (path === "/my-account") return "Cart";
    return ""; // Default for unknown paths
  };

  const activeTab = getActiveTab();

  const handleMyOrderClick = () => {

    // Navigate to My Account with the "orders" tab selected
    navigate("/my-account", { state: { selectedMenu: "orders" } });

  };

  return (
    <>
      <div className="md:hidden flex  items-center  w] bg-gradient-to-br from-[#1b2644] to-blue-600  px-[10px] w-[96%] rounded-[10px] shadow-md h-[70px] z-[1000] fixed bottom-[10px] left-0 right-0 mx-auto bg-white justify-around gap-[10px]">
        {/* Home */}
        <div
          onClick={() => navigate("/")}
          className={`flex font-Montserrat gap-[3px] px-[11px] py-[5px] flex-col items-center justify-center cursor-pointer rounded-[8px] ${activeTab === "Home" ? "border-[1.5px] border-[#fff] icon_bottom  bg-[#fff] text-[#1b2644]" : "border-none text-[#fff]"
            }`}
        >
          <i
            className="fa-solid fa-house text-[20px]"

          ></i>
          <p
            className="font-Montserrat text-[10px] font-[600]"

          >
            Home
          </p>
        </div>

        {/* About */}
        <div
          onClick={() => navigate("/about-us")}
          className={`flex font-Montserrat gap-[3px] px-[12px] py-[7px] flex-col items-center justify-center cursor-pointer rounded-[8px] ${activeTab === "About" ? "border-[1.5px] border-[#fff] icon_bottom  bg-[#fff] text-[#1b2644]" : "border-none text-[#fff]"
            }`}
        >
          <i
            className="fa-regular fa-circle-info text-[20px]"

          ></i>
          <p
            className="font-Montserrat text-[10px] font-[600]"

          >
            About
          </p>
        </div>

        {/* Blogs */}
        <div
          onClick={() => navigate("/doctor-listing")}
          className={`flex font-Montserrat gap-[3px] px-[4px] py-[4px] flex-col items-center justify-center cursor-pointer rounded-[8px] ${activeTab === "Doctros" ? "border-[1.5px] border-[#fff] icon_bottom  bg-[#fff] text-[#1b2644]" : "border-none text-[#fff]"
            }`}
        >
          <i className=" text-[20px] fa-solid fa-user-doctor"></i>
          <p
            className="font-Montserrat text-[10px] font-[600]"

          >
            Doctors
          </p>
        </div>

        {/* Support */}


        {/* Cart */}
        <div
          onClick={handleMyOrderClick}
          className={`flex font-Montserrat gap-[3px] px-[12px] py-[7px] flex-col items-center justify-center cursor-pointer rounded-[8px] ${activeTab === "Cart" ? "border-[1.5px] border-[#fff] icon_bottom  bg-[#fff] text-[#1b2644]" : "border-none text-[#fff]"
            }`}
        >
<i className=" fa-solid text-[20px] fa-calendar-check"></i>
          <p
            className="font-Montserrat text-[10px] font-[600]"

          >
            Appoinments
          </p>
        </div>

                <div
          onClick={() => navigate("/contact-us")}
          className={`flex font-Montserrat gap-[3px] px-[10px] py-[7px] flex-col items-center justify-center cursor-pointer rounded-[8px] ${activeTab === "Contact" ? "border-[1.5px] border-[#fff] icon_bottom  bg-[#fff] text-[#1b2644]" : "border-none text-[#fff]"
            }`}
        >
          <i
            className="fa-solid fa-user-headset text-[20px]"

          ></i>
          <p
            className="font-Montserrat text-[10px] font-[600]"

          >
           Contact
          </p>
        </div>
      </div>

    </>
  );
}