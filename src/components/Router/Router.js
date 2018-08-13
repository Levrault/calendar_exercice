import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import About from '../About/About';
import Home from '../Home/Home';

const appRoutes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/about',
    exact: true,
    component: About
  }
];

/**
 * Routing page
 * @returns {node}
 */
const NavbarRouter = () => (
  <main>
    <Switch>
      {
        appRoutes.map(({ path, exact, component }) => (
          <Route key={`route-${path}`} exact={exact} path={path} component={component} />
        ))
      }
      <Redirect from="*" to="/" />
    </Switch>
  </main>
);

export default NavbarRouter;
