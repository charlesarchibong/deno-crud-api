import User from "../models/User.ts";

export default {
  async index(context: any) {
    context.response.status = 200;
    context.response.body = await User.getAll();
  },

  async show(context: any) {
    const id = context.params.id;
    const user = await User.get(id);
    if (user != null) {
      context.response.status = 200;
      context.response.body = user;
    } else {
      context.response.status = 400;
      context.response.body = { error: "No user record found" };
    }
  },

  async store(context: any) {
    if (context.request.hasBody) {
      const { value } = await context.request.body();
      const inserted = await User.insert(value);
      context.response.status = 201;
      context.response.body = { success: true, inserted };
    } else {
      context.response.status = 400;
      context.response.body = { error: "Please provide the required data" };
    }
  },

  async update(context: any) {
    const id = context.params.id;
    console.log(id);
    const user = await User.get(id);
    console.log(user);
    console.log(user);
    console.log(user.name);
    if (user.name == null) {
      context.response.status = 400;
      context.response.body = { error: "User record was not found" };
    } else {
      const { value } = await context.request.body();
      const upsertedId = await User.update(id, value);
      console.log(upsertedId);
      if (upsertedId != null) {
        context.response.status = 200;
        context.response.body = { success: true, upsertedId };
      } else {
        context.response.status = 400;
        context.response.body = { error: "User record was not updated" };
      }
    }
  },

  async destroy(context: any) {
    const id = context.params.id;
    const user = await User.get(id);
    if (user == null) {
      context.response.status = 400;
      context.response.body = { error: "User record was not found" };
      return;
    }
    const deleted = await User.delete(id);
    if (deleted != null) {
      context.response.status = 200;
      context.response.body = {
        message: "User record was deleted successfully",
      };
    } else {
      context.response.status = 400;
      context.response.body = { error: "User record was not deleted" };
    }
  },
};
