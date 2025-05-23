import React from 'react'
import { Button } from "@/components/ui/button"
import dynamic from 'next/dynamic'
import Desarrollo from './Desarrollo'
import Hero from './Hero'
import ProjectsCarousel from './ProjectsCarousel'
import Design from './Design'
import Tecnologias from './Tecnologias'
import Contacto from './Contacto'

// const Hero = dynamic(() => import('./Hero'), { ssr: false })

const Landing = () => {
  return (
    <div className='mainScreen '>
        <Hero />
        <Desarrollo />
        <Design />
        <ProjectsCarousel />
        <Tecnologias />
        <Contacto />
    </div>
  )
}

export default Landing