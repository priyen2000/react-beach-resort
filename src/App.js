import React, { Component } from "react";
import "./App.css";

import Home from "../src/pages/Home";
import Rooms from "../src/pages/Rooms";
import SingleRoom from "../src/pages/SingleRoom";
import Error from "../src/pages/Error";
import { Route, Switch } from "react-router-dom";
import Navbar from "../src/components/Navbar";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/rooms/" component={Rooms}></Route>
          <Route exact path="/rooms/:slug" component={SingleRoom}></Route>
          <Route component={Error}></Route>
        </Switch>
      </>
    );
  }
}

export default App;
