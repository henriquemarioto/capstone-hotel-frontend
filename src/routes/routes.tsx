import {Route, Switch} from "react-router-dom"

import Header from "../components/Header"
import {Services} from "../pages/services"

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Header />
      </Route>
      <Route exact path="/services">
        <Services />
      </Route>
    </Switch>
  )
}

export default Routes
