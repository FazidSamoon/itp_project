import { customApiErrors } from "./custom-api-errors.js";
import { StatusCodes } from "http-status-codes";

export class badRequest extends customApiErrors {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}
