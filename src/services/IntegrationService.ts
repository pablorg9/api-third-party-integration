import 'reflect-metadata';
import { injectable } from 'inversify';
import { DEPENDENCY_CONTAINER } from '@setup';
import { GiphyDao } from '@dao';

@injectable()
export class integrationService {
    private ghipyDao = DEPENDENCY_CONTAINER.get<GiphyDao>(GiphyDao);

    getObject(imgName: string): string {
        const imgUrl = this.ghipyDao.getImgUrl(imgName);

        return imgUrl;
    }
}
