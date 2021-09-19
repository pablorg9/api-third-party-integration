import 'reflect-metadata';
import { injectable } from 'inversify';
import axios from 'axios';

@injectable()
export class MovieDao {
    async getNasaMovies(): Promise<any[]> {
        const { data, status } = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=48b43c71c226d58239efb833d05ab17c&language=en-US&query=NASA&page=1&include_adult=false`,
        );

        if (status === 200) {
            return data.results ? data.results : [];
        }
        throw status;
    }
}
