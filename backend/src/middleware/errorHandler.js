import { customApiErrors } from "../errors/custom-api-errors.js";
import { makeResponse } from "../utils/response.js";

export const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof customApiErrors) {
    return res.status(err.statusCode).json({ message: err.message });
  }
};
