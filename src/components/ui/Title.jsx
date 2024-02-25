import React from 'react'

export default function Title({text}) {
  return (
    <h1 className="text-2xl md:text-4xl font-bold font-sans bg-gradient-to-r from-white to-[#9d5ae3] inline-block text-transparent bg-clip-text mt-5">
    {text}
  </h1>
  )
}
