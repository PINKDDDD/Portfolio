import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from'@fortawesome/free-brands-svg-icons';
export default function Projects(Props){
    const frontEndProjects = Props.frontEndProjects;
    const frontEndProjectsList = frontEndProjects.map(project =>{
        return(
            <div className="project" key = {project.key}>
                <h2>{project.title}</h2>
                <div className="p_image">
                <img src={project.media} alt="" className="p_picture"/>
                </div>
                <div className="information">
                    <h4>description</h4>
                    <a href={project.link} target="_blank">< FontAwesomeIcon icon= {faGithub} /></a>
                </div>
                <p className="description">{project.desc}</p>
            </div>
        )
    })
    
    const otherProjects = Props.otherProjects;
    const otherProjectsList = otherProjects.map(project =>{
        return(
            <div className="project" key = {project.key}>
                <h2>{project.title}</h2>
                <div className="p_image">
                <img src={project.media} alt="" className="p_picture"/>
                </div>
                
                <div className="information">
                    <h4>description</h4>
                    <a href={project.link} target="_blank">< FontAwesomeIcon icon= {faGithub} /></a>
                </div>
                <p className="description">{project.desc}</p>
            </div>
        )
    })

    return(
        <div className="projects_sec">
        <h1>Projects</h1>
        <section id="projects" className = "projects" >
        <div className="frontend_projects">
            <h1 className="frontend_title">Frontend Projects</h1>
            {frontEndProjectsList}
        </div>
        <div className="data_projects">
            <h1 className="data_title">Other Projects</h1>
            {otherProjectsList}
        </div>
    </section>
    </div>
    );
}