export default {
  async api(context: any, next: any) {
    if (context.request.headers.get("authorization") != null) {
      const token = context.request.headers.get("x-access-token") ||
        context.request.headers.get("authorization");
      console.log(token);
      const authType = token.split(" ")[0];
      const apiKey = token.split(" ")[1];
      console.log(authType);
      if (!token && authType != "Bearer") {
        context.response.status = 401;
        context.response.body = {
          "success": false,
          "error": "Access token is empty.",
        };
        return;
      }
      await next();
    } else {
      context.response.status = 401;
      context.response.body = {
        "success": false,
        "error": "Authorization method not available.",
      };
      return;
    }
  },
};
