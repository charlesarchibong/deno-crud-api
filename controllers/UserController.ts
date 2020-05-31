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
};
