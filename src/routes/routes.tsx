import { Route, Switch } from "react-router-dom";

import Header from "../components";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Header />
      </Route>
    </Switch>
  );
};

export default Routes;
