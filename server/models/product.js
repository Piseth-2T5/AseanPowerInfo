import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    pcategory: {
        type: String,
  
    },
    pname: {
   
        type: String
    },
    pdescription: String,
    pimage: String,
    heading2: String,
    description2: String,
    heading3: String,
    description3: String,
    pimage2: String,
    heading4: String,
    description4: String,
});
const Product = mongoose.model("Product", productSchema);

export default Product;