const express = require('express');
const cors = require('cors');
const connectDB = require('./models/Connect'); // Import as a named import
const CustomerModel = require('./models/Customers');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/login',(req,res)=>{
  CustomerModel.create(req.body)
  .then(login =>res.json(login))
  .catch(err=>res.json(err))
})

connectDB();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Server Is Running on http://localhost:4000");
});
