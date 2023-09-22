import React from 'react'

import { useNavigate } from 'react-router-dom'

const Gallery = () => {
    const navigate=useNavigate()
  return (
    <div>
      <img id="logo" src="https://static.vecteezy.com/system/resources/thumbnails/011/660/659/small/flag-multicolor-for-decoration-party-holiday-celebrate-free-png.png" width="615px" alt="hi"></img>
            <iframe width="540" height="499" src="https://www.youtube.com/embed/uITwtd92r6Y?autoplay=1" title="cute cat dancing but full version" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
            <button onClick={() => navigate(-1)} className="todo-button">Go Back</button>
            <button onClick={() => navigate('/secret')} className="todo-button-red">i said dont click,,</button>
    </div>
    
  
        
    )
}

export default Gallery