import React from "react";
import { Route, Switch } from "react-router-dom"; // <-- New code


import HomeComponent from "./components/Home/Home";
import ExecuteComponent from "./components/Execute/Execute";

export interface RouteI {
  path: string;
  key: string;
  exact: boolean;
  component: any;
  routes?: RouteI[];
}

// https://www.ryanjyost.com/react-routing/

export const ROUTES: RouteI[] = [
  {
    path: "/",
    key: "ROOT",
    exact: true,
    component: () => <h1>"log in"</h1>,
  },
  {
    path: "/home",
    key: "Home",
    exact: true,
    component: HomeComponent
  },
  {
    path: "/execute",
    key: "Execute",
    exact: true,
    component: ExecuteComponent
  },
];

/**
 * Render a route with potential sub routes
 * https://reacttraining.com/react-router/web/example/route-config
 */
function RouteWithSubRoutes(route: RouteI) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}

/**
 * Use this component for any new section of routes (any config object that has a "routes" property
 * Also, had some trouble converting the js demo to TS. This helped:
 * https://levelup.gitconnected.com/using-react-functional-components-with-hooks-in-typescript-6d61075edddc
 */
export const RenderRoutes: React.FC<{ routes: RouteI[] }> = ({ routes }) => {
  return (
    <Switch>
      {routes.map((route: RouteI, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
};