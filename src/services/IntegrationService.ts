import 'reflect-metadata';
import { injectable } from 'inversify';
import { DEPENDENCY_CONTAINER } from '@setup';
import { GiphyDao } from '@dao';
import { IJsonSchema } from '@setup/interfaces';

@injectable()
export class integrationService {
    private ghipyDao = DEPENDENCY_CONTAINER.get<GiphyDao>(GiphyDao);

    async getObject(imgName: string): Promise<IJsonSchema> {
        const ghipyObj = await this.ghipyDao.getImgUrl(imgName);

        const jsonSchema = this.populateObject({}, [], ghipyObj);

        return jsonSchema;
    }

    private populateObject(nasa: any, imdb: any[], giphy: any): IJsonSchema {
        return {
            copyright: nasa.copyright || null,
            date: nasa.date || null,
            explanation: nasa.explanation || null,
            media_type: nasa.media_type || null,
            service_version: nasa.service_version || null,
            nasa_image_title: nasa.nasa_image_title || null,
            nasa_image_url: nasa.nasa_image_url || null,
            imdb: imdb,
            giphy: {
                image: giphy.url || null,
            },
        };
    }
}
