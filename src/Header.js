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
                <a href="#" >Home</a>
                <a href="#" >About</a>
                <a href="#" >Skills</a> 
                <a href="#">Roles & Responsibilities </a>
                <a href="#" >Academics</a>
                <a href="#" >Projects</a>
                <a href="#" >Contact info</a>
            </div>
        </header>
                <hr></hr>
    </>
    )
}

export default Header