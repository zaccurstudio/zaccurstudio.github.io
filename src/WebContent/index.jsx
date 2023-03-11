import React, {useState} from "react";
import About from "./About";
import Schedule from "./Schedule";
import './styles.css';

const WebContent = () => {
    const [selectState, setSelectState] = useState('ABOUT');

    const renderContent = () =>{
        switch(selectState){
            case 'ABOUT':
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
                    ZACCUR STUDIO
                </div>
                <div className="header-menu">
                    <div className="header-menu-item" onClick={()=>setSelectState('ABOUT')}>
                        <span>ABOUT</span>
                    </div>
                    <div className="header-menu-item" onClick={()=>setSelectState('SCHEDULE')}>
                        <span>AVAILABILITY</span>
                    </div>
                    <div className="header-menu-item">
                        <span>PAST WORK</span>
                    </div>
                </div>
            </div>
            {renderContent()}
        </div>
    )
}

export default WebContent;