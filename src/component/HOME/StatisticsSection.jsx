import React from 'react'

export default function StatisticsSection() {
    return (
        <>

            <div className=' flex flex-col h-[274px]  relative w-[100%]'>

                <div className="  absolute top- flex items-center justify-center">
                    <h2 className="text-6xl  md:text-8xl lg:text-8xl font-bold text-gray-200 select-none pointer-events-none whitespace-nowrap tracking-wider">
                        GREEN ENERGY
                    </h2>
                </div>
                <section className="py-7 bg-gray-100 mt-[88px] relative overflow-hidden">
                    {/* Background Text */}


                    {/* Statistics Content */}
                    <div className="relative z-10 max-w-6xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Project Done */}
                            <div className="relative text-center">
                                <div className="text-[8em]  font-bold text-gray-300 select-none leading-none">
                                    21K
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-xl md:text-3xl text-gray-900 font-[600]">Project Done</div>
                                </div>
                            </div>

                            {/* Happy Client */}
                            <div className="relative text-center">
                                <div className="text-[8em]  font-bold text-gray-300 select-none leading-none">
                                    94K
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-xl md:text-3xl text-gray-900 font-[600]">Happy Client</div>
                                </div>
                            </div>

                            {/* Client Ratings */}
                            <div className="relative text-center">
                                 <div className="text-[8em]  font-bold text-gray-300 select-none leading-none">
                                    4.9
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-xl md:text-3xl text-gray-900 font-[600]">Client Ratings</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
