import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import About from "./About";
import Schedule from "./Schedule";
import './styles.css';
import Work from "./Work";
import ShareIcon from "./ShareIcon";

const WebContent = () => {
    const [selectState, setSelectState] = useState('WORK');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const smallBallRef = useRef(null);
    const bigBallRef = useRef(null);

    const renderContent = () => {
        switch (selectState) {
            case 'WORK':
                return <Work />;
            case 'BIO':
                return <About />;
            case 'SCHEDULE':
                return <Schedule />;
            default:
                return <About />;
        }
    }

    useEffect(() => {
        document.body.addEventListener('mousemove', onMouseMove);
    }, [])

    const onMouseMove = (e) => {
        gsap.to(smallBallRef.current, {
            duration: 0.1,
            x: e.clientX - 5,
            y: e.clientY - 11
        })
        gsap.to(bigBallRef.current, {
            duration: 0.4,
            x: e.clientX - 15,
            y: e.clientY - 14
        })
    }

    return (
        <div className="content-container">
            {selectState === 'WORK' && <div className="content-background">
                <img className="content-background-img" src="/images/homebg.png" />
                <div className="iframe-container">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/1je9U5IclcI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                {isModalOpen && <div className="custom-modal">
                    <div className="modal-close-icon" onClick={()=>setIsModalOpen(false)}>
                        X
                    </div>
                    <div className="modal-content">
                    </div>
                </div>}
            </div>}
            <div className="content-header-background"></div>
            <div className="content-header">
                <div className="header-logo">
                    <video className="header-logo-video" src="/video/zaccur_spin.mp4" autoPlay loop muted />
                </div>
                <div className="header-menu">
                    <div className="header-menu-item" onClick={() => setSelectState('WORK')}>
                        <span>WORKS</span>
                    </div>
                    <div className="header-menu-item" onClick={() => setSelectState('SCHEDULE')}>
                        <span>AVAILABILITY</span>
                    </div>
                    <div className="header-menu-item" onClick={() => setSelectState('BIO')}>
                        <span>ABOUT</span>
                    </div>
                </div>
            </div>
            {renderContent()}
            <div className="content-footer">
                <ShareIcon shareIconName="Zaccur Zhu" shareIconLink={"https://instagram.com/zaccurzhu"} shareIconType="instagram" />
                <ShareIcon shareIconName="Zaccur Studio" shareIconLink={"https://instagram.com/zaccurstudio"} shareIconType="instagram" />
                <ShareIcon shareIconName="Zaccur" shareIconLink={"https://open.spotify.com/artist/60u7aNCfQoXKdp6jgRuIqt"} shareIconType="spotify" />
            </div>
            <div class="cursor">
                    <div class="cursor__ball cursor__ball--big" ref={bigBallRef}>
                        <svg height="30" width="30">
                            <circle cx="15" cy="15" r="12" stroke-width="0"></circle>
                        </svg>
                    </div>

                    <div class="cursor__ball cursor__ball--small" ref={smallBallRef}>
                        <svg height="10" width="10">
                            <circle cx="5" cy="5" r="4" stroke-width="0"></circle>
                        </svg>
                    </div>
                </div>
        </div>
    )
}

export default WebContent;