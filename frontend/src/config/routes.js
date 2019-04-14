import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Pages
import Home from '../pages/Home'
import PostNew from '../pages/PostNew'
import PostDetails from '../pages/PostDetails'

const Routes = (props) => {

  return (
    <Switch>
      <Route path='/' exact render={() => ( <Home {...props}/> )} />
      <Route path='/new' render={() => ( <PostNew {...props}/> )} />
      <Route path='/:category' render={() => ( <Home {...props}/> )} />
      <Route path='/:category/:post_id' render={() => ( <PostDetails {...props}/> )} />
      <Route path='/edit/:post_id' render={() => ( <PostNew {...props}/> )} />
    </Switch>
  );
}

export default Routes;