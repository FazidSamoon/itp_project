import { customApiErrors } from "./custom-api-errors.js";
import { StatusCodes } from "http-status-codes";

export class badAuthentication extends customApiErrors {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}
