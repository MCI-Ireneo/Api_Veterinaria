import { Router } from "express";
import {
  getAllUsers,
  getAllById,
  getByDNI,
  getByPlace,
  getByComms,
  getByLastName,
  getDataById,
  insertUser,
  deleteUser,
  editUser,
} from "../controllers/usuarios.controllers.js";
const router = Router();
//obtener todos los usuarios
router.get("/", getAllUsers);

///obtener usuario por id
router.get("/:idUser", getAllById);
//obtener un usuario completo por su dni
router.get("/user/:dni", getByDNI);
//obtener todos los usuarios de una localidad
router.get("/alluser/:localidad", getByPlace);
//obtener todos los usuarios que aceptan comunicaciones
router.get("/comunicaciones/:comunicaciones", getByComms);
//obtener todos los usuarios cuyo apellido sea López (cambiar el apellido a otro para que haya mas de un Lopez)
router.get("/apellido/:apellido", getByLastName);
// obtener solo el nombre, dni, telefono de un usuario por id.
router.get("/data/:idUser", getDataById);
//insertar un usuario
router.post("/", insertUser);
//borrar un usuario por id
router.delete("/:idUser", deleteUser);
// actualizar los datos de un usuario por id
router.put("/:idUser", editUser);

export default router;
