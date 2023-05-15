import React from 'react';
import {useState, useEffect} from 'react';
import { ThemeProvider } from './ThemeContext';
import './App.css'
import Logo from './components/Logo.jsx';
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import './theme.css';

function App() {

  // Retrieve the theme preference from local storage, or set a default theme
  const storedTheme = localStorage.getItem('theme');
  const initialTheme = storedTheme || 'light';

  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    // Save the theme preference to local storage
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    // Apply the stored theme preference when the component mounts
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  
  return (
    <ThemeProvider>
      <>
        {/* <Logo /> */}
        <Header currTheme={theme} onToggleTheme={toggleTheme}/>
        <NavBar currTheme={theme}/>
        <div id="site-components">
          <section>
            <div className="content"><Home /></div>
          </section>
          <section>
            <div className="content"><About /></div>
          </section>
          <section className='section-projects'>
            <div className="content"><Projects currTheme={theme}/></div>
          </section>
          <section className='section-contact'>
            <div className="content"><Contact currTheme={theme}/></div>
          </section>
        </div>
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default App
