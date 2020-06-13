import React from 'react';
import './ProjectList.css';
import Project from '../Project/Project';

class ProjectList extends React.Component {
    render(){
        return(
            <div className="ProjectList">
                {
                this.props.projects.map(project => {
                    return <Project key={project.id} project={project}/>;
                })
                }
            </div>
        );
    }
}

export default ProjectList;