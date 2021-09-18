import 'reflect-metadata';
import { injectable } from 'inversify';
import { Router, Request, Response, NextFunction } from 'express';
import { asyncHandler } from '@setup/helpers';
import { IRouter } from '@setup/interfaces';
import { SuccessOKResponse } from '@setup/core';

@injectable()
export class IntegrationRouter implements IRouter {
    public router: Router;
    public version = 'v1';
    public uri = 'integrations';

    constructor() {
        this.router = Router();
        this.init();
    }

    private init(): void {
        this.router.get(
            '/',
            asyncHandler((req, res, next) => this.getObject(req, res, next)),
        );
    }

    async getObject(req: Request, res: Response, _next: NextFunction): Promise<Response | void> {
        return res.status(200).json(new SuccessOKResponse(req.body));
    }
}
