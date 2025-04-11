import "./App.css"

import Header from "./Header"
import Content from "./Content"
import Qualif from "./Qualif"
import About from "./About"
import Footer from "./Footer"

function App() {
  return (
    <>
      <Header />
      <div id="home">
        <Content />
      </div>
      <div id="about" className="skills">
        <About />
      </div>
      <div id="academics"> 
        <Qualif/>
      </div>
      <div id="project">
        <Footer/>
      </div>
     
    </>
  );
}

export default App
