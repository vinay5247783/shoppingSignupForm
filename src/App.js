import React from 'react';
import Register from './register.js';
import './App.css';
import Particles from 'react-particles-js';
import Logo from './Logo.js';


const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800,
      }
    }
  }
}

function App() {
  return (
    <div className="App">
    <Particles className='particles'
          params={particlesOptions}
        />
      <Logo/>

      <Register/>
    </div>
  );
}

export default App;


