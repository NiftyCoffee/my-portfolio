import './NavBar.css';
import dark_icon from '../assets/square.svg';
import light_icon from '../assets/square-light.svg';
import React, { useState } from 'react';

const NavBar = ({currTheme}) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [icon, setIcon] = useState(dark_icon);

    const getIcon = () => {
        if(currTheme === 'light') {
            return dark_icon;
        } else {
            return light_icon;
        }
    };
  
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
                        <img className="nav-icon" src={getIcon()} />
                    </a>
                </li>
                <li>
                    <a href="#about">
                        <img className="nav-icon" src={getIcon()} />
                    </a>
                </li>
                <li>
                    <a href="#projects">
                        <img className="nav-icon" src={getIcon()} />
                    </a>
                </li>
                <li>
                    <a href="#contact">
                        <img className="nav-icon" src={getIcon()} />
                    </a>
                </li>
            </ul>
          </nav>
        </>
      );
  };

export default NavBar