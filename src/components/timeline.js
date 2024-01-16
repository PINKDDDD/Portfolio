import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool,faBriefcase } from "@fortawesome/free-solid-svg-icons";
export default function Timeline(Props){
    const timeLineInfo = Props.information
    
    const timeLineInfoList = timeLineInfo.map(info =>{
        return(
            <div className="line" key = {info.key}>
            <div>
                <h2 className="text">{info.title}</h2>
                <p className="moretext">{info.desc}</p>
                <h4>{info.time}</h4>
            </div>
        </div>
        )
        
    })
    return(
        <div id="experiences" className="hline" >
        <div className="title">
            <h2 className="title_space">< FontAwesomeIcon icon= {faSchool} />Educations</h2>
            <h2 className="title_space">< FontAwesomeIcon icon= {faBriefcase} />Experiences</h2>
        </div>
        {timeLineInfoList}
    </div>
    );
}