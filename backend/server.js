
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('DB Connected'))
.catch(err=>console.log(err));

const Product = require('./productModel');

app.get('/api/products', async (req,res)=>{
  const data = await Product.find();
  res.json(data);
});

app.post('/api/products', async (req,res)=>{
  const p = new Product(req.body);
  await p.save();
  res.json(p);
});

app.listen(5000, ()=>console.log('Server running'));
