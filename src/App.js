import './App.css';
import React from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import Skills from './components/skills';
import Timeline from './components/timeline';
import Projects from './components/projects';
import Footer from './components/footer';
import {personalInfo,frontEndSkills,othersSkills,information,otherProjects,frontEndProjects} from './components/data';

function App() {
  const [darkMode,setDarkMode] = React.useState(true);
  function toggleLightMode(){
    setDarkMode(previous =>!previous);
  }
  React.useEffect(() =>{
    if(!darkMode){
      document.body.classList.add('light-mode')
    }
    else{
      document.body.classList.remove('light-mode')
    }
  },[darkMode])
  return (
    <>
    <Nav darkMode = {darkMode} toggleLightMode = {toggleLightMode}/>
    <Main  name = {personalInfo.name} intro = {personalInfo.introduction} 
    bachelor_degree = {personalInfo.bachelor_degree} 
    master_degree = {personalInfo.master_degree}
    email = {personalInfo.email}
    phone = {personalInfo.phone}
    linkedIn = {personalInfo.linkedIn}
    github = {personalInfo.github}/>
    <Skills  frontEndSkills = {frontEndSkills} othersSkills = {othersSkills}/>
    <Timeline  information = {information}/>
    <Projects  frontEndProjects = {frontEndProjects} otherProjects = {otherProjects}/>
    <Footer/>
    </>
  );
}

export default App;
