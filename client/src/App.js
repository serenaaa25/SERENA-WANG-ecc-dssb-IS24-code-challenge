import React, { useState, useEffect } from "react";
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  Paper,
} from "@material-ui/core";
import Form from "./components/Form/Form.js";
import Products from "./components/Products/Products.js";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { getProducts } from "./actions/products.js";
import Pagination from "./components/Pagination/Pagination.js";
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
