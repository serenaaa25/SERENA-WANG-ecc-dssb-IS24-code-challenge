import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  productId: Number,
  productName: String,
  productOwnerName: String,
  developers: [String],
  scrumMasterName: String,
  // startDate: {
  //   type: Date,
  //   default: new Date(),
  // },
  // Since want to manually input start date
  // changing to type string
  startDate: String,
  methodology: String,
  location: String,
});

const ProductDetail = mongoose.model("ProductDetail", productSchema);

export default ProductDetail;
