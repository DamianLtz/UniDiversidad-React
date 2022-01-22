import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Main";
import SinglePost from "./routes/singlePost";
import Footer from "./components/Footer";
import "./scss/styles.scss";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}>
          <Home />
        </Route>
        <Route exact path="/SinglePost/:id">
          <SinglePost type="Secundaria"/>
        </Route>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
