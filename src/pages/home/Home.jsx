
import { useState, React } from "react";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";




import Faq from "../../component/HOME/Faqs";
import Testimonials from "../../component/HOME/Testimonials";
import Blog from "../../component/HOME/Blog";
import AboutUs from "../../component/HOME/AboutUs";
import MainServices from "../../component/HOME/MainServices";
import WhyChooseUs from "../../component/HOME/WhyChooseUs";
import ProfileCard from "../../component/reactBits/ProfileCardComponent";
import CoFounders from "../../component/HOME/CoFounders";
import Banner from "../../component/HOME/Banner";
import HeroSection from "../../component/HOME/HeroSection";
import BottomBar from "../../component/bottombar/BottomBar";



export default function Home() {



  return (
    <>
      {/* <Header /> */}
      <Header />
      <div className=" font-Poppins flex pt-[90px] gap-[100px] md:pt-[140px] flex-col bg-[#ffffff57] w-[100%] h-[100%]">
        <HeroSection />
        <div className=" flex flex-col gap-[70px]">


        <AboutUs />

        <Banner />
        <MainServices />
                </div>
        <WhyChooseUs />
        <CoFounders />
        <div className=" flex flex-col gap-[80px]">
          <div className=" flex flex-col gap-[90px]">
            <Faq />

            
          </div>
          <Blog />
        </div>
       

      </div>

 <Footer />
 <BottomBar />
    </>
  );
}
