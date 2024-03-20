import React,{props} from 'react'
import "./usercard.css"

function User(props){
    return<div className='card-cointainer'>
    <span className={props.online?'pro online': 'pro offline'}>{props.online ?'Online':'offline'}</span>
    <img src='images/img2.jpg'></img>
    <h2>{props.name}</h2>
    <h3>{props.city}</h3>
    <p>{props.description}</p>
    <div className='buttons'>
    <button className='primary'>Message</button>
    <button className='primary outline'>Following</button>
    </div>
    <div className='skills'>
    <h3>Skills</h3>
    <ul>
        {props.skills.map((skills,index)=>(<li key={index}>{skills}</li>))}
    </ul>
    </div>
    </div>
}

const Usercard = () => {
  return (
    <User name='Devaraj R' city='Chennai' description="Front End Developer"
    skills={['Html5','Css3','Bootstrap','React','Nodejs','FrontEnd Development']}
    online={false}/>)
  
};

export default Usercard