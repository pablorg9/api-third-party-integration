import { Request, Response, NextFunction } from 'express';
import { ApiErrorResponse, IError, HttpRequestError, UnkownError, RuntimeError } from '@setup/core';

export const errorMiddleware = (
    error: ApiErrorResponse | IError,
    _req: Request,
    res: Response,
    _next: NextFunction,
): Response | void => {
    if (error instanceof ApiErrorResponse) return error.send(res);

    if (error.message.includes('Cannot read property')) return new RuntimeError(error.message).send(res);

    if (!error.code) {
        const err: any = error;
        if (err.isAxiosError) {
            const errorFromDao = new HttpRequestError(
                err.response.status,
                err.response.data ? JSON.stringify(err.response.data) : 'Internal server error',
            );

            return errorFromDao.send(res);
        }
    }
    return new UnkownError(error.message).send(res);
};
