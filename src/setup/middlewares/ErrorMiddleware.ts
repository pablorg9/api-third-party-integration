import { Request, Response, NextFunction } from 'express';
import { ApiErrorResponse, IError, DaoError, UnkownError, RuntimeError } from '@setup/core';

export const errorMiddleware = (
    error: ApiErrorResponse | IError,
    _req: Request,
    res: Response,
    _next: NextFunction,
): Response | void => {
    if (error instanceof ApiErrorResponse) return error.send(res);
    if (error?.code) {
        const errorFromDao = new DaoError(error.code, error.message);
        return errorFromDao.send(res);
    }
    if (error.message.includes('Cannot read property')) return new RuntimeError(error.message).send(res);
    return new UnkownError(error.message).send(res);
};
