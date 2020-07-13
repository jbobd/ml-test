//Importo mi archivo de configuracion y levanto el server
require("./config/config");
const app = require("./app");

async function main() {
  await app.listen(app.get("port"));
  console.log("Server iniciado en el puerto: ", app.get("port"));
}

main();
