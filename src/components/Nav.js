import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse} from'@fortawesome/free-solid-svg-icons'
export default function Nav(Props){
    return(
        <nav id='nav'>
        <button className="mode-btn" onClick={Props.toggleLightMode}>{Props.darkMode ? 'Dark Mode': "Light Mode"}</button>
        <ul className = "nav-right">
            <li className = 'li_padding'><a href = '#about'> About</a></li>
            <li className = 'li_padding'><a href = '#skills'> Skills</a></li>
            <li className = 'li_padding'><a href = '#experiences'> Experiences</a></li>
            <li className = 'li_padding'><a href = '#projects'> Projects</a></li>
            <li className="fixed-icon-container">
                <a href = '#web'>< FontAwesomeIcon icon= {faHouse} /></a>
            </li> 
                
        </ul>
    </nav>
    );
}