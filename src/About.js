import "./About.css"
import profile_abo from "./assets/profile_abo.jpg"
import photo_cer from "./assets/cer1.png"
import photo_cer1 from "./assets/cer2.png"
import {useState} from "react"
import { useRef } from "react"

function About(){

    const [isHidden, setisHidden] = useState(true);
    const [isHidden1, setisHidden1] = useState(true);

    const cerImgRef = useRef(null);
    function zoomin(event) {
        event.target.style.transform = "scale(1.8)" 
        event.target.style.transition = "transform 0.5s ease-in-out"
    }
    function zoomout(event) {
        event.target.style.transform = "scale(1)" 
     
    }
       
    return(    
<>

       {!isHidden &&  (<div id="aboutpage1" >
            <div className="aboutskill">
                <div><h1 className="heading">COMPUTER PROFIENCY</h1></div>
                <div className="aboskillcon">
                    <div className="aboskillitem">
                        <div className="aboitemheading">
                            <h1 className="aboitemhead">JavaScript</h1>
                        </div>
                        
                    </div>

                    <div className="aboskillitem">
                        <div className="aboitemheading">
                            <h1 className="aboitemhead">Python</h1>
                        </div>
                      
                    </div>

                    <div className="aboskillitem">
                        <div className="aboitemheading">
                            <h1 className="aboitemhead">Html css</h1>
                        </div>       
                    </div>

                    <div className="aboskillitem">
                        <div className="aboitemheading">
                            <h1 className="aboitemhead">MySql</h1>
                        </div>
                    </div>

                    <div className="aboskillitem">
                        <div className="aboitemheading">
                            <h1 className="aboitemhead">React.js</h1>
                        </div>
                    </div>

                    <div className="aboskillitem">
                        <div className="aboitemheading">
                            <h1 className="aboitemhead">Django,Firebase</h1>
                        </div>                      
                    </div>

                    <div className="aboskillitem">
                        <div className="aboitemheading">
                            <h1 className="aboitemhead">Tableau ,Power Bi</h1>
                        </div>                     
                    </div>
                    
                    <div className="aboskillitem">
                        <div className="aboitemheading">
                            <h1 className="aboitemhead">Figma,Wix (basic)</h1>
                        </div>
                    </div>   
                </div>

            </div>

            <div className="hideaboskill">
            <button  onClick={() => setisHidden(true)}>&#128281;</button> 
            </div>

            <div className="aboutskill1">
                <div>
                    <h1 className="heading">AREA OF INTEREST</h1>
                </div>
                
                    
                <div className="aboskillcon">
                    <div className="aboskillitem">
                        <div className="aboitemheading">
                            <h1 className="aboitemhead">Full - Stack Developer</h1>
                        </div>
                    </div>

                    <div className="aboskillitem">
                        <div className="aboitemheading">
                            <h1 className="aboitemhead">Data Analytics Engineer</h1>
                       </div>                    
                    </div>

                    <div className="aboskillitem">
                        <div className="aboitemheading">
                            <h1 className="aboitemhead">Machine & Deep learning</h1>
                        </div>                    
                    </div>
                    <div className="aboskillitem">
                        <div className="aboitemheading">
                            <h1 className="aboitemhead">Artificial intelligence</h1>
                        </div>
                    </div>
                    <div>
                        <h1 className="heading">ROLES & RESPONSIBILITIES</h1>
                    </div>

                    <div className="aboskillitem">
                        <div className="aboitemheading">
                            <h1 className="aboitemhead1">AIDS Dept Assoc Member</h1>
                        </div>
                        <div className="aboitembutton">
                        <p className="aboyear">2023-25</p>
                        </div>
                    </div>
                   
                    <div className="aboskillitem">
                        <div className="aboitemheading">
                            <h1 className="aboitemhead1">Athletics club(VC)</h1>
                        </div>
                        <div className="aboitembutton">
                            <p className="aboyear">2023-25</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>)}

        {!isHidden1 && (<div id="aboutpage2">
            <div className="internpage">
                <h1>
                INTERNSHIP
                </h1>
                <div  className="interninfo">
                    <p>Company: Efftraic solution,<br></br>
                        Domine : Data Science,<br></br>
                        Duration: 2-month,<br></br>
                        Project : Analysis sales predictions using amazon dataset,
                        power bi intergerting API.</p>
                </div>
                <div className="internbtns">
                <button className="internbtn1"><b>REPORT</b></button>
                <button className="internbtn2"><b>INTERN-COMPLETION CERTI</b></button>
                </div>

            </div>

            <div className="hidebtnintern">
                <button onClick={() => setisHidden1(true)}>&#128281;</button>
            </div>
            

           <div   ref={cerImgRef} className="cerfpage">
                <h1>CERTIFICATES CO-CURRICULAR </h1>
                <div className="cerimg">
                         <img  onMouseEnter={ (e)=>zoomin(e)}  
                              onMouseLeave={(e)=>zoomout(e)} 
                        src={photo_cer1} alt="Certificate" />
                         <img  onMouseEnter={ (e)=>zoomin(e)}  
                              onMouseLeave={(e)=>zoomout(e)} 
                        src={photo_cer} alt="Certificate" />
                        <button><a href="https://drive.google.com/drive/folders/19e4yvBWt6H61FGhqm4VtEQEboW_IOYtS"><b>EXTRA-CURRICULAR ACTIVITIES</b></a></button>

                    </div>
            </div>

        </div>)}
            
        <div id="aboutpage">
            <div id="abouthead">
                <h1>ABOUT</h1>
            </div>
            <div id="aboutcon" >
                <div className="prof">
                    <img src={profile_abo} alt="Loading"/>
                </div>
            <div className="verline"></div>

             <div className="aboutconinfo">
                <div className="aboutconinfo1">  
                    <div class="aboutinfo">
                        <h1>SKILLS</h1>
                        <h1>ROLES AND RESPONSIBILITIES</h1>
                        <br></br>
                        <button onClick={()=>setisHidden(false)}>Views</button>
                
                    </div>
                    <div className="aboutinfo">
                    <h1>CERTIFICATES </h1>
                    <br></br>
                    <h1>INTERNSHIP</h1>
                    <br></br>
                    
                   
                    <button onClick={()=>setisHidden1(false)}>View</button>
                    </div>
                </div>
                <div className="interdomininfo">
                    <p>I am Rubanesh, a final-year B.Tech AI & Data Science student at Coimbatore Institute of Technology. I have good knowledge of web development and data analysis, gained through an internship at Effitrac Solutions and real-time academic projects. With a keen interest in athletics, I am always eager to explore new technologies and challenges.</p>
                </div>
             </div> 
            </div> 
        </div>
        
</>        
        
    )
}
export default About
