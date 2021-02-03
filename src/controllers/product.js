const Product = require("../models/product")
const shortid = require("shortid")
const slugify = require("slugify")

exports.createProduct = (req, res) => {
    const {
        name, price,quantity, description, category, createProduct, createdBy
    } = req.body

    let productPictures = []
    if (req.files.length > 0) {
        productPictures = req, filename(file => {
            return { img: file.filename }
        })
    }


    const product = new Product({
        name: name,
        slug: slugify(name),
        price,
        quantity,
        description,
        productPictures,
        category,
        createProduct,
        createdBy: req.user._id
    })

    product.save(((error, product) => {
        if (error) return res.status(400).json({ error });
        if (product) {


            return res.status(201).json({ product });
        }
    }))
}