import { Container } from 'inversify';
import { IntegrationRouter } from '@routers';
import { IntegrationService } from '@services';
import { GiphyDao, NasaDao, MovieDao } from '@dao';
import { IGiphyDao, INasaDao, IMovieDao } from '@setup/interfaces';

export const DEPENDENCY_CONTAINER = new Container();

// ============================ INTEGRATION ===============================

DEPENDENCY_CONTAINER.bind<IntegrationRouter>(IntegrationRouter).toSelf().inSingletonScope();
DEPENDENCY_CONTAINER.bind<IntegrationService>(IntegrationService).toSelf().inSingletonScope();

DEPENDENCY_CONTAINER.bind<IGiphyDao>('GiphyDao').to(GiphyDao).inSingletonScope();
DEPENDENCY_CONTAINER.bind<INasaDao>('NasaDao').to(NasaDao).inSingletonScope();
DEPENDENCY_CONTAINER.bind<IMovieDao>('MovieDao').to(MovieDao).inSingletonScope();
