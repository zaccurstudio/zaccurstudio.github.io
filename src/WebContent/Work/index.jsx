import React, {useState,useRef, useEffect} from "react";
import './styles.css';

const transitionTime = "750ms";

const Work = () => {
    const [isOpen, setIsOpen] = useState(false);

    const cubeRef = useRef(null);
    const cbackRef = useRef(null);
    const ctopRef = useRef(null);
    const cleftRef = useRef(null);
    const crightRef = useRef(null);
    const glowRef = useRef(null);
    const powerupRef = useRef(null);


    useEffect(()=>{
        ctopRef.current.style.transition = `all ${transitionTime}`;
        cleftRef.current.style.transition = `all ${transitionTime}`;
        crightRef.current.style.transition = `all ${transitionTime}`;
        cubeRef.current.style.transition = `all ${transitionTime}`;
        powerupRef.current.style.transition = `all ${transitionTime}`;
        glowRef.current.style.transition = `all ${transitionTime}`;
        cbackRef.current.style.transition = `all ${transitionTime}`;
    }, [])

    const cubeOnClick = () => {
        if (!isOpen) {
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
            powerupRef.current.style.zIndex = 10;
            powerupRef.current.style.height = "80px";
            powerupRef.current.style.width = "80px";
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
            powerupRef.current.style.zIndex = 0;
            cubeRef.current.style.animationPlayState = "running";
            powerupRef.current.style.height = "48px";
            powerupRef.current.style.width = "48px";
          }
    }

    return (
        <div id="work-content">
            <div id="cube" ref={cubeRef} onClick={cubeOnClick}>
                <div class="hexagon absolute" ref={glowRef}></div>
                <div class="cube back h-40 w-40 absolute top-0 left-0" ref={cbackRef}></div>
                <div class="cube top h-40 w-40 absolute top-0 left-0" ref={ctopRef}></div>
                <div class="cube left h-40 w-40 absolute top-0 left-0" ref={cleftRef}></div>
                <div class="cube right h-40 w-40 absolute top-0 left-0" ref={crightRef}></div>
                <div class="powerup absolute" ref={powerupRef}></div>
            </div>
        </div>  
    )
}

export default Work;