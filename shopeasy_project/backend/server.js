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

app.use('/api/products', require('./routes/productRoutes'));

app.listen(5000, ()=>console.log('Server running'));
