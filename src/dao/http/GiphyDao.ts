import 'reflect-metadata';
import { injectable } from 'inversify';

@injectable()
export class GiphyDao {
    getImgUrl(imgName: string): string {
        return `url/${imgName}`;
    }
}
