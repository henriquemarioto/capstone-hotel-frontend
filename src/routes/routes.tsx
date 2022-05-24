import { Route, Switch } from "react-router-dom";
import Clients from "../pages/Clients";
import HiredService from "../pages/HiredServices";

import Header from "../components/Header";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route path='/clients'><Clients /></Route>
      <Route path='/hiredservices'><HiredService /></Route>
    </Switch>
  );
};

export default Routes;
