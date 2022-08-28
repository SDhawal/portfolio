import './index.css'
import NavBar from './nav_bar';
import Footer from "./Footer";
function AboutMe(){
    return(
        <div>
           <NavBar/>
           
            <div className='content-container'>
            <p>I am a Computer Science engineer with hands-on experience. During my bachelor's I got exposed to 
                numerous programming technologies among which I found Flutter, Java, JavaScript, and HTML-CSS most appealing. I also made projects like Cylinder weight data analyzer, Shopping 
                website using JavaScript, HTML and CSS.</p>
            <p> I expanded my horizons in these arenas by doing a
                Post Graduate Diploma from ISI College Montreal. There I took part in many projects like 
                Dating Application, photo sharing application and made individual projects like Pet’s daily care 
                application and Weather forecast application. Working on these projects I have developed the 
                confidence to do presentations and work in teams.</p>
            </div>
            <div className='timeline-conatiner'>
                <h2>Education</h2>
                <p className='timeline-p'><b>Institut supérieur d'informatique (ISI),</b> <br/>Attestation of College 
Studies, <br/> Montral, QC. <br/> Feb 2021 - Present</p>
                <p className='timeline-p'><b>Lovely Professional University,</b> <br/>Computer Science Engineering, <br/> Punjab, India. <br/> Jul 2016 - Jul 2020</p>
                <p className='timeline-p'><b>Sarvodaya Sr Secondary High School,</b> <br/>Higher Secondary Education, <br/> Rajasthan, India. <br/> 2014 - 2016</p>
                <p className='timeline-p'><b>Delhi Public School,</b> <br/>Secondary Education, <br/> Madhya Pradesh, India. <br/>  ~ 2014</p>
            </div> 
            <Footer />
        </div>
    )
}
export default AboutMe;