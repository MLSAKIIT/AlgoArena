import React from 'react'
import Footer from "@/components/footer/Footer";
import Hero from '../components/hero/page'

import Domains from '@/components/domains/Domains';



const page = () => {
  return (
    <div className=' flex flex-col gap-8'>
    <Hero/>
    <Domains />
    <Footer />
    </div>
  )
}

export default page