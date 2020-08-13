import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Signin from "./components/signin";
import Signup from "./components/signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  let mydata = [];
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" mydata={mydata} exact component={Signin} />
          <Route path="/signup" mydata={mydata} component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
