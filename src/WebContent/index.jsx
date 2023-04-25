import React, { useState } from "react";
import About from "./About";
import Schedule from "./Schedule";
import './styles.css';
import Work from "./Work";

const WebContent = () => {
    const [selectState, setSelectState] = useState('WORK');

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

    return (
        <div className="content-container">
            <div className="content-header">
                <div className="header-logo">
                    <video className="header-logo-video" src="/video/zaccur_spin.mp4" autoPlay loop muted/>
                </div>
                <div className="header-menu">
                    <div className="header-menu-item" onClick={() => setSelectState('WORK')}>
                        <span>PAST WORK</span>
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
        </div>
    )
}

export default WebContent;