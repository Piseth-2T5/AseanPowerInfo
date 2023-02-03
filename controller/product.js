import mongoose from 'mongoose';
import Product from "../models/product.js";


export const getProduct = async (req, res)=>{
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.log(error);
    }
}

export const addProduct = async (req, res) =>{
    const product = req.body;
    const newProduct = new Product(product);
    try {
        await newProduct.save();
        res.status(200).json(newProduct)
    } catch (error) {
        console.log(error);
    }
}

export const updateProduct = async (req,res) =>{
    const {id}= req.params;
    const product = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no product have been found')

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true});
        res.json(updatedProduct)
    } catch (error) {
        console.log(error);
    }
}
export const deleteProduct = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no product have been found');
    try {
        const products = await Product.findByIdAndDelete(id);
        res.json(products);
    } catch (error) {
        console.log(error);
    }
}