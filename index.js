const { app } = require("./src/app");
const { conn } = require('./src/db');


// Iniciar el servidor
conn.sync({ force: false }).then(() => {
    app.listen(3001, () => {
      console.log('%s listening at 3001'); // eslint-disable-line no-console
    });
  });
