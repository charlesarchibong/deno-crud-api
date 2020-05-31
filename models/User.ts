import db from "../config/database.ts";

export default {
  async insert(data: JSON) {
    const users = db.collection("users");
    const insertId = await users.insertOne(data);
    return insertId;
  },
};
