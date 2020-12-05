import React from 'react';

import Layout from './Hoc/Layout';
import { Switch } from 'react-router-dom';

import Home from './Components/home';
import SignIn from './Components/signin';
import PrivateRoute from './Components/authRoutes/privateRoutes';
import PublicRoute from './Components/authRoutes/publicRoutes';

import Dashboard from './Components/admin/Dashboard';
import AdminMatches from './Components/admin/matches';
import AddEditMatch from './Components/admin/matches/addEditMatch';

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <PrivateRoute
          {...props}
          path="/admin_matches/edit_match/:id"
          component={AddEditMatch}
        />
        <PrivateRoute
          exact
          {...props}
          path="/admin_matches"
          component={AdminMatches}
        />
        <PrivateRoute
          exact
          {...props}
          path="/dashboard"
          component={Dashboard}
        />
        <PublicRoute
          exact
          {...props}
          restricted={true}
          path="/sign_in"
          component={SignIn}
        />
        <PublicRoute
          exact
          restricted={false}
          {...props}
          path="/"
          component={Home}
        />
      </Switch>
    </Layout>
  );
};
export default Routes;
