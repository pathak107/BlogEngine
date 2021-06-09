import React, { Suspense } from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

// Pages import
import Home from './pages/Home';
const PostCreate = React.lazy(() => import('./pages/PostCreate'));

function App() {
  return (
    <BrowserRouter>
      <div>
        <Suspense fallback={
          <CircularProgress />
        }>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/login" exact>
              <h1>about page</h1>
            </Route>
            <Route path="/register" exact>
              <h2>Users page</h2>
            </Route>
            <Route path="/post/create" exact>
              <PostCreate />
            </Route>
            <Route path='*'>
              <Redirect to='/login' />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
