import React from 'react'
import '../App.css'

export const Image = () => {
    return (
        <div>
            <div className="containerImage">
              <img className="image" src='https://www.hitechcentury.com/wp-content/uploads/2020/07/TC2_ka_1920x1080_070720_6pm_CEST.jpg'/>

              <div className="textOnImage">
                WELCOME TO THE CREW® 2 <br /> WEB STORE
              </div>
            </div>
              <h3 className="title-main">
                <span>CHECK OUT THESE NEW CAR IN STORE</span>
              </h3>
        </div>
    )
}

export default Image
