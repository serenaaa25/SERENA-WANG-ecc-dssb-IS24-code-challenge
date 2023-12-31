import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";

import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../actions/products";
import useStyles from "./styles";

const Product = ({ product, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          "https://www.earlyyearsbc.ca/wp-content/themes/eypd/assets/images/clients/bc2.png"
        }
      />
      <div className={classes.overlay}>
        <Typography variant="h6">
          Product Name:
          <br />
          {product.productName}
        </Typography>
        <Typography variant="body2">{product.startDate}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(product._id)}
        >
          Edit <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>
      <CardContent>
        <Typography variant="body2">
          Product ID: <br />
          {product._id}
        </Typography>
        <div className={classes.details}>
          <Typography variant="body2" component="h2">
            Developers: <br />
            {Array.isArray(product.developers)
              ? product.developers.map((developer) => `${developer}, `)
              : "No developers available"}
          </Typography>
        </div>
        <div className={classes.details}>
          <Typography variant="body2" component="p">
            Scrum Master Name: <br /> {product.scrumMasterName}
          </Typography>
        </div>
        <div className={classes.details}>
          <Typography variant="body2" component="p">
            Product Owner Name: <br /> {product.productOwnerName}
          </Typography>
        </div>
        <div className={classes.details}>
          <Typography variant="body2" component="p">
            Methodology: <br /> {product.methodology}
          </Typography>
        </div>
        <Typography variant="body2" component="p">
          Location: {product.location}
        </Typography>
      </CardContent>

      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deleteProduct(product._id))}
        >
          <DeleteIcon fontSize="small" /> Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
