import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./Login/Login";
import NavComponent from "./Home/Nav";
import Blog from "./Home/Blog";
import Users from "./Home/Users";
import Home from "./Home/Home";
import FullBlog from "./Home/fullBlog";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/users" exact component={Users} />
          <Route path="/blogs" exact component={Blog} />
          <Route path="/:id"  exact component={FullBlog} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
