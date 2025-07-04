import { useState, useEffect } from 'react'
import Andrew  from './assets/Andrew.png';
import LCK from './assets/LCK.png';
import exercise from './assets/exercise.png'
import book from './assets/book.png'
import gohan from './assets/gohan.png'
import paper from './assets/paper.png'
import banquet from './assets/banquet.png'
import arrow from './assets/arrow-up-icon-29566.png'
import linkedin from './assets/linkedin.png'
import github from './assets/github.png'


import './App.css'
import Navbar from './components/navbar'



function App() {
    const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const navbar = document.getElementById('nav');
    if (navbar) {
      navbar.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <header id="nav">
    {/*} Navbar {*/}
        <Navbar/>
    </header>
    {/*} About Me Section{*/}
    <section className="about-me" id="about">  
      <h2 className="headings"> About Me</h2>

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

      {/*} Hobbies Interests Section{*/}
    <section className="hobbies" id="hobbies">
      <h2 className="headings">Hobbies and Interests</h2>

      <div className="hobbies-content"> 
        <div className="hobby-boxes">
          <a href="https://lolesports.com" target="_blank"rel="noopener noreferrer">
            <img src={LCK} alt ="League of Legends LCK logo" className="lck-image"/>
          </a>
          <h3>League of Legends</h3>
          <p>Over the past year I have developed an 
            interest in watching professional League 
            of Legends like the LCK (League of Legends Championships 
            Korea). I enjoy analyzing team compositions 
            and playstyles especially. I'm excited for the second largest 
            annual event, MSI, that is coming to Vancouver this summer! </p>
        </div>

        <div className ="hobby-boxes">
          <a href="https://www.surrey.ca/parks-recreation/recreation-facilities/north-surrey-sport-ice-complex" 
          target="_blank"rel="noopener noreferrer">
            <img src={exercise} alt="mirror photo of me sitting in my gym" 
            className="exercise-image"/>
          </a>
          <h3>Exercise</h3>
          <p> I believe that everyone should have some kind of physical 
            hobby to take care of their physical health. For me, it is 
            working out and going on walks. Having a hobby that you enjoy 
            outside of computers is a good way to maintain balance.</p>
        </div>

        <div className ="hobby-boxes">
          <a href="https://www.tolkiensociety.org/discover/biography/" 
          target="_blank"rel="noopener noreferrer">
            <img src={book} alt="collection of JRR Tolkien books" 
            className="book-image"/>
          </a>
          <h3>Reading</h3>
          <p> I have an interest in fantasy settings, so I love books such 
            as The Lord of the Rings and the Silmarillion.  </p>
        </div>

        <div className ="hobby-boxes">
          <a href="https://www.mydoodlepuppy.com/blog/white-maltipoo-with-pictures" 
          target="_blank"rel="noopener noreferrer">
            <img src={gohan} alt="white fluffy dog lying with paws together" 
              className="gohan-image"/>
          </a>
          <h3>Playing with Pet</h3>
          <p> I love playing with and taking care of my girlfriend’s dog,
            Gohan! Gohan is an almost 3 year old maltipoo (maltese poodle) 
            and is very friendly and playful! </p>
        </div>
    </div>
    </section>
    
      {/*} Hobbies Interests Section{*/}
    <section className="work" id="work">
    <h2 className="headings">Work Experience</h2>

      <div className="work-content">
        <div className="work-boxes">
          <img src={paper} alt ="Hand picking paper out of filing cabinet" />
          <h3> Office Assistant <br/> December 2021-August 2023</h3>
          <p>As an office assistant, I assisted the accountant  with ensuring 
            that employees were paid on time and with the correct hours. 
            I also developed organizational skills by filing receipts and paperwork 
            to maintain efficient documentation and ensure easy access to important 
            records.</p>
        </div>
        <div className="work-boxes">
          <img src={banquet} alt ="large room, brightly lit with chandeliers and window
          with fancy circular tables around the room" />
          <h3> Banquet Server<br/> January 2022-August 2022</h3>
          <p>I worked as a server at a banquet hall, helping with setting
              up and breaking down events and serving dishes to guests. 
              An important skill I managed to learn was to work in a 
              fast-paced environment where I always needed to be finding 
              something to do or someone to assist.  </p>
        </div>
      </div>
    </section>

      {/*} Contact links{*/}
      <section className="contact" id ="contact">
        <h2 className="headings">Contact</h2>
          <div className="contact-box">
              <a href="https://www.linkedin.com/in/andrew-fassler-3146252b3/" 
                className="linkedin" target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} alt="linkedin logo"></img> Linkedin</a>

              <a href="https://github.com/andrewf52"  target="_blank" 
                rel="noopener noreferrer"className="linkedin">
                 <img src={github} alt="github logo"></img> Github</a>           
          </div>
      </section>

      {showButton && (
          <button id="myBtn" title="Go to top" onClick={scrollToTop}>
             <img src={arrow} alt="Black arrow pointing up" className="top-arrow" />
          </button>)}
    </div>
  );
}

export default App
