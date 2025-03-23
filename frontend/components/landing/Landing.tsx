import React from 'react'
import { Button } from "@/components/ui/button"


const Landing = () => {
  return (
    <main className='w-full h-screen flex items-center justify-center'>
        <h1 className='text-slate-800 font-semibold text-4xl'>Hola, soy Facundo</h1>
        <Button variant="outline">Button</Button>
    </main>
  )
}

export default Landing