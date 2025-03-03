import ExerciseCard from './ExerciseCard'
import SectionWrapper from './SectionWrapper'

const Workout = ({ workout }) => {
  return (
    <div>
      <SectionWrapper id="workout" header={"welcome to"} title={['The', 'DANGER ', 'zone']}>

        <div className=' mt-10 flex flex-col gap-4'>
          {workout.map((exercise, i) => {
            return (
              <ExerciseCard i={i} exercise={exercise} key={i} />
            )
          })}
        </div>
      </SectionWrapper >
    </div>
  )
}

export default Workout
