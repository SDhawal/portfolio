import './index.css'
function MainBody() {
    return (
        <div className='info-card-container'>
            <div className='left-card'>
                <img className='profile-image' src='https://avatars.githubusercontent.com/u/28450025?v=4' alt='Dhawal Sharma'></img>
                <h2 className='name'>Dhawal Sharma</h2>
                <div className='buttons-left-card'>
                <button className='contact-button'>Contact</button>
                <button className='resume-button'>Resume</button>
                </div>
                </div>
                <div className='right-card'>
                    <h1><span>Hello World!</span></h1><br/>
                    <h2><span>My name is </span><span className='right-card-name'>Dhawal Sharma</span></h2><br/>
                    <h1><span>I am a </span><span className='right-card-profession'>Developer</span></h1>

                    </div>   
        </div>       
    )
}
export default MainBody;