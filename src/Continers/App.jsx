import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import About from "../Components/Common/About";
import Nav from "../Components/Common/Nav";
import TaskMain from "../Components/Task/TaskMain";

const App = () => {
  return (
    <Fragment>
      <Nav />
      <Switch>
        <Route path="/todoReact/" exact component={TaskMain} />
        <Route path="/todoReact/About" exact component={About} />
      </Switch>
    </Fragment>
  );
};

export default App;
