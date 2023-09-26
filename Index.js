const express = require('express');
const cors = require('cors');
const connectDB = require('./models/Connect'); // Import as a named import
const CustomerModel = require('./models/Customers');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/login',(req,res)=>{
   console.log(req.body.email,req.body.password)
  // CustomerModel.create(req.body)
  // .then(Customers=>res.json(Customers))
  // .catch(err=>res.json(err))
  {/* CustomerModel.create(req,res)*/}
  // .then(customer=>res.json(customer))
  // .catch(err=>res.json(err))
})

connectDB();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Server Is Running on http://localhost:4000");
});
