import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './komponen/Header';
import Main from './komponen/Main';
import Footer from './komponen/Footer';
import Html from './komponen/index';
import { Button } from 'reactstrap';




class App extends Component {
  render(){
    return(
      <div className="App">

        <Header />
        
      <header className="App-header">
      <h1><b>Halo, BAKRI AHMAD RIDHWAN</b></h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <h2><b>Welcome To React</b></h2>
      </header>

        
        <Footer />
    </div>

    );
  }
}

export default App;
