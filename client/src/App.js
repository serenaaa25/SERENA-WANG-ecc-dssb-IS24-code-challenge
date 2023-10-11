import React from "react";
import { Container, AppBar, Typography } from "@material-ui/core";

import useStyles from "./styles";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home/Home.js";

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h3" align="center">
            ECC Product Manager
          </Typography>
        </AppBar>
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/products" />} />
          <Route path="/products" exact component={Home} />
          <Route path="/products/search" exact component={Home} />
        </Switch>
        {/* <Home /> */}
      </Container>
    </Router>
  );
};

export default App;
