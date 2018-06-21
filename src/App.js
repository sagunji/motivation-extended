import React, { Component } from 'react';
import './App.css';
import './assests/css/spinner.css'

import QuoteList from './component/quoteList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <QuoteList />
      </div>
    );
  }
}

export default App;
