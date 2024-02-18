import React from 'react'
import Footer from "@/components/footer/Footer";
import Hero from '../components/hero/page'

import Domains from '@/components/domains/Domains';

import Navbar from '@/components/ui/Navbar';

const page = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Domains />
    <Footer />
    </>
  )
}

export default page