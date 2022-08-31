import './index.css'
function SoftSkillBody(props){
    const skills = props.skillsToPass;
    return(
<div className='softskill-parent'>
{skills.map((data)=>(
                <div className='softskill-card'>
                    <div className='softskill-image'>
                    <img src={data.image_source} alt='skill snippet' />
                    </div>
                    <div className='softskill-description'>
                       <h2>{data.title}</h2>
                       <h3>{data.body}</h3>
                    </div>
                </div>
            ))} 
            </div>
            )
            }
export default SoftSkillBody;