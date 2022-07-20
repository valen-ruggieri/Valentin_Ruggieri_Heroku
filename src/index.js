const yargs = require("yargs");
yargs.command({
  command: "add port",
  describe: "add number of port",
  builder: {
    PORT: {
      describe: "number of port",
      demandOption: true,
      type: "number",
    },
  },
  handler(argv) {
    console.log(`PORT is: ${argv.PORT}`);
  },
});
yargs.parse();
const app = require("./app");
const http = require("http");
const PORT = yargs.argv.PORT || 8000;
const server = http.createServer(app);
require("./config/configMongoDB");
require("./utils/passport/passport");
server.listen(PORT, () => {
  console.log(`Servidor listo en el puerto ${PORT} ✅`);
});
