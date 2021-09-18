import 'reflect-metadata';
import { injectable } from 'inversify';
import { Router, Request, Response, NextFunction } from 'express';
import { asyncHandler } from '@setup/helpers';
import { IRouter } from '@setup/interfaces';
import { SuccessOKResponse } from '@setup/core';
import { DEPENDENCY_CONTAINER } from '@setup';
import { integrationService } from '@services';

@injectable()
export class IntegrationRouter implements IRouter {
    public router: Router;
    public version = 'v1';
    public uri = 'integrations';

    private integrationService = DEPENDENCY_CONTAINER.get<integrationService>(integrationService);

    constructor() {
        this.router = Router();
        this.init();
    }

    private init(): void {
        this.router.get(
            '/:imgName',
            asyncHandler((req, res, next) => this.getObject(req, res, next)),
        );
    }

    async getObject(req: Request, res: Response, _next: NextFunction): Promise<Response | void> {
        const response = await this.integrationService.getObject(req.params['imgName']);
        return res.status(200).json(new SuccessOKResponse(response));
    }
}
