import React, { useEffect, useRef } from "react";
import './styles.css';

const Schedule = () => {

    return (
        <div className="schedule-content">
            <div className="schedule-container">
            <iframe src="https://app.squarespacescheduling.com/schedule.php?owner=29010338" title="Schedule Appointment" width="100%" height="800" frameBorder="0"></iframe><script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
            </div>
        </div>
    )
}

export default Schedule;