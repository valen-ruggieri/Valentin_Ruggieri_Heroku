require('dotenv').config()

const cluster =require('cluster')
const numCPUs = require('os').cpus().length

if (cluster.isMaster){
  console.log(`master ${process.pid} is running ...`);
  console.log(`Numero de procesadores: ${numCPUs}`)
     for(let i = 0 ; i< numCPUs ; i++ ){
    cluster.fork()
   }
   cluster.on('exit',(worker,code,signal)=>{
    console.log(`Worker ${worker.process.pid} died`)
    cluster.fork()
   })
 }else{
  const app = require("./app");
  const http = require("http");
  const PORT = process.env.PORT
  const server = http.createServer(app);
  server.listen(PORT, () => {
    console.log(`Servidor listo en el puerto ${PORT} ✅, pid:${process.pid}`);
  });
}

