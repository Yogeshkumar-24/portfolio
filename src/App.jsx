import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"
import Skills from "./components/Skills"
import Animation from "./components/Animation"


function App() {

  return (
   <div>
    <Navbar />
    <Animation />
    <Home />
    <Portfolio />
    <Skills />
    <Contact />
   </div>
  )
}

export default App
