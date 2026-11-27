import db from "../config/db.js";
const getAllVet = async () => {
  const [result] = await db.execute(`select * from veterinarios`);
  return result;
};
export { getAllVet };
