import "./Footer.css"
import email from "./assets/Email.png"
import car from "./assets/car.png"
import hand from "./assets/hand3.png"
import bird from "./assets/birds.png"
function Footer(){
    return(
<>
          <div id="footerpage">
               <div id="project">
                    <div className="projecthead">
                        <h1>PROJECTS</h1>
                    </div> 
                   <div className="projectitem">
                        <div className="pro">
                           <h2>Car Space Notifier</h2>
                           <img src={car} alt="Loading"/><br></br>
                           <button><b><a href="https://github.com/RUBANESH07/car_parking_space_notifer">Git</a></b></button>
                        </div>
                        <div className="pro">
                           <h2>Hand Gesture Reco</h2>
                           <img src={hand} alt="Loading"/><br></br>
                           <button><b><a href="https://github.com/RUBANESH07/realtime-hand-gestures">Git</a></b></button>
                        </div>
                        <div className="pro">
                           <h2>Bird Sound Class</h2>
                           <img src={bird} alt="Loading"/><br></br>
                           <button><b><a href="https://drive.google.com/drive/folders/1uGtes2ZuqyQrygjp_OrJ18Ncg_vvUeLV">Drive</a></b></button>
                        </div>
                        <div className="pro">
                           <h2>Projects</h2>
                           <h3>Basic Matrimony site </h3>
                           <h3>Human Emotion Detection</h3>
                           <h3>Motion Detection</h3>
                        </div>
                    </div>
               </div>

               <div id="contus">
                  <div className="studi_link" >
                    <div className="links">
                    <ol>
                       <a href="www.com">JavaScript</a><br></br>
                       <a href="www.com">Python</a><br></br>
                       <a href="www.com">Html css</a><br></br>
                       <a href="www.com">MySql</a><br></br>
                       <a href="www.com">React.js</a><br></br>
                       </ol>
                    </div>
                    <div className="vertline">
                    </div>
                    <div className="links1">
                       <ol>
                       <a href="www.com"><img src={email}  alt="Loading"/>rubaneshr@gmail.com</a>
                        <br></br>
                        <a href="www.com">linked in</a><br></br>
                        <a href="www.com">github </a><br></br>
                                     <div class="hexagon">
                                        <i class="fab fa-facebook"></i>
                                    </div>
                       </ol>
                    </div>
                    <div className="vertline">
                    </div>
                    
                    <div className="links1">
                       <ol>
                        <a href="www.com">Instagram</a><br></br>
                        <a href="www.com">Facebook</a><br></br>
                        <a href="www.com">Resume</a><br></br>
                       </ol>
                       </div>
                  </div>
                  <div className="cont_info">
                  <p>  Designed & Developed by Rubi &#128521; <br></br>  &copy; Last Updated Apr-2025</p>
                  </div>
                  
                  </div>

          </div>
</>
    )
}
export default Footer