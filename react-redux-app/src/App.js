import React from 'react';
import Cards from './components/Cards';
import {Button} from 'reactstrap';
import '../node_modules/bootswatch/dist/lux/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <Button outline color='success'>Get Episodes</Button>
      <Cards />
    </div>
  );
}

export default App;
