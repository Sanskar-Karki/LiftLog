import React from 'react'
import SectionWrapper from './SectionWrapper'
import { WORKOUTS } from '../utils/exercise'

function Header(props) {
  const { index, title, description } = props
  return (
    <div className='flex flex-col gap-4 '>
      <div className='flex items-center gap-2 justify-center'>
        <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
        <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
      </div>
      <p className='text-sm sm:text-base mx-auto'>{description}</p>
    </div>
  )
}

const Generator = () => {
  return (
    <div>
      <SectionWrapper header={"generate your workout"} title={['It\'s', 'Huge', 'o\'clock']}>

        <Header index={'01'} title="Pick your Poison" description="Select the workout you wish to endure"></Header>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
          {Object.keys(WORKOUTS).map((type, typeIndex) => {
            return (
              <button className='bg-slate-950 border border-blue-400 py-4 rounded-lg duration-200 hover:border-blue-800' key={typeIndex}>
                <p className='capitalize'>{type.replaceAll('_', " ")}</p>
              </button>
            )
          })}
        </div>

        <Header index={'01'} title="Lock on targets" description="Select the muscles juged for annihilation."></Header>
        <div className=''>
          <div>
            <p>Select muscles groups </p>
          </div>


        </div>

      </SectionWrapper>
    </div>
  )
}

export default Generator
