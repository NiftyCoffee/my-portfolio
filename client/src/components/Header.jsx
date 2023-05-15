import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../ThemeContext';
import './Header.css';
import Logo from './Logo.jsx';
import dark_mode_icon from '../assets/dark-mode-icon.svg';
import light_mode_icon from '../assets/light-mode-icon.svg';

const Header = ({currTheme, onToggleTheme}) => {

    const { theme } = useContext(ThemeContext);
    const [isRotated, setIsRotated] = useState(false);
    const [icon, setIcon] = useState(dark_mode_icon);

    // useEffect(() => {
    //     if (theme === 'light') {
    //       setIcon(dark_mode_icon);
    //     } else {
    //       setIcon(light_mode_icon);
    //     }
    //   }, [theme]);

    const getIcon = () => {
        if(currTheme === 'light') {
            return dark_mode_icon;
        } else {
            return light_mode_icon;
        }
    };

    const handleDarkModeToggle = () => {
        console.log("toggled");
        onToggleTheme();
        setIsRotated(!isRotated);
    };

    return (
        <>
            <div id="header">
                <Logo />
                <div>
                    <img className={`dark-mode-icon ${theme} ${isRotated ? 'rotate' : ''}`} src={getIcon()} alt="" onClick={handleDarkModeToggle} />
                </div>
            </div>
        </>
    )
}

export default Header;