import React from 'react'
import Footer from "@/components/footer/Footer";
import Hero from '../components/hero/page'
import Domains from '@/components/domains/Domains';
const page = () => {
  return (
    <>
    <Domains />
    <Hero/>
    <Footer />
    </>
  )
}

export default page