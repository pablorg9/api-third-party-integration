import 'reflect-metadata';
import { injectable } from 'inversify';
import axios from 'axios';
import { INasaDao } from '@setup/interfaces';

@injectable()
export class NasaDao implements INasaDao {
    async getNasaObject(): Promise<any> {
        const { data, status } = await axios.get(
            `https://api.nasa.gov/planetary/apod?api_key=SPkLKA7bCBamNIY9kJ4ceIeWB67uFjxP5lXkQeNR`,
        );

        if (status === 200) {
            return data;
        }
        throw status;
    }
}
