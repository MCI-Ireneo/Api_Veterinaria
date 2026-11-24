import { Router } from "express";
import {
  getAll,
  getAllBySpecies,
  getById,
  getBySpecies,
  insertPet,
  deletePet,
  editPet,
} from "../controllers/mascotas.controllers.js";
const router = Router();
//obtener la lista de todas las mascotas GET
router.get("/", getAll);
//obtener un mascota GET
router.get("/:idMascota", getById);
//obterner la especie de una mascota por GET
router.get("/:idMascota/especie", getBySpecies);
//obtener todas las mascotas por especie GET
router.get("/especie/all/:especie", getAllBySpecies);
//dar de alta una mascota POST
router.post("/", insertPet);
//dar de baja una mascota DELETE
router.delete("/:idMAscota", deletePet);
//actualizar datos de la mascota PUT/PATCH
router.put("/:idMascota", editPet);

export default router;
