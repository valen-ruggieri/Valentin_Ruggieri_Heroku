const express = require("express");
const numCPUs = require('os').cpus().length
const pid = process.pid
const routerRandom = express.Router();
routerRandom.get("/randoms", (req, res) => {
  res.send(`
  <!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>PROXY & NGINX</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
  </head>
  <body class="container bg-black me-5 mt-5">
  <h1 class="text-light mt-5 mb-4 me-5">RANDOMS</h1>
  <h2 class="text-info me-5" ><b class="text-danger"> Number of proccess: </b>${numCPUs} </h2>
  <h2 class="text-info me-5" ><b class="text-danger">  Pid: </b>${pid}</h2>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
  </body>
</html>
  

  `)
});

module.exports = routerRandom;
