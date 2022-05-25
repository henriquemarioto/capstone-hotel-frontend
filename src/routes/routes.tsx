import {Route, Switch} from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Clients from "../pages/Clients";
import HiredService from "../pages/HiredServices";

import Header from "../components/Header";
import {Services} from "../pages/services";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Header />
      </Route>
      <Route exact path="/services">
        <Services />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/"></Route>
      <Route path="/clients">
        <Clients />
      </Route>
      <Route path="/hiredservices">
        <HiredService />
      </Route>
    </Switch>
  );
};

export default Routes;
