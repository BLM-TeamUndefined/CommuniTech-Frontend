import React from 'react';
import useState from 'react';
import logo from './logo.svg';
import './App.css';
import CategoryList from './components/CategoryList/CategoryList';

function App() {

 // const [categories, setCategories] = useState([]);

  
  return (
    <div className="App">
      <CategoryList categories={this.state.categories}/>
    </div>
  );
}

export default App;
