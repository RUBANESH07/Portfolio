import React from "react";
import "./App.css";
import ProfileImage from "./assets/profile.jpg"
import { useState } from "react";
import "./Content.css"

 

function Content() {
  const[ishide,setishide] = useState(false)
  return (
    <div id="name">
      <div id="name1">
        <p className="b_name">I'm</p>
        <b><p className="f_name">R</p></b>
        <p className="L_name">ubanesh</p>
        <p className="A_name">Artificial Intelligence & Data Science Student | CIT</p>
        <p className="Abo_name">Welcome to my portfolio! I am a student passionate about Artificial Intelligence and Data Science,
                               exploring Machine Learning, Deep Learning,and real-world applications.</p>
      </div>
      <div id="img_p" onMouseLeave={()=>setishide(false)}>
    
         <img src={ProfileImage} alt="Profile" className="pro_img"/> 
         
           {!ishide && <div className="pro_hide" onMouseEnter={()=>setishide(!ishide)}>
                                       <h1>Touch Me</h1>
                                        <p>&#128525;</p>
                        </div>} 
            
      </div>
      <div className="cont_con"><a href="https://drive.google.com/file/d/1s5iZ2YuvgIOqvkwUCGY8n7PjsnArdFoZ/view?usp=drivesdk">RESUME</a></div>
    </div>
    
  );
}

export default Content;
