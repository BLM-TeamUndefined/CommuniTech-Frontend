
import React from 'react';
import Form from './components/Form'
import './App.css';


function App() {
  // useEffect(() => {
  //   if (localStorage.token) {
  //     fetch("http://localhost:3000/persist",{
  //       headers: {
  //         "Authorization": `Bearer ${localStorage.token}`
  //       }
  //     })
  //     .then(resp => resp.json())
  //     .then(handleResp)
  //   }
  //   }
  // )
  // const handleResp = () => {
  // }
  return (
    <div className="App">
      CommuniTech

      <Form/>
    </div>
  );
}
export default App;