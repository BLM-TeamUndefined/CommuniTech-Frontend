import React from 'react';
import './Project.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import categoryImg from '../categories.png';
import companyImg from  '../company.png';
import timelineImg from '../timeline.png';
import skillsImg from '../skills.png';
import teamImg from '../team.png';


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
              <Button id="view-button">View</Button>
          </Col>
          <Col>
              <div className="details">
                  {/* <p> Expectations: {this.props.project.expectations} </p> */}
                  <p> <img src={companyImg} /> {this.props.project.organization.name} </p>
                  <p> <img src={timelineImg} /> {this.props.project.timeline} </p>
                  <p> <img src={teamImg} /> {this.props.project.team_size} </p>
                  <p> <img src={skillsImg} /> {this.props.project.tech_stack} </p>
              </div>
           </Col>
        </Row>
        </div>
      </Container>
      );
    }
}

export default Project;
