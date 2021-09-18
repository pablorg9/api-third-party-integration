/* eslint-disable no-unused-vars */
import { Response } from 'express';

export enum StatusCode {
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NO_CONTENT = 204,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    NOT_FOUND = 404,
    PRECONDITION_FAILED = 412,
    I_AM_A_TEAPOT = 418,
    PRECONDITION_REQUIRED = 428,
    INTERNAL_ERROR = 500,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503,
}

export enum ErrorCode {
    UNKNOWN = 'U001',
    SUCCESS = 'S001',
    MYSQL_FOREIGN_KEY_RESTRICT = '1451',
    FAILURE = '10001',
    RETRY = '10002',
    API_ERROR = 'A001',
    API_ERROR_TIMEOUT = 'A002',
    INVALID_ACCESS_TOKEN = '10003',
}

export abstract class ApiResponse<T> {
    isError: boolean;
    status: StatusCode;
    code: ErrorCode;
    message: string;
    data?: T;

    constructor(isError: boolean, status: StatusCode, code: ErrorCode, message: string, data?: T) {
        this.isError = isError;
        this.status = status;
        this.code = code;
        this.message = message;
        this.data = data;
    }

    protected prepare(res: Response): Response {
        return res.status(this.status).json(this);
    }

    public send(res: Response): Response {
        return this.prepare(res);
    }
}
