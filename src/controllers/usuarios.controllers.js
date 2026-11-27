import {
  SelectAll,
  getById,
  getUserByDni,
  getAllByPlace,
  getAllUserByComms,
  getAllByLastName,
  getDataRequest,
  NewUser,
  UnsuscribeUser,
  ChangeUser,
} from "../models/usuarios.model.js";

const getAllUsers = async (req, res) => {
  const user = await SelectAll();
  res.json(user);
};
const getAllById = async (req, res) => {
  const users = await getById(Number(req.params.idUser));
  res.json(users);
};
const getByDNI = async (req, res) => {
  const user = await getUserByDni(req.params.dni);
  res.json(user);
};
const getByPlace = async (req, res) => {
  const users = await getAllByPlace(req.params.localidad);
  res.json(users);
};
const getByComms = async (req, res) => {
  const users = await getAllUserByComms(Boolean(req.params.comunicaciones));
  res.json(users);
};
const getByLastName = async (req, res) => {
  const users = await getAllByLastName(req.params.apellido);
  res.json(users);
};
const getDataById = async (req, res) => {
  const user = await getDataRequest(Number(req.params.idUser));
  res.json(user);
};
const insertUser = async (req, res) => {
  const user = await NewUser(req.body);
  res.json(user);
};
const deleteUser = async (req, res) => {
  const user = await UnsuscribeUser(Number(req.params.idUser));
  res.json(user);
};
const editUser = async (req, res) => {
  const Id = Number(req.params.idUser);
  const data = req.body;
  const result = await ChangeUser(Id, data);
  if (result.affectedRows === 1) {
    const user = await getById(Id);
    res.json(user);
  } else {
    res.json({ status: false, message: "No se ha podido actualizar el usuario" });
  }
};
export {
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
};
