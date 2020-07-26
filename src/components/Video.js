import React from 'react'
import Youtube from '@u-wave/react-youtube'

export const Video = () => {
    return (
        <div className="containerVideo">
            <img className="videoImage" src="https://ksassets.timeincuk.net/wp/uploads/sites/54/2018/06/The-Crew-2.jpg" />
            <div className="videoText">
                <p>New Feature</p> 
                <h1>Coming Soon</h1>
            </div>

            <div className="videoContent transparentText">           
                <h2>You can watch this 
                    <strong> CUTE CAT </strong>
                    video while waiting for new feature!!
                </h2>
                <Youtube 
                    video="pOmu0LtcI6Y"
                    // autoplay
                    suggestedQuality="hd1080"
                    height="480px"
                    width="720px"
                />
            </div>
            
        </div>
    )
}

export default Video