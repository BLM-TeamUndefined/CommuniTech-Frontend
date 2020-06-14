import React from 'react';
import './Project.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class Project extends React.Component {

    render() {
      console.log(this.props);
      return(
        <Container>
            <div className="Project">
        <Row>
          <Col><img className="icon" src={require("../project-icon.png")}/></Col>
          <Col xs={6}> <h2 className="main-info"> 
              {this.props.project.name} </h2>
              <p> {this.props.project.description.slice(0,180)}... </p>
          </Col>
          <Col>
              <div className="details">
                  {/* <p> Expectations: {this.props.project.expectations} </p> */}
                  <p> Company: {this.props.project.organization.name} </p>
                  <p> Duration: {this.props.project.timeline} </p>
                  <p> Team Size: {this.props.project.team_size} </p>
              </div>
           </Col>
        </Row>
        </div>
      </Container>
      );
    }
}

export default Project;
