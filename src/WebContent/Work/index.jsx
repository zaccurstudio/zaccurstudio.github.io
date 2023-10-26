import React, { useState, useRef, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import { isMobile } from "react-device-detect";
import './styles.css';

const transitionTime = "750ms";

const trackList = [{ "track": "/tracks/1.mp3", "cover": "/covers/1.jpg", "name": "Gotta Be Drill", "link": "https://open.spotify.com/track/4T2R9CIlmD7ApekhsfwW0C" },
{ "track": "/tracks/2.mp3", "cover": "/covers/2.jpg", "name": "06182023", "link": "https://open.spotify.com/artist/60u7aNCfQoXKdp6jgRuIqt" },
{ "track": "/tracks/3.mp3", "cover": "/covers/3.jpg", "name": "06242023", "link": "https://open.spotify.com/artist/60u7aNCfQoXKdp6jgRuIqt" },
{ "track": "/tracks/4.mp3", "cover": "/covers/4.jpg", "name": "06302023", "link": "https://open.spotify.com/artist/60u7aNCfQoXKdp6jgRuIqt" },
{ "track": "/tracks/5.mp3", "cover": "/covers/5.png", "name": "#20", "link": "https://open.spotify.com/track/5JxQXLbFbHivjtDWwCbFva?si=7cbcbc01c6fb4e4e" },
{ "track": "/tracks/6.mp3", "cover": "/covers/6.jpg", "name": "06222023", "link": "https://open.spotify.com/artist/60u7aNCfQoXKdp6jgRuIqt" },
{ "track": "/tracks/7.mp3", "cover": "/covers/7.jpg", "name": "SunShine", "link": "https://open.spotify.com/track/3ygqb5A7cseO1MYaCA6tnn?si=9509d3af0f1d4b6d" },
{ "track": "/tracks/8.mp3", "cover": "/covers/8.jpg", "name": "06262023", "link": "https://open.spotify.com/artist/60u7aNCfQoXKdp6jgRuIqt" },
];
var audio;

const Work = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isTrackHover, setIsTrackHover] = useState(false);
    const [selectedTrack, setSelectedTrack] = useState(0);

    const cubeRef = useRef(null);
    const cbackRef = useRef(null);
    const ctopRef = useRef(null);
    const cleftRef = useRef(null);
    const crightRef = useRef(null);
    const glowRef = useRef(null);
    const powerupRef = useRef(null);


    useEffect(() => {
        ctopRef.current.style.transition = `all ${transitionTime}`;
        cleftRef.current.style.transition = `all ${transitionTime}`;
        crightRef.current.style.transition = `all ${transitionTime}`;
        cubeRef.current.style.transition = `all ${transitionTime}`;
        powerupRef.current.style.transition = `all ${transitionTime}`;
        glowRef.current.style.transition = `all ${transitionTime}`;
        cbackRef.current.style.transition = `all ${transitionTime}`;
        ctopRef.current.style.transform = "translateY(0)";
        cleftRef.current.style.transform = "translateX(0)";
        crightRef.current.style.transform = "translateX(0)";
        cubeRef.current.style.opacity = 1;
        ctopRef.current.style.opacity = 1;
        cleftRef.current.style.opacity = 1;
        crightRef.current.style.opacity = 1;
        cbackRef.current.style.opacity = 1;
        glowRef.current.style.opacity = 1;
        powerupRef.current.style.opacity = 0;
        cubeRef.current.style.animationPlayState = "running";
        powerupRef.current.style.height = "48px";
        powerupRef.current.style.width = "48px";

        return (() => {
            if (audio) {
                audio.pause();
            }
        })
    }, [])

    const cubeOnClick = () => {
        if (!isOpen) {
            const selectedNumber = Math.floor(Math.random() * trackList.length);
            setSelectedTrack(selectedNumber)
            ctopRef.current.style.transform = "translateY(-3rem)";
            cleftRef.current.style.transform = "translateX(-3rem)";
            crightRef.current.style.transform = "translateX(3rem)";
            ctopRef.current.style.opacity = 0.1;
            cleftRef.current.style.opacity = 0.1;
            crightRef.current.style.opacity = 0.1;
            cbackRef.current.style.opacity = 0.1;
            glowRef.current.style.opacity = 0.5;
            powerupRef.current.style.opacity = 1;
            setIsOpen(true);
            cubeRef.current.style.animationPlayState = "paused";
            powerupRef.current.style.height = isMobile ? "160px" : "200px";
            powerupRef.current.style.width = isMobile ? "160px" : "200px";
            audio = new Audio(trackList[selectedNumber].track);
            audio.play();
        } else {
            ctopRef.current.style.transform = "translateY(0)";
            cleftRef.current.style.transform = "translateX(0)";
            crightRef.current.style.transform = "translateX(0)";
            cubeRef.current.style.opacity = 1;
            setIsOpen(false);
            ctopRef.current.style.opacity = 1;
            cleftRef.current.style.opacity = 1;
            crightRef.current.style.opacity = 1;
            cbackRef.current.style.opacity = 1;
            glowRef.current.style.opacity = 1;
            powerupRef.current.style.opacity = 0;
            cubeRef.current.style.animationPlayState = "running";
            powerupRef.current.style.height = "42px";
            powerupRef.current.style.width = "42px";
            audio.pause();
        }
    }

    const onTitleClick = () => {
        window.open(trackList[selectedTrack].link, '_blank');
    }

    return (
        <div id="work-content">
            <div className="video-carousel-container">
                <Carousel renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
                    hasPrev && (
                        <div style={{position: "absolute", left: "0", top: "50%", transform: "translateY(-50%)", zIndex: 100}} onClick={clickHandler}>
                            <img
                                style={{ height: "50px", width: "50px" }}
                                src={'/images/left-icon.png'} />
                        </div>
                    )
                }
                    renderArrowNext={(clickHandler, hasNext, labelNext) =>
                        hasNext && (
                            <div style={{position: "absolute", right: "0", top: "50%", transform: "translateY(-50%)", zIndex: 100}} onClick={clickHandler}>
                                <img
                                    style={{ height: "50px", width: "50px" }}
                                    src={'/images/right-icon.png'} />
                            </div>
                        )
                    } showThumbs={false}>
                    <div className="carousel-video">
                        <iframe width="540" height="450" src="https://www.youtube.com/embed/9h0CrekIZqQ?si=wZ6dslWsLtJzwrrX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="carousel-video">
                        <iframe width="540" height="450" src="https://www.youtube.com/embed/TkaxhRkJlSQ?si=2JOPrqTF5D1hHSVO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="carousel-video">
                        <iframe width="540" height="450" src="https://www.youtube.com/embed/DMu7x0aGDRo?si=1E8_bne7CtyLQXHB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </Carousel>
            </div>
            <div id="cube" ref={cubeRef} onClick={!isMobile ? cubeOnClick : ()=>{}} onTouchEnd={cubeOnClick}>
                <div class="hexagon absolute" ref={glowRef}></div>
                <div class="cube back h-40 w-40 absolute top-0 left-0" ref={cbackRef}></div>
                <div class="cube top h-40 w-40 absolute top-0 left-0" ref={ctopRef}></div>
                <div class="cube left h-40 w-40 absolute top-0 left-0" ref={cleftRef}></div>
                <div class="cube right h-40 w-40 absolute top-0 left-0" ref={crightRef}></div>
            </div>
            <div className="cube-overlay">
                <div class="powerup absolute" ref={powerupRef} onMouseEnter={() => setIsTrackHover(true)} onMouseLeave={() => setIsTrackHover(false)} onTouchEnd={()=>setIsTrackHover(!isTrackHover)}>
                    <img className="track-bg" src={trackList[selectedTrack].cover} />
                    {isTrackHover && isOpen && <div className="track-overlay">
                        <div className="track-title-container" onClick={onTitleClick}>
                            <span className="track-title">{trackList[selectedTrack].name}</span>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Work;