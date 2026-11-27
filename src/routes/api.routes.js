import { Router } from "express";
import mascotasRoutes from "./mascotas.routes.js";
import usuarioRoutes from "./usuarios.routes.js";
import veterinariosRoutes from "./veterinarios.routes.js";

//como este es un fichero de rutas voy a crear una constante que almacene rutas.
const router = Router();
//crear todas las rutas de nuestra api, tiene que haber tantas rutas como tablas en la base de datos. (En este caso usuarios y mascotas)
router.use("/mascotas", mascotasRoutes);
router.use("/usuarios", usuarioRoutes);
router.use("/veterinarios", veterinariosRoutes);
export default router;
