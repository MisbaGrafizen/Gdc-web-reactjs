import React from 'react'
import ProfileCard from '../reactBits/ProfileCardComponent'
import Pryank from "../../../public/CoFounders/Priyank.png"
import Haard from "../../../public/CoFounders/Haard Vasavada.png"
import Shrut from "../../../public/CoFounders/Shrut.png"
import TiltedCard from '../reactBits/TiltedCard'





export default function CoFounders() {
    return (
        <>
            <div className=" px-4">
                <div className="md:w-[85%] mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-10">
                        {/* <h3 className="text-[#062f95] border font-[600] px-[10px] bg-[#062f95]/10  rounded-full  py-[2px] border-[#062f95] w-fit uppercase tracking-widest text-[14px] mx-auto mb-2">TESTIMONIALS</h3> */}
                        <h1 className="text-4xl md:text-[40px] font-[600] text-gray-900 mb-3">
                            Meet Our Founders

                        </h1>


                    </div>

                    <div className=' flex md:w-[85%] gap-[30px] md:gap-[40px] mt-[40px] md11:overflow-visible overflow-x-auto mx-auto justify-between  '>


                        <TiltedCard
                            // imageSrc={Pryank}
                            // altText="Dr. Priyank Vasavada"
                            // captionText="Dr. Priyank Vasavada"
                            containerHeight="380px"
                            containerWidth="300px"
                            imageHeight="350px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.1}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            // overlayContent={
                            //     <p className="tilted-card-demo-text">
                            //         Dr. Priyank Vasavada
                            //     </p>
                            // }
                        />



                        <TiltedCard
                            // imageSrc={Shrut}
                            // altText="Dr. Shrut Vasavada"
                            // captionText="Dr. Shrut Vasavada"
                           containerHeight="380px"
                            containerWidth="300px"
                            imageHeight="350px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.1}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            // overlayContent={
                            //     <p className="tilted-card-demo-text">
                            //       Dr. Shrut Vasavada
                            //     </p>
                            // }
                        />
                

                                     <TiltedCard
                            // imageSrc={Haard}
                            // altText="Dr. Haard Vasavada"
                            // captionText="Dr. Haard Vasavada"
                           containerHeight="380px"
                            containerWidth="300px"
                            imageHeight="350px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.1}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            // overlayContent={
                            //     <p className="tilted-card-demo-text">
                            //       Dr. Haard Vasavada
                            //     </p>
                            // }
                        />
                    </div>

                </div>
            </div>
        </>
    )
}
