//cada controlador va a llamar a una funcion que conecte con la bbdd, esa funcion va a estar alojada en los modelos.
//el controlador tiene como objetivo principal devolver datos de respuesta, es decir hace res.json().

import {
  selectAll,
  PetById,
  getSpecieById,
  getAllPetBySpecies,
  AddNewPet,
  UnsuscribePet,
  UpdatePetData,
} from "../models/mascotas.model.js";
const getAll = async (req, res) => {
  const mascotas = await selectAll(); //esta función estará en el modelo, contendrá el select de la bbdd
  res.json(mascotas);
};
const getById = async (req, res) => {
  const mascota = await PetById(Number(req.params.idMascota));
  res.json(mascota);
};
const getBySpecies = async (req, res) => {
  const especie = await getSpecieById(Number(req.params.idMascota));
  res.json(especie);
};
const getAllBySpecies = async (req, res) => {
  const TodasLasMascotasEspecie = await getAllPetBySpecies(req.params.especie);
  res.json(TodasLasMascotasEspecie);
};
const insertPet = async (req, res) => {
  const idNuevaMascota = await AddNewPet(req.body);
  res.json(idNuevaMascota);
};
const deletePet = async (req, res) => {
  const response = await UnsuscribePet(Number(req.params.idMascota));
  res.json(response);
};
const editPet = async (req, res) => {
  const DataPet = req.body;
  const PetId = Number(req.params.idMascota);

  const [result] = await UpdatePetData(PetId, DataPet);
  if (result.affectedRows === 1) {
    const mascota = await PetById(PetId);
    res.json(mascota);
  } else {
    return { status: false, message: "No se ha podido actualizar la mascota" };
  }
};
export { getAll, getAllBySpecies, getById, getBySpecies, insertPet, deletePet, editPet };
