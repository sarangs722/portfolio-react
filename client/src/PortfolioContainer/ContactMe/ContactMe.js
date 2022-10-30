import React, {useState} from 'react';
import Typical from 'react-typical';
import axios from 'axios';
import {toast} from 'react-toastify';

import imgBack from '../../../src/images/mailz.jpg';
import load1 from '../../../src/images/load2.gif';

import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';

import linkedinIcon from '../../img/linkedin.png';
import leetcodeIcon from '../../img/leeticon.png';
import geeksforgeeksIcon from '../../img/geekslogo.png';
import hackerrankIcon from '../../img/hackkerankicon.svg';
import codechefIcon from '../../img/codechef.ico';

import './ContactMe.css'

export default function ContactMe(props) {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id)
            return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubsription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)


    return (
        <div className="main-container fade-in" id={props.id || ''}>
            <ScreenHeading
                title={"Contact Me!"}
                subHeading={"Lets keep in touch"}
            />


            <div className = "contact">
				<ul>
					<li><a href="https://www.linkedin.com/in/sarangs722/" target="_blank"><i class="linkedin" aria-hidden="true"></i><img src = {linkedinIcon}/></a></li>
					<li><a href="https://leetcode.com/sarangs722/" target="_blank"><i class="leetcode" aria-hidden="true"></i><img src={leetcodeIcon}/></a></li>
                    <li><a href="https://auth.geeksforgeeks.org/user/sarangs722" target="_blank"><i class="geeksforgeeks" aria-hidden="true"></i><img src={geeksforgeeksIcon}/></a></li>
					<li><a href="https://www.hackerrank.com/sarangs722" target="_blank"><i class="hackerrank" aria-hidden="true"></i><img src={hackerrankIcon}/></a></li>
					<li><a href="https://www.codechef.com/users/sarangs722" target="_blank"><i class="codechef" aria-hidden="true"></i><img src={codechefIcon}/></a></li>
				  </ul>
			</div>
            
        </div>
    )
}
