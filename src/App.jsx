import Header from './components/Header'
import './styles/App.css'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <main className="App">
      <Navbar/>
      <Header/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Footer/>
    </main>
  )
}

export default App
