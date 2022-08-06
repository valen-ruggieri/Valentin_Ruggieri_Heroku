



  const app = require("./app");
  const http = require("http");
  const PORT =  parseInt(process.argv[2]) || 8081
  const server = http.createServer(app);
  require("./config/configMongoDB");
  require("./utils/passport/passport");
  server.listen(PORT, () => {
    console.log(`Servidor listo en el puerto ${PORT} ✅, pid:${process.pid}`);
    console.log(PORT)
  });


  