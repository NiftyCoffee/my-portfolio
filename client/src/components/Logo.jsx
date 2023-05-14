import './Logo.css';
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

const Logo = () => {

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
            <div className="logo">
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