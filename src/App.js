import './App.css';
import Error from './Pages/Error';
import Gallery from './Pages/Gallery';
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Pages/Home';
import Secret from './Pages/Secret';
import Letter from './Pages/Letter';
import Pics from './Pages/Pics';




function App() {
  const navigate = useNavigate();

  
  return (
    
    <div className="todo-app">
      <h1>Good Evening Lexas^^</h1>
      
    <Routes>
      <Route  path="/gallery" element={<Gallery/>} />
      
      <Route  path="/" element={<Home  />} />
      <Route  path="/secret" element={<Secret  />} />
      <Route  path="/letter" element={<Letter />} />
      <Route  path="/hottie" element={<Pics />} />
      <Route  path="/*" element={<Error/>} />

      </Routes>
      <div style={{height:'259px'}}></div>
      
      <button onClick={() => navigate(`/gallery`)} className="todo-button-blue">Dont Click Me^^</button>
      
      
      
    </div>
    
  );
}

export default App;
