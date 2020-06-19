import React from 'react';
import './AccountType.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDeck from 'react-bootstrap/CardDeck';
import womanImage from './woman_office.png';
import groupImage from './group_office.png';
import AccountTypeCard from '../AccountTypeCard/AccountTypeCard';
import { Redirect } from 'react-router-dom';



class AccountType extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formChoice: '',
      redirect: false,
      cards: [
        {id: 1,
        value: 'individual',
        title: 'Individual Volunteer',
        image: womanImage,
      description: 'Offer your skills as a designer, developer, or engineer. Find and help specific causes you’re interested in.'},
      {id: 2,
        value: 'organization',
        title: 'Business / Organization',
        image: groupImage,
      description: 'Identify painpoints in your organization or business and connect with talented individuals to meet those needs.'}
      ]
    };
    this.renderForm = this.renderForm.bind(this);
  }


  //renders form based on value passed through onCardClick
  renderForm(value){
   //console.log(value);
    this.setState({redirect: true, formChoice : value}, function () {
      console.log(this.state.formChoice);
    });
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      if (this.state.formChoice === 'individual') {
        return <Redirect to="/register" />;
      } else if (this.state.formChoice === 'organization') {
        return <Redirect to="/registerOrg" />;
      } 
    }
  }

    render(){
      return (
        <Container>
          <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h2>Account Type</h2>
            </Col>
          </Row>
        <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <div>
        <CardDeck>
          {
            this.state.cards.map(card => {
                return <AccountTypeCard key={card.id} card={card} renderForm={this.renderForm}/>;
            })
          }
        </CardDeck>
          </div>
          </Col>
        </Row>
        <div>
          {this.renderRedirect()}
        </div>
      </Container>
      )
    }
}

export default AccountType;
