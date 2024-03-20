import React from 'react'
import Child from './child'
import Student from './student'
import Arraysample from './arraysample'

const Parent = () => {
    const items=[{id:1,name:'item1'},
    {id:2,name:'item2'}]
    
  return (
    <div>
    {/* <Child name='Deva' age={25} isMarried={false}/>
    <Student>
        <p>Hello world</p>
        <p>Hello world</p>
    </Student> */}
    <Arraysample items={items}/>
    </div>
  )
}
export default Parent