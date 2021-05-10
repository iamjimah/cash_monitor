import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../src/components/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Dashboard/Index";
import { LabelBottomNavigation } from "./components/Footer";
import Register from "./components/Register";
import { AnimatedSwitch } from "react-router-transition";
import Hero from "./Home/Hero";

const App = () => {
  return (
    <div id="main">
     
      {<Dashboard />}
      <article>
        <Switch>
          <Route>
            <AnimatedSwitch
              atEnter={{ opacity: 0 }}
              atLeave={{ opacity: 0 }}
              atActive={{ opacity: 1 }}
              className="switch-wrapper"
            >
              <Route path='/hero' component={Hero}/>
              <Route path="/account" component={Login} />
              <Route path="/tracker" component={Home} />
              <Route path="/signup" component={Register} />
              <Route path="/signin" component={Login} />
              <Route path="/credits" component={LabelBottomNavigation} />
            </AnimatedSwitch>
          </Route>
        </Switch>
      </article>
    </div>
  );
};

export default App;
