import React, { useState } from "react";
import './styles.css';

const ShareIcon = ({shareIconName, shareIconLink, shareIconType}) => {

    const unhoverImg = shareIconType === 'instagram' ? '/images/insta-static.png' : '/images/logospotify.png';

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="share-icon" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={()=>{window.open(shareIconLink, "_blank")}}>
            <img className="share-icon-img" src={unhoverImg} />
            <span className="share-icon-name" style={{textDecoration: isHovered ? 'underline' : 'none'}}>
                {shareIconName}
            </span>
        </div>
    )

}

export default ShareIcon;