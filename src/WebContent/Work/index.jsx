import React, { useEffect, useRef } from "react";
import './styles.css';

const Work = () => {
    return (
        <div className="work-content">
            <div className="work-container">
                <div className="work-title text-shadow">
                    PAST WORK
                </div>
                <div className="work-object">
                    <p className="work-object-title">
                        ENRAMA
                    </p>
                    <div className="work-object-content">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/1je9U5IclcI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="work-object">
                    <p className="work-object-title">
                        GOTTA BE DRILL
                    </p>
                    <div className="work-object-content">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/F2Wq6o4KUmU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work;