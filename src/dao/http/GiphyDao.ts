import 'reflect-metadata';
import { injectable } from 'inversify';
import axios from 'axios';

@injectable()
export class GiphyDao {
    async getImg(imgName: string): Promise<any[]> {
        const API_KEY = process.env.GIPHY_API_KEY;
        const { data, status } = await axios.get(
            `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${imgName}&limit=1&offset=0&rating=g&lang=en`,
        );

        if (status === 200) {
            return data.data.length ? data.data[0] : {};
        }
        throw status;
    }
}
