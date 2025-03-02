import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/exercise'

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

  const [showModal, setShowModal] = useState(false)
  const [poison, setPoison] = useState('individual')
  const [muscles, setMuscles] = useState([])
  const [goals, setGoal] = useState('strength_power')

  function toggleModal() {
    setShowModal(!showModal)
  }

  function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter(val => val !== muscleGroup))
      return
    }
    if (muscles.length > 2) {
      return
    }
    if (poison !== 'individual') {
      setMuscles([muscleGroup])
      setShowModal(false)
      return
    }

    setMuscles([...muscles, muscleGroup])
    if (muscles.length === 2) {
      setShowModal(false)
    }
  }

  return (
    <div>
      <SectionWrapper header={"generate your workout"} title={['It\'s', 'Huge', 'o\'clock']}>

        {/* Section 1 :pick*/}

        <Header index={'01'} title="Pick your Poison" description="Select the workout you wish to endure"></Header>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
          {Object.keys(WORKOUTS).map((type, typeIndex) => {
            return (
              <button onClick={() => {
                setMuscles([])
                setPoison(type)
              }} className={`bg-slate-950 border py-4 rounded-lg duration-200 hover:border-blue-800 ${type === poison ? "border-blue-600" : "border-blue-400"}`} key={typeIndex}>
                <p className='capitalize'>{type.replaceAll('_', " ")}</p>
              </button>
            )
          })}
        </div>

        {/* Section 2 : target*/}

        <Header index={'02'} title="Lock on targets" description="Select the muscles juged for annihilation."></Header>

        <div className='bg-slate-950 boder border-solid border-blue-400 rounded-lg flex flex-col'>
          <div className='relative flex  p-3 items-center justify-center cursor-pointer' onClick={toggleModal}>
            <p className='capitalize'>{muscles.length === 0 ? "Select muscles groups" : muscles.join(' ')} </p>
            <i className=" fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2 " ></i>
          </div>
          {showModal && (
            <div className='flex flex-col px-3 pb-3'>
              {(poison === "individual" ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
                return (
                  <button onClick={() => {
                    updateMuscles(muscleGroup)
                  }} className={`hover:text-blue-400 duration-200 ${muscles.includes(muscleGroup) ? 'text-blue-400' : ""}`} key={muscleGroupIndex}>
                    < p className='capitalize'> {muscleGroup.replaceAll('_', "")}</p>
                  </button>
                )
              })}
            </div>
          )
          }
        </div >

        {/* Section 3 : ultimate goal*/}

        < Header index={'03'} title="Become Juggernaut" description="Select your ultimate goal" > </Header  >
        <div className='grid grid-cols-3 gap-4'>
          {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
            return (
              <button onClick={() => {
                setGoal(scheme)
              }} className={`bg-slate-950 border py-4 rounded-lg duration-200 hover:border-blue-800 ${scheme === goals ? "border-blue-600" : "border-blue-400"}`} key={schemeIndex}>
                <p className='capitalize'>{scheme.replaceAll('_', " ")}</p>
              </button>
            )
          })}
        </div>

      </SectionWrapper >
    </div >
  )
}

export default Generator
