import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Discover from "./pages/discover/Discover";
import "./App.css";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => <Home {...routeProps} />}
        />
        <Route
          exact
          path="/search"
          render={(routeProps) => <Search {...routeProps} />}
        />
        <Route
          exact
          path="/discover"
          render={(routeProps) => <Discover {...routeProps} />}
        />
        <Route render={() => <h1>Error - this page cannot be found!</h1>} />
      </Switch>
    </div>
  );
}

export default App;
