import './index.css'
import { useState } from "react";
import ProjectList from "./ProjectList";
const Project = () =>{
    const [projects,setProjects] = useState([

        {title: "PETETITE (your pet's appetite)",body: "It's an application that lets user to manage their pet's appetite. Which include feeding pet, taking pet for a walk, taking pet for a bath, providing De-warming to pet, filling water in itscontainer. The data further gets save into Firebase.",project_snippet: '../public/logo.png',link:'https://github.com/SDhawal/Petetite',id:1},
        {title: 'Photogram',body: 'It is a project in which user can securely login and share their images with the people they follow and vice-versa. Users can comment and like the photos of their friends. They can even send message to each other real-time. This project is done using Flutter and Firebase.',project_snippet: '../public/logo.png',link:'https://github.com/SDhawal/photo_sharing_app',id:2},
        {title: 'Ecommerce-Site',body: 'This project is an E-commerce site made using JavaScript and PostgreSQL. Users can searchproducts and put them in the shopping cart and furthermore they can be redirected to the pay now page where they will get the total price, they must pay for the products they have Selected.',project_snippet: 'https://user-images.githubusercontent.com/28450025/185503903-de84c7ac-dad1-459c-b1d2-eb7202369ede.gif',link:'https://github.com/SDhawal/LifeStyle-shopping-website-',id:3},
        {title: 'Remember the sequence',body: 'This is a game to remember the sequence',project_snippet: 'https://user-images.githubusercontent.com/28450025/184254545-b31ec1fb-dd30-4bfe-9cc2-266ed2fda697.gif',link:'https://github.com/SDhawal/remember_the_sequence',id:4},
        {title: 'Cylinder Data Analyzer',body: 'It is our Capstone project and this project got PATENTED by The Patent Office Journal No.52/2019 Dated 27/12/2019 with International Classification: F17C13/026. Information of the weight of the cylinder is sent to Think-speak using Arduino, then data is fetched from that to android application. It lets the user to know the current weight of the cylinder. It was a group project, and My role was to make all the UI and get the data from Firebase.',project_snippet: '../public/logo.png',link:'https://github.com/SDhawal/CylinderDataAnalyser-master',id:5},

    ]);
    return(
        <div className='projects'>
        <ProjectList projectToPass={projects} title="Projects" />
        </div>
    );
}
export default Project;