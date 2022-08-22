import './index.css'

function MainBody() {
    return (
        <div className='info-card-container'>
            <div className='left-card'>
                <img className='profile-image' src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'></img>
                <h2>Dhawal Sharma</h2>
                <div className='buttons-left-card'>
                <button className='contact-button'><img/>Contact</button>
                <button className='resume-button'>Resume</button>
                </div>
                </div>
                <div className='right-card'>
                    hey my name is dhawal
                    </div>    
        </div>
    )
}
export default MainBody;