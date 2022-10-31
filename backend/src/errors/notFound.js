import { customApiErrors } from "./custom-api-errors";
import { StatusCodes } from "http-status-codes";

export class notFound extends customApiErrors {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}
