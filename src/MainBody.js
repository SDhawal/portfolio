import './index.css'
import { Link } from "react-router-dom";
function MainBody() {
    return (
        <div>
        <div className='info-card-container'>
            <div className='left-card'>
                <img className='profile-image' src='https://avatars.githubusercontent.com/u/28450025?v=4' alt='Dhawal Sharma'></img>
                <h2 className='name'>Dhawal Sharma</h2>
                <div className='buttons-left-card'>
                <Link to="/contact"className='link'><button className='resume-button'>Contact</button></Link>
                <a href = 'https://drive.google.com/file/d/1J6xHVlWOnE7XB9IqkKSHyhe7stphn2Y0/view?usp=share_link' target="_blank" rel='noreferrer'><button className='resume-button'>Resume</button></a>
                </div>
                </div>
                <div className='right-card'>
        <span>Hello World! 🖖 </span><br/>
        <span>My name is </span><span className='right-card-name'>Dhawal Sharma</span><br/>
        <span>I am a Full-Stack Developer and love to develop mobile applications and websites.</span><br/>

                    </div>   
        </div>
        <div className='brief-card'>
           <p>As a Computer Science Engineer, I have been exposed to many languages and found my interest in Full Stack Programming. 
           I like to design applications and websites and love to make the user experience more interactive and simplified. I have worked on numerous project during this time period.  
           </p>
        </div>
        </div>       
    )
}
export default MainBody;