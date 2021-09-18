/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { Request, Response, NextFunction } from 'express';

type AsyncFunction = (req: Request, res: Response, next: NextFunction) => Promise<Response | void>;

export const asyncHandler =
    (execution: AsyncFunction) => async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
        try {
            return await execution(req, res, next);
        } catch (error) {
            next(error);
        }
    };
