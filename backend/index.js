const express = require('express');
const cors = require('cors');
const User = require('./db/User');
const Product= require('./db/product');
require('./db/config');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/register', async (req, res) => {
  try {
    let user = new User(req.body);
    let result = await user.save();

    result = result.toObject();
    delete result.password; // remove password before sending to frontend

    res.send(result); // send flat user object
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Registration failed' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email, password });
    if (user) {
      user = user.toObject();
      delete user.password; // remove password before sending to frontend
      res.send(user); // send flat user object
    }
    else {
      res.status(400).send({ error: 'Invalid credentials' });
    } 
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Login failed' });
  }
}
);

app.post('/add-product', async(req,res)=>{

  let product=new Product(req.body);
  let result=await product.save();
  result = result.toObject();
  res.send(result);
});

app.get('/products', async (req, res) => {
 
    let products = await Product.find();
    if(products.length > 0) {
       res.send(products); 
       
    }
    else {
       res.status(404).send({ error: 'No products found' });
    }
   
 
});





app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
