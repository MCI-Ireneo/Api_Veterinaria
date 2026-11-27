import { getAllVet, getVetById, getAllBySpec } from "../models/veterinarios.model.js";
const getAll = async (req, res) => {
  const vets = await getAllVet();
  res.json(vets);
};
const getById = async (req, res) => {
  const vet = await getVetById(Number(req.params.idVet));
  res.json(vet);
};
const getBySpec = async (req, res) => {
  const vets = await getAllBySpec(req.params.especialidad);
  res.json(vets);
};
const deleteVet = async (req, res) => {};
const inserVet = async (req, res) => {};
const editVet = async (req, res) => {};
export { getAll, getById, getBySpec, deleteVet, inserVet, editVet };
