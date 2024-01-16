import React from "react";
import picture from "../images/picture.png";
import resume from'../Zihui_Yuan.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone} from'@fortawesome/free-solid-svg-icons';
import{faEnvelope}from'@fortawesome/free-regular-svg-icons';
import {faLinkedin,faGithub} from'@fortawesome/free-brands-svg-icons';
export default function Main(Props){
    return(
        <section className = 'main' id="about">
            <div className="greeting">
                <h1>hi, I am {Props.name}</h1>
            </div>
            <div className = "intro">

                <div className="image">
                <img className = "picture" src= {picture} alt=""/>
                </div>

                <div className="info">
                    <h2>
                    {Props.intro}   
                    </h2>
                    <p>
                    Educations:<br/> {Props.master_degree} <br/>{Props.bachelor_degree}       
                    </p>
                    <button className = "download"><a href={resume} className="download-text" download="Zihui_resume">Download CV</a></button>
                </div>

                <div className = "contact">
                    <ul className="contact_li">
                        <li className = 'contact-padding' title={Props.email}>< FontAwesomeIcon icon= {faEnvelope} /></li>
                        <li className = 'contact-padding' title = {Props.phone}>< FontAwesomeIcon icon= {faPhone} /></li>
                        <li className = 'contact-padding'><a href = {Props.linkedIn} target="_blank" rel="noreferrer">< FontAwesomeIcon icon= {faLinkedin} /></a></li>
                        <li className = 'contact-padding'><a href = {Props.github} target="_blank" rel="noreferrer">< FontAwesomeIcon icon= {faGithub} /></a></li>
                    </ul>
                </div>

                
            </div>
        </section>
    );
}