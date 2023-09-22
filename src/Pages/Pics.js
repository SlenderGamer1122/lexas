import React from 'react'
import { useNavigate } from 'react-router-dom'

const Pics = () => {
  const navigate=useNavigate()
  return (
    <div>
        <h1>You're damn cute babe </h1>
        <div className='pics'>
            
            
        <img id="logo" src="https://cdn.pixabay.com/photo/2017/09/23/16/33/pixel-heart-2779422_1280.png" width="115px" alt="hi"></img>
        <img id="logo" src="https://cdn.pixabay.com/photo/2017/09/23/16/33/pixel-heart-2779422_1280.png" width="115px" alt="hi"></img>
        <img id="logo" src="https://cdn.pixabay.com/photo/2017/09/23/16/33/pixel-heart-2779422_1280.png" width="115px" alt="hi"></img>
        </div><br/>
        

        <button onClick={() => navigate(-1)} className="todo-button-red">Go Back</button>
    </div>
  )
}

export default Pics