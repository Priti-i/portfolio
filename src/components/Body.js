import React from 'react';
import photo from '../assets/about_img.jpeg';
import aboutImage from '../assets/my_image.jpeg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";
const Body = () => {
  return (
    <>
      <div className='home'>
        <div className="mytitle">
          <h3>Hello It's me</h3>
          <h1>Pritii</h1>
          <h3>
            Frontend Developer<span class="text"></span>
          </h3>
          
          <a href="https://www.linkedin.com/in/priti-yadav-43702a262/" target="_blank"><i className="fab fa-linkedin fa-2x" style={{color:"blue"}}></i></a>
          <a href="https://www.instagram.com/priti5139yadav/?hl=en" target="_blank"><i className="fab fa-instagram fa-2x" style={{ color: "#C13584" }}></i></a>
          <a href="https://x.com/yadav67135" target="_blank"><i className="fab fa-twitter fa-2x" style={{ color: "#1DA1F2" }}></i></a>
        
        </div>
        <div  >
        <img src={photo} alt="About us" className='pic'/>
        </div>
      </div>

      <div className="about" id="about">
      <div  >
      <img src={aboutImage} alt="About us" className='aboutpic'/>
      </div>
      <div className='description'>
      <p>Dedicated <b style={{color:"red"}}>Front-End Developer</b> with a strong foundation in modern web 
      technologies and practical experience via UI portfolio, E-commerce website
       UI building interactive user interfaces. Passionate about contributing to
        real-world projects, collaborating with dynamic teams, and continuously 
        enhancing my skills to deliver exceptional digital experiences..</p>
      </div>
      </div>
      <div className="Skills" id="skills">
      <h1 style={{color:"blue"}}>Skills</h1>
      <ul>
      <li><i className="fa-brands fa-html5 html"></i><p>HTML</p></li>
      <li><i className="fa-brands fa-css3-alt css"></i><p>css</p></li>
      <li><i className="fa-brands fa-js js"></i><p>JavaScriptL</p></li>
      <li> <i className="fa-brands fa-react react"></i><p>React</p></li>
      <li> <i className="fa-brands fa-bootstrap bootstrap"></i><p>bootstrap</p></li>
      <li><i className="fa-brands fa-java java"></i><p>Java</p></li>
      </ul>
      </div>

      <div className="contact" id="contact">
      <div className='info'>
       <p>Contact Me</p>
       <p>pritiy049@gmail.com</p>
       <p>27323298</p>
       <button className='btn'>Download Resume</button>
      </div>

      <div className='msg'>
<input type="text" placeholder='Name'/><br/><br/>
<input type="email" placeholder='Mail'/><br/><br/>
<textarea placeholder="Write something here..."  rows={10} cols={40}> </textarea><br/><br/>
<button className='btn'>Submit</button>
      </div>
      </div>
    </>
  );
};
export default Body;
