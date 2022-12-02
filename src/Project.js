import './index.css'
import { useState } from "react";
import ProjectList from "./ProjectList";
const Project = () =>{
    const [projects,setProjects] = useState([

        {title: "PETETITE (your pet's appetite)",body: "Developed a user-friendly mobile application in Android Studios using Material Design for Designing UI, Java to develop application and Room Database for data. Designed the UX of the application on Figma.Developed the application in Java and used MVC model.Presented fully working application in final project.",project_snippet: 'https://user-images.githubusercontent.com/28450025/204137695-49014574-1b2d-47c0-8f61-d9cc815c29fa.png',link:'https://github.com/SDhawal/Petetite',id:1},
        {title: 'Photogram',body: 'Made an all platform friendly application with Flutter using Dart for backend, Material Design for UI and Firebase for database.Designed the UX on Figma by taking requirements from Stakeholder. Developed the UI of the application and the functioning with dart in Android Studios.Developed the application with Scrum Agile Methodology.',project_snippet: 'https://user-images.githubusercontent.com/28450025/205247387-5cfe1eb6-520e-40dc-9d7b-8c4964b9bd1e.png',link:'https://github.com/SDhawal/photo_sharing_app',id:2},
        {title: 'Ecommerce-Site',body: 'This project is an E-commerce site made using JavaScript and PostgreSQL. Users can searchproducts and put them in the shopping cart and furthermore they can be redirected to the pay now page where they will get the total price, they must pay for the products they have Selected.',project_snippet: 'https://user-images.githubusercontent.com/28450025/185503903-de84c7ac-dad1-459c-b1d2-eb7202369ede.gif',link:'https://github.com/SDhawal/LifeStyle-shopping-website-',id:3},
        {title: 'Remember the sequence',body: 'This is a game to remember the sequence.Made with JavaScript as frontend and Go Lang as Backend which lets the user to retype the sequence that has been displayed.Learned how to host website with Go Lang.',project_snippet: 'https://user-images.githubusercontent.com/28450025/184254545-b31ec1fb-dd30-4bfe-9cc2-266ed2fda697.gif',link:'https://github.com/SDhawal/remember_the_sequence',id:4},
        {title: 'Cylinder Data Analyzer',body: 'Developed a real time cylinder gas monitoring system with the collaboration of IOT and ThingSpeak alongside JSON, Android Studios and Firebase.Designed the UX and developed the UI of the application.Displayed the data received as JSON from Firebase to the user in the application.Presented the project along with the team during Capstone.Got the project patented by The Patent Office Journal \nNo.52/2019 Dated 27/12/2019 with International Classification: F17C13/026.',project_snippet: 'https://user-images.githubusercontent.com/28450025/186738162-43f03df0-61e1-4a3a-b5d8-0fcd8c1d3c53.gif',link:'https://github.com/SDhawal/CylinderDataAnalyser-master',id:5},

    ]);
    return(
        <div>
        <div>
            <h2>PROJECTS</h2>
        </div>
        <div className='projects'>   
        <ProjectList projectToPass={projects} title="Projects" />
        </div>
        </div>
    );
}
export default Project;