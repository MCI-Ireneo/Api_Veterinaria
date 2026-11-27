import { Router } from "express";
import { getAll, getById, getBySpec, deleteVet, inserVet, editVet } from "../controllers/veterinarios.controller.js";

const router = Router();
//Obtener todos los veterinarios
router.get("/", getAll);
//Obtener Veterinario por id
router.get("/:idVet", getById);
//Obtener veterinarios por especialidad
router.get("/veterinarios/:especialidad", getBySpec);
//Dar de baja un veterinario
router.delete("/:idVet", deleteVet);
//Dar de alta un veterinario
router.post("/", inserVet);
//Cambiar datos de un veterinario
router.put("/:idVet", editVet);
export default router;
