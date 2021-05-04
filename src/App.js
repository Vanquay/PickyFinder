<<<<<<< Updated upstream
import logo from './logo.svg';
import './App.css';
=======
import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import EventsList from "./components/events-list.component";
import CreateEvent from "./components/create-event.component";
import EditEvent from "./components/edit-event.component";
import CreateUser from "./components/create-user.component";
import userEvent from '@testing-library/user-event';
import axios from 'axios';
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

    class App extends CreateUser{
      state = {
        selectedFile: null
      }
    }
    {
      fileSelectHandler = event =>{
        this.setState({
          selectedFile: event.target.files[0]
      })
      }
    
      fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('image',this.state.selectedFile, this.stateSelectedFile.name)
        axios.post('', fd)
       
        .then(res => {
          console.log(res);
        });
      }
    }
                    render() {
                    return(
                     <div className = "App"> 
                    <input type = "file" onChange={this.fileSelectedHandler}/>
                    <button onClick= {this.fileUploadHandler}>Upload</button>
                    </div> 
                           
                          
                      
                    );
                  }  
  
}


export default App;
