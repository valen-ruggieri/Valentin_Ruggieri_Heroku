# Valentin_Ruggieri_Loggers_Profiling_Debugs

## LOGGERS Y GZIP

- Incorporar al proyecto de servidor de trabajo la compresión gzip.
- Verificar sobre la ruta /info con y sin compresión, la diferencia de cantidad de bytes devueltos en un caso y otro.


![Video de funcionamiento de la App](https://media.giphy.com/media/my0jbmncaGrFbJZyTK/giphy.gif)

- Implementar loggueo (con alguna librería vista en clase) que registre lo siguiente:
  Ruta y método de todas las peticiones recibidas por el servidor (info)
  Ruta y método de las peticiones a rutas inexistentes en el servidor (warning)
  Errores lanzados por las apis de mensajes y productos, únicamente (error)
  
- Considerar el siguiente criterio:
  Loggear todos los niveles a consola (info, warning y error)
  Registrar sólo los logs de warning a un archivo llamada warn.log
  Enviar sólo los logs de error a un archivo llamada error.log


![Video de funcionamiento de la App](https://media.giphy.com/media/FQvJCvuLLYhN2W82TW/giphy.gif)


## ANÁLISIS COMPLETO DE PERFORMANCE

### Vamos a trabajar sobre la ruta '/info', en modo fork, agregando ó extrayendo un console.log de la información colectada antes de devolverla al cliente. 

#### Además desactivaremos el child_process de la ruta '/randoms'

#### Para ambas condiciones (con o sin console.log) en la ruta '/info' OBTENER:


1 -  El perfilamiento del servidor, realizando el test con --prof de node.js. Analizar los resultados obtenidos luego de procesarlos con --prof-process. 
- Utilizaremos como test de carga Artillery en línea de comandos, emulando 50 conexiones concurrentes con 20 request por cada una. Extraer un reporte con los resultados en archivo de texto.


![Video de funcionamiento de la App](https://media.giphy.com/media/8zMab6Jb8Z7qPpo9qk/giphy.gif)

- Luego utilizaremos Autocannon en línea de comandos, emulando 100 conexiones concurrentes realizadas en un tiempo de 20 segundos. Extraer un reporte con los resultados (puede ser un print screen de la consola)

2 - El perfilamiento del servidor con el modo inspector de node.js --inspect. Revisar el tiempo de los procesos menos performantes sobre el archivo fuente de inspección.

![Video de funcionamiento de la App](https://media.giphy.com/media/tJA6t72LS3bTRzgc4g/giphy.gif)

3 -  El diagrama de flama con 0x, emulando la carga con Autocannon con los mismos parámetros anteriores.

![Video de funcionamiento de la App](https://media.giphy.com/media/tJA6t72LS3bTRzgc4g/giphy.gif)
![Video de funcionamiento de la App](https://media.giphy.com/media/uDdXWDMgCeFF4XZZc5/giphy.gif)




