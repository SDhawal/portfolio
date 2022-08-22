import './index.css'
const ProjectList = (props) => {
    const projects = props.projectToPass;
    const title = props.title;
    return(
        
                    <div className='project'>
                        <div className='project-name'>{title}</div>
                        {projects.map((data)=>(
                            <div key={data.id}>
                                <h2>{data.title}</h2>
                        <div className='project-description'>{data.body}</div>
                        <div className='project-snippet'>{data.project_snippet}</div>
                        <div className='view-project'><button>View Peoject</button></div>
                        </div>
                        ))}
                        
                    </div>
                    
                
    );
}
export default ProjectList;