import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import { createProduct, updateProduct } from "../../actions/products";

const Form = ({ currentId, setCurrentId }) => {
  const product = useSelector((state) =>
    currentId ? state.products.find((p) => p._id === currentId) : null
  );

  useEffect(() => {
    if (product) setProductData(product);
  }, [product]);

  const [productData, setProductData] = useState({
    scrumMasterName: "",
    productName: "",
    productOwnerName: "",
    developers: "",
    startDate: "",
    methodology: "",
    location: "",
  });

  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateProduct(currentId, productData));
    } else {
      dispatch(createProduct(productData));
    }
  };
  const clear = () => {};

  return (
    <>
      <Paper className={classes.paper}>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Typography variant="h6">Create a new Product</Typography>
          {/* typefield for creating product form */}
          {/* Scrum Master Name */}
          <TextField
            required
            name="scrumMasterName"
            variant="outlined"
            label="Scrum Master Name"
            fullWidth
            value={productData.scrumMasterName}
            onChange={(e) =>
              setProductData({
                ...productData,
                scrumMasterName: e.target.value,
              })
            }
          />

          {/* Product Name */}
          <TextField
            required
            name="productName"
            variant="outlined"
            label="Product Name"
            fullWidth
            value={productData.productName}
            onChange={(e) =>
              setProductData({
                ...productData,
                productName: e.target.value,
              })
            }
          />
          {/* Product Owner Name */}
          <TextField
            required
            name="productOwnerName"
            variant="outlined"
            label="Product Owner Name"
            fullWidth
            value={productData.productOwnerName}
            onChange={(e) =>
              setProductData({
                ...productData,
                productOwnerName: e.target.value,
              })
            }
          />

          {/* Developers */}
          <TextField
            required
            name="developers"
            variant="outlined"
            label="Developers"
            fullWidth
            value={productData.developers}
            onChange={(e) =>
              setProductData({
                ...productData,
                developers: e.target.value.split(","),
              })
            }
          />
          {/* Methodology */}
          <TextField
            required
            name="methodology"
            variant="outlined"
            label="Methodology"
            fullWidth
            value={productData.methodology}
            onChange={(e) =>
              setProductData({
                ...productData,
                methodology: e.target.value,
              })
            }
          />

          {/* Start Date */}
          <TextField
            required
            name="startDate"
            variant="outlined"
            label="Start Date"
            fullWidth
            value={productData.startDate}
            onChange={(e) =>
              setProductData({
                ...productData,
                startDate: e.target.value,
              })
            }
          />

          {/* Location */}
          <TextField
            required
            name="location"
            variant="outlined"
            label="Location"
            fullWidth
            value={productData.location}
            onChange={(e) =>
              setProductData({
                ...productData,
                location: e.target.value,
              })
            }
          />
          {/* Project Snippet Upload */}
          {/* Todo */}

          {/* Submit Button */}
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </Button>

          {/* Clear Button */}
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </form>
      </Paper>
    </>
  );
};

export default Form;
