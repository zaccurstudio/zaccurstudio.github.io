import React, { useEffect, useRef } from "react";
import './styles.css';

const Schedule = () => {

    return (
        <div className="schedule-content">
            <div className="schedule-container">
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23A79B8E&ctz=America%2FNew_York&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&mode=WEEK&showCalendars=0&showTz=1&src=emFjY3VyZ2l0aHViQGdtYWlsLmNvbQ&color=%23039BE5" width="800" height="600"></iframe>
            </div>
        </div>
    )
}

export default Schedule;