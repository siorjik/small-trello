import React, {Component} from 'react';
import './App.css';

import Task from './components/Task';

class App extends Component {
  render() {
    return (
      <div id="main-wrap">
        <Task/>
      </div>
    );
  }
}

export default App;
