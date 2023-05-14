import './NavBar.css';
import icon from '../assets/square.svg';
import React, { useState } from 'react';

const NavBar = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleClick = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
    };
    
    const rotate = (event) => {
        const icon = event.currentTarget;
        if (!icon.classList.contains('square')) {
            const untoggle = document.querySelector('.square');
            icon.classList.toggle('square');
            untoggle.classList.toggle('square');
        }
    };


    return (
        <>
          <nav>
            <ul id='scroll-bar'>
                <li>
                    <a href="#home">
                        <img className="nav-icon" src={icon} />
                    </a>
                </li>
                <li>
                    <a href="#about">
                        <img className="nav-icon" src={icon} />
                    </a>
                </li>
                <li>
                    <a href="#projects">
                        <img className="nav-icon" src={icon} />
                    </a>
                </li>
                <li>
                    <a href="#contact">
                        <img className="nav-icon" src={icon} />
                    </a>
                </li>
            </ul>
          </nav>
        </>
      );
  };

export default NavBar