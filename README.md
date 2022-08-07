# Valentin_Ruggieri_Authorization_PROXY_And_NGINX

## EJECUTAR SERVIDORES NODE
- Agregar en la vista info, el número de procesadores presentes en el servidor.
- Ejecutar el servidor (modos FORK y CLUSTER) con nodemon verificando el número de procesos tomados por node.

![Video de funcionamiento de la App](https://media.giphy.com/media/3OoL7bdO4zc4XbdKyE/giphy.gif)

- Ejecutar el servidor (con los parámetros adecuados) utilizando Forever, verificando su correcta operación. Listar los procesos por Forever y por sistema operativo

![Video de funcionamiento de la App](https://media.giphy.com/media/3OoL7bdO4zc4XbdKyE/giphy.gif)


- Ejecutar el servidor (con los parámetros adecuados: modo FORK) utilizando PM2 en sus modos modo fork y cluster. Listar los procesos por PM2 y por sistema operativo.

![Video de funcionamiento de la App](https://media.giphy.com/media/3OoL7bdO4zc4XbdKyE/giphy.gif)

- Tanto en Forever como en PM2 permitir el modo escucha, para que la actualización del código del servidor se vea reflejado inmediatamente en todos los procesos.

![Video de funcionamiento de la App](https://media.giphy.com/media/3OoL7bdO4zc4XbdKyE/giphy.gif)

- Hacer pruebas de finalización de procesos fork y cluster en los casos que corresponda.

![Video de funcionamiento de la App](https://media.giphy.com/media/3OoL7bdO4zc4XbdKyE/giphy.gif)

## SERVIDOR NGINX

- Redirigir todas las consultas a /api/randoms a un cluster de servidores escuchando en el puerto 8081. El cluster será creado desde node utilizando el módulo nativo cluster.
- El resto de las consultas, redirigirlas a un servidor individual escuchando en el puerto 8080.
- Verificar que todo funcione correctamente.

![Video de funcionamiento de la App](https://media.giphy.com/media/3OoL7bdO4zc4XbdKyE/giphy.gif)

- Luego, modificar la configuración para que todas las consultas a /api/randoms sean redirigidas a un cluster de servidores gestionado desde nginx, repartiéndolas equitativamente entre 4 instancias escuchando en los puertos 8082, 8083, 8084 y 8085 respectivamente.

![Video de funcionamiento de la App](https://media.giphy.com/media/3OoL7bdO4zc4XbdKyE/giphy.gif)

