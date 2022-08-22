import './index.css'

function MainBody() {
    return (
        <div className='info-card-container'>
            <div className='left-card'>
                <img className='profile-image' src='https://avatars.githubusercontent.com/u/28450025?v=4'></img>
                <h2>Dhawal Sharma</h2>
                <div className='buttons-left-card'>
                <button className='contact-button'><img src='../public/logo.png'/>Contact</button>
                <button className='resume-button'>Resume</button>
                </div>
                </div>
                <div className='right-card'>
                    <span>Hello World!</span><br/>
                    <span>My name is Dhawal Sharma</span><br/>
                    <span>I am a </span><span>Developer</span>

                    </div>    
        </div>
    )
}
export default MainBody;