import React from 'react'
import { Button } from "@/components/ui/button"
import dynamic from 'next/dynamic'
import Desarrollo from './Desarrollo'
import Hero from './Hero'

// const Hero = dynamic(() => import('./Hero'), { ssr: false })

const Landing = () => {
  return (
    <main className='w-full min-h-screen flex flex-col items-start justify-start px-8 sm:px-10 lg:px-16 xl:px-24'>
        <Hero />
        <Desarrollo />
        <div className='w-full mt-10 h-[500px]'></div>
    </main>
  )
}

export default Landing