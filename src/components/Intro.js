import React from 'react'
import Youtube from '@u-wave/react-youtube'

export const Intro = () => {
    return (
        <div>
            <Youtube 
                video="UByE17tg-Iw"
                // autoplay
                className="video"
                height="720"
                width="100%"
                suggestedQuality="hd1080"
            />
        </div>
    )
}

export default Intro
