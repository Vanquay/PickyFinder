import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import EventsList from "./components/events-list.component";
import CreateEvent from "./components/create-event.component";
import EditEvent from "./components/edit-event.component";
import CreateUser from "./components/create-user.component";
import Login from "./components/login.component";

function App() {
  return (
    <Router>
      
      <Navbar />
      <br/>
      <Route path="/" exact component={EventsList} />
      <Route path="/edit/:id" component={EditEvent} />
      <Route path="/create" component={CreateEvent} />
      <Route path="/user" component={CreateUser} />
      <Route path="/login" component={Login} />
      
    </Router>
  );
}

export default App;
