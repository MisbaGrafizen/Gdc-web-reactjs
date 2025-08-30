import React from 'react'
import Header from '../component/header/Header'
import Footer from '../component/footer/Footer'
import OnlineConsultation from '../newMainFolder/components/OnlineConsultation'
import BottomBar from '../component/bottombar/BottomBar'

export default function Appoinments() {
  return (
 <>
<Header />
<div className=' font-Poppins  pt-[110px] w-[100%]'>
<OnlineConsultation />
</div>
<Footer />
<BottomBar />
 </>
  )
}
