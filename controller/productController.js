const Product = require("../model/product");

const createProduct = async (req, res) => {
    try {
        const { name, description, price, inventory } = req.body;
        const productObject = {
            name,
            description,
            price,
            inventory,
            userId: req.user.id
        }

        const details = await Product.create(productObject);
        return res.status(200).json({ details: details})
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getSpecificProduct = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const productDetails = await Product.findOne({ where: { id: id } });
        return res.status(200).json(productDetails);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getAllProduct = async (req, res) => {
    try {
        let { page, pageSize } = req.query;
        page = parseInt(page) || 1;   
        pageSize = parseInt(pageSize) || 10;  

        const offset = (page - 1) * pageSize;
        const limit = pageSize;

        const getAllProducts = await Product.findAll({
            offset,
            limit,
        });

        return res.status(200).json(getAllProducts)
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

const updateProduct = async (req, res) => {
    try {
        const { name, description, price, inventory, id } = req.body;

        const productObject = {};
        if (name) productObject.name = name;
        if (description) productObject.description = description;
        if (price) productObject.price = price;
        if (inventory) productObject.inventory = inventory;

        const updatedProduct = await Product.update(productObject, {
            where: { id }, 
            returning: true,  
            plain: true
        });

        if (!updatedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }

        return res.status(200).json({ message: 'Product updated successfully', product: updatedProduct[1] });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

const sortingProduct = async(req, res) => {
    try{
        const {key, mode} = req.query;
        const product = await Product.findAll({
            order : [[key, mode]]
        })
        return res.status(200).json(product);

       

    }catch(err){
        console.log(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
module.exports = {
    createProduct,
    getAllProduct,
    getSpecificProduct,
    updateProduct,
    sortingProduct
}