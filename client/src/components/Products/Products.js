import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product/Product";
import { Grid, CircularProgress } from "@material-ui/core";
import useStyles from "./styles";

const Products = () => {
  const products = useSelector((state) => state.products);
  console.log(products);
  const classes = useStyles();

  return !products.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {products.map((product) => (
        <Grid item key={product._id} xs={12} sm={6}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
