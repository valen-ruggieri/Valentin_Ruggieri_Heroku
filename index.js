require('dotenv').config()
const cluster =require('cluster')
const numCPUs = require('os').cpus().length
const clusterOn = process.argv[2] === 'CLUSTER'
if ( clusterOn && cluster.isMaster){
  console.log(`🔥 Master ${process.pid} is running ...`);
 
     for(let i = 0 ; i< numCPUs ; i++ ){
    cluster.fork()
   }
  
 }else{
  const app = require("./app");
  const http = require("http");
  const PORT = process.env.PORT
  const server = http.createServer(app);
  server.listen(PORT, () => {
    console.log(`Servidor listo en el puerto ${PORT} ✅, pid:${process.pid}`);
  });
}
