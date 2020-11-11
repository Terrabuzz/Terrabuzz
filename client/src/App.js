// React additions
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Individual Pages
import Home from "./pages/home";
import Feed from "./pages/feed";
import Error404 from "./pages/error404";
import Post from "./pages/post";
import Publish from "./pages/publish";
import Profile from "./pages/profile";
import Search from "./pages/search";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Register from "../src/pages/Register";
import ForgetPassword from "../src/pages/ForgetPassword";
import NewPassword from "../src/pages/NewPassword";

import SearchTypeProvider from "./components/Search/SearchTypeContext.js";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/feed" component={Feed}></Route>
          <Route exact path="/profile" component={Profile}></Route>
          <Route exact path="/publish" component={Publish}></Route>
          <SearchTypeProvider>
            <Route exact path="/search" component={Search}></Route>
          </SearchTypeProvider>
          <Route exact path="/settings" component={Settings}></Route>
          <Route exact path="/post" component={Post}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route
            exact
            path="/forget-password"
            component={ForgetPassword}
          ></Route>
          <Route exact path="/new-password" component={NewPassword}></Route>
          <Route component={Error404}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
