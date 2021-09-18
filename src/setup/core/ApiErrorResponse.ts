import { ApiResponse, StatusCode, ErrorCode } from './Response';

export abstract class ApiErrorResponse extends ApiResponse<null> {
    constructor(status: StatusCode, code: ErrorCode, message: string) {
        super(true, status, code, message);
    }
}

export class NotFoundError extends ApiErrorResponse {
    url: string;
    constructor(url: string) {
        super(StatusCode.NOT_FOUND, ErrorCode.FAILURE, 'Resource Not Found');
        this.url = url;
    }
}

export class BadRequestError extends ApiErrorResponse {
    constructor(message: string) {
        super(StatusCode.BAD_REQUEST, ErrorCode.FAILURE, message);
    }
}

export class UnkownError extends ApiErrorResponse {
    constructor(message: string) {
        super(StatusCode.INTERNAL_ERROR, ErrorCode.RETRY, message);
    }
}

export class RuntimeError extends ApiErrorResponse {
    constructor(message: string) {
        super(StatusCode.OK, ErrorCode.RETRY, message);
    }
}

export class HttpRequestError extends ApiErrorResponse {
    constructor(status: number, message: string) {
        super(status, ErrorCode.API_ERROR, message);
    }
}
