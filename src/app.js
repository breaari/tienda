const express = require('express');
const { routePrincipal } = require("./Routes/Routes")
const bodyParser= require('body-parser')

const app = express();

app.use(bodyParser.json());

app.use('/', routePrincipal)



module.exports = {
    app
}