
import React from 'react';
import {Switch, Route} from 'react-router-dom'
import userForm from './components/UserForm'
// import NavBar from './components/NavBar'
import CategoryList from './components/CategoryList/CategoryList'
import OrganizationList from './components/OrganizationList/OrganizationList'
import ProjectList from './components/ProjectList/ProjectList'

// import 'semantic-ui-css/semantic.min.css'
import './App.css';

import {withRouter} from 'react-router-dom'
//takes a boring component wrapped in it and returns a 'fun' component

 class App extends React.Component {

  state= {
    professional: {
      username: "",
      project_professionals: [],
      bio: ""
    },
    token: "",
    categories: [ {
      id: 1,
      name: 'Arts & Culture',
      image: 'https://www.kindpng.com/picc/m/74-742163_artist-pallette-art-icon-transparent-background-hd-png.png'
      },
      {
        id: 2,
        name: 'community improvement',
        image: 'https://www.kindpng.com/picc/m/153-1538896_community-icon-transparent-background-png-download-transparent-transparent.png'
      },
      {
        id: 3,
        name: 'Education',
        image: 'https://image.flaticon.com/icons/svg/29/29302.svg'
        },
        {
          id: 4,
          name: 'Mental Health',
          image: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/mental-illness-1734294-1472036.png'
        },
        {
          id: 5,
          name: 'Technology',
          image: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/mental-illness-1734294-1472036.png'
        },
        {
          id: 6,
          name: 'Humanities',
          image: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/mental-illness-1734294-1472036.png'
        }]
  }
  

  componentDidMount() {
    if (localStorage.token) {
      fetch("http://localhost:3000/professional_persist",{
        headers: {
          "Authorization": `Bearer ${localStorage.token}`
        }
      })
      .then(resp => resp.json())
      .then(this.handleResp)
    }

    // fetch("http://localhost:3000/categories")
    // .then(resp => resp.json())
    // .then(categoriesArray => {
    //     this.setState({
    //         categories: categoriesArray
    //     })
    // })

  }

  handleResp = (resp) => {
    if (resp.user) {
      localStorage.token = resp.token
      this.setState(resp , () => {
          this.props.history.push("/")
        })
      } 
      else {
        alert(resp.error)
      }
  }

  handleLoginSubmit = (professionalInfo) => {
    // console.log("Login has been submitted")

    fetch("http://localhost:3000/professional_login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(professionalInfo)
    })
    .then(resp => resp.json())
    .then(this.handleResp)
  }

  handleRegisterSubmit = (professionalInfo) => {
    // console.log("Register Form has been submitted")
    // console.log(professionalInfo)
    fetch("http://localhost:3000/professionals", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(professionalInfo)
    })
    .then(resp => resp.json())
    .then(this.handleResp)
  }

  renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
      return <userForm formName="Login Form" handleSubmit={this.handleLoginSubmit}/>
    } else if (routerProps.location.pathname === "/register") {
      return <userForm formName="Register Form" handleSubmit={this.handleRegisterSubmit}/>
    }
  }

  renderCategoryList = () => {
    return <CategoryList
            categories = {this.state.categories}

            />
  }

  renderOrganizationList = () => {
    return <OrganizationList/>
  }

  renderProjectList = () => {
    return <ProjectList/>
  }

  // renderProfile = (routerProps) => {
  //   return <ProfileContainer user={this.state.user} token={this.state.token}/>
  // }

  render(){
    // console.log(this.state.user, "APP")
  
    // console.log(this.state.token)
    return (
      <div className="App">
        <Switch>
          
          <Route path="/login" render={ this.renderForm } />
          <Route path="/register" render={ this.renderForm } />
          <Route path="/categories" render={ this.renderCategoryList }/>
          <Route path="/organizations" render={ this.renderOrganizationList } />
          <Route path="/projects" render={ this.renderProjectList } />
          <Route render={ () => <p>Page not Found</p> } />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App)

