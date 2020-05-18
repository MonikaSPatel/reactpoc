import React from "react";
import User from './AppModules/User';
import { Route, Switch } from "react-router-dom";
class AppLayout extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={User} />
        </Switch>
      </div>

    )
  }
}

export default AppLayout;
