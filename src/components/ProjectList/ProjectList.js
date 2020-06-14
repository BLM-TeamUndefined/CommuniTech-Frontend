import React from 'react';
import './ProjectList.css';
import Project from '../Project/Project';

class ProjectList extends React.Component {
    state = {
      projects: [] 
    }
  

    componentDidMount(){
      fetch("http://localhost:3000/projects")
          .then(resp => resp.json())
          .then(projectsArray => {
              this.setState({projects: projectsArray})
          })
    }

    renderProjects = () => {
      console.log(this.props.projects);
       return this.props.projects 
        ?
          this.props.projects.map(project => {
          return <Project key={project.id} project={project} renderProjects={this.props.project}/>;
        })
        :
        this.state.projects.map(project => {
            console.log(project)
            return <Project key={project.id} project={project}/>;
        })
    }

    render() {
      return(
        
          <div className="ProjectList">
            {this.renderProjects()}
          </div>
      );
    }
  
  }

export default ProjectList;
