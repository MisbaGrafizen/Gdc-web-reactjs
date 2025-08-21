import React from 'react'
import Header from '../../component/header/Header'
import Footer from '../../component/footer/Footer'
import ServiceCom from '../../component/service.jsx/serviceCom'

export default function ServicePage() {
  return (
<>


         <Header />
          <div className=" font-Poppins flex pt-[150px]  gap-[70px] flex-col bg-[#ffffff57] w-[100%] h-[100%]">
    <ServiceCom />

          </div>
         <Footer />
</>
  )
}
