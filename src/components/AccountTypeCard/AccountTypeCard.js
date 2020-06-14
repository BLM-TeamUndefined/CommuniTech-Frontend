import React from 'react'
import './AccountTypeCard.css'
import Card from 'react-bootstrap/Card';



class AccountTypeCard extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        hovered: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
    //if props are equal to individual, render form for individual
    //if props are equal to organization, render form for organization

    handleClick(event){
        //console.log(this.props.card.value);
        this.props.renderForm(this.props.card.value);
        event.preventDefault();
    }

  
    render(){
        return (
            <Card onClick={this.handleClick}>
                <div className="overlay">
                <Card.Img variant="top" src={this.props.card.image}/>
                <Card.Body>
                    <Card.Title>{this.props.card.title}</Card.Title>
                    <Card.Text>
                    {this.props.card.description}
                    </Card.Text>
                </Card.Body>
                </div>
            </Card>
        )
    }
  }
  
  export default AccountTypeCard;
  

  /*

    <Card tabindex="1" onClick={() => this.setState({ formChoice: 'professional'})}>
              <div className="overlay">
              <Card.Img variant="top" src={womanImage}/>
              <Card.Body>
                <Card.Title>Individual Volunteer</Card.Title>
                <Card.Text>
                  Offer your skills as a designer, developer, or engineer. Find and help specific causes you’re interested in.
                </Card.Text>
              </Card.Body>
              </div>
            </Card>
            <Card tabindex="2" onClick={() => this.setState({ formChoice: 'organization'})}>
            <div className="overlay">
              <Card.Img variant="top" src={groupImage}/>
              <Card.Body>
                <Card.Title>Business / Organization</Card.Title>
                <Card.Text>
                  Identify painpoints in your organization or business and connect with talented individuals to meet those needs.
                </Card.Text>
              </Card.Body>
              </div>
            </Card>

*/