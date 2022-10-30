import React, { useEffect } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './AboutMe.css'

export default function AboutMe(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id)
            return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubsription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)
    
    const SCREEN_CONSTANTS = {
        description: "I'm pursuing my Bachelor of Technology focused in Information Technology from ABES Engineering College, Ghaziabad. My areas of interest include Competitive Programming, App Development, Web Development and Cybersecurity. I have good knowledge on Data Structures & Algorithms with expertise in C++ programming language. I am also familar with Java, JavaScript & Kotlin programming languages. I am curious about new technologies and always try to learn them and make something productive.",

        highlights: {
            bullets: [
                "Web Development (Node.JS, MERN)",
                "Android Development (Kotlin, Jetpack Compose)",
                "Core Java, C++",
                "SQL, MongoDB",
            ],
            heading: "A Few Highlights:"
        }
    }

    const renderHighlight = () => {
        return (
            SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
                <div className="highlight" key={i}>
                    <div className="highlight-blob">

                    </div>
                    <span>{value}</span>
                </div>
            ))
        )
    }

    return (
        <div className="about-me-container screen-container fade-in" id={props.id || ""}>
            <div className="about-me-parent">
                <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'} />
                <div className="about-me-card">
                    <div className="about-me-profile">

                    </div>
                    <div className="about-me-details">
                        <span className="about-me-description">{SCREEN_CONSTANTS.description}</span>
                        <div className="about-me-highlights">
                            <div className="highlight-heading">
                                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                            </div>
                            <div>
                                {renderHighlight()}
                            </div>
                        </div>
                        <div className="about-me-options">
                            <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                                Hire Me
                            </button>
                            <a href="https://drive.google.com/file/d/1tXLVf7CTCn95nfrMaQyAz4sE1j80kSgd/view" target="blank">
                                <button className="btn highlighted-btn">
                                    Get Resume
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
