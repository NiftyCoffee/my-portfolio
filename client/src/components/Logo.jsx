import './Logo.css';
import ScrollReveal from 'scrollreveal';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../ThemeContext';

const Logo = () => {

    const { theme } = useContext(ThemeContext);

    useEffect (() => {
        const sr = ScrollReveal({opacity: 1});
        sr.reveal('.logo', {
            distance: '9rem',
            duration: 300,
            origin: 'top',
            delay: 2000,
            easing: 'ease-out',
            reset: false,
            viewFactor: 0.0,
        });
    }, []);

    return (
        <>
            <div className={`logo ${theme}`}>
                {/* <img className="border" src={border} alt=""/> */}
                <a href="#home">
                    <div className="hidden"><span className="main-font hidden">Z</span></div>
                    <div className="visible"><span className="main-font visible">Z</span></div>
                </a>
            </div>
        </>
    )
}

export default Logo