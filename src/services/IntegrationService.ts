import 'reflect-metadata';
import { injectable } from 'inversify';
import { DEPENDENCY_CONTAINER } from '@setup';
import { GiphyDao, NasaDao, MovieDao } from '@dao';
import { IJsonSchema } from '@setup/interfaces';

@injectable()
export class integrationService {
    private ghipyDao = DEPENDENCY_CONTAINER.get<GiphyDao>(GiphyDao);
    private nasaDao = DEPENDENCY_CONTAINER.get<NasaDao>(NasaDao);
    private movieDao = DEPENDENCY_CONTAINER.get<MovieDao>(MovieDao);

    async getObject(imgName: string): Promise<IJsonSchema> {
        const ghipyObj = await this.ghipyDao.getImg(imgName);
        const nasaObj = await this.nasaDao.getNasaObject();
        const movie = await this.movieDao.getNasaMovies();

        const jsonSchema = this.populateObject(nasaObj, movie, ghipyObj);

        return jsonSchema;
    }

    private populateObject(nasa: any, imdb: any[], giphy: any): IJsonSchema {
        return {
            ...nasa,
            imdb: imdb,
            giphy: {
                image: giphy.url || null,
            },
        };
    }
}
