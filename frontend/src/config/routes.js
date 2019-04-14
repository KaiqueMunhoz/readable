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
      <Route path="/:category" render={() => <Home />} />
      <Route path="/:category/:post_id" render={() => <PostDetails />} />
      <Route path="/edit/:post_id" render={() => <PostNew />} />
    </Switch>
  );
};

export default Routes;
