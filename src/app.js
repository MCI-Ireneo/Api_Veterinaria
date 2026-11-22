//solo configuraremos express
import express from "express";
//vamos a instalar las cors - es una politica de seguridad que imponen los nevegadores dos aplicaciones el local se conecten. Cors hace que esa conexion sea legitima
import cors from "cors";
import apiRoutes from "./routes/api.routes.js";
const app = express();
app.use(express.json());
app.use(cors());
//configurar el punto de entrada de las rutas.
app.use("/api", apiRoutes);
//configurar que pasa cuando una ruta no existe. Tengo que responder con un status 404 y mensaje.
app.use((req, res, next) => {
  res.status(404).json({
    message: "Not Found",
  });
});
//configurar que al salir un error salga por la api ( a parte de por la consola)
app.use((err, req, res, next) => {
  //error por consola
  console.log(err.stack);
  res.status(500).json({ message: err.message });
});
export default app;
