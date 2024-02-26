const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('./db/postgresConnection');
const syncDB = require('./dbSync');

app.use(bodyParser.json());
const userRoutes = require('./route/userRoute');
const productRoute = require('./route/productRoute');
// syncDB();


app.use(userRoutes);
app.use(productRoute);
app.get('/', (req, res) => {
    return res.status(200).json({status : 'OK'})
})

app.listen(3001, () => {
    console.log('listening on http://localhost:3001');
})