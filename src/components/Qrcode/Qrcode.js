import React,{useState} from 'react'
import './qrcode.css'

const Qrcode = () => {
  const [img,setImg]= useState("images/qr.png");


  const generateQr=() => {alert('hi')};

  const download=(name) =>{
    alert('welcome'+" "+name)
  }

  return (
    <div className='app-container'>
      <h1>Qr Code Generator</h1>
      <img src={img}></img>
      <div>
        <label htmlFor='dataInput' className='input'>Data For Qr</label>
        <input type='text' id='dataInput'  placeholder='Enter Data For Qr Code'/>
        <label htmlFor='sizeInput' className='input'>Image For Qr</label>
        <input type='text' id='sizeInput'  placeholder='Enter Image Size'/>
        <button className='generate' onClick={generateQr}>Generate Qr Code</button>
        <button className='download' onClick={() => download('Deva')}>Download Qr Code</button>
      </div>
      <p className='footer'> Designed By @Deva006</p>

    </div>
  )
}

export default Qrcode