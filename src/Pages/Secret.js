import React from 'react'
import { useNavigate } from 'react-router-dom'

const Secret = () => {
  const navigate=useNavigate()
  return (
    <div>
      <h1>OH WELL, You should probably read that letter hehe </h1> 
      <h1>I LOVE YOUUUUU </h1>
        

        <button onClick={() => navigate('/letter')} className="todo-button-red">Letter</button>
        <button onClick={() => navigate(`/hottie`)} className="todo-button-red">Random pics</button>
        
        
    </div>
  )
}

export default Secret