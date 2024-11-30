import React from 'react'

const ChildComponents = (props : any) => {

    
  return (
    <div className='flex flex-col items-center'>
      <h1 className='mt-28 border-2 p-3 rounded-md bg-slate-500 text-white font-semibold'>My name is:<span className='text-xl'>{props.name}</span></h1>
      <h1 className='mt-4 border-2 p-3 rounded-md bg-orange-200 font-semibold'>My favourite Dish is: <span className='text-xl'>{props.fvrtDish}</span></h1>
      <h1 className='mt-4 border-2 p-3 rounded-md bg-purple-200 font-semibold'>My favourite Sport is: <span className='text-xl'>{props.fvrtSport}</span></h1>
    </div>
  )
}

export default ChildComponents

