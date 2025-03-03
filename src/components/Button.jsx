import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button onClick={props.func} className='px-8 mx-auto py-4 rounded-md border border-blue-600 border-solid bg-slate-950 blueShadow'>{props.text}</button>
    </div>
  )
}

export default Button
