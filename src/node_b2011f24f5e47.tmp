const express = require('express');
const app = express();
require('./app/database');
const routes = require('./routers')

app.use(express.json());                                                                    

app.use(routes)

app.listen(8080);


