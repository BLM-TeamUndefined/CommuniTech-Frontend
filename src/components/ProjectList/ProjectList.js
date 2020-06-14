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
        console.log(this.state.projects);
        
        // this.state.projects.map(org => {
        //     return <Project key={org.id} org={org}/>;
        // })
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