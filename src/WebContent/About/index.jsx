import React, {useEffect, useRef} from "react";
import './styles.css';

const About = () => {
    const nameRef = useRef();

    useEffect(()=>{
        document.addEventListener("scroll", handleScroll);

        return(()=>{
            document.removeEventListener("scroll", handleScroll);
        })
    })

    const handleScroll = () => {
        if (window.scrollY > 300){
            const alpha = (window.scrollY - 300) * 10 / 7;
            if (alpha < 1000) {
                const opacity = 1 - alpha/1000;
                nameRef.current.style.opacity = opacity; 
            } else {
                nameRef.current.style.opacity = 0; 
            }
        }
    }

    return (
        <div className="about-content">
            <div className="about-name" ref={nameRef}>
                <span className="about-name-span">ZACCUR ZHU</span>
            </div>
            <div className="about-first-pic">
                <img className="about-first-pic-img" src="/images/zaccur2.jpg"/>
            </div>
            <div className="about-desc">
                <p className="about-desc-title">
                    about me
                </p>
                <span>
                I am a music producer and sound engineer with a diverse portfolio of work, including the production of the 'GVO SESSIONS TAPE, Vol.1' mixtape and the mixing and production of music for numerous Chinese rap artists. With a deep understanding of both the technical and creative aspects of music production, I am dedicated to creating powerful, polished, and dynamic tracks that resonate with listeners.
                </span>
            </div>
        </div>
    )
}

export default About;