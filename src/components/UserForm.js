import React from 'react'
// import "./userform.css"

const UserForm = () => {
  return (
    <div className='container'>
      <div className='form'>
      <h1>WELCOME</h1>
        <label htmlFor='name' className='label1'>UserName</label>
        <input type='text'  id='name'></input>
        <label htmlFor='email' className='label1'>E-Mail</label>
        <input type='text'  id='email'></input>
        <label htmlFor='Phone' className='label1'>Phone</label>
        <input type='text'  id='phone'></input>
        <label htmlfor='experience' className='experience'>Experience</label>
        <select name='experience'>
        <option value='0-1yr'>0-1yr</option>
        <option value='1yr-2yr'>1yr-2yr</option>
        <option value='2yr-3yr'>2yr-3yr</option>
        </select>
        <div className='radio'>
        <label htmlfor='gender'>Gender</label><br/>
        <input type='radio' name='gender' id='male' value='Male'></input>
        <label>Male</label><br/>
        <input type='radio' name='gender' id='female' value='FeMale'></input>
        <label>Female</label><br/>
        <input type='radio' name='gender' id='male' value='Others'></input>
        <label>Others</label><br/>
        <button>Sumbit</button>

        </div>
        </div>
    </div>
  )
}

export default UserForm