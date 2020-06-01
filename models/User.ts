import db from "../config/database.ts";
const users = db.collection("users");
import { ObjectId } from "https://deno.land/x/mongo@v0.7.0/mod.ts";
export default {
  async insert(data: JSON) {
    const insertId = await users.insertOne(data);
    return insertId;
  },

  async getAll() {
    return await users.find();
  },

  async get(id: string) {
    try {
      const filter = { _id: ObjectId(id) };
      return await users.findOne(filter);
    } catch (error) {
      console.log(error);
    }
  },

  async update(id: string, data: JSON) {
    try {
      const filter = { _id: ObjectId(id) };
      const { matchedCount, modifiedCount, upsertedId } = await users.updateOne(
        filter,
        { $set: data },
      );
      return matchedCount;
    } catch (error) {
      console.log(error);
    }
  },

  async delete(id: string) {
    try {
      const filter = { _id: ObjectId(id) };
      return await users.deleteOne(filter);
    } catch (error) {
      console.log(error);
    }
  },
};
