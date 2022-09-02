import './index.css'
import NavBar from './nav_bar';
import Footer from "./Footer";
function AboutMe(){
    return(
        <div>
           <NavBar/>
           
            <div className='content-container'>
            <p>Engineer in computer science with practical experience. I was introduced to several 
                different programming languages and frameworks during my bachelor's degree, 
                but Flutter, Java, JavaScript, and HTML-CSS stood out as my favourites. 
                I also used JavaScript, HTML, and CSS to create applications like a shopping website and a cylinder weight data analyzer.</p>
            <p> Through the completion of a Post Graduate Diploma at ISI College Montreal,
                 I broadened my horizons in these fields. There, I participated in a variety 
                 of projects like dating applications and photo-sharing websites, as well as 
                 created my own projects like a daily pet care app and a weather forecast app.
                  As a result of working on these initiatives, I now feel comfortable giving 
                  presentations and collaborating with others.</p>
            </div>
            <div className='timeline-conatiner'>
                <h2>Education</h2>
                <p className='timeline-p'><b>Institut supérieur d'informatique (ISI),</b> <br/>Attestation of College 
Studies, <br/> Montreal, QC. <br/> Feb 2021 - Present</p>
                <p className='timeline-p'><b>Lovely Professional University,</b> <br/>Computer Science Engineering, <br/> Punjab, India. <br/> Jul 2016 - Jul 2020</p>
                <p className='timeline-p'><b>Sarvodaya Sr Secondary High School,</b> <br/>Higher Secondary Education, <br/> Rajasthan, India. <br/> 2014 - 2016</p>
                <p className='timeline-p'><b>Delhi Public School,</b> <br/>Secondary Education, <br/> Madhya Pradesh, India. <br/>  ~ 2014</p>
            </div> 
            <Footer />
        </div>
    )
}
export default AboutMe;