import image1 from "./assets/logo_img.png"
import "./Header.css"
function Header (){
    return(
    <>
        <header>
            <div id="headername">
                <div className="headnamelogo">
                    <img src={image1} alt="Loadding" />
                    <h1>Rubi</h1>
                </div>
                
            </div>
            
            <div id="headercon">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills" >Skills</a> 
                <a href="#roles">Roles & Responsibilities </a>
                <a href="#academics" >Academics</a>
                <a href="#project" >Projects</a>
                <a href="#contact" >Contact info</a>
            </div>
        </header>
                
                
    </>
    )
}

export default Header
