import React,{useState} from 'react'

const StateComponent = () => {
    const [number,setNumber]=useState(0);
    
  const evenNumber = () =>{
      for(number=0;number<=30;number++);
      if(number %2==0);{
        console.log("evennumber")
}
    }
  const increment =() =>{
    setNumber(number+1);
    if(number %2==0);{
      console.log(number,"evennumber")
}
  }
    return (
    <div><h1>Statecomponent</h1>
    <p>count:{number}</p>
    <button onClick={increment}>increment</button>
    </div>
  )
}

export default StateComponent