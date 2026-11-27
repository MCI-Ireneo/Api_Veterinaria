import db from "../config/db.js";
const getAllVet = async () => {
  const [result] = await db.execute(`select * from veterinarios`);
  return result;
};
const getVetById = async (idVet) => {
  const [result] = await db.execute(`select * from veterinarios where id =?`, [idVet]);
  return result[0];
};
const getAllBySpec = async (especialidad) => {
  const [result] = await db.execute(`select * from veterinarios where especialidad like ?`, [`%${especialidad}%`]);
  return result;
};
export { getAllVet, getVetById, getAllBySpec };
