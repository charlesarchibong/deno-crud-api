import User from "../models/User.ts";

export default {
  async index(context: any) {
    context.response.body = "From user router";
  },
  async show(context: any) {
    context.response.body = context.params.id;
  },
  async store(context: any) {
    const { value } = await context.request.body();
    const inserted = await User.insert(value);
    context.response.status = 201;
    context.response.body = { success: true, inserted };
  },
  async update(context: any) {
    context.response.body = context.response.body = context.params.id;
  },
  async destroy(context: any) {
    context.response.body = context.response.body = context.params.id;
  },
};
