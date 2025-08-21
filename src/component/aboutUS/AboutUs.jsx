// src/components/AboutUs.jsx
import React from 'react';
import image from '../../../public/mainimage.avif';   // ← replace with your own image

export default function AboutUs() {
  return (
    <>
      <div className="w-[83%] mx-auto">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between gap-8 items-center">
          {/* Text block */}
          <div className="space-y-4 md:w-[55%]">
            <h1 className="text-[45px] font-[600] text-gray-800 tracking-tight">
              About <b className="font-[600] text-teal-600">Us</b>
            </h1>

            <h2 className="text-2xl font-semibold text-gray-700">
              Transforming Smiles through <span className="text-teal-600">Compassion &amp; Technology</span>
            </h2>

            <p className="text-gray-600 text-justify leading-relaxed">
              Established in 2003, <strong>City Smile</strong> has grown from a single-chair practice into a state-of-the-art
              multi-disciplinary dental centre.  Our team of experienced dentists, orthodontists, and oral surgeons provides
              comprehensive care—from routine check-ups and preventive hygiene to complex cosmetic makeovers and full-mouth
              rehabilitation.
            </p>

            <p className="text-gray-600 text-justify leading-relaxed">
              We combine evidence-based dentistry with the latest digital technologies—CBCT imaging, intra-oral scanning, and
              CAD/CAM restorations—to deliver comfortable, precise, and long-lasting results.  Patient well-being is at the heart of
              everything we do, and we pride ourselves on a warm, anxiety-free environment where every smile is treated as unique.
            </p>

            {/* Quick stats */}
            <div className=" flex  gap-[30px] pt-2">
              <div className="bg-gray-50 p-4 shadow-md w-[200px] rounded-lg border border-gray-100">
                <div className="text-3xl font-bold text-teal-600">20+</div>
                <div className="text-gray-600">Years of Care</div>
              </div>
              <div className="bg-gray-50 p-4  w-[200px] shadow-md rounded-lg border border-gray-100">
                <div className="text-3xl font-bold text-teal-600">10 000+</div>
                <div className="text-gray-600">Smiles Enhanced</div>
              </div>
            </div>
          </div>

          {/* Image block */}
          <div className="relative h-[450px] md:w-[42%] w-full rounded-lg overflow-hidden shadow-xl">
            <img
              src={image}
              alt="City Smile Clinic"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-5 p-6">
              <div className="inline-block bg-white px-4 py-[4px] rounded-md shadow-md">
                <h3 className="text-gray-800 font-[600]">Est. 2003</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-20 mb-12 px-[20px]">
          <div className="text-center mb-8">
            <h2 className="text-[40px] font-[600] text-gray-800">
              Our Core <b className="font-[600] text-teal-600">Values</b>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Compassion */}
            <div className="bg-white p-6 rounded-lg shadow-md border-[1.5px] border-[#eaeaea] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#259ec311] rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Compassion</h3>
              <p className="text-gray-600">
                We create a calm, supportive atmosphere where every patient feels heard, respected, and cared for.
              </p>
            </div>

            {/* Excellence */}
            <div className="bg-white p-6 rounded-lg shadow-md border-[1.5px] border-[#eaeaea] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#259ec311] rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Excellence</h3>
              <p className="text-gray-600">
                From sterilisation protocols to clinical outcomes, we adhere to the highest professional standards.
              </p>
            </div>

            {/* Innovation */}
            <div className="bg-white p-6 rounded-lg shadow-md border-[1.5px] border-[#eaeaea] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#259ec311] rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We invest in cutting-edge diagnostics and digital workflows to deliver faster, more predictable treatments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
