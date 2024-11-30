import React from 'react'
import ChildComponents from './ChildComponents'

const ParentComponents = () => {

    let name ="Tayyab Aziz"
    let fvrtDish = "Biryani"
    let fvrtSport = "Football"
  return (
    <div>
      <ChildComponents name={name} fvrtDish={fvrtDish} fvrtSport={fvrtSport}  />
      
    </div>
  )
}

export default ParentComponents
