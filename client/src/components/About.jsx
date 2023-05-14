import './About.css';
import prof_pic from '../assets/profile-pic.jpg';
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

const About = () => {

    useEffect(() => {

        const sr = ScrollReveal({ viewFactor: 0 });

        sr.reveal(".row-one", {
            reset: false,
            delay: 100,
            duration: 400,
            origin: 'right',
            distance: '5rem',
            viewFactor: 0.2,
        });

        sr.reveal(".right", {
            reset: false,
            delay: 100,
            duration: 400,
            origin: 'left',
            distance: '5rem',
            viewFactor: 0.2,
        });

        sr.reveal(".left", {
            reset: false,
            delay: 200,
            duration: 800,
            rotate: {
                x: -20,
                z: -20
            },
            viewFactor: 1,
        });

        sr.reveal(".img-border", {
            reset: false,
            delay: 200,
            duration: 1000,
            rotate: {
                x: 40,
                z: 40
            },
            viewFactor: 1,
        });

        // sr.reveal(".img-shadow", {
        //     delay: 500,
        //     duration: 2000,
        //     rotate: {
        //       x: -20,
        //       z: -20
        //     }
        // });

    }, []);

    return (
        <>
            <div id="about">
                <div className="about-container">
                    <article className="row-one">
                        <h2 className="main-font">I'm Zoe,</h2>
                        <p>A front-end developer and Computer Science student currently studying at Monash University. I like technology and design,
                            and am interested in full-stack development.
                        </p>
                    </article>

                    <article className="row-two">
                        <div className="left">
                            <img className="prof-pic" src={prof_pic} alt="" />
                            <span className="img-shadow"></span>
                            <span className="img-border"></span>
                        </div>
                        <article className="right">
                            <h2 className="main-font">I code.</h2>
                            <p>Here's what I've worked with.
                                <div class="tech-list">
                                    <ul>
                                        <li>Python</li>
                                        <li>Java</li>
                                        <li>React</li>
                                        <li>Node</li>
                                    </ul>
                                    <ul>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>TypeScript</li>
                                    </ul>
                                </div>
                            </p>
                        </article>
                    </article>
                </div>
            </div>
        </>
    )
}

export default About