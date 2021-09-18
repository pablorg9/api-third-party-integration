import { Container } from 'inversify';
import { IntegrationRouter } from '@routers';

export const DEPENDENCY_CONTAINER = new Container();

// ============================ INTEGRATION ===============================

DEPENDENCY_CONTAINER.bind<IntegrationRouter>(IntegrationRouter).toSelf().inSingletonScope();
