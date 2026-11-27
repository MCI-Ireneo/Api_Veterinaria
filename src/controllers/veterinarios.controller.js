import {} from "../models/veterinarios.model.js";
const getAll = async (req, res) => {
  const vets = await getAllVet();
  res.json(vets);
};
const getById = async (req, res) => {};
const getBySpec = async (req, res) => {};
const deleteVet = async (req, res) => {};
const inserVet = async (req, res) => {};
const editVet = async (req, res) => {};
export { getAll, getById, getBySpec, deleteVet, inserVet, editVet };
