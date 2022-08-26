import React from 'react';
import Home from './Home';
import Contact from './Contact';
import AllProjects from './AllProjects';
import AboutMe from './AboutMe';
import {Routes,Route} from 'react-router-dom'
function App(){
   return(
    <div>
        <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/about-me' element={<AboutMe />}/>
    <Route path='/all-projects' element={<AllProjects />}/>
    <Route path='/contact' element={<Contact />}/>
    </Routes>
   </div>
   )
}
export default App; 