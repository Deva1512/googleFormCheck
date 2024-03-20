import React from 'react'

const Arraysample = (props) => {
  console.log(props,"props")
    const {items} = props


  return (
    <div>
        <h2>items list</h2>
        <ul>
          {items.map((item) => 
          (<li key={item.id}>{item.name}</li>))}
        </ul>
        </div>
  )
}

export default Arraysample