import React, { Suspense } from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

// Pages import
import Home from './pages/Home';
import ProgressBar from './components/UI/ProgressBar/ProgressBar';
import Author from './pages/Author';
const Posts = React.lazy(() => import('./pages/Posts'));
const Register = React.lazy(() => import('./pages/Register'));
const Login = React.lazy(() => import('./pages/Login'));
const PostCreate = React.lazy(() => import('./pages/PostCreate'));

function App() {
  return (
    <BrowserRouter>
      <div>
        <Suspense fallback={
          <ProgressBar />
        }>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/register" exact>
              <Register />
            </Route>
            <Route path="/posts/create" exact>
              <PostCreate />
            </Route>
            <Route path="/posts/edit/:postID" exact>
              <PostCreate />
            </Route>
            <Route path="/posts" exact>
              <Posts/>
            </Route>
            <Route path="/author" exact>
              <Author/>
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
