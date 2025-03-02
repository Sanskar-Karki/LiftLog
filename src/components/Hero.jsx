import React from 'react'

const Hero = () => {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] mx-auto p-4'>
      <div className='flex flex-col gap-4'>
        <p className="text-xl font-semibold">IT'S TIME TO LEVEL UP</p>
        <h1 className="upercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          LIFT<span className="text-blue-400">LOG</span>
        </h1>
      </div>

      <p className="max-w-lg text-sm md:text-base font-light">
        By entering, I fully acknowledge the risks of becoming <span className="font-bold">an absolute unit</span>,
        a <span className="font-bold">walking mass monster</span> afflicted with
        <span className="font-bold">severe gym obsession</span> and the inability to fit through standard doorways.
      </p>
      <button className='px-8 py-4 rounded-md border border-blue-600 border-solid bg-slate-950 blueShadow'>Accept & Begin</button>

    </div>

  )
}

export default Hero
