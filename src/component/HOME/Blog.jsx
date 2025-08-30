import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Clock, User, ArrowRight, Tag, TrendingUp, Eye } from "lucide-react"

// Replace with real image imports or public paths
import iconImg1 from "../../../public/gdc/contactus/image1.webp";

import { BookOpen, Feather } from "lucide-react"

export default function Blog() {
  const [hoveredCard, setHoveredCard] = useState(null)

const blogPosts = [
  {
    id: 1,
    title: "How to Build a Daily Dental Care Routine That Works",
    excerpt:
      "From brushing to flossing and diet, learn practical tips to create a consistent oral hygiene routine that improves long-term dental health.",
    author: "Dr. Ayesha Mehta",
    date: "Aug 25, 2025",
    readTime: "6 min read",
    category: "Oral Hygiene",
    image: iconImg1,
    featured: true,
    trending: true,
    views: "3.2k",
  },
  {
    id: 2,
    title: "Why Regular Dental Checkups Matter More Than You Think",
    excerpt:
      "Routine checkups can help detect problems early — here's why skipping them may cost more in the long run.",
    author: "Dr. Kunal Singh",
    date: "Aug 22, 2025",
    readTime: "5 min read",
    category: "Prevention",
    image: iconImg1,
    featured: false,
    trending: true,
    views: "2.1k",
  },
  {
    id: 3,
    title: "Bleeding Gums? Here's What Your Mouth Is Trying to Tell You",
    excerpt:
      "Gum bleeding is not normal. Understand common causes and when to seek professional help.",
    author: "Dr. Meera Shah",
    date: "Aug 20, 2025",
    readTime: "4 min read",
    category: "Gum Health",
    image: iconImg1,
    featured: false,
    trending: false,
    views: "1.6k",
  },
  {
    id: 4,
    title: "How Diet Impacts Your Teeth: Foods to Embrace & Avoid",
    excerpt:
      "Did you know your daily meals directly affect your enamel? Find out which foods protect vs. harm your dental health.",
    author: "Dr. Rohan Patel",
    date: "Aug 18, 2025",
    readTime: "7 min read",
    category: "Nutrition",
    image: iconImg1,
    featured: false,
    trending: false,
    views: "2.4k",
  },
  {
    id: 5,
    title: "Top 5 Myths About Brushing Teeth—Busted!",
    excerpt:
      "Brushing harder isn’t better. Discover common brushing misconceptions and the truth behind them.",
    author: "Dr. Priya Bansal",
    date: "Aug 15, 2025",
    readTime: "6 min read",
    category: "Mythbusters",
    image: iconImg1,
    featured: false,
    trending: false,
    views: "1.9k",
  },
  {
    id: 6,
    title: "Sensitive Teeth: Causes, Treatments & Daily Care Tips",
    excerpt:
      "Struggling with tooth sensitivity? Learn about triggers, treatments, and how to ease pain naturally.",
    author: "Dr. Imran Qureshi",
    date: "Aug 12, 2025",
    readTime: "5 min read",
    category: "Tooth Sensitivity",
    image: iconImg1,
    featured: false,
    trending: false,
    views: "2.2k",
  },
];



  const getColorClasses = (color) => {
    const colors = {
      amber: {
        bg: "bg-amber-50",
        border: "border-amber-200",
        accent: "bg-amber-500",
        text: "text-amber-700",
        button: "bg-blue-900 hover:bg-amber-700",
        ribbon: "bg-gradient-to-r from-amber-400 to-orange-500",
      },
      rose: {
        bg: "bg-rose-50",
        border: "border-rose-200",
        accent: "bg-rose-500",
        text: "text-rose-700",
        button: "bg-rose-600 hover:bg-rose-700",
        ribbon: "bg-gradient-to-r from-rose-400 to-pink-500",
      },
      emerald: {
        bg: "bg-emerald-50",
        border: "border-emerald-200",
        accent: "bg-emerald-500",
        text: "text-emerald-700",
        button: "bg-emerald-600 hover:bg-emerald-700",
        ribbon: "bg-gradient-to-r from-emerald-400 to-green-500",
      },
      indigo: {
        bg: "bg-indigo-50",
        border: "border-indigo-200",
        accent: "bg-indigo-500",
        text: "text-indigo-700",
        button: "bg-indigo-600 hover:bg-indigo-700",
        ribbon: "bg-gradient-to-r from-indigo-400 to-blue-500",
      },
    }
    return colors[color] || colors.amber
  }



  return (
    // <div className="md:w-[100%]  md:px-[20px] font-Poppins relative  w-[90%] flex-col gap-[30px] mx-auto flex 2xl:w-[1370px]">



    //   <div>
    //     {/* <h3 className="text-[#083d5c]  border font-[600] px-[10px] rounded-full  py-[2px] border-[#f00] w-fit uppercase tracking-widest text-[14px]">Blogs</h3> */}
    //     <h1 className=' flex font-[600] text-[#0f0f0f] w-fit mx-auto  text-[30px] md:text-[37px]'>
    //       Latest Insights from City Smile
    //     </h1>
    //   </div>
    //   <div className="w-full flex flex-col md:gap-[20px]">
    //     <div className="flex w-full gap-[30px] flex-col justify-between">
    //       <div className="flex w-full gap-[19px] 2xl:gap-[29px] pl-[5px] overflow-x-auto flex-shrink-0 py-2">
    //         {blogPosts.map((post) => (
    //           <div
    //             key={post.id}
    //             className="md:w-[320px]  border shadow-icon  mb-[20px] 2xl:h-[440px] h-[440px] w-[260px] mx-auto md:mx-0 relative gap-[px] shadow-lg overflow-hidden rounded-[14px]  flex flex-col cursor-pointer flex-shrink-0"
    //             onClick={() => navigate(post.link)}
    //           >
    //             <img
    //               className="md:h-[220px] object-cover 2xl:h-[240px] h-[210px]"
    //               src={post.image}
    //               alt={post.title}
    //             />

    //             <div className="flex w-full pt-[px] px-[10px] flex-col mt-[10px] gap-[8px]">
    //               <div className="font-[600] text-[16px]">
    //                 <p className="flex font-Poppins font-[600] text-[#434343] leading-[22px]">
    //                   {post.title}
    //                 </p>
    //               </div>
    //               <div className="text-[14px] font-[400] text-[#646464]">
    //                 <p className="font-Poppins ">
    //                   {post.description}
    //                 </p>
    //               </div>
    //               <div className="text-[14px] w-full flex-col  cursor-pointer absolute bottom-3  text-[#083d5c] flex justify-start font-[600]">
    //                 <p className="font-Poppins">Read More</p>

    //                 <div className=" flex font-[400] text-[13px] text-[#848484]">
    //                   {post.date} | 02:34 AM
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </div>

    //       {/* Optional View More Button */}
    //       {/* <div className="w-[120px] mt-[15px] text-[#fff] py-[8px] cursor-pointer font-[600] anime-green-btn1 font-Redhat rounded-[10px] text-center mx-auto">
    //         <p>View More</p>
    //       </div> */}
    //     </div>
    //   </div>
    // </div>

    <>
      <section className="py-10  font-Poppins bg-gradient-to-b from-blue-50 to-orange-10">
        <div className=" mx-auto px-4">
          {/* Decorative Header */}
          <div className="text-center mb-10 relative">



            <h2 className="md:text-[45px]  text-[30px] font-[600] text-gray-800 mb-3 ">
          Secret stories behind<b className=" font-[600] text-[#062f95]">  Smile</b>

            </h2>


          </div>



          {/* Regular Articles - Masonry Layout */}
          <div className=" flex overflow-x-auto pb-[19px]  px-[20px]  w-[100%] gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={post.id}
                className={`group flex   relative flex-shrink-0 flex-col w-[290px] bg-white h-[370px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300  `}
              >
                {/* Image */}
                <div className="relative h-[190px] overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className={`w-full object-cover h-[100%] group-hover:scale-105 transition-transform duration-500 
                   
               `}
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>

                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-[18px] leading-[23px] font-[600] text-gray-900 mb-2 group-hover:text-[#062f95] transition-colors duration-300 ">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-2 text-[13px] line-clamp-3">{post.excerpt}</p>
                  <div className=" flex flex-col gap-[px] absolute bottom-5">


                    {/* <div className="flex items-center justify-between  text-sm text-gray-500 mb-">
                      <div className="flex items-center gap-3">
                        {/* <span className=" text-[10px]">{post.author}</span> 
                        <span>•</span>
                        <span className=" text-[10px]">{post.date}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className=" text-[10px]">{post.readTime}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          <span className=" text-[10px]">{post.views}</span>
                        </div>
                      </div>
                    </div> */}

                 
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>




      </section>



    </>
  );
}
