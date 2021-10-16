import { ErrorHandler } from "@angular/core";

class AppErrorHandler implements ErrorHandler {
  handleError(error: unknown) {
    console.log(error);

  }
}
