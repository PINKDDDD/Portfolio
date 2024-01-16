import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Skills(Props){
    const frontEndSkills = Props.frontEndSkills
    const skillList = frontEndSkills.map(skill => (
         <li className="item" key={skill.key}><FontAwesomeIcon icon= {skill.icon} className="icon" />{skill.name}</li>
     ));
    const othersSkills = Props.othersSkills
    const otherSkillList = othersSkills.map(skill => (
        <li className="item" key={skill.key}><FontAwesomeIcon icon= {skill.icon} className="icon" />{skill.name}</li>
          
      ));   
    return(
        <div id="skills" className="set-skills">
            <div className="front_end">
                <h3>front end skills</h3>
                <ul className="list">
                    {skillList}
                </ul>
        </div>
            <div className="back_end">
                <h3>back end skills</h3>
                <ul className="list">
                    {otherSkillList}
                </ul>
            </div>
            <FontAwesomeIcon icon="fa-solid fa-bolt" />
    </div>
    );
}