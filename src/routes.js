import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Charts from "./pages/sample/charts";
import Dashboard from "./pages/sample/dashboard";
import Form from "./pages/sample/form";
import Icons from "./pages/sample/icons";
import Maps from "./pages/sample/maps";
import Notifications from "./pages/sample/notifications";
import Tables from "./pages/sample/tables";
import Typography from "./pages/sample/typography";

const routes = (
  <Switch>
    <Route path="/app/sample/dashboard" component={Dashboard} />
    <Route path="/app/sample/typography" component={Typography} />
    <Route path="/app/sample/tables" component={Tables} />
    <Route path="/app/sample/notifications" component={Notifications} />
    <Route
      exact
      path="/app/sample/ui"
      render={() => <Redirect to="/app/sample/ui/icons" />}
    />
    <Route path="/app/sample/ui/maps" component={Maps} />
    <Route path="/app/sample/ui/icons" component={Icons} />
    <Route path="/app/sample/ui/charts" component={Charts} />
    <Route path="/app/sample/form" component={Form} />
  </Switch>
);

export default routes;
