import React from "react";
import Header from "./Header";
import MemoryControl from "./MemoryControl";
import SearchPhotos from "./SearchPhotos"
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route path="/searchphotos">
          <SearchPhotos />
        </Route>
        <Route path="/">
          <MemoryControl />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;