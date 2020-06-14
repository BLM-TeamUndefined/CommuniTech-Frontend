import React from 'react'


class Project extends React.Component{
    state={
        projects:[]
    }

    async componentDidMount(){
        let resp = await fetch("http://localhost:3000/projects",{
            method: 'GET',
            headers:{'Content-Type': 'application/json'}
         })

         let data = await resp.json()
         this.setState({
             projects: data
         })
    }
    render(){
        console.log(this.state.projects)
        let name = this.state.projects.map(project => project.name)
        console.log(name)
        return(
            <div className="project">
                <div className="navbar">
                    <h1>CommuniTech</h1>
                </div>
            <div className="project-header">
                <div className="org-img"></div>
                <div className="org-name">Organization Name</div>
                <h2 className="title"><u>Project Name</u></h2>
            </div>

            <h3 className="desc-title">Description</h3>
            <p className="desc-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id nunc interdum, consectetur lacus non, tristique enim. Vestibulum quis arcu posuere, facilisis magna eget, egestas quam. Donec dolor tellus, ornare eget aliquet id, interdum et ligula.</p>

            <h3 className="expec-title">Expectations</h3>
            <p className="expec-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id nunc interdum, consectetur lacus non, tristique enim. Vestibulum quis arcu posuere, facilisis magna eget, egestas quam. Donec dolor tellus, ornare eget aliquet id, interdum et ligula.</p>
            </div>
        )
    }
}

export default Project