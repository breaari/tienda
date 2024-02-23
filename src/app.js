const express = require('express');
const { routePrincipal } = require("./Routes/Routes")

const app = express();

app.use('/', routePrincipal)



module.exports = {
    app
}