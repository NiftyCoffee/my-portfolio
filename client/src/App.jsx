import './App.css'
import Logo from './components/Logo.jsx';
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx';


function App() {
  
  return (
    <>
      <Logo />
      <NavBar />
      <div id="site-components">
        <section>
          <div className="content"><Home /></div>
        </section>
        <section>
          <div className="content"><About /></div>
        </section>
        <section className='section-projects'>
          <div className="content"><Projects /></div>
        </section>
        <section className='section-contact'>
          <div className="content"><Contact /></div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default App
