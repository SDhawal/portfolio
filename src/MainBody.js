import './index.css'
function MainBody() {
    return (
        <div className='info-card-container'>
            <div className='left-card'>
                <img className='profile-image' src='https://avatars.githubusercontent.com/u/28450025?v=4' alt='Dhawal Sharma'></img>
                <h2 className='name'>Dhawal Sharma</h2>
                <div className='buttons-left-card'>
                <a href = '#'><button className='resume-button'>Contact</button></a>
                <a href = 'https://drive.google.com/file/d/1LO2XhKFoy1SgBFnuxBSV31wkgj0_R6xZ/view?usp=sharing' target="_blank"><button className='resume-button'>Resume</button></a>
                </div>
                </div>
                <div className='right-card'>
        <span>Hello World! 🖖 </span><br/>
        <span>My name is </span><span className='right-card-name'>Dhawal Sharma</span><br/>
        <span>I am a Front-End Developer and love to develop mobile applications and websites.</span><br/>

                    </div>   
        </div>       
    )
}
export default MainBody;