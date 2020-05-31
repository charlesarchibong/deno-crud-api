export default {
  async index(context: any) {
    context.response.body = "From user router";
  },
  async show(context: any) {
    context.response.body = context.params.id;
  },
  async store(context: any) {
    const { value } = await context.request.body();
    context.response.status = 201;
    context.response.body = value;
  },
  async update(context: any) {
    context.response.body = context.response.body = context.params.id;
  },
  async destroy(context: any) {
    context.response.body = context.response.body = context.params.id;
  },
};
