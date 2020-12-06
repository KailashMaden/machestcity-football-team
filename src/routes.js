import React from 'react';

import Layout from './Hoc/Layout';
import { Switch } from 'react-router-dom';

import Home from './Components/home';
import SignIn from './Components/signin';
import PrivateRoute from './Components/authRoutes/privateRoutes';
import PublicRoute from './Components/authRoutes/publicRoutes';
import TheTeam from './Components/theTeam';
import TheMatches from './Components/theMatches';
import NotFound from './Components/ui/notFound';

import Dashboard from './Components/admin/Dashboard';
import AdminMatches from './Components/admin/matches';
import AddEditMatch from './Components/admin/matches/addEditMatch';
import AdminPlayers from './Components/admin/players';
import AddEditPlayers from './Components/admin/players/addEditPlayers';

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <PrivateRoute
          exact
          {...props}
          path="/admin_players/add_players"
          component={AddEditPlayers}
        />
        <PrivateRoute
          exact
          {...props}
          path="/admin_players/add_players/:id"
          component={AddEditPlayers}
        />
        <PrivateRoute
          exact
          {...props}
          path="/admin_players"
          component={AdminPlayers}
        />
        <PrivateRoute
          exact
          {...props}
          path="/admin_matches/edit_match"
          component={AddEditMatch}
        />
        <PrivateRoute
          exact
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
          path="/the_matches"
          component={TheMatches}
        />
        <PublicRoute
          exact
          restricted={false}
          {...props}
          path="/the_team"
          component={TheTeam}
        />
        <PublicRoute
          exact
          restricted={false}
          {...props}
          path="/"
          component={Home}
        />
        <PublicRoute exact restricted={false} {...props} component={NotFound} />
      </Switch>
    </Layout>
  );
};
export default Routes;
