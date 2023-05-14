import './Home.css';
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

function Home() {

    // Create Ref Element
    const el = useRef(null);
    
    useEffect(() => {

        // Scroll Reveal
        const sr = ScrollReveal({ opacity: 0 });

        sr.reveal('.spotlight', {
            distance: '0rem',
            easing: 'ease-out',
            origin: 'left',
            reset: false,
            viewFactor: 0,
            delay: 1400,
        });

        sr.reveal('.home-p', {
            distance: '0rem',
            easing: 'ease-out',
            origin: 'left',
            reset: false,
            viewFactor: 0,
            delay: 1800,
        });

        // Add typed instance
        const typed = new Typed(el.current, {
            strings: ['hi, my name is'],
            startDelay: 200,
            typeSpeed: 40,
            showCursor: true,
        });

        return () => {
            // Clean up Typed.js instance
            typed.destroy();
        };

    }, []);

    return (
        <>
            <div id="home">
                {/* <h3 id="typed-strings" className="home-pretitle">hi, my name is</h3> */}
                <h3><span ref={el}></span></h3>
                <h1 className="main-font spotlight">Zoe Tay</h1>
                <p className='home-p'>Front-end developer & Computer Science student with a passion for learning.</p>
            </div>
        </>
    )
}
export default Home