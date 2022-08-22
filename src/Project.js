import { useState } from "react";
import ProjectList from "./ProjectList";
const Project = () =>{
    const [projects,setProjects] = useState([

        {title: "PETETITE (your pet's appetite)",body: 'This is the project for pets',project_snippet: '../public/logo.png',id:1},
        {title: 'Photogram',body: 'This is the image sharing application',project_snippet: '../public/logo.png',id:2},
        {title: 'Ecommerce-Site',body: 'This is the e-commerce site',project_snippet: '../public/logo.png',id:3},
        {title: 'Remember the sequence',body: 'This is a game to remember the sequence',project_snippet: '../public/logo.png',id:4},

    ]);
    return(
        <div className='projects-container'>
        <ProjectList projectToPass={projects} title="Projects" />
        </div>
    );
}
export default Project;