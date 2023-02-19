import { Response } from 'express';

let res: Response;

export class ResponseHelper {
  static setResponse(response: Response) {
    res = response;
  }

  static success(data: any, message: string) {
    const statusCode = 200;
    const responseBody = {
      code: statusCode,
      status: 'success',
      message,
      data,
    };

    return res.status(statusCode).send(responseBody);
  }

  static error(message: string) {
    const statusCode = 400;
    const responseBody = {
      message,
    };
    return res.status(statusCode).send(responseBody);
  }

  static notFound(message: string) {
    const statusCode = 404;
    const responseBody = {
      message,
    };
    return res.status(statusCode).send(responseBody);
  }

  static unauthorized(message: string) {
    const statusCode = 401;
    const responseBody = {
      message,
    };
    return res.status(statusCode).send(responseBody);
  }
}
