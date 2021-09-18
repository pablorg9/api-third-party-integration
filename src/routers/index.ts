import { Application } from 'express';
import { DEPENDENCY_CONTAINER } from '@setup';
import { IntegrationRouter } from './IntegrationRouter';

export { IntegrationRouter };

const getRouteName = (version: string, uri: string): string => `/api/${version}/${uri}`;

export const routes = (application: Application): void => {
    const integrationRouter = DEPENDENCY_CONTAINER.get<IntegrationRouter>(IntegrationRouter);

    application.use(getRouteName(integrationRouter.version, integrationRouter.uri), integrationRouter.router);
};
