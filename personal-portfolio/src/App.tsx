import { useState } from 'react'
import Andrew  from './assets/Andrew.png';
import './App.css'

function App() {
  return (
    <section className="about-me">  
      <h2 className="about-heading"> About Me</h2>

      <div className="about-content">
        <div className="andrew-box">
          <img src={Andrew} alt ="Andrew" className="about-image" />
        </div>  

        <div className="right-side">
          <p className="my-name">Andrew Fassler<br/>SoSy Undergrad</p>

        <div className="about-box">
          <p className="about-text"> My name is Andrew Fassler and I am a Software 
            Systems Undergraduate at Simon Fraser University with experience 
            in  C++, Java, HTML, and CSS. While most of my programming experience 
            is through school I am working toward building personal projects by 
            learning React and Tailwind. I am also trying to familiar with Github and 
            industry practices (through CMPT 276) to smoothly transition myself from 
            school to real-world development.
          </p>
        </div>
        </div>
      </div>
    </section>
  
  

  );
}

export default App
