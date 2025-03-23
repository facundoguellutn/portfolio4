import React from 'react'
import { Button } from "@/components/ui/button"
import dynamic from 'next/dynamic'
// import Hero from './Hero'

const Hero = dynamic(() => import('./Hero'), { ssr: false })

const Landing = () => {
  return (
    <main className='w-full min-h-screen flex items-start justify-start px-8 sm:px-10 lg:px-16 xl:px-24'>
        <Hero />
    </main>
  )
}

export default Landing