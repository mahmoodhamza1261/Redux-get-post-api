const mongoose=require("mongoose")
const productSchema=new mongoose.Schema({
  name:String,
  price:String
},
 {
  writeConcern: {
     w: 'majority',
     j: true,
     wtimeout: 1000
  }});
module.exports=mongoose.model("products",productSchema);