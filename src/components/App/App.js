import React from 'react';
import logo from './logo.svg';
import './App.css';
import CategoryList from '../CategoryList/CategoryList';
import React, {useState} from 'react';

function App() {

  const [categories, setCategories] = useState([]);

  
  return (
    <div className="App">
      <CategoryList categories={this.state.categories}/>
    </div>
  );
}

export default App;
