import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/home_components/Home";
import About from "./pages/about_components/About";
import Users from "./pages/User";
import "./App.css"
import Navbar from "./navbar/navbar"


export default function App() {
  return (
    <Router>
      <div className="background">
        <Navbar/>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/myproject">
            <Users />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}