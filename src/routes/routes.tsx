import {Route, Switch} from "react-router-dom";
import Login from "../pages/Login";
import Clients from "../pages/Clients";
import HiredService from "../pages/HiredServices";
import Dashboard from "../pages/Dashboard";
import Header from "../components/Header";
import BedroomsPage from "../pages/bedrooms";
import Landing from "../pages/Landing";
import {Services} from "../pages/services";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Landing/>
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>

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

      <Route path="/Dashboard">
        <Header />
        <Dashboard />
      </Route>
    </Switch>
  );
};

export default Routes;
