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
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [currentId, dispatch]);

  return (
    <Router>
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h3" align="center">
            ECC Product Manager
          </Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justifyContent="space-between"
              alignItems="stretch"
              spacing={4}
            >
              <Grid item xs={12} sm={7}>
                <Products setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
                <Paper elevation={6}>
                  <Pagination />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </Router>
  );
};

export default App;
