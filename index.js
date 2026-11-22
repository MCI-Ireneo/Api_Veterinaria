//Configuración de nuerstro servidor http
import http from "node:http";
import app from "./src/app.js";
//Crear el servidor
const server = http.createServer(app);
const PORT = process.env.PORT || process.env.SERV_PORT;
server.listen(PORT);
//Dos funciones
//función que me dice que el servidor esta encendido
server.on("Escuchando", () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});
//función que me dice que el servidor ha tenido un error
server.on("Error", (error) => {
  console.log(error);
});
