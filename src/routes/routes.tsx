import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Clients from "../pages/Clients";
import HiredService from "../pages/HiredServices";

import Header from "../components/Header";
import BedroomsPage from "../pages/bedrooms";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Header />
      </Route>

      <Route exact path="/login">
        <Login />
      </Route>

      <Route exact path="/signup">
        <Signup />
      </Route>

      <Route exact path="/"></Route>
      <Route path="/clients">
        <Header />
        <Clients />
      </Route>

      <Route exact path="/bedrooms">
        <Header />
        <BedroomsPage />
      </Route>

      <Route path="/hiredservices">
        <Header />
        <HiredService />
      </Route>
    </Switch>
  );
};

export default Routes;
