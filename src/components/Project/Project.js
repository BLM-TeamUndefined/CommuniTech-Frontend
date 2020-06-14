import React from 'react';
import './Project.css';


class Project extends React.Component {

    render() {
      console.log(this.props);
      return(
          <div className="Project">
              <h2> {this.props.project.name} </h2>
              <div className="Project-information">
                  <p> Description: {this.props.project.description} </p>
                  <p> Expectations: {this.props.project.expectations} </p>
                  <p> Duration: {this.props.project.timeline} </p>
                  <p> Team Size: {this.props.project.team_size} </p>
              </div>
          </div>
      );
    }
}

export default Project;
