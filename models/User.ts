import db from "../config/database.ts";
const users = db.collection("users");

export default {
  async insert(data: JSON) {
    const insertId = await users.insertOne(data);
    return insertId;
  },

  async getAll() {
    return await users.find();
  },

  async get(id: String) {
    const filter = { "_id": { "$oid": id } };
    return await users.findOne(filter);
  },

  async update(id: String, data: JSON) {
    const filter = { _id: { $oid: id } };
    const { matchedCount, modifiedCount, upsertedId } = await users.updateOne(
      filter,
      { $set: data },
    );
    return matchedCount;
  },

  async delete(id: String) {
    const filter = { _id: { $oid: id } };
    return await users.deleteOne(filter);
  },
};
