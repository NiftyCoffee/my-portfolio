import './Projects.css';
import arrow_icon_dark from '../assets/arrow.svg';
import arrow_icon_light from '../assets/arrow-light.svg';
import ScrollReveal from 'scrollreveal';
import { useEffect,useState } from 'react';

const Projects = ({currTheme}) => {

    const [icon, setIcon] = useState(arrow_icon_dark);

    const getIcon = () => {
        if(currTheme === 'light') {
            return arrow_icon_dark;
        } else {
            return arrow_icon_light;
        }
    };

    useEffect(() => {

        const sr = ScrollReveal({opacity: 0});

        sr.reveal('.project-card:nth-child(1)', {
            delay: 100,
            distance: '7rem',
            origin: 'top',
            duration: 500,
            reset: false,
            easing: 'ease-in-out',
            viewFactor: 0.2,
        });

        sr.reveal('.project-card:nth-child(2)', {
            delay: 250,
            distance: '7rem',
            origin: 'top',
            duration: 500,
            reset: false,
            easing: 'ease-in-out',
            viewFactor: 0.2,
        });

        sr.reveal('.project-card:nth-child(3)', {
            delay: 400,
            distance: '7rem',
            origin: 'top',
            duration: 500,
            reset: false,
            easing: 'ease-in-out',
            viewFactor: 0.2,
        });

        sr.reveal('.projects-container h2', {
            delay: 100,
            distance: '3rem',
            origin: 'left',
            duration: 200,
            reset: false,
            easing: 'ease-in-out',
            viewFactor: 0.2,
        });

        sr.reveal('.resume-btn-container', {
            delay: 100,
            distance: '3rem',
            origin: 'left',
            duration: 200,
            reset: false,
            easing: 'ease-in-out',
            viewFactor: 0.2,
        });

    }, []);

    return (
        <>
            <div id="projects">
                <div className="projects-container">
                    <h2>Featured Projects</h2>
                    <ul className="project-gallery">
                        <li className="project-card">
                            <h3 className="project-title main-font">Online Image Scanner</h3>
                            <p className="project-desc">Web application that takes uploaded images and presents extracted data in tabular format.</p>
                            <div className="project-btn">
                                <button>
                                    <a href="https://github.com/KohHaruki/SummerHack2023" target="_blank">View GitHub</a>
                                </button>
                                <span className="btn-shadow"></span>
                            </div>
                        </li>
                        <li className="project-card">
                            <h3 className="project-title main-font">Missing Web Tracker</h3>
                            <p className="project-desc">Web application that contains posts of missing people/pets data and uses the Google Maps API.</p>
                            <div className="project-btn">
                                <button>
                                    <a href="https://github.com/GrassyAirplane/missing-web-tracker" target="_blank">View GitHub</a>
                                </button>
                                <span className="btn-shadow"></span>
                            </div>
                        </li>
                        <li className="project-card">
                            <h3 className="project-title main-font">Roomba Delivery</h3>
                            <p className="project-desc">Python simulator of robots sorting packages within a console factory visualizer.</p>
                            <div className="project-btn">
                                <button>
                                    <a href="https://github.com/NiftyCoffee/mdashhack-roomba-solution" target="_blank">View GitHub</a>
                                </button>
                                <span className="btn-shadow"></span>
                            </div>
                        </li>
                    </ul>
                    <div className="resume-btn-container">
                        <button className="resume-btn">
                            <a href="https://drive.google.com/file/d/1JCAVeeYF_f1IPqEYilmLriYSQvK0vzkI/view?usp=sharing" target="_blank">View Resume</a>
                        </button>
                        <img className="arrow-icon" src={getIcon()} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects