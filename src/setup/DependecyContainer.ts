import { Container } from 'inversify';
import { IntegrationRouter } from '@routers';
import { integrationService } from '@services';
import { GiphyDao, NasaDao } from '@dao';

export const DEPENDENCY_CONTAINER = new Container();

// ============================ INTEGRATION ===============================

DEPENDENCY_CONTAINER.bind<IntegrationRouter>(IntegrationRouter).toSelf().inSingletonScope();
DEPENDENCY_CONTAINER.bind<integrationService>(integrationService).toSelf().inSingletonScope();
DEPENDENCY_CONTAINER.bind<GiphyDao>(GiphyDao).toSelf().inSingletonScope();
DEPENDENCY_CONTAINER.bind<NasaDao>(NasaDao).toSelf().inSingletonScope();
