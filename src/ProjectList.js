import './index.css'
const ProjectList = (props) => {
    const projects = props.projectToPass;
    const title = props.title;
    return(
        
                    <div className='project-container' >
                        
                        {projects.map((data)=>(
                        <div className='project-card' key={data.id}>
                            
                        <h2>{data.title}</h2>
                        <div className='project-snippet'><img src ={data.project_snippet} alt="project image snippet"/></div>
                        <div className='project-description'>{data.body}</div>
                        <div className='view-project'><a href={data.link} target="_blank" rel="noreferrer">
                            <button type='button' >View Project</button>
                            </a>
                            </div>
                        </div>
                        ))}
                        
                    </div>
                    
                
    );
}
export default ProjectList;