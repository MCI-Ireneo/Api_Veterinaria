import db from "../config/db.js";
const SelectAll = async () => {
  const [result] = await db.execute("select * from dueno");
  return result;
};
const getById = async (idUser) => {
  const [result] = await db.execute("select * from dueno where id = ?", [idUser]);
  return result[0];
};
const getUserByDni = async (dni) => {
  const [result] = await db.execute("select * from dueno where dni = ?", [dni]);
  return result[0];
};
const getAllByPlace = async (localidad) => {
  const [result] = await db.execute("select * from dueno where localidad = ?", [localidad]);
  return result;
};
const getAllUserByComms = async (comunicaciones) => {
  const [result] = await db.execute("select * from dueno where acepta_comunicaciones = ? ", [comunicaciones]);
  return result;
};
const getAllByLastName = async (apellido) => {
  const [result] = await db.execute("select * from dueno where apellidos like ?", [`%${apellido}%`]);
  return result;
};
const getDataRequest = async (idUser) => {
  const [result] = await db.execute("select nombre, dni, telefono from dueno where id = ?", [idUser]);
  return result[0];
};
const NewUser = async ({
  dni,
  nombre,
  apellidos,
  fecha_nacimiento,
  telefono,
  email = null,
  direccion,
  localidad = null,
  codigo_postal = null,
  acepta_comunicaciones,
  fecha_alta,
}) => {
  const [result] = await db.execute(
    `insert into dueno (dni, nombre, apellidos, fecha_nacimiento, telefono, email,
      direccion, localidad, codigo_postal, acepta_comunicaciones, fecha_alta)
     values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      dni,
      nombre,
      apellidos,
      fecha_nacimiento,
      telefono,
      email,
      direccion,
      localidad,
      codigo_postal,
      acepta_comunicaciones,
      fecha_alta,
    ],
  );
  return result.insertId;
};
const UnsuscribeUser = async (idUser) => {
  const [result] = await db.execute("delete from dueno where id = ?", [idUser]);
  if (result.affectedRows === 1) {
    return { status: true, message: "Usuario eliminado con exito" };
  } else {
    return { status: false, message: "Fallo al eliminar usuario prueba de nuevo" };
  }
};
const ChangeUser = async (
  idUser,
  {
    dni,
    nombre,
    apellidos,
    fecha_nacimiento,
    telefono,
    email = null,
    direccion,
    localidad = null,
    codigo_postal = null,
    acepta_comunicaciones,
    fecha_alta,
  },
) => {
  const [result] = await db.execute(
    `update dueno
     set dni = ?, nombre = ?, apellidos = ?, fecha_nacimiento = ?, telefono = ?, email = ?,
         direccion = ?, localidad = ?, codigo_postal = ?, acepta_comunicaciones = ?, fecha_alta = ?
     where id = ?`,
    [
      dni,
      nombre,
      apellidos,
      fecha_nacimiento,
      telefono,
      email,
      direccion,
      localidad,
      codigo_postal,
      acepta_comunicaciones,
      fecha_alta,
      idUser,
    ],
  );
  return result;
};
export {
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
};
