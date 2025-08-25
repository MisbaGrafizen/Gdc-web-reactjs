import React from 'react'
import Header from '../../component/header/Header'
import card1 from "../../../public/card/cardbasic.png"
import card2 from "../../../public/card/cardGold.png"
import profile from '../../../public/testimonials/boy1.jpg'
import Footer from '../../component/footer/Footer'
export default function SubcriptionDetailsPage({ cardType }) {


    return (
        <>

            {/* <Header /> */}
            <Header />
            <div className="min-h-screen  pt-[120px] font-Poppins bg-gray-50">
                {/* Header */}
                <div className="bg-white shadow-sm border-b">
                    <div className="max-w-7xl mx-auto px-6 py-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <button

                                    className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
                                >
                                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                              
                                </button>
                                <h1 className="text-2xl font-bold text-gray-800">Health Card Details</h1>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 py-8">
                    <div className="grid lg:grid-cols-3 gap-8 mb-[20px]">
                        {/* Left Column - Health Card */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl border  p-5 shadow-lg overflow-hidden sticky top-8">
                                {/* Health Card */}
                                <img className=' mb-[40px] shadow-md rounded-[16px]' src={card2} />

                                {/* Action Buttons */}
                                <div className="">
                                    <div className="grid grid-cols-3 gap-2 mb-">
                                        <button className="flex   border-[1.2px] border-blue-300 flex-col items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                            <svg className="w-6 h-6 text-blue-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                                                />
                                            </svg>
                                            <span className="text-sm font-medium text-gray-700">Share</span>
                                        </button>
                                        <button className="flex flex-col  border-[1.2px] border-green-300  items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                                            <svg className="w-6 h-6 text-green-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                />
                                            </svg>
                                            <span className="text-sm font-medium text-gray-700">Download</span>
                                        </button>
                                        <button className="flex flex-col  border-[1.2px] border-purple-200 items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                            <svg className="w-6 h-6 text-purple-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V6a1 1 0 00-1-1H5a1 1 0 00-1 1v1a1 1 0 001 1z"
                                                />
                                            </svg>
                                            <span className="text-sm font-medium text-gray-700">QR Code</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Details */}
                        <div className="lg:col-span-2  space-y-4">
                            {/* Your Savings */}
                            <div className="bg-white rounded-2xl border shadow-sm p-5">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-2xl font-bold text-gray-800">Your Savings</h2>
                                    <span className="text-blue-600 font-medium">This Year</span>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-6 mb-2">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 bg-blue-600 rounded-md flex items-center justify-center mr-4">
                                    <i className="fa-solid  text-[#fff] fa-credit-card"></i>
                                        </div>
                                        <div>
                                            <div className="text-3xl font-[600] text-gray-800">$1,250</div>
                                            <div className="text-gray-600 text-[12px]">Saved with your Gdc card</div>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 ">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-800">Prescriptions</div>
                                                <div className="text-blue-600 font-bold">$850</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                                                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-800">Doctor Visits</div>
                                                <div className="text-blue-600 font-bold">$400</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Family Cards */}
                            <div className="bg-white rounded-2xl border shadow-lg p-5">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-2xl font-bold text-gray-800">Family Cards</h2>
                                    {/* <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">Add New +</button> */}
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                                        <div className="flex items-center">
                                            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                                <img
                                                    src={profile}
                                                    alt="Emma Johnson"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-800">Emma Johnson</div>
                                                <div className="text-gray-600">Member • HYG-758412</div>
                                            </div>
                                        </div>
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Recent History */}
                            <div className="bg-white rounded-2xl shadow-lg p-8 ">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-2xl font-bold text-gray-800">Recent History</h2>
                                    <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">See All</button>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4  border-l-4 border-red-400 bg-red-50 rounded-lg">
                                        <div className="flex items-center">
                                            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-800">Prescription Refill</div>
                                                <div className="text-gray-600">City Pharmacy</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-red-600">-$15.00</div>
                                            <div className="text-gray-500 text-sm">May 15, 2023</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center  justify-between p-4 border-l-4 border-green-400 bg-green-50 rounded-lg">
                                        <div className="flex items-center">
                                            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                                               <i className="fa-solid text-[#fff] fa-user"></i>
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-800">Doctor Visit</div>
                                                <div className="text-gray-600">Dr. Susan Miller</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-red-600">-$45.00</div>
                                            <div className="text-gray-500 text-sm">May 10, 2023</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between p-4 border-l-4 border-purple-400 bg-purple-50 rounded-lg">
                                        <div className="flex items-center">
                                            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                                         <i className="fa-regular text-[#fff] fa-vial-virus"></i>
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-800">Lab Test</div>
                                                <div className="text-gray-600">Central Lab Services</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-red-600">-$75.00</div>
                                            <div className="text-gray-500 text-sm">May 5, 2023</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
<Footer />

        </>
    )
}
