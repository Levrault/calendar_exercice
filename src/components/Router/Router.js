import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import About from '../About/About';
import CalendarConnected from '../Calendar/CalendarConnected';
import Main from '../Main/Main';

const appRoutes = [
  {
    path: '/',
    exact: true,
    component: CalendarConnected
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
  <Main>
    <Switch>
      {
        appRoutes.map(({ path, exact, component }) => (
          <Route key={`route-${path}`} exact={exact} path={path} component={component} />
        ))
      }
      <Redirect from="*" to="/" />
    </Switch>
  </Main>
);

export default NavbarRouter;
