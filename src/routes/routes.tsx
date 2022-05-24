import { Route, Switch } from "react-router-dom";
import Clients from "../pages/Clients";

import Header from "../components/Header";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route path='/clients'><Clients /></Route>
    </Switch>
  );
};

export default Routes;
