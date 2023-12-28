const mongoose = require('mongoose');

require('dotenv').config();
const PASS = process.env.DB_PASSWORD
const NAME = process.env.DB_USER

  //  const url= `mongodb+srv://${db_user}:${db_pass}@cluster0.tkhncfb.mongodb.net/`
   const url= `mongodb+srv://${NAME}:${PASS}@cluster0.tkhncfb.mongodb.net/`

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
    .then(()=>{
         console.log('Connected to MongoDB');
    })
    .catch(err => console.log('Error connecting to MongoDB', err));

const db = mongoose.connection     
    
module.exports = db;     