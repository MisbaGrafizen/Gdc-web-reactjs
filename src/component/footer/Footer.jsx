import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Phone, Mail, Instagram, Twitter, Facebook, Linkedin, ChevronRight, Send } from 'lucide-react'
import logo from "../../../public/Hygoblack.png"

import footerbg from "../../../public/footer-bg.png"
export default function Footer() {
  const [emailFocus, setEmailFocus] = useState(false)


  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Products", path: "/products" },
    { name: "Quality", path: "/quality-at-tirupati" },
    { name: "Value Addition", path: "/value-addition" },
    { name: "Why Us", path: "/why-us" },
  ];

  return (

    <>
      <footer className="ak-footer  bg-gradient-to-br rounded-t-[20px] md:rounded-t-[30px] from-slate-900 via-blue-900 to-slate-900  style-1  font-Poppins fixed-footer footer-bg">
        <div className="ak-footer-container pb-[20px] pt-[50px]">
          <img src={footerbg} className="footer-bg-img" alt="...." />
          <img src={footerbg} className="footer-bg-img1" alt="...." />
          <div className="  w-[90%] md:w-[90%]  mx-auto ">
            <div className="footer-content w-[99%] mx-auto">



       <div className="company-info md:hidden block md:pt-[60px] mx-auto md:w-[500px]">
                <a className="w-[100%] mx-auto">
                  <img className=' w-[250px] mx-auto mb-[30px]' src={logo} alt="..." />
                </a>
                <p className="text-[17px] md:text-[15px] text-center text-white mb-[20px]">
                  We are a team of dedicated financial experts committed to guiding you towards financial growth and success.
                </p>


                <div className="social-icon w-fit  mt-[50px] mx-auto">
                  <a href="#" className="icon">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 9 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.60386 14.7891L5.60386 8.40347H7.74638L8.06782 5.91416H5.60386V4.32509C5.60386 3.6046 5.80312 3.1136 6.83746 3.1136L8.15454 3.11306V0.886523C7.92677 0.856924 7.14492 0.789063 6.23492 0.789063C4.3347 0.789063 3.03378 1.94894 3.03378 4.07855L3.03378 5.91416H0.884766L0.884766 8.40347H3.03378L3.03378 14.7891H5.60386Z"
                        fill="white"
                      ></path>
                    </svg>
                  </a>
                  <a href="#" className="icon">
                    <svg
                      height="30"
                      viewBox="0 0 128 128"
                      width="30"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                    >
                      <g>
                        <path d="m16.452 47.708h20.914v62.915h-20.914z"></path>
                        <path d="m27.048 17.377c-7.155 0-11.838 4.695-11.838 10.868 0 6.041 4.545 10.877 11.562 10.877h.141c7.293 0 11.832-4.836 11.832-10.877-.138-6.173-4.539-10.868-11.697-10.868z"></path>
                        <path d="m88.706 46.229c-11.11 0-16.075 6.116-18.853 10.396v.204h-.135c.039-.064.096-.138.135-.204v-8.917h-20.916c.279 5.904 0 62.915 0 62.915h20.917v-35.137c0-1.884.141-3.754.693-5.1 1.515-3.761 4.954-7.65 10.734-7.65 7.569 0 10.597 5.772 10.597 14.227v33.661h20.914v-36.079c-.001-19.325-10.319-28.316-24.086-28.316z"></path>
                      </g>
                    </svg>
                  </a>
                  <a href="#" className="icon">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_77_259)">
                        <path
                          d="M10.7298 0.789062H4.3092C2.21954 0.789062 0.519531 2.48907 0.519531 4.57873V10.9995C0.519531 13.089 2.21954 14.789 4.3092 14.789H10.7299C12.8195 14.789 14.5195 13.089 14.5195 10.9995V4.57873C14.5195 2.48907 12.8195 0.789062 10.7298 0.789062ZM13.6988 10.9995C13.6988 12.6365 12.3669 13.9683 10.7298 13.9683H4.3092C2.6721 13.9683 1.34027 12.6365 1.34027 10.9995V4.57873C1.34027 2.94163 2.6721 1.6098 4.3092 1.6098H10.7299C12.3669 1.6098 13.6988 2.94163 13.6988 4.57873V10.9995Z"
                          fill="white"
                        ></path>
                        <path
                          d="M7.51942 3.96094C5.40861 3.96094 3.69141 5.67814 3.69141 7.78895C3.69141 9.89975 5.40861 11.617 7.51942 11.617C9.63022 11.617 11.3474 9.89975 11.3474 7.78895C11.3474 5.67814 9.63022 3.96094 7.51942 3.96094ZM7.51942 10.7962C5.86128 10.7962 4.51214 9.44719 4.51214 7.78895C4.51214 6.13081 5.86128 4.78168 7.51942 4.78168C9.17766 4.78168 10.5267 6.13081 10.5267 7.78895C10.5267 9.44719 9.17766 10.7962 7.51942 10.7962Z"
                          fill="white"
                        ></path>
                        <path
                          d="M11.4392 2.60156C10.8155 2.60156 10.3081 3.10902 10.3081 3.73269C10.3081 4.35647 10.8155 4.86393 11.4392 4.86393C12.063 4.86393 12.5705 4.35647 12.5705 3.73269C12.5705 3.10892 12.063 2.60156 11.4392 2.60156ZM11.4392 4.04309C11.2681 4.04309 11.1288 3.90381 11.1288 3.73269C11.1288 3.56148 11.2681 3.4223 11.4392 3.4223C11.6105 3.4223 11.7497 3.56148 11.7497 3.73269C11.7497 3.90381 11.6105 4.04309 11.4392 4.04309Z"
                          fill="white"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_77_259">
                          <rect
                            width="30"
                            height="30"
                            fill="white"
                            transform="translate(0.519531 0.789062)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a href="#" className="icon">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask id="path-1-inside-1_77_256" fill="white">
                        <path d="M8.82267 6.71711L13.9224 0.789062H12.7139L8.28583 5.9363L4.74911 0.789062H0.669922L6.01813 8.5726L0.669922 14.7891H1.87847L6.55467 9.3534L10.2897 14.7891H14.3689L8.82237 6.71711H8.82267ZM7.1674 8.64117L6.62551 7.86611L2.31392 1.69883H4.17018L7.64968 6.67602L8.19157 7.45109L12.7145 13.9207H10.8583L7.1674 8.64147V8.64117Z"></path>
                      </mask>
                      <path
                        d="M8.82267 6.71711L13.9224 0.789062H12.7139L8.28583 5.9363L4.74911 0.789062H0.669922L6.01813 8.5726L0.669922 14.7891H1.87847L6.55467 9.3534L10.2897 14.7891H14.3689L8.82237 6.71711H8.82267ZM7.1674 8.64117L6.62551 7.86611L2.31392 1.69883H4.17018L7.64968 6.67602L8.19157 7.45109L12.7145 13.9207H10.8583L7.1674 8.64147V8.64117Z"
                        fill="white"
                      ></path>
                      <path
                        d="M8.82267 6.71711V7.71711H9.28151L9.58075 7.36927L8.82267 6.71711ZM13.9224 0.789062L14.6805 1.44122L16.1018 -0.210938H13.9224V0.789062ZM12.7139 0.789062V-0.210938H12.2551L11.9559 0.136898L12.7139 0.789062ZM8.28583 5.9363L7.46164 6.50261L8.19703 7.57288L9.0439 6.58847L8.28583 5.9363ZM4.74911 0.789062L5.5733 0.222752L5.27531 -0.210938H4.74911V0.789062ZM0.669922 0.789062V-0.210938H-1.23051L-0.154267 1.35538L0.669922 0.789062ZM6.01813 8.5726L6.7762 9.22478L7.27845 8.64099L6.84232 8.00628L6.01813 8.5726ZM0.669922 14.7891L-0.0881395 14.1369L-1.50956 15.7891H0.669922V14.7891ZM1.87847 14.7891V15.7891H2.33731L2.63655 15.4412L1.87847 14.7891ZM6.55467 9.3534L7.37885 8.78708L6.64345 7.71684L5.79659 8.70124L6.55467 9.3534ZM10.2897 14.7891L9.46552 15.3554L9.76351 15.7891H10.2897V14.7891ZM14.3689 14.7891V15.7891H16.2693L15.1931 14.2227L14.3689 14.7891ZM8.82237 6.71711V5.71711H6.92191L7.99819 7.28343L8.82237 6.71711ZM7.1674 8.64117H8.1674V8.32626L7.98696 8.06818L7.1674 8.64117ZM6.62551 7.86611L5.80594 8.43908L5.80595 8.4391L6.62551 7.86611ZM2.31392 1.69883V0.698834H0.394671L1.49435 2.27181L2.31392 1.69883ZM4.17018 1.69883L4.98976 1.12587L4.69122 0.698834H4.17018V1.69883ZM7.64968 6.67602L6.8301 7.24898L6.83012 7.24902L7.64968 6.67602ZM8.19157 7.45109L9.01114 6.87811L9.01113 6.87809L8.19157 7.45109ZM12.7145 13.9207V14.9207H14.6338L13.5341 13.3477L12.7145 13.9207ZM10.8583 13.9207L10.0387 14.4936L10.3372 14.9207H10.8583V13.9207ZM7.1674 8.64147H6.1674V8.95637L6.34783 9.21445L7.1674 8.64147ZM9.58075 7.36927L14.6805 1.44122L13.1643 0.136904L8.06458 6.06495L9.58075 7.36927ZM13.9224 -0.210938H12.7139V1.78906H13.9224V-0.210938ZM11.9559 0.136898L7.52775 5.28414L9.0439 6.58847L13.472 1.44123L11.9559 0.136898ZM9.11002 5.36999L5.5733 0.222752L3.92492 1.35537L7.46164 6.50261L9.11002 5.36999ZM4.74911 -0.210938H0.669922V1.78906H4.74911V-0.210938ZM-0.154267 1.35538L5.19395 9.13891L6.84232 8.00628L1.49411 0.222747L-0.154267 1.35538ZM5.26007 7.92041L-0.0881395 14.1369L1.42798 15.4412L6.7762 9.22478L5.26007 7.92041ZM0.669922 15.7891H1.87847V13.7891H0.669922V15.7891ZM2.63655 15.4412L7.31275 10.0056L5.79659 8.70124L1.12039 14.1369L2.63655 15.4412ZM5.73048 9.91973L9.46552 15.3554L11.1139 14.2227L7.37885 8.78708L5.73048 9.91973ZM10.2897 15.7891H14.3689V13.7891H10.2897V15.7891ZM15.1931 14.2227L9.64655 6.15078L7.99819 7.28343L13.5447 15.3554L15.1931 14.2227ZM8.82237 7.71711H8.82267V5.71711H8.82237V7.71711ZM7.98696 8.06818L7.44507 7.29311L5.80595 8.4391L6.34784 9.21417L7.98696 8.06818ZM7.44509 7.29314L3.1335 1.12586L1.49435 2.27181L5.80594 8.43908L7.44509 7.29314ZM2.31392 2.69883H4.17018V0.698834H2.31392V2.69883ZM3.3506 2.2718L6.8301 7.24898L8.46926 6.10306L4.98976 1.12587L3.3506 2.2718ZM6.83012 7.24902L7.37201 8.02408L9.01113 6.87809L8.46924 6.10303L6.83012 7.24902ZM7.37199 8.02406L11.8949 14.4936L13.5341 13.3477L9.01114 6.87811L7.37199 8.02406ZM12.7145 12.9207H10.8583V14.9207H12.7145V12.9207ZM11.6778 13.3477L7.98696 8.06848L6.34783 9.21445L10.0387 14.4936L11.6778 13.3477ZM8.1674 8.64147V8.64117H6.1674V8.64147H8.1674Z"
                        fill="white"
                        mask="url(#path-1-inside-1_77_256)"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>



              <div className="footer-nav flex md:!w-[400px] justify-between flex-col">

                <div className="footer-link">

                  {/* <div className="link-content">
                    <h5 className="short-title">Services</h5>
                    <ul className="linek-all">
                      <li>
                        <a className=' cursor-pointer'>Financial Planning</a>
                      </li>
                      <li>
                        <a className=' cursor-pointer'>Medical Specialist</a>
                      </li>
                      <li>
                        <a className=' cursor-pointer'>Retirement Planning</a>
                      </li>
                      <li>
                        <a className=' cursor-pointer'>Risk Management</a>
                      </li>
                      <li>
                        <a className=' cursor-pointer'>Tax Planning</a>
                      </li>
                    </ul>
                  </div> */}
                  <div className="link-content   md:w-[400px]">
                    <h5 className="short-title">Clinic Address</h5>
                    <ul className="linek-all ">
                      <li>
                        <a
                          href="https://www.google.com/maps"
                          className="mb-3"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                         It has survived not only five centuries, but also the leap into electronic
                        </a>
                      </li>
                      <li>
                        <a href="tel:+919169191291" className="mb-3">
                          <span className="ak-font-20">Phone : </span>
                          +91 8849642442
                        </a>
                      </li>
                      <li>
                        <a href="mailto:grafizeninc@gmail.com" className="mb-3">
                          <span className="ak-font-20">Email : </span>{" "}

                          info@gdcdental care.com
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="link-content   w-[400px]">
                    <h5 className="short-title">Office Address</h5>
                    <ul className="linek-all ">
                      <li>
                        <a
                          href="https://www.google.com/maps"
                          className="mb-3"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          303, Om Decora, 9 Square 150ft ring road nana mauva
                          Rajkot, Gujarat 360003
                        </a>
                      </li>
                      <li>
                        <a href="tel:+919169191291" className="mb-3">
                          <span className="ak-font-20">Phone : </span>
                          +91 8849642442
                        </a>
                      </li>
                      <li>
                        <a href="mailto:grafizeninc@gmail.com" className="mb-3">
                          <span className="ak-font-20">Email : </span>{" "}

                          info@gdcdentalcare.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="company-info md:block hidden  grid-cols-2 pt-[60px] w-[500px]">
                <a className="w-[100%] mx-auto">
              <h1 className=' font-[500] text-[85px] w-fit mx-auto leading-[80px] font-Borel-cursive text-[#fff]'>gdc</h1>
                </a>
                <p className="text-[17px] md:text-[15px] mt-[40px] text-center text-white mb-[20px]">
                  We are a team of dedicated financial experts committed to guiding you towards financial growth and success.
                </p>


                <div className="social-icon w-fit  mt-[30px] mx-auto">
                  <a href="#" className="icon">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 9 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.60386 14.7891L5.60386 8.40347H7.74638L8.06782 5.91416H5.60386V4.32509C5.60386 3.6046 5.80312 3.1136 6.83746 3.1136L8.15454 3.11306V0.886523C7.92677 0.856924 7.14492 0.789063 6.23492 0.789063C4.3347 0.789063 3.03378 1.94894 3.03378 4.07855L3.03378 5.91416H0.884766L0.884766 8.40347H3.03378L3.03378 14.7891H5.60386Z"
                        fill="white"
                      ></path>
                    </svg>
                  </a>
                  <a href="#" className="icon">
                    <svg
                      height="30"
                      viewBox="0 0 128 128"
                      width="30"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                    >
                      <g>
                        <path d="m16.452 47.708h20.914v62.915h-20.914z"></path>
                        <path d="m27.048 17.377c-7.155 0-11.838 4.695-11.838 10.868 0 6.041 4.545 10.877 11.562 10.877h.141c7.293 0 11.832-4.836 11.832-10.877-.138-6.173-4.539-10.868-11.697-10.868z"></path>
                        <path d="m88.706 46.229c-11.11 0-16.075 6.116-18.853 10.396v.204h-.135c.039-.064.096-.138.135-.204v-8.917h-20.916c.279 5.904 0 62.915 0 62.915h20.917v-35.137c0-1.884.141-3.754.693-5.1 1.515-3.761 4.954-7.65 10.734-7.65 7.569 0 10.597 5.772 10.597 14.227v33.661h20.914v-36.079c-.001-19.325-10.319-28.316-24.086-28.316z"></path>
                      </g>
                    </svg>
                  </a>
                  <a href="#" className="icon">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_77_259)">
                        <path
                          d="M10.7298 0.789062H4.3092C2.21954 0.789062 0.519531 2.48907 0.519531 4.57873V10.9995C0.519531 13.089 2.21954 14.789 4.3092 14.789H10.7299C12.8195 14.789 14.5195 13.089 14.5195 10.9995V4.57873C14.5195 2.48907 12.8195 0.789062 10.7298 0.789062ZM13.6988 10.9995C13.6988 12.6365 12.3669 13.9683 10.7298 13.9683H4.3092C2.6721 13.9683 1.34027 12.6365 1.34027 10.9995V4.57873C1.34027 2.94163 2.6721 1.6098 4.3092 1.6098H10.7299C12.3669 1.6098 13.6988 2.94163 13.6988 4.57873V10.9995Z"
                          fill="white"
                        ></path>
                        <path
                          d="M7.51942 3.96094C5.40861 3.96094 3.69141 5.67814 3.69141 7.78895C3.69141 9.89975 5.40861 11.617 7.51942 11.617C9.63022 11.617 11.3474 9.89975 11.3474 7.78895C11.3474 5.67814 9.63022 3.96094 7.51942 3.96094ZM7.51942 10.7962C5.86128 10.7962 4.51214 9.44719 4.51214 7.78895C4.51214 6.13081 5.86128 4.78168 7.51942 4.78168C9.17766 4.78168 10.5267 6.13081 10.5267 7.78895C10.5267 9.44719 9.17766 10.7962 7.51942 10.7962Z"
                          fill="white"
                        ></path>
                        <path
                          d="M11.4392 2.60156C10.8155 2.60156 10.3081 3.10902 10.3081 3.73269C10.3081 4.35647 10.8155 4.86393 11.4392 4.86393C12.063 4.86393 12.5705 4.35647 12.5705 3.73269C12.5705 3.10892 12.063 2.60156 11.4392 2.60156ZM11.4392 4.04309C11.2681 4.04309 11.1288 3.90381 11.1288 3.73269C11.1288 3.56148 11.2681 3.4223 11.4392 3.4223C11.6105 3.4223 11.7497 3.56148 11.7497 3.73269C11.7497 3.90381 11.6105 4.04309 11.4392 4.04309Z"
                          fill="white"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_77_259">
                          <rect
                            width="30"
                            height="30"
                            fill="white"
                            transform="translate(0.519531 0.789062)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a href="#" className="icon">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask id="path-1-inside-1_77_256" fill="white">
                        <path d="M8.82267 6.71711L13.9224 0.789062H12.7139L8.28583 5.9363L4.74911 0.789062H0.669922L6.01813 8.5726L0.669922 14.7891H1.87847L6.55467 9.3534L10.2897 14.7891H14.3689L8.82237 6.71711H8.82267ZM7.1674 8.64117L6.62551 7.86611L2.31392 1.69883H4.17018L7.64968 6.67602L8.19157 7.45109L12.7145 13.9207H10.8583L7.1674 8.64147V8.64117Z"></path>
                      </mask>
                      <path
                        d="M8.82267 6.71711L13.9224 0.789062H12.7139L8.28583 5.9363L4.74911 0.789062H0.669922L6.01813 8.5726L0.669922 14.7891H1.87847L6.55467 9.3534L10.2897 14.7891H14.3689L8.82237 6.71711H8.82267ZM7.1674 8.64117L6.62551 7.86611L2.31392 1.69883H4.17018L7.64968 6.67602L8.19157 7.45109L12.7145 13.9207H10.8583L7.1674 8.64147V8.64117Z"
                        fill="white"
                      ></path>
                      <path
                        d="M8.82267 6.71711V7.71711H9.28151L9.58075 7.36927L8.82267 6.71711ZM13.9224 0.789062L14.6805 1.44122L16.1018 -0.210938H13.9224V0.789062ZM12.7139 0.789062V-0.210938H12.2551L11.9559 0.136898L12.7139 0.789062ZM8.28583 5.9363L7.46164 6.50261L8.19703 7.57288L9.0439 6.58847L8.28583 5.9363ZM4.74911 0.789062L5.5733 0.222752L5.27531 -0.210938H4.74911V0.789062ZM0.669922 0.789062V-0.210938H-1.23051L-0.154267 1.35538L0.669922 0.789062ZM6.01813 8.5726L6.7762 9.22478L7.27845 8.64099L6.84232 8.00628L6.01813 8.5726ZM0.669922 14.7891L-0.0881395 14.1369L-1.50956 15.7891H0.669922V14.7891ZM1.87847 14.7891V15.7891H2.33731L2.63655 15.4412L1.87847 14.7891ZM6.55467 9.3534L7.37885 8.78708L6.64345 7.71684L5.79659 8.70124L6.55467 9.3534ZM10.2897 14.7891L9.46552 15.3554L9.76351 15.7891H10.2897V14.7891ZM14.3689 14.7891V15.7891H16.2693L15.1931 14.2227L14.3689 14.7891ZM8.82237 6.71711V5.71711H6.92191L7.99819 7.28343L8.82237 6.71711ZM7.1674 8.64117H8.1674V8.32626L7.98696 8.06818L7.1674 8.64117ZM6.62551 7.86611L5.80594 8.43908L5.80595 8.4391L6.62551 7.86611ZM2.31392 1.69883V0.698834H0.394671L1.49435 2.27181L2.31392 1.69883ZM4.17018 1.69883L4.98976 1.12587L4.69122 0.698834H4.17018V1.69883ZM7.64968 6.67602L6.8301 7.24898L6.83012 7.24902L7.64968 6.67602ZM8.19157 7.45109L9.01114 6.87811L9.01113 6.87809L8.19157 7.45109ZM12.7145 13.9207V14.9207H14.6338L13.5341 13.3477L12.7145 13.9207ZM10.8583 13.9207L10.0387 14.4936L10.3372 14.9207H10.8583V13.9207ZM7.1674 8.64147H6.1674V8.95637L6.34783 9.21445L7.1674 8.64147ZM9.58075 7.36927L14.6805 1.44122L13.1643 0.136904L8.06458 6.06495L9.58075 7.36927ZM13.9224 -0.210938H12.7139V1.78906H13.9224V-0.210938ZM11.9559 0.136898L7.52775 5.28414L9.0439 6.58847L13.472 1.44123L11.9559 0.136898ZM9.11002 5.36999L5.5733 0.222752L3.92492 1.35537L7.46164 6.50261L9.11002 5.36999ZM4.74911 -0.210938H0.669922V1.78906H4.74911V-0.210938ZM-0.154267 1.35538L5.19395 9.13891L6.84232 8.00628L1.49411 0.222747L-0.154267 1.35538ZM5.26007 7.92041L-0.0881395 14.1369L1.42798 15.4412L6.7762 9.22478L5.26007 7.92041ZM0.669922 15.7891H1.87847V13.7891H0.669922V15.7891ZM2.63655 15.4412L7.31275 10.0056L5.79659 8.70124L1.12039 14.1369L2.63655 15.4412ZM5.73048 9.91973L9.46552 15.3554L11.1139 14.2227L7.37885 8.78708L5.73048 9.91973ZM10.2897 15.7891H14.3689V13.7891H10.2897V15.7891ZM15.1931 14.2227L9.64655 6.15078L7.99819 7.28343L13.5447 15.3554L15.1931 14.2227ZM8.82237 7.71711H8.82267V5.71711H8.82237V7.71711ZM7.98696 8.06818L7.44507 7.29311L5.80595 8.4391L6.34784 9.21417L7.98696 8.06818ZM7.44509 7.29314L3.1335 1.12586L1.49435 2.27181L5.80594 8.43908L7.44509 7.29314ZM2.31392 2.69883H4.17018V0.698834H2.31392V2.69883ZM3.3506 2.2718L6.8301 7.24898L8.46926 6.10306L4.98976 1.12587L3.3506 2.2718ZM6.83012 7.24902L7.37201 8.02408L9.01113 6.87809L8.46924 6.10303L6.83012 7.24902ZM7.37199 8.02406L11.8949 14.4936L13.5341 13.3477L9.01114 6.87811L7.37199 8.02406ZM12.7145 12.9207H10.8583V14.9207H12.7145V12.9207ZM11.6778 13.3477L7.98696 8.06848L6.34783 9.21445L10.0387 14.4936L11.6778 13.3477ZM8.1674 8.64147V8.64117H6.1674V8.64147H8.1674Z"
                        fill="white"
                        mask="url(#path-1-inside-1_77_256)"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="new-letter-email">
                <div className="link-content">
                  <h5 className="short-title md:justify-end flex text">Link </h5>
                  <ul className="linek-all1 md:text-right">
                    <li>
                      <a href='/' className=' cursor-pointer'>Home </a>
                    </li>
                    <li>
                      <a href='/about-us' className=' cursor-pointer'>About Us</a>
                    </li>

                    <li>
                      <a href='/' className=' cursor-pointer'>Our Services</a>
                    </li>
                    <li>
                      <a href='/doctor-listing' className=' cursor-pointer'>Our Doctors
                      </a>
                    </li>

                    <li>
                      <a  href="/blogs" className=' cursor-pointer'>News & Updates</a>
                    </li>
                    <li>
                      <a href='/contact-us' className=' cursor-pointer'>Contact Us</a>
                    </li>
                  </ul>
                </div>
                <div className="new-letter">
                  <h5 className="title text-center md:text-right">Newsletter Signup</h5>
                  <p className="desp text-[13px] leading-5 text-center md:text-right text-[#d5d5d5]">
                    As we enter the second quarter of the year, global markets
                    continue to show resilience.
                  </p>
                </div>
                <form className="email-content">
                  <form className="mt-2 relative">
                    <input
                      type="email"
                      placeholder="Your Email Address"
                      className={`w-full px-4 py-[10px]  bg-[#fff] border-[1.3px] font-Poppins font-[400]  text-white  border-[#fff] rounded-[9px]  focus:outline-none transition-all duration-200 ${emailFocus ? "ring-2 ring-[#005c95] ring-opacity-50" : ""
                        }`}
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                    />
                    <button
                      type="submit"
                      className="absolute border w-[36px] h-[32px] bg-[#062f95] right-2 mr-[2px] top-[7px] font-Poppins  text-[#fff] flex justify-center items-center rounded-md hover:bg-opacity-90 transition-colors duration-200"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                  <p className="text-[#d3d0d0] text-center md:text-right mb-[10px] mt-[6px]">Stay updated with our advisory</p>
                </form>
              </div>

            </div>
            <div className="mt-[7px] pt-[15px] border-t-[1.5px] border-[#ffffff] border-opacity-20 flex flex-col md:flex-row justify-between items-center  md:space-y-0">

              <p className="text-[13px]   mx-auto font-Poppins text-center  text-[#ffffff]">
                © 2025 All Rights Reserved by Gdc Dental care || Designed and Developed
                with ❤️   by Grafizen International LLC
              </p>


              {/* <div className="md:flex hidden space-x-6">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                  <a key={index} href="#" className="text-[12px]   text-[#fff] font-[400]  font-Poppins hover:text-[#2b2725] transition-colors duration-200">
                    {item}
                  </a>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </footer>

      {/* <footer className="bg-white border-[1px] aspectdesign mt-[40px]   w-[100%]  md:h-[390px] h-[900px]  text-icon pb-8 font-sans relative md:overflow-hidden">

            <video className='flex w-[100%] absolute object-cover shadow-sm  opacity-[0.4] h-[100%]' src={videoback} muted loop autoPlay ></video>
            <div className=' flex bg-[#36363695] w-[100%] h-[100%] absolute'>

            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-[40px] lg:px-8 relative z-10">
\
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-4">

                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                              <img   className="w-[230px] " src={fevicon} />

                        <p className="text-sm leading-relaxed  font-Poppins">
The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                        </p>
                        <div className="flex space-x-4">
                            {[Instagram, Twitter, Facebook, Linkedin].map((Icon, index) => (
                                <motion.a
                                    key={index}
                                    href="#"
                                    className="p-2 bg-[#fff] bg-opacity-10 rounded-full  text-icon hover:bg-opacity-20 transition-all duration-200"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <div className=' flex md:hidden   w-[100%]'>
                   
                        <motion.div
                            className="space-y-6  w-[400px]"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <h3 className="text-xl font-semibold  text-icon  font-Manrope">Quick Links</h3>
                            <ul className="w-fit">
                                {navItems.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: 0.1 * index }}
                                    >
                                        <Link
                                            to={item.path}
                                            className="group flex w-fit items-center space-x-2  text-icon hover: text-icon transition-colors duration-200"
                                        >
                                            <span className="w-0 group-hover:w-4  font-Poppins transition-all duration-200 overflow-hidden">
                                                <ChevronRight className="w-4 h-4  text-icon" />
                                            </span>
                                            <span className="border-b  font-Poppins border-transparent group-hover:border-[#fff] font-[400] transition-colors duration-200">
                                                {item.name}
                                            </span>
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                    
                        <motion.div
                            className="space-y-6 "
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h3 className="text-xl font-semibold font-Manrope  text-icon">Contact Us</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3">
                                    <MapPin className="w-5 h-5  text-icon mt-1 flex-shrink-0" />
                                    <span className="text-sm  font-Poppins">813, B Wing, Om Decora 9 Square, Nana mauva road, St 9, beside Marwadi, Rajkot, Gujarat 360005</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Phone className="w-5 h-5  text-icon flex-shrink-0" />
                                    <span className="text-sm  font-Poppins">+91 987 654 3210</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Mail className="w-5 h-5  text-icon flex-shrink-0" />
                                    <span className="text-sm  font-Poppins">info@iconindustries.com</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                    
                    <motion.div
                        className="space-y-6 md:block hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h3 className="text-xl font-semibold  text-icon  font-Manrope">Quick Links</h3>
                        <ul className="w-fit">
                            {navItems.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 * index }}
                                >
                                    <Link
                                        to={item.path}
                                        className="group flex w-fit items-center space-x-2  text-icon hover: text-icon transition-colors duration-200"
                                    >
                                        <span className="w-0 group-hover:w-4  font-Poppins transition-all duration-200 overflow-hidden">
                                            <ChevronRight className="w-4 h-4  text-icon" />
                                        </span>
                                        <span className="border-b  font-Poppins border-transparent group-hover:border-[#fff] !font-[400] transition-colors duration-200">
                                            {item.name}
                                        </span>
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        className="space-y-6 md:block hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-xl font-semibold font-Manrope  text-icon">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5  text-icon mt-1 flex-shrink-0" />
                                <span className="text-sm  font-Poppins">813, B Wing, Om Decora 9 Square, Nana mauva road, St 9, beside Marwadi, Rajkot, Gujarat 360005</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5  text-icon flex-shrink-0" />
                                <span className="text-sm  font-Poppins">+91 987 654 3210</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5  text-icon flex-shrink-0" />
                                <span className="text-sm  font-Poppins">info@iconindustries.com</span>
                            </li>
                        </ul>
                    </motion.div>
                    <div className="md:hidden flex  mx-auto  space-x-6">
                        {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                            <a key={index} href="#" className="text-sm  text-icon font-[500]  font-Poppins hover:text-[#2b2725] transition-colors duration-200">
                                {item}
                            </a>
                        ))}
                    </div>
                
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >

                        <h3 className="text-xl font-semibold  text-icon  font-Manrope">Stay Updated</h3>
                        <p className="text-sm  font-Poppins">Subscribe to our newsletter for exclusive offers and updates.</p>
                        <form className="mt-2 relative">
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className={`w-full px-4 py-3 bg-[#fff]  font-Poppins font-[500] bg-opacity-5  text-icon rounded-lg focus:outline-none transition-all duration-200 ${emailFocus ? 'ring-2 ring-[#fff] ring-opacity-50' : ''
                                    }`}
                                onFocus={() => setEmailFocus(true)}
                                onBlur={() => setEmailFocus(false)}
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-2  font-Poppins p-2 bg-[#fff] text-black rounded-md hover:bg-opacity-90 transition-colors duration-200"
                            >
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                </div>

               
                <div className="mt-[7px] pt-[20px] border-t-[1.5px] border-[#ffffff] border-opacity-20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
                    <p className="text-[13px]  font-Poppins text-center  text-[#ffffff]">
                        © 2025 All Rights Reserved by Icon Industries || Designed and Developed
                        with ❤️   by Grafizen International LLC
                    </p>

                
                    <div className="md:flex hidden space-x-6">
                        {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                            <a key={index} href="#" className="text-sm  text-icon font-[400]  font-Poppins hover:text-[#2b2725] transition-colors duration-200">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer> */}

    </>
  )
}

