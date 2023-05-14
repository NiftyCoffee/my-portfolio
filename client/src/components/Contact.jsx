import './Contact.css';
import github_icon from '../assets/github-icon.svg';
import instagram_icon from '../assets/instagram-icon.svg';
import linkedin_icon from '../assets/linkedin-icon.svg';
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

const Contact = () => {

    useEffect(() => {

        const sr = ScrollReveal({opacity: 0});

        sr.reveal('.contact-header', {
            delay: 100,
            duration: 600,
            distance: '2rem',
            origin: 'left',
            reset: true,
        });

        sr.reveal('.contact-pretitle', {
            delay: 200,
            duration: 800,
            distance: '2rem',
            origin: 'bottom',
            reset: true,
        });

        sr.reveal('.contact-message', {
            delay: 200,
            duration: 800,
            distance: '2rem',
            origin: 'bottom',
            reset: true,
        });

        sr.reveal('.email-btn-container', {
            delay: 200,
            duration: 800,
            distance: '2rem',
            origin: 'bottom',
            reset: true,
        });

        sr.reveal('.github-link', {
            delay: 600,
            duration: 600,
            distance: '3rem',
            origin: 'top',
            reset: true,
            easing: 'ease-in-out',
        });

        sr.reveal('.instagram-link', {
            delay: 700,
            duration: 600,
            distance: '3rem',
            origin: 'top',
            reset: true,
            easing: 'ease-in-out',
        });

        sr.reveal('.linkedin-link', {
            delay: 800,
            duration: 600,
            distance: '3rem',
            origin: 'top',
            reset: true,
            
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
                            <img className="github-icon" src={github_icon} alt="" />
                        </a>
                        <a className="instagram-link" href="https://instagram.com/zoelilitay" target="_blank">
                            <img className="instagram-icon" src={instagram_icon} alt="" />
                        </a>
                        <a className="linkedin-link" href="https://www.linkedin.com/in/zoe-tay-209455235/" target="_blank">
                            <img className="linkedin-icon" src={linkedin_icon} alt="" />
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