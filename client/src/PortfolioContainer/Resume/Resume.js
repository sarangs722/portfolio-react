import React, { useState } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './Resume.css'


export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({})

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id)
            return
        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubsription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const ResumeHeading = (props) => {
        return (
            <div className='resume-heading'>
                <div className='resume-main-heading'>
                    <div className='heading-bullet'></div>
                        <span>
                            {props.heading ? props.heading : ''}
                        </span>
                        {
                            props.fromDate && props.toDate ?
                                (
                                    <div className="heading-date">
                                        {props.fromDate + "-" + props.toDate}
                                    </div>
                                ) :
                                (<div></div>)
                        }
                    
                </div>
                    <div className="resume-sub-heading">
                        <span>{props.subHeading ? props.subHeading : ''}</span>
                    </div>

                    <div className="resume-heading-description">
                        <span>{props.description ? props.description : ''}</span>
                    </div>
                </div>

        )
    };

    const resumeBullets = [
        { label: "Education", logoSrc: "education.svg" },
        { label: "Work History", logoSrc: "work-history.svg" },
        { label: "Programming Skills", logoSrc: "programming-skills.svg" },
        // { label: "Projects", logoSrc: "projects.svg" },
        { label: "Certifications", logoSrc: "interests.svg" },
    ];

    const programmingSkillDetails = [
        { skill: "Java", ratingPercent: 85 },
        { skill: "C++", ratingPercent: 80 },
        { skill: "JavaScript", ratingPercent: 85 },
        { skill: "Kotlin", ratingPercent: 80 },
        { skill: "Node JS", ratingPercent: 80 },
        { skill: "React JS", ratingPercent: 75 },
        { skill: "HTML", ratingPercent: 80 },
        { skill: "CSS", ratingPercent: 80 },
        { skill: "MySQL", ratingPercent: 80 },
        { skill: "MongoDB", ratingPercent: 60 },
    ];

    // const projectDetails = [
    //     {
    //         title: "Download Manager GUI Application",
    //         subHeading: "Technologies Used: Core Java, Swing GUI",
    //         description: "A Functional Download Manager Desktop Application made in Core Java with help of Swing GUI. HttpUrlConnection is specifically used to connect the download server to the client machine.",
    //     },
    //     {
    //         title: "Portfolio Website",
    //         subHeading: "Technologies Used: React.JS, Bootstrap, Node.JS",
    //         description: "A Personal Portfolio website to showcase all my projects and details. ",
    //     },
    //     {
    //         title: "Unscramble Android App",
    //         subHeading: "Technologies Used: Kotlin, Android Studio, Jetpack Compose",
    //         description: "Developed a quiz game that asks you to find the correct word after rearranging letters of the word.",
    //     },
    //     {
    //         title: "QR Code + Facial Recognition Attendance System",
    //         subHeading: "Technologies Used: Javascript, NodeJS, ExpressJS, Kotlin, Android Studio, MySQL",
    //         description: "Developing an Android Application for users(students) to scan real time changing QR codes to record attendance. Web portal for Teachers and a Backend server will handle the traffic to record requests and will ensure authenticity by changing QR codes every 5-6 seconds.",
    //     },
    // ];

    const resumeDetails = [
        <div className='resume-screen-container' key='education'>
            <ResumeHeading
                heading={"ABES Engineering College"}
                subHeading={"BACHELOR OF TECHNOLOGY (B.TECH) in INFORMATION TECHNOLOGY"}
                fromDate={"2019"}
                toDate={"2023"}
            />
            <ResumeHeading
                heading={"Khaitan Public School"}
                subHeading={"Higher Secondary Certificate (CBSE)"}
                fromDate={"2017"}
                toDate={"2018"}
            />
            <ResumeHeading
                heading={"Vidywati Nigam Memorial Public School"}
                subHeading={"Secondary School Certificate (CBSE)"}
                fromDate={"2015"}
                toDate={"2016"}
            />
        </div>,

        <div className='resume-screen-container' key='work-experience'>
            <ResumeHeading
                heading={"AICTE - Cisco Networking Academy"}
                subHeading={"Cybersecurity Virtual Intern"}
                fromDate={"May 2021"}
                toDate={"July 2021"}
            />
            <div className="experience-description">
                <span className="resume-description-text">
                    Learned about the Cyber Security Essentials and hands on experience with Cisco Packet Tracer. Developed a prototype network design for Amusement Parks using Cisco Packet Tracer.
                </span>
            </div>
        </div>,

        <div className="resume-screen-container programming-skills-container" key="programming-skills">
            {programmingSkillDetails.map((skill, index) => (
                <div className="skill-parent" key={index}>
                    <div className="heading-bullet"></div>
                    <span>{skill.skill}</span>
                    <div className="skill-percent">
                        <div style={{ width: skill.ratingPercent + "%" }} className="active-percent">

                        </div>
                    </div>
                </div>
            ))}
        </div>,

        // <div className='resume-screen-container' key="projects">
        //     {projectDetails.map((projectDetails, index) => (
        //         <ResumeHeading
        //             key={index}
        //             heading={projectDetails.title}
        //             subHeading={projectDetails.subHeading}
        //             description={projectDetails.description}
        //             // fromDate={projectDetails.duration.fromDate}
        //             // toDate={projectDetails.duration.toDate}
        //         />
        //     ))}
        // </div>,

        <div className='resume-screen-container' key="certifications">
            <ResumeHeading
                heading="Google IT Support Certification"
                description="Computer Network Fundamentals, System Administration, IT Security."
            />
            <ResumeHeading
                heading="CCNA: Introduction to Networks"
                description="Learning of networking in detail."
            />
            <ResumeHeading
                heading="Cybersecurity Essentials"
                description="Foundational knowledge of cybersecurity, including the basics of network security, encryption and cybersecurity laws."
            />
            <ResumeHeading
                heading="Mastering Data Structures & Algorithms using C and C++"
                description="In-depth learning of Data Structures & Algorithms with C++ language."
            />
        </div>,
    ];

    const handleCarousal = (index) => {
        let offsetHeight = 360;
        let newCarousalOffset = {
            style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" }
        };
        setCarousalOffSetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    };

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div onClick={() => handleCarousal(index)} className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
                key={index}>
                <img className="bullet-logo" src={require (`../../assets/Resume/${bullet.logoSrc}`)} alt='oops, no internet!' />
                <span className="bullet-label">{bullet.label}</span>
            </div>
        ))
    }

    const getResumeScreen = () => {
        return (
            <div style={carousalOffSetStyle.style} className='resume-details-carousal'>
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        );
    };

    return (
        <div className="resume-container screen-container fade-in" id={props.id || ""}>
            <div className="resume-content">
                <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'} />
                <div className="resume-card">
                    <div className="resume-bullets">
                        <div className="bullet-container">
                            <div className="bullet-icons"></div>
                            <div className="bullets">{getBullets()}</div>
                        </div>
                    </div>

                    <div className="resume-bullet-details">{getResumeScreen()}</div>
                </div>
            </div>
        </div>
    );
}
