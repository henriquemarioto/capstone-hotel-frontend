import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Header from "../components/Header";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Header />
      </Route>
      <Route exact path="/login">
        <Login/>
      </Route>
      <Route exact path="/signup">
        <Signup/>
      </Route>
    </Switch>
  );
};

export default Routes;
