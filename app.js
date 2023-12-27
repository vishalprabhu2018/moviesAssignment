const express = require('express');
const app = express();
const router = require('./routes/router.js');
const databaseconnect = require('./config/databaseConfig.js');
const cors = require('cors');



// connect to db
databaseconnect();

app.use(express.json()); 
app.use(cors({ origin: [process.env.CLIENT_URL], credentials: true })); //Third-party middleware

app.use('/', router);   


module.exports=app