export default {
  async api(context: any, next: any) {
    try {
      if (
        context.request.headers.get("authorization") == null
      ) {
        throw new Error("Authorization method not available.");
      }
      const token = context.request.headers.get("x-access-token") ||
        context.request.headers.get("authorization");
      console.log(token);
      const authType = token.split(" ")[0];
      const apiKey = token.split(" ")[1];
      if (!token) {
        throw new Error("No Authorization");
      }
      if (authType != "Bearer") {
        throw new Error("Wrong Authorization method");
      }
      await next();
    } catch (error) {
      context.response.status = 401;
      context.response.body = {
        "success": false,
        "error": error.message,
      };
      return;
    }
  },
};
