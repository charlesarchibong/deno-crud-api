import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";
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
      context.response.body = { success: false, error: "No user record found" };
    }
  },

  async store(context: any) {
    if (context.request.hasBody) {
      const { value } = await context.request.body();
      value.password = bcrypt.hashSync(value.password);
      value.created_at = parseInt((new Date().getTime() / 1000).toString());
      const inserted = await User.insert(value);
      context.response.status = 201;
      context.response.body = {
        success: true,
        inserted,
        message: "User record was inserted successfully",
      };
    } else {
      context.response.status = 400;
      context.response.body = {
        success: false,
        error: "Please provide the required data",
      };
    }
  },

  async update(context: any) {
    const id = context.params.id;
    const user = await User.get(id);
    if (user.name == null) {
      context.response.status = 400;
      context.response.body = {
        success: false,
        error: "User record was not found",
      };
    } else {
      const { value } = await context.request.body();
      value.updated_at = parseInt((new Date().getTime() / 1000).toString());
      const upsertedId = await User.update(id, value);
      if (upsertedId != null) {
        context.response.status = 200;
        context.response.body = {
          success: true,
          message: "User record was updated successfully",
        };
      } else {
        context.response.status = 400;
        context.response.body = {
          success: false,
          error: "User record was not updated",
        };
      }
    }
  },

  async destroy(context: any) {
    const id = context.params.id;
    const user = await User.get(id);
    if (user == null) {
      context.response.status = 400;
      context.response.body = {
        success: false,
        error: "User record was not found",
      };
      return;
    }
    const deleted = await User.delete(id);
    if (deleted != null) {
      context.response.status = 200;
      context.response.body = {
        success: true,
        message: "User record was deleted successfully",
      };
    } else {
      context.response.status = 400;
      context.response.body = {
        success: false,
        error: "User record was not deleted",
      };
    }
  },
};
