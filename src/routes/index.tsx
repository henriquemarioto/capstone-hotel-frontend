import {Switch} from "react-router-dom";

import Login from "../pages/Login";
import Clients from "../pages/Clients";
import HiredService from "../pages/HiredServices";
import Dashboard from "../pages/Dashboard";
import Header from "../components/Header";
import BedroomsPage from "../pages/bedrooms";
import Landing from "../pages/Landing";
import {Services} from "../pages/services";
import Employee from "../pages/Employee";
import Rooms from "../pages/Rooms";
import Chat from "../pages/Chat";
import Route from "./route";


const Routes = () => {

  return (
    <Switch>
      <Route exact path="/">
        <Landing/>
      </Route>

      <Route exact path="/login">
        <Login />
      </Route>

      <Route path="/clients" isPrivate>
        <Header />
        <Clients />
      </Route>

      <Route exact path="/bedrooms" isPrivate>
        <Header />
        <BedroomsPage />
      </Route>

      <Route path="/hiredservices" isPrivate>
        <Header />
        <HiredService />
      </Route>
      <Route path="/employees" isPrivate>
        <Header />
        <Employee />
      </Route>

      <Route path="/services" isPrivate>
        <Header />
        <Services />
      </Route>

      <Route path="/dashboard" isPrivate>
        <Header />
        <Dashboard />
      </Route>

      <Route path="/rooms" isPrivate>
        <Header />
        <Rooms />
      </Route>
      <Route path="/chat/:room/:username" isPrivate>
        <Header />
        <Chat />
      </Route>
    </Switch>
  );
};

export default Routes;
