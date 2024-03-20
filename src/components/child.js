import React from 'react'


const Child = (props) => {
  return (
    <div>
        <p>Name:{props.name}</p>
        <p>Age:{props.age}</p>
        <p>isMarried:{props.ismarried?'yes':'no'}</p>
       
    </div>
  )
}

export default Child