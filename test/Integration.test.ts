import { GiphyDao, MovieDao, NasaDao } from './mock';
import { DEPENDENCY_CONTAINER } from '@setup';
import { IGiphyDao, IMovieDao, INasaDao } from '@setup/interfaces';
import { IntegrationService } from '@services';

test('Integration endpoint', async () => {
    DEPENDENCY_CONTAINER.rebind<IGiphyDao>('GiphyDao').to(GiphyDao).inSingletonScope();
    DEPENDENCY_CONTAINER.rebind<IMovieDao>('MovieDao').to(MovieDao).inSingletonScope();
    DEPENDENCY_CONTAINER.rebind<INasaDao>('NasaDao').to(NasaDao).inSingletonScope();

    const integrationService = DEPENDENCY_CONTAINER.get<IntegrationService>(IntegrationService);

    const imgName = 'NASA';

    const jsonSchema = await integrationService.getObject(imgName);

    expect(jsonSchema).toHaveProperty('copyright');
    expect(jsonSchema).toHaveProperty('imdb');
    expect(jsonSchema).toHaveProperty('giphy');
});
