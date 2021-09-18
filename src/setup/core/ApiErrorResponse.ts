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

export class BadRequestPubSubError extends ApiErrorResponse {
    constructor(message: string) {
        super(StatusCode.OK, ErrorCode.FAILURE, message);
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

export class DaoError extends ApiErrorResponse {
    constructor(code: number | string, message: string) {
        switch (code) {
            case 'ER_ROW_IS_REFERENCED_2':
                super(StatusCode.INTERNAL_ERROR, ErrorCode.MYSQL_FOREIGN_KEY_RESTRICT, 'ER_ROW_IS_REFERENCED_2');
                break;

            default:
                super(StatusCode.INTERNAL_ERROR, ErrorCode.RETRY, message);
                break;
        }
    }
}
