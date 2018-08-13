import React, { Component } from 'react';
import sun from './sun.gif';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={sun} className="App-logo" alt="sun" />
          
        </header>
        <h1 className="App-title">Yrwynmyr</h1>
        <p className="App-intro">.
        </p>
        <div className="top">
       <iframe width="560" height="315" src="https://www.youtube.com/embed/ZI54ajzIBvI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
		</div>
		
        <div className="left-column">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/-hasx9Jx_6E" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
         </div>
         <div className="right-column">
         <iframe width="560" height="315" src="https://www.youtube.com/embed/-FO4N5vbouE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
		
   
   
      </div>
    );
  }
}

export default App;
