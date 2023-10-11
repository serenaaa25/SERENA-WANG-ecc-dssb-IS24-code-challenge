import React, { useState, useEffect } from "react";
import {
  Container,
  AppBar,
  TextField,
  Grow,
  Grid,
  Paper,
  Button,
} from "@material-ui/core";
import Form from "../Form/Form.js";
import Products from "../Products/Products.js";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { getProducts, getProductsBySearch } from "../../actions/products.js";
import Pagination from "../Pagination/Pagination.js";
import { useHistory, useLocation } from "react-router-dom";

import ChipInput from "material-ui-chip-input";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(null);
  const query = useQuery();
  const history = useHistory();
  const searchQuery = query.get("searchQuery");
  console.log("searchQuery", searchQuery);
  const [search, setSearch] = useState("");
  const [developers, setDevelopers] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [currentId, dispatch]);

  const searchProduct = () => {
    if (search.trim() || developers) {
      dispatch(
        getProductsBySearch({ search, developers: developers.join(",") })
      );
      history.push(
        `/products/search?searchQuery=${
          search || "none"
        }&developers=${developers.join(",")}`
      );
    } else {
      history.push("/");
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchProduct();
    }
  };

  const handleAddChip = (developer) =>
    setDevelopers([...developers, developer]);

  const handleDeleteChip = (developerToDelete) =>
    setDevelopers(
      developers.filter((developer) => developer !== developerToDelete)
    );

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
          className={classes.gridContainer}
        >
          <Grid item xs={12} sm={6} md={9}>
            <Products setCurrentId={setCurrentId} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppBar
              className={classes.appBarSearch}
              position="static"
              color="inherit"
            >
              <TextField
                name="search"
                variant="outlined"
                label="Search Product"
                onKeyPress={handleKeyPress}
                value={search}
                fullWidth
                onChange={(e) => setSearch(e.target.value)}
              />

              <ChipInput
                style={{ margin: "10px 0" }}
                value={developers}
                onAdd={(chip) => handleAddChip(chip)}
                onDelete={(chip) => handleDeleteChip(chip)}
                label="Search Developer Tags"
                variant="outlined"
              />
              <Button
                onClick={searchProduct}
                className={classes.searchButton}
                color="primary"
                variant="contained"
              >
                Search
              </Button>
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Paper elevation={6}>
              <Pagination />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
