import db from "../config/db.js";
const selectAll = async () => {
  //aqui vamos a hacer la consulata a bbdd => select * from mascota
  const resultado = await db.execute("select * from mascota");
  return [resultado];
};

export { selectAll };
