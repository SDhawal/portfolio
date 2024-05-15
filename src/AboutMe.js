import './index.css'
import NavBar from './nav_bar';
import Footer from "./Footer";
function AboutMe(){
    return(
        <div>
           <NavBar/>
           
            <div className='content-container'>
            <p>Skilled Cross-Platform Mobile Application Developer with expertise in building 
                applications using <b>.NET MAUI, Xamarin, React-Native, SwiftUI, Kotlin, and Java</b>. 
                Demonstrated experience in integrating BLE devices for robust data exchange and analytics,
                 and proficient in using Syncfusion Charts for advanced data visualization. Adept in 
                 implementing secure authentication protocols including OAuth and JWT, and proficient 
                 with Agile methodologies and Git version control. Committed to continuous learning and 
                 professional growth and currently working as a <b>Cross-Platform Application Developer at Baune Ecosystems</b>.</p>
           
            </div>
            <div className='timeline-conatiner'>
                <h2>Education</h2>
                <p className='timeline-p'><b>College Universel,</b> <br/>Attestation of College 
Studies, <br/> Montreal, QC. <br/> Feb 2021 - March 2023</p>
                <p className='timeline-p'><b>Lovely Professional University,</b> <br/>Computer Science Engineering, <br/> Punjab, India. <br/> Jul 2016 - Jul 2020</p>
                <p className='timeline-p'><b>Sarvodaya Sr Secondary High School,</b> <br/>Higher Secondary Education, <br/> Rajasthan, India. <br/> 2014 - 2016</p>
                <p className='timeline-p'><b>Delhi Public School,</b> <br/>Secondary Education, <br/> Madhya Pradesh, India. <br/>  ~ 2014</p>
            </div> 
            
            <Footer />
        </div>
    )
}
export default AboutMe;