import db from "../config/db.js";
const selectAll = async () => {
  //aqui vamos a hacer la consulata a bbdd => select * from mascota
  const resultado = await db.execute("select * from mascota");
  return [resultado];
};
const PetById = async (idMascota) => {
  const [result] = await db.execute(`select * from mascota where id = ?`, [idMascota]);
  return result[0];
};
const getSpecieById = async (idMascota) => {
  const [result] = await db.execute(`select especie from mascota where id = ?`, [idMascota]);
  return result[0];
};
const getAllPetBySpecies = async (especie) => {
  const [result] = await db.execute(`select * from mascota where especie = ?`, [especie]);
  return result;
};
const AddNewPet = async ({
  id_dueno,
  nombre,
  especie,
  raza = null,
  sexo = null,
  fecha_nacimiento = null,
  peso_kg = null,
  microchip = null,
  color = null,
  esterilizado = 0,
  fecha_alta = null,
  fecha_fallecimiento = null,
  observaciones = null,
}) => {
  const [result] = await db.execute(
    `insert into mascota (id_dueno,
  nombre,
  especie,
  raza,
  sexo,
  fecha_nacimiento,
  peso_kg,
  microchip,
  color,
  esterilizado,
  fecha_alta,
  fecha_fallecimiento,
  observaciones) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      id_dueno,
      nombre,
      especie,
      raza,
      sexo,
      fecha_nacimiento,
      peso_kg,
      microchip,
      color,
      esterilizado,
      fecha_alta,
      fecha_fallecimiento,
      observaciones,
    ],
  );
  return result.insertId;
};
const UnsuscribePet = async (idMascota) => {
  const result = await db.execute(`delete from mascota where id = ?`, [idMascota]);
  if (result.affectedRows === 1) {
    return { status: true, message: `la mascota se ha borrado correctamente` };
  } else {
    return { status: false, message: `error al borrar, intentelo de nuevo` };
  }
};

export { selectAll, PetById, getSpecieById, getAllPetBySpecies, AddNewPet, UnsuscribePet };
