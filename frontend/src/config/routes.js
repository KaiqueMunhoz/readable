import React from "react";
import { Route, Switch } from "react-router-dom";

//Pages
import Home from "../pages/Home";
import PostNew from "../pages/PostNew";
import PostDetails from "../pages/PostDetails";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact render={() => <Home />} />
      <Route path="/new" render={() => <PostNew />} />
      <Route path="/posts/:id" render={() => <PostDetails />} />
      <Route path="/edit/:id" render={() => <PostNew />} />
      <Route path="/:category" render={() => <Home />} />
    </Switch>
  );
};

export default Routes;
