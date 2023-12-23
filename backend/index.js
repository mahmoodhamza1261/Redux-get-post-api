const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require("mongoose");
require("./config")
const Products = require("./Products")
app.use(express.json());
app.use(cors());
app.get("/productlist", async (req, resp) => {
  const result = await Products.find();
  resp.send(result)

})
app.post("/productlist", async (req, resp) => {
  const result = new Products(req.body)
  const products = await result.save()
  console.log(products)
  resp.send(products)
  

})

app.listen(8000)