import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Projects.css"

import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities//ScrollService'
import Animations from '../../utilities/Animations';

import qrFaceApp from '../../img/qrFace-project.png';
import downloadManagerPic from '../../img/download-manager.png';
import networkDesign from '../../img/network-design.png';
import unscrambleApp from '../../img/unscramble-app.jpg';
// import newsletterBackend from '../../img/newsletter-backend.png';

export default function Projects(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id)
            return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubsription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const options = {
        loop: true,
        margin: 30,
        nav: true,
        animateIn: "bounceInRight",
        animateOut: "bounceOutRight",
        dots: true,
        autoplay: true,
        smartSpeed: 4000,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 1,
            },
            700: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        }
    }

    return (
        <div>
            <ScreenHeading
                title={"Projects"}
                subHeading={"What are the projects i've worked on"}
            />

            <section className="projects-section fade-in" id={props.id || ''}>
                <div className="container">
                    <div className="row">
                        <OwlCarousel className="owl-carousel" id="projects-carousel" {...options}>



                            <div className="col-lg-12">
                                <a href="https://github.com/sarangs722/Download-Manager-Core-Java-Swing" target="blank">
                                    <div className="proji-item">
                                        <div className="proji-image">
                                            <img src={downloadManagerPic} alt="download manager gui application"></img>
                                        </div>

                                        <div className="proji-info">
                                            <h5>
                                                Download Manager GUI
                                            </h5>
                                            <p>
                                                Core Java, Swing GUI
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-lg-12">
                                <a href="https://github.com/sarangs722/QRCode-FacialRecog-Attendance-System" target="blank">
                                    <div className="proji-item">
                                        <div className="proji-image">
                                            <img src={qrFaceApp} alt="QR + Face Recogn application"></img>
                                        </div>

                                        <div className="proji-info">
                                            <h5>
                                                QR + Facial Recognition Attendance System
                                            </h5>
                                            <p>
                                                Android (Kotlin) + Web (Node.js)
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>


                            <div className="col-lg-12">
                                <a href="https://github.com/sarangs722/Unscramble-Words-App---Kotlin" target="blank">
                                    <div className="proji-item">
                                        <div className="proji-image">
                                            <img src={unscrambleApp} alt="unscramble game android application"></img>
                                        </div>

                                        <div className="proji-info">
                                            <h5>
                                                Unscramble Android App
                                            </h5>
                                            <p>
                                                Kotlin, Android Studio, Jetpack Compose
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-lg-12">
                                <a href="https://github.com/sarangs722/Amusement-Park-Network-Design" target="blank">
                                    <div className="proji-item">
                                        <div className="proji-image">
                                            <img src={networkDesign} alt="network design for amusement parks"></img>
                                        </div>

                                        <div className="proji-info">
                                            <h5>
                                                Network Design Prototype
                                            </h5>
                                            <p>
                                                Cisco Packet Tracer Tool
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            {/* <div className="col-lg-12">
                                <a href="https://github.com/sarangs722/NewsLetterSignupProject" target="blank">
                                    <div className="proji-item">
                                        <div className="proji-image">
                                            <img src={newsletterBackend} alt="NewsLetter Signup Project"></img>
                                        </div>

                                        <div className="proji-info">
                                            <h5>
                                                NewsLetter Signup Project
                                            </h5>
                                            <p>
                                                Node.JS, Express.JS
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div> */}

                        </OwlCarousel>


                    </div>



                </div>
            </section>

            {/* <div className="footer-container">
                            <div className="footer-image">
                                <img src={require('../../assets/Home/shape-bg.png')}
                                    alt='no internet connection' />
                            </div>
                        </div> */}

        </div>

    )
}
