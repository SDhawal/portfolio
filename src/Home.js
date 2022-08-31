import React from "react";
import NavBar from "./nav_bar";
import MainBody from "./MainBody";
import Project from "./Project";
import Footer from "./Footer";
import SoftSkills from "./SoftSkills";
function Home(){
    return(
        <div>
        <NavBar />
        <MainBody />
        <Project />
        <SoftSkills />
        <Footer />
        </div>

    )
}
export default Home;