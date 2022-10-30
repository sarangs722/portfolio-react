import React from "react";
import Typical from "react-typical";
import './Profile.css';
import ScrollService from "../../../utilities/ScrollService";

export default function Profile() {
    return (
        <div className="profile-container">

            <div className="profile-parent">

                <div className="profile-details">

                    <div className="colz">

                        <div className="colz-icon">

                            <a href="https://www.linkedin.com/in/sarangs722/" target="blank">
                                <i class="fa fa-brands fa-linkedin"></i>
                            </a>
                            <a href="https://twitter.com/sarangs722" target="blank">
                                <i className="fa fa-twitter-square"></i>
                            </a>

                        </div>

                    </div>

                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello, I'm <span className="highlighted-text">Sarang</span>
                        </span>
                    </div>

                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Web Dev",
                                        1000,
                                        "Android Dev",
                                        1000,
                                        "Learner",
                                        1000,
                                        "Programmer",
                                        1000,
                                    ]}
                                    wrapper="ppppppppppppppppppppppp"
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                Inspired to work on real life projects.
                            </span>
                        </span>
                    </div>

                    <div className="profile-options">
                        <button className="btn primary-btn" 
                        onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                            Hire Me
                        </button>
                        <a href="https://drive.google.com/file/d/17qgjkMCqCRKb7iLtx2mJQ4gC5kun_syd/view?usp=sharing" target="blank">
                            <button className="btn highlighted-btn">
                                    Get Resume
                            </button>
                        </a>
                    </div>

                </div>

                <div className="profile-picture">

                    <div className="profile-picture-background">

                        

                    </div>

                </div>

            </div>
        </div>
    );
}
