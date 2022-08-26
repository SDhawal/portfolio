import React from "react";
import NavBar from "./nav_bar";
import MainBody from "./MainBody";
import Project from "./Project";
import Footer from "./Footer";
function Home(){
    return(
        <div>
        <NavBar />
        <MainBody />
        <Project />
        <Footer />
        </div>

    )
}
export default Home;