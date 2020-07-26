import React from 'react'
import '../App.css'

export const Footer = () => {
    return (
        <div>
           <section id="lab_social_icon_footer">
            {/* <!-- Include Font Awesome Stylesheet in Header --> */}
                <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"/>
                <div className="container footerContainer">
                    <div className="text-center center-block">
                        <a href="https://www.facebook.com/bootsnipp"><i id="social-gh" class="fa fa-github-square fa-3x social"></i></a>
	                    <a href="https://www.youtube.com/channel/UCjVDEpRu1mFO2MPWFluwUhA?view_as=subscriber">
                            <i id="social-yt" class="fa fa-youtube-square fa-3x social">
                            </i>
                        </a>
                    </div>
                    <div className="text-center center-block transparentText fontWeight">
                        Made with <span>💖</span> by <span className="rainbow-text">BINH NGUYEN</span> aka <strong>SHIRO</strong>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer 