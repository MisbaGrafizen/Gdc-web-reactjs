import React, { useEffect, useState } from "react";
import "../src/App.css";
import { Route, Routes, useLocation } from "react-router-dom";





import Cookies from 'js-cookie';
import Home from "./pages/home/Home";

import ScrollToTop from "./component/ScrollToTop";
import AboutUsMainPage from "./pages/AboutUSPages/AboutUsMainPage";
import ServicePage from "./pages/service/ServicePage";
import ContactUs from "./pages/ContactUs";
import DoctorsListing from "./pages/OtherPages/DoctorsListing";
import DoctorDetails from "./pages/OtherPages/DoctorDetails";
import ProfilePage from "./pages/OtherPages/ProfilePage";
import SubscriptionPage from "./pages/OtherPages/SubscriptionPage";
import SubcriptionDetailsPage from "./pages/OtherPages/SubcriptionDetailsPage";
import PillPlaMainPage from "./pages/OtherPages/PillPal/PillPlaMainPage";
import HygoCardPopup from "./component/popups/HygoCardPopup";
import CardValidPage from "./pages/CardValidPage";
import LandingLogin from "./pages/home/LandingLogin";
import BottomBar from "./component/bottombar/BottomBar";
import Page from "./newMainFolder/app/page";



// import { io } from "socket.io-client";

// const socket = io("http://localhost:8000", {
//   transports: ["polling"], 
//    withCredentials: true, 
// });

function App() {
  const user = Cookies.get("user");

  // useEffect(() => {
  //   socket.on("connect", () => {
  //     console.log("Connected to Socket.IO server");
  //   });
  // }, []);

  return (
    <>
  
      <div className="w-100 ease-soft-spring h-[100%]  !bg-[#fbffff]  duration-1000 ">

<ScrollToTop />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Page />} />

           <Route path="/about-us" element={<AboutUsMainPage />} />
          {/* <Route path="/treatment" element={<ServicePage />} /> */}
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/doctor-listing" element={<DoctorsListing />} />
          <Route path="/doctor-details/:slug" element={<DoctorDetails />} />
          <Route path="/profilepage" element={<ProfilePage />} />
          <Route path="/subcriptions" element={<SubscriptionPage />} />
          <Route path="/subcriptions-details" element={<SubcriptionDetailsPage />} />
          <Route path="/pillpal" element={<PillPlaMainPage />} />
          <Route path="/mycard" element={<CardValidPage />} />







          {/*  */}











     


          



        </Routes>
        {/* </NotificationProvider> */}
      
      </div>
    </>
  );
}

export default App;
