import React from 'react';
import './ProjectList.css';
import Project from '../Project/Project';

function ProjectList() {
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

export default ProjectList;