import './Contact.css';
import github_dark_icon from '../assets/github-icon.svg';
import instagram_dark_icon from '../assets/instagram-icon.svg';
import linkedin_dark_icon from '../assets/linkedin-icon.svg';
import github_light_icon from '../assets/github-light-icon.svg';
import instagram_light_icon from '../assets/instagram-light-icon.svg';
import linkedin_light_icon from '../assets/linkedin-light-icon.svg';
import ScrollReveal from 'scrollreveal';
import { useEffect, useState } from 'react';

const Contact = ({currTheme}) => {

    const [githubIcon, setGithubIcon] = useState(github_dark_icon);
    const [instagramIcon, setInstagramIcon] = useState(instagram_dark_icon);
    const [linkedinIcon, setLinkedinIcon] = useState(linkedin_dark_icon);

    const getGithubIcon = () => {
        if (currTheme === 'light') {
            return github_dark_icon;
        } else {
            return github_light_icon;
        }
    };

    const getInstagramIcon = () => {
        if (currTheme === 'light') {
            return instagram_dark_icon;
        } else {
            return instagram_light_icon;
        }
    };

    const getLinkedinIcon = () => {
        if (currTheme === 'light') {
            return linkedin_dark_icon;
        } else {
            return linkedin_light_icon;
        }
    };

    useEffect(() => {

        const sr = ScrollReveal({opacity: 0});

        sr.reveal('.contact-header', {
            delay: 100,
            duration: 600,
            distance: '2rem',
            origin: 'left',
            reset: false,
        });

        sr.reveal('.contact-pretitle', {
            delay: 200,
            duration: 800,
            distance: '2rem',
            origin: 'bottom',
            reset: false,
        });

        sr.reveal('.contact-message', {
            delay: 200,
            duration: 800,
            distance: '2rem',
            origin: 'bottom',
            reset: false,
        });

        sr.reveal('.email-btn-container', {
            delay: 200,
            duration: 800,
            distance: '2rem',
            origin: 'bottom',
            reset: false,
        });

        sr.reveal('.github-link', {
            delay: 600,
            duration: 600,
            distance: '3rem',
            origin: 'top',
            reset: false,
            easing: 'ease-in-out',
        });

        sr.reveal('.instagram-link', {
            delay: 700,
            duration: 600,
            distance: '3rem',
            origin: 'top',
            reset: false,
            easing: 'ease-in-out',
        });

        sr.reveal('.linkedin-link', {
            delay: 800,
            duration: 600,
            distance: '3rem',
            origin: 'top',
            reset: false,
            
        });

    }, [])

    return (
        <>
            <div id="contact">
                <div className="contact-container">
                    <h3 className="contact-pretitle">Get In Touch</h3>
                    <h2 className="contact-header main-font">Contact</h2>
                    <div className="socials">
                        <a className="github-link" href="https://github.com/NiftyCoffee" target="_blank">
                            <img className="github-icon" src={getGithubIcon()} alt="" />
                        </a>
                        <a className="instagram-link" href="https://instagram.com/zoelilitay" target="_blank">
                            <img className="instagram-icon" src={getInstagramIcon()} alt="" />
                        </a>
                        <a className="linkedin-link" href="https://www.linkedin.com/in/zoe-tay-209455235/" target="_blank">
                            <img className="linkedin-icon" src={getLinkedinIcon()} alt="" />
                        </a>
                    </div>
                    <p className="contact-message">Feel free to shoot me an email for any enquiries, or even just a chat!</p>
                    <div className="email-btn-container">
                        <button className="email-btn">
                            <a href="mailto: zoetaydev@gmail.com">Send Message</a>
                        </button>
                        <span className="email-btn-shadow"></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact