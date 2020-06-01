import User from "../models/User.ts";

export default {
  async index(context: any) {
    context.response.status = 200;
    context.response.body = await User.getAll();
  },
  async show(context: any) {
    context.response.status = 200;
    const id = context.params.id;
    context.response.body = await User.get(id);
  },
  async store(context: any) {
    const { value } = await context.request.body();
    const inserted = await User.insert(value);
    context.response.status = 201;
    context.response.body = { success: true, inserted };
  },
  async update(context: any) {
    const id = context.params.id;
    console.log(id);
    const { value } = await context.request.body();
    const upsertedId = await User.update(id, value);
    console.log(upsertedId);
    if (upsertedId != null) {
      context.response.body = { success: true, upsertedId };
    } else {
      context.response.body = { error: "No user found with this id" };
    }
  },
  async destroy(context: any) {
    const id = context.params.id;
    context.response.body = User.delete(id);
  },
};
