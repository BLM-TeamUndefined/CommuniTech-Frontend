import React from 'react'


class Home extends React.Component{
    render(){
        return(
            <div className="home-main">
                <div className="navbar">
                    {/* <div className="logo"></div> */}
                    <a href="/"><img className="logo" src={require("./logo.png")}/></a>
                    {/* <p className="logo-name">CommuniTech</p> */}
                    <div className="nav-box">
                        <a className="nav-option" href="#" >Volunteer</a>
                        <a className="nav-option" href="#" >Find Talent</a>
                        <a className="nav-option" href="#" >How It Works</a>

                        <button className="login">Login</button>
                        <a className="login sign" href="/accountType"> Sign Up</a>
                    </div>
                </div>
                <main>
                    <div className="text-content">
                        <h2 className="text-main">
                            Need is everywhere.
                        </h2>
                        <h2 className="text-main">
                            Let's get to work.
                        </h2>
                        <p className="mission">We connect talented designers, developers, and engineers with mission driven POC organizations who could use a helping hand.</p>
                        <a href="/projects"> <button className="direct-button one">Find a Project</button></a>
                        <button className="direct-button two">Find Talent</button>


                    </div>
                    <img className="main-img" src={require('./home_image.png')} alt="Black Professionals having a conversation"/>
                </main>

            </div>
        )
    }     
        
    
}

export default Home