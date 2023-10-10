import React, {useEffect, useRef} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
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
                <span className="about-desc-body">
                Zaccur is a multi-talented music producer, DJ, and executive producer based in New York who specializes in creating Hip-hop, R&B, and instrumental music. He is skilled in instrumental production, recording, mixing, and mastering, and has collaborated with many upcoming artists while creating his own music at the same time.
In addition to his producing work, Zaccur has also performed as an opening act for major artists such as French Montana and 王以太. His music is characterized by infectious beats, innovative sound design, and captivating melodies that blend elements of Hip-hop and R&B with his own unique style.
                </span>
                <img className="float-1" src="/images/studio2.jpg"/>
                <img className="float-2" src="/images/studio3.jpg"/>
            </div>

            <div className="carousel-container">
                <Carousel>
                    <div className="carousel-image">
                        <img src="images/studio/show1.jpg" />
                    </div>
                    <div className="carousel-image">
                        <img src="images/studio/show2.jpg" />
                    </div>
                    <div className="carousel-image">
                        <img src="images/studio/show3.jpg" />
                    </div>
                    <div className="carousel-image">
                        <img src="images/studio/show4.jpg" />
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default About;